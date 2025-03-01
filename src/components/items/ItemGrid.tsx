
import { useState } from "react";
import ItemCard, { ItemProps } from "./ItemCard";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface ItemGridProps {
  items: ItemProps[];
  title?: string;
  showFilters?: boolean;
}

const ItemGrid = ({ items, title, showFilters = false }: ItemGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(items.map((item) => item.category)));

  // Filter items based on search query and filters
  const filteredItems = items.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesType = !selectedType || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="space-y-6">
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
      
      {showFilters && (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search items or services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-3">
            <Select
              value={selectedCategory || ""}
              onValueChange={(value) => setSelectedCategory(value || null)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select
              value={selectedType || ""}
              onValueChange={(value) => setSelectedType(value || null)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="item">Items</SelectItem>
                <SelectItem value="service">Services</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon" className="shrink-0">
              <Filter size={18} />
            </Button>
          </div>
        </div>
      )}
      
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-accent rounded-lg">
          <h3 className="text-xl font-medium mb-2">No items found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="animate-scale-in">
              <ItemCard {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemGrid;
