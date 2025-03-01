
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Package, Tags, Users } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay before animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background pointer-events-none" />
      
      {/* Background shapes */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 animate-float" />
      <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            <Badge className="px-3 py-1 text-sm bg-accent text-accent-foreground mb-4">
              Community Exchange Platform
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Exchange <span className="text-primary">Essential Goods</span> Without Using Money
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              HelpMart is a cost-free platform that allows low-income individuals to trade
              essential goods and services, fostering community support and reducing waste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/browse">
                  Start Browsing <ChevronRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            <div className="glass-panel rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1591129841117-3adfd313a592?q=80&w=2787&auto=format&fit=crop" 
                    alt="School items" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1604176424472-c5da5f5f795c?q=80&w=2880&auto=format&fit=crop" 
                    alt="Clothes" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1599619585752-c3d98ce5f0cc?q=80&w=2940&auto=format&fit=crop" 
                    alt="Tools" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=2752&auto=format&fit=crop" 
                    alt="Household items" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
              <div className="bg-background/40 backdrop-blur-sm p-6 border-t border-border/10">
                <div className="flex items-center gap-2 text-sm font-medium mb-1">
                  <span className="text-primary">Featured Exchanges</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Updated daily</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Browse thousands of items available for exchange in your community
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-10 top-1/4 transform -translate-y-1/2 glass-panel p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Package size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">5,000+</div>
                  <div className="text-xs text-muted-foreground">Items Listed</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 md:right-0 bottom-10 glass-panel p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Users size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">2,500+</div>
                  <div className="text-xs text-muted-foreground">Active Users</div>
                </div>
              </div>
            </div>

            <div className="absolute right-20 md:right-32 -top-6 glass-panel p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Tags size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">1,200+</div>
                  <div className="text-xs text-muted-foreground">Successful Trades</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
