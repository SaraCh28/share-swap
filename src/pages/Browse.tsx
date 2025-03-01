
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import ItemGrid from "@/components/items/ItemGrid";
import { ItemProps } from "@/components/items/ItemCard";
import { getAllItems } from "@/services/itemService";

const Browse = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const allItems = await getAllItems();
        setItems(allItems);
      } catch (error) {
        console.error("Failed to load items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadItems();
  }, []);

  return (
    <Layout>
      <div className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Browse Exchanges</h1>
            <p className="text-muted-foreground text-lg">
              Explore available items and services that you can exchange using our points system.
              Filter by category, type, or search for specific items.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container">
        {isLoading ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
        ) : (
          <ItemGrid 
            items={items} 
            showFilters={true}
          />
        )}
      </div>
    </Layout>
  );
};

export default Browse;
