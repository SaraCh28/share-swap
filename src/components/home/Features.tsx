
import { HeartHandshake, Recycle, Users, Shield } from "lucide-react";

const features = [
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: "Support Communities",
    description: "Help low-income families access essential goods without spending money.",
  },
  {
    icon: <Recycle className="h-8 w-8" />,
    title: "Reduce Waste",
    description: "Give unwanted items a second life instead of sending them to landfills.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Build Connections",
    description: "Foster community engagement through sharing and collaboration.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Financial Independence",
    description: "Exchange valuable skills and services without monetary costs.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why HelpMart Works</h2>
          <p className="text-muted-foreground text-lg">
            Our platform creates positive change for communities and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
