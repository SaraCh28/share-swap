
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About HelpMart</h1>
            <p className="text-muted-foreground text-lg">
              Our mission is to create a more equitable world by empowering communities 
              through resource sharing and mutual support.
            </p>
          </div>
        </div>
      </div>
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2787&auto=format&fit=crop" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                HelpMart was born from a simple observation: many people have items they no longer 
                need, while others struggle to afford basic necessities. 
              </p>
              <p className="text-muted-foreground mb-6">
                We created a platform where communities can support each other through the direct 
                exchange of goods and services, without the need for money—fostering financial 
                inclusion, reducing waste, and building stronger community bonds.
              </p>
              <p className="text-muted-foreground">
                Since our launch, we've facilitated thousands of exchanges across multiple cities, 
                helping families access essential items they otherwise couldn't afford.
              </p>
            </div>
          </div>
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                HelpMart directly contributes to several UN Sustainable Development Goals,
                creating measurable positive change in communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "No Poverty",
                  description: "Helps people access essential goods without spending money.",
                  icon: <span className="text-2xl">📊</span>,
                  metric: "5,000+",
                  metricLabel: "families supported"
                },
                {
                  title: "Zero Hunger",
                  description: "Facilitates food-sharing exchanges in communities.",
                  icon: <span className="text-2xl">🍲</span>,
                  metric: "1,200+",
                  metricLabel: "food exchanges"
                },
                {
                  title: "Reduced Inequalities",
                  description: "Provides equal opportunities for underprivileged individuals.",
                  icon: <span className="text-2xl">⚖️</span>,
                  metric: "12",
                  metricLabel: "communities served"
                },
                {
                  title: "Responsible Consumption",
                  description: "Reduces waste through reuse and barter systems.",
                  icon: <span className="text-2xl">♻️</span>,
                  metric: "8.5 tons",
                  metricLabel: "waste prevented"
                }
              ].map((impact, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md text-center"
                >
                  <div className="mb-4">{impact.icon}</div>
                  <h3 className="font-medium text-xl mb-2">{impact.title}</h3>
                  <p className="text-muted-foreground mb-4">{impact.description}</p>
                  <div className="bg-primary/10 rounded-lg py-3 px-4">
                    <p className="text-2xl font-bold text-primary">{impact.metric}</p>
                    <p className="text-sm text-muted-foreground">{impact.metricLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                HelpMart is powered by a dedicated team of volunteers, community organizers,
                and technology experts passionate about social impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Amina Khan",
                  role: "Founder & Executive Director",
                  bio: "Social entrepreneur with 10+ years experience in community development.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2688&auto=format&fit=crop"
                },
                {
                  name: "Rahul Sharma",
                  role: "Technology Lead",
                  bio: "Software engineer passionate about tech solutions for social good.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
                },
                {
                  name: "Fatima Ahmed",
                  role: "Community Partnerships",
                  bio: "Coordinates with NGOs and local organizations to expand our network.",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-xl">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-accent/20 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We're always looking for partnerships with organizations that share our vision
                for a more equitable world.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">How You Can Help</h3>
                <ul className="space-y-3">
                  {[
                    "Become a community drop-off point",
                    "Volunteer your time and skills",
                    "Donate to support our operations",
                    "Spread the word about our platform"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Corporate Partnerships</h3>
                <ul className="space-y-3">
                  {[
                    "Sponsor a community hub",
                    "Donate excess inventory",
                    "Provide technical expertise",
                    "Fund expansion to new areas"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button asChild className="gap-2">
                <Link to="/partner">
                  Learn More About Partnerships <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
