
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <Layout>
      <div className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">How HelpMart Works</h1>
            <p className="text-muted-foreground text-lg">
              Our platform is designed to be simple and accessible for everyone.
              Learn how to get started and make the most of HelpMart.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                1
              </div>
              <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>
              <p className="text-muted-foreground mb-6">
                Sign up for a free account with your basic information. No credit card required, and your privacy is our priority.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Provide your name and contact details",
                  "Verify your email address",
                  "Set your location for local exchanges",
                  "Complete your profile to build trust"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="gap-2">
                <Link to="/sign-up">
                  Create Account <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2940&auto=format&fit=crop" 
                  alt="Create account" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?q=80&w=2762&auto=format&fit=crop" 
                  alt="List items" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                2
              </div>
              <h2 className="text-3xl font-bold mb-4">List Items & Services</h2>
              <p className="text-muted-foreground mb-6">
                Share what you can offer to the community. Take clear photos and write detailed descriptions to attract exchanges.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Upload multiple photos of your items",
                  "Provide honest descriptions of condition",
                  "Set appropriate point values for fair exchanges",
                  "Include your skills if offering services"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                3
              </div>
              <h2 className="text-3xl font-bold mb-4">Browse & Request Exchanges</h2>
              <p className="text-muted-foreground mb-6">
                Find items or services you need, and propose exchanges using our point-based system for fair trades.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Search by category, location, or keywords",
                  "Filter results based on your preferences",
                  "Contact item owners through our messaging system",
                  "Propose exchanges with your available items or points"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="gap-2">
                <Link to="/browse">
                  Browse Items <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2940&auto=format&fit=crop" 
                  alt="Browse items" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2940&auto=format&fit=crop" 
                  alt="Complete exchange" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                4
              </div>
              <h2 className="text-3xl font-bold mb-4">Complete the Exchange</h2>
              <p className="text-muted-foreground mb-6">
                Arrange a meeting or use community drop-off points to complete your exchange safely.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Agree on a time and place for the exchange",
                  "Use community drop-off points for convenience",
                  "Rate and review your exchange experience",
                  "Build your community reputation with each successful exchange"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of community members already exchanging goods and services without spending money.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/sign-up">
              Create Your Free Account <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
