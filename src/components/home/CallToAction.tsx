
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute top-0 left-0 right-0 h-[50%] bg-gradient-to-b from-background to-primary/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-background to-primary/5 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[1px] bg-primary/10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-panel rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Exchange Community?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start listing items you no longer need, browse available exchanges, and 
            connect with others in your community. Together, we can make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto gap-2">
              <Link to="/sign-up">
                Create Account <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/browse">
                Browse Exchanges
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            No credit card required. Free for everyone, forever.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
