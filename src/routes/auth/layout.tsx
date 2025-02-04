import { Outlet } from "react-router-dom";
import { Card } from "@/components/ui/card";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="rounded-full bg-primary/10 p-3">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Dominó App</h1>
          <p className="text-sm text-muted-foreground">
            Organize and manage your domino competitions
          </p>
        </div>
        <Card className="p-6">
          <Outlet />
        </Card>
      </div>
    </div>
  );
}
