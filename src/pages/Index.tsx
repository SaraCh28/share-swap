
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import ItemGrid from "@/components/items/ItemGrid";
import { ItemProps } from "@/components/items/ItemCard";
import { getFeaturedItems } from "@/services/itemService";

const Index = () => {
  const [featuredItems, setFeaturedItems] = useState<ItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedItems = async () => {
      try {
        const items = await getFeaturedItems(4);
        setFeaturedItems(items);
      } catch (error) {
        console.error("Failed to load featured items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedItems();
  }, []);

  return (
    <Layout>
      <Hero />
      <div className="section-container">
        {isLoading ? (
          <div className="min-h-[300px] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
        ) : (
          <ItemGrid 
            items={featuredItems} 
            title="Featured Items & Services" 
          />
        )}
      </div>
      <HowItWorks />
      <Features />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
