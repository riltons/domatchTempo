import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";

interface Community {
  id: string;
  name: string;
  memberCount: number;
  whatsappGroup?: string;
}

interface CommunityScreenProps {
  communities?: Community[];
  onCreateCommunity?: () => void;
}

const CommunityScreen = ({
  communities = [
    { id: "1", name: "Dominó Club SP", memberCount: 24 },
    { id: "2", name: "Liga de Dominó RJ", memberCount: 32 },
  ],
  onCreateCommunity = () => {},
}: CommunityScreenProps) => {
  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">Communities</h1>
        <Button onClick={onCreateCommunity} size="icon">
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <div className="p-4 space-y-4">
        {communities.map((community) => (
          <Card key={community.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold">{community.name}</h2>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">
                    {community.memberCount} members
                  </span>
                </div>
              </div>
              <Button variant="outline">View</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityScreen;
