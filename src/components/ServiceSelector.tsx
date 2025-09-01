import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceType = 'auto' | 'code' | 'creative' | 'knowledge' | 'general';

interface ServiceSelectorProps {
  selectedService: ServiceType;
  onServiceChange: (service: ServiceType) => void;
  className?: string;
}

const serviceOptions = [
  { value: 'auto', label: 'Auto' },
  { value: 'code', label: 'Code' },
  { value: 'creative', label: 'Creative' },
  { value: 'knowledge', label: 'Knowledge' },
  { value: 'general', label: 'General' },
] as const;

export function ServiceSelector({ selectedService, onServiceChange, className }: ServiceSelectorProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 p-2 bg-background/50 rounded-lg", className)}>
      {serviceOptions.map((service) => (
        <Button
          key={service.value}
          variant={selectedService === service.value ? 'default' : 'outline'}
          size="sm"
          className="flex-1 min-w-[80px]"
          onClick={() => onServiceChange(service.value as ServiceType)}
        >
          {service.label}
        </Button>
      ))}
    </div>
  );
}

export default ServiceSelector;
