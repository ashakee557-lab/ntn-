import { useEffect, useState } from "react";
import PandaLogo from "./PandaLogo";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-radial from-primary/20 via-background to-background flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Animated Panda Logo */}
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-primary opacity-30 blur-2xl rounded-full animate-glow-pulse"></div>
          <PandaLogo className="w-32 h-32 animate-float relative z-10" animate />
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold bg-gradient-text bg-clip-text text-transparent animate-fade-in">
            PandaNexus
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in animation-delay-300">
            Where AI meets Excellence
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto space-y-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Initializing AI Services... {progress}%
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {['🖼️ Image Analysis', '💻 Code Assistant', '🧠 Smart Responses', '🎨 Creative AI'].map((feature, index) => (
            <div 
              key={feature}
              className="px-4 py-2 bg-accent/30 rounded-full text-sm backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 200 + 600}ms` }}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;