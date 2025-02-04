import React from "react";
import BottomTabNav from "./navigation/BottomTabNav";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const renderScreen = () => {
    switch (location.pathname) {
      case "/profile":
        return <ProfileScreen />;
      case "/settings":
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pb-[80px]">{renderScreen()}</div>
      <BottomTabNav />
    </div>
  );
};

export default Home;
