import { Outlet } from "react-router-dom";
import BottomTabNav from "@/components/navigation/BottomTabNav";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pb-[80px]">
        <Outlet />
      </div>
      <BottomTabNav />
    </div>
  );
}
