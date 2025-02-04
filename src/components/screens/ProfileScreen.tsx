import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, User } from "lucide-react";
import CameraView from "../profile/CameraView";

interface ProfileData {
  name: string;
  email: string;
  bio: string;
  avatar: string;
}

const ProfileScreen = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software developer and tech enthusiast",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  });

  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handlePhotoCapture = (image: string) => {
    setProfileData((prev) => ({
      ...prev,
      avatar: image,
    }));
    setIsCameraOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-6">
      <Card className="p-6 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Avatar className="w-24 h-24">
              <AvatarImage src={profileData.avatar} alt={profileData.name} />
              <AvatarFallback>
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="secondary"
              className="absolute bottom-0 right-0 rounded-full"
              onClick={() => setIsCameraOpen(true)}
            >
              <Camera className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold">{profileData.name}</h2>
            <p className="text-gray-500">{profileData.email}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={profileData.name}
              onChange={(e) =>
                setProfileData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={profileData.email}
              onChange={(e) =>
                setProfileData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input
              id="bio"
              value={profileData.bio}
              onChange={(e) =>
                setProfileData((prev) => ({ ...prev, bio: e.target.value }))
              }
            />
          </div>

          <Button className="w-full" size="lg">
            Save Changes
          </Button>
        </div>
      </Card>

      <CameraView
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={handlePhotoCapture}
      />
    </div>
  );
};

export default ProfileScreen;
