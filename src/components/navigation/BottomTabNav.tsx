import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Trophy, Users, User, Settings } from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface BottomTabNavProps {
  items?: NavItem[];
}

const BottomTabNav = ({
  items = [
    {
      icon: <Trophy className="w-6 h-6" />,
      label: "Competitions",
      path: "/",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Communities",
      path: "/communities",
    },
    {
      icon: <User className="w-6 h-6" />,
      label: "Profile",
      path: "/profile",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      label: "Settings",
      path: "/settings",
    },
  ],
}: BottomTabNavProps) => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border h-[80px] flex items-center justify-around px-4">
      {items.map((item, index) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={index}
            to={item.path}
            className={`flex flex-col items-center justify-center space-y-1 p-2 rounded-lg transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomTabNav;
