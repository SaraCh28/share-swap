
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ExternalLink, Heart } from "lucide-react";

export interface ItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
  points: number;
  category: string;
  location: string;
  type: "item" | "service";
}

const ItemCard = ({ 
  id, 
  title, 
  description, 
  image, 
  points, 
  category, 
  location, 
  type 
}: ItemProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col group">
      <div className="relative overflow-hidden aspect-square">
        {isLoading && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <span className="sr-only">Loading</span>
          </div>
        )}
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute top-2 right-2 z-10">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart
              size={18}
              className={isFavorite ? "fill-destructive text-destructive" : ""}
            />
          </Button>
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant={type === "service" ? "secondary" : "default"} className="capitalize">
            {type}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent backdrop-blur-sm" />
      </div>

      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className="mb-2">
              {category}
            </Badge>
            <CardTitle className="line-clamp-1">{title}</CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1">
              <span className="text-xs">{location}</span>
            </CardDescription>
          </div>
          <Badge className="bg-primary text-primary-foreground ml-2">
            {points} pts
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full gap-2">
          <Link to={`/item/${id}`}>
            View Details <ExternalLink size={14} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
