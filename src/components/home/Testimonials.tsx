
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "HelpMart helped me get school supplies for my children without worrying about money. I traded some clothes my kids had outgrown for new backpacks and books!",
    author: "Fatima K.",
    role: "Mother of three",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "I lost my job during COVID but was able to trade my tailoring services for essential groceries and household items. This platform has been a lifeline.",
    author: "Ahmed R.",
    role: "Skilled tailor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "Our community center became a HelpMart drop-off point, and it's brought our neighborhood closer. People are helping each other in ways I never imagined.",
    author: "Nadia T.",
    role: "Community organizer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2688&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Stories from Our Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read about real experiences from people whose lives have been impacted by HelpMart.
            </p>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden bg-background rounded-2xl shadow-lg border">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 aspect-square">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-8 flex flex-col justify-center">
                        <div className="text-primary mb-4">
                          <Quote size={36} />
                        </div>
                        <blockquote className="text-lg mb-6 italic">
                          {testimonial.quote}
                        </blockquote>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    activeIndex === index 
                      ? "bg-primary scale-125" 
                      : "bg-muted hover:bg-muted-foreground"
                  )}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 -translate-y-1/2 left-4 rounded-full bg-background shadow-sm border z-10"
              onClick={goToPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 -translate-y-1/2 right-4 rounded-full bg-background shadow-sm border z-10"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
