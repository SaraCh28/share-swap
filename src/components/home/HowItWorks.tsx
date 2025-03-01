
import { useState, useEffect } from "react";
import { Upload, RefreshCw, MapPin, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "List Your Items",
    description: "Take photos and write descriptions of items you no longer need, or services you can offer.",
    icon: <Upload className="h-6 w-6" />,
    color: "bg-primary/10",
    textColor: "text-primary",
  },
  {
    id: 2,
    title: "Find & Exchange",
    description: "Browse available items, propose trades, and use our point system to ensure fair exchanges.",
    icon: <RefreshCw className="h-6 w-6" />,
    color: "bg-purple-100 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: 3,
    title: "Meet & Complete",
    description: "Arrange meet-ups for direct exchanges or use community drop-off points for convenience.",
    icon: <MapPin className="h-6 w-6" />,
    color: "bg-amber-100 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-400",
  },
  {
    id: 4,
    title: "Build Community",
    description: "Rate exchanges, build reputation, and help grow our supportive community network.",
    icon: <CheckCircle className="h-6 w-6" />,
    color: "bg-rose-100 dark:bg-rose-900/20",
    textColor: "text-rose-600 dark:text-rose-400",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How HelpMart Works</h2>
          <p className="text-muted-foreground text-lg">
            Our platform makes it easy to exchange goods and services without using money.
            Follow these simple steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={cn(
                "rounded-xl p-6 transition-all duration-500 relative h-full",
                activeStep === index 
                  ? "glass-panel scale-105 shadow-lg z-10" 
                  : "bg-background border shadow-sm"
              )}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div 
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-6",
                  step.color, step.textColor
                )}
              >
                {step.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div 
                className={cn(
                  "absolute bottom-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
                  step.color, step.textColor
                )}
              >
                {step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
