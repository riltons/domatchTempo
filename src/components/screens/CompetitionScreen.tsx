import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Plus } from "lucide-react";

interface Competition {
  id: string;
  name: string;
  status: "active" | "completed" | "upcoming";
  participantCount: number;
}

interface CompetitionScreenProps {
  competitions?: Competition[];
  onCreateCompetition?: () => void;
}

const CompetitionScreen = ({
  competitions = [
    {
      id: "1",
      name: "Torneio de Verão",
      status: "active",
      participantCount: 16,
    },
    {
      id: "2",
      name: "Copa Regional",
      status: "upcoming",
      participantCount: 24,
    },
  ] as Competition[],
  onCreateCompetition = () => {},
}: CompetitionScreenProps) => {
  const getStatusColor = (status: Competition["status"]) => {
    switch (status) {
      case "active":
        return "text-green-500";
      case "completed":
        return "text-blue-500";
      case "upcoming":
        return "text-orange-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">Competitions</h1>
        <Button onClick={onCreateCompetition} size="icon">
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <div className="p-4 space-y-4">
        {competitions.map((competition) => (
          <Card key={competition.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold">{competition.name}</h2>
                <div className="flex items-center space-x-4">
                  <span
                    className={`capitalize ${getStatusColor(competition.status)}`}
                  >
                    {competition.status}
                  </span>
                  <div className="flex items-center text-muted-foreground">
                    <Trophy className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      {competition.participantCount} participants
                    </span>
                  </div>
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

export default CompetitionScreen;
