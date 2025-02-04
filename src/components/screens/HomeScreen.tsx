import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RefreshCcw, ChevronRight } from "lucide-react";

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
}

interface HomeScreenProps {
  posts?: Post[];
  onRefresh?: () => void;
  onPostClick?: (post: Post) => void;
}

const HomeScreen = ({
  posts = [
    {
      id: 1,
      title: "Getting Started with React Native",
      content: "Learn the basics of React Native development...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    },
    {
      id: 2,
      title: "Mobile App Design Tips",
      content: "Essential tips for creating great mobile experiences...",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    },
    {
      id: 3,
      title: "Working with Expo",
      content: "Discover how to build apps faster with Expo...",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    },
  ],
  onRefresh = () => {},
  onPostClick = () => {},
}: HomeScreenProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    onRefresh();
    // Simulate refresh delay
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">Home</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleRefresh}
          className={`${isRefreshing ? "animate-spin" : ""}`}
        >
          <RefreshCcw className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onPostClick(post)}
            >
              <div className="aspect-video relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground line-clamp-2">
                  {post.content}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default HomeScreen;
