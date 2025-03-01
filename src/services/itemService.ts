
import { ItemProps } from "@/components/items/ItemCard";

// Mock data for items
const mockItems: ItemProps[] = [
  {
    id: "1",
    title: "Children's School Bag",
    description: "Slightly used school backpack in good condition. Blue color, multiple compartments.",
    image: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?q=80&w=2960&auto=format&fit=crop",
    points: 10,
    category: "School Supplies",
    location: "Karachi",
    type: "item",
  },
  {
    id: "2",
    title: "Winter Clothes Bundle",
    description: "Bundle of warm winter clothes including sweaters and jackets. Sizes for 6-8 year old children.",
    image: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=2741&auto=format&fit=crop",
    points: 15,
    category: "Clothing",
    location: "Lahore",
    type: "item",
  },
  {
    id: "3",
    title: "Basic Math Tutoring",
    description: "I can provide math tutoring for primary school students. One hour sessions, online or in-person.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop",
    points: 8,
    category: "Education",
    location: "Islamabad",
    type: "service",
  },
  {
    id: "4",
    title: "Kitchen Utensils Set",
    description: "Complete set of kitchen utensils including spatulas, spoons, and measuring cups. All in good condition.",
    image: "https://images.unsplash.com/photo-1590794056422-98389299d0ca?q=80&w=2787&auto=format&fit=crop",
    points: 12,
    category: "Household",
    location: "Karachi",
    type: "item",
  },
  {
    id: "5",
    title: "Tailoring Services",
    description: "I can alter clothes, fix tears, or create simple garments. Quick turn-around time.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2934&auto=format&fit=crop",
    points: 6,
    category: "Services",
    location: "Lahore",
    type: "service",
  },
  {
    id: "6",
    title: "Children's Story Books",
    description: "Collection of 10 story books for early readers. Good condition with colorful illustrations.",
    image: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=2667&auto=format&fit=crop",
    points: 7,
    category: "Books",
    location: "Islamabad",
    type: "item",
  },
  {
    id: "7",
    title: "Basic Carpentry Work",
    description: "I can help with simple furniture repairs, installations, or small woodworking projects.",
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?q=80&w=2940&auto=format&fit=crop",
    points: 10,
    category: "Services",
    location: "Karachi",
    type: "service",
  },
  {
    id: "8",
    title: "Women's Clothing Bundle",
    description: "Assorted women's clothes in size Medium. Includes tops, pants, and a few dresses.",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=2867&auto=format&fit=crop",
    points: 12,
    category: "Clothing",
    location: "Lahore",
    type: "item",
  },
];

// Get all items
export const getAllItems = (): Promise<ItemProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockItems);
    }, 500);
  });
};

// Get featured items (random selection)
export const getFeaturedItems = (count: number = 4): Promise<ItemProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const shuffled = [...mockItems].sort(() => 0.5 - Math.random());
      resolve(shuffled.slice(0, count));
    }, 500);
  });
};

// Get item by id
export const getItemById = (id: string): Promise<ItemProps | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = mockItems.find((item) => item.id === id);
      resolve(item);
    }, 500);
  });
};

// Get items by category
export const getItemsByCategory = (category: string): Promise<ItemProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = mockItems.filter((item) => item.category === category);
      resolve(items);
    }, 500);
  });
};

// Get items by type
export const getItemsByType = (type: "item" | "service"): Promise<ItemProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = mockItems.filter((item) => item.type === type);
      resolve(items);
    }, 500);
  });
};
