import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Bell, BellOff, Shield } from "lucide-react";

interface SettingsScreenProps {
  onNotificationChange?: (enabled: boolean) => void;
}

const SettingsScreen = ({
  onNotificationChange = () => {},
}: SettingsScreenProps) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [showPermissionDialog, setShowPermissionDialog] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(
    null,
  );

  const handleNotificationToggle = (checked: boolean) => {
    if (checked && !permissionGranted) {
      setShowPermissionDialog(true);
    } else {
      setNotificationsEnabled(checked);
      onNotificationChange(checked);
    }
  };

  const handlePermissionRequest = () => {
    // Simulate permission request
    const granted = Math.random() > 0.5;
    setPermissionGranted(granted);
    if (granted) {
      setNotificationsEnabled(true);
      onNotificationChange(true);
    }
    setShowPermissionDialog(false);
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Card className="p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Notifications</h2>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                {notificationsEnabled ? (
                  <Bell className="w-5 h-5 text-primary" />
                ) : (
                  <BellOff className="w-5 h-5 text-muted-foreground" />
                )}
                <Label htmlFor="notifications">Push Notifications</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Receive updates about important events and activities
              </p>
            </div>
            <Switch
              id="notifications"
              checked={notificationsEnabled}
              onCheckedChange={handleNotificationToggle}
            />
          </div>

          {permissionGranted === false && (
            <div className="flex items-start space-x-2 p-4 bg-muted rounded-lg">
              <Shield className="w-5 h-5 text-destructive mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Permission Required</p>
                <p className="text-sm text-muted-foreground">
                  Please enable notifications in your browser settings to
                  receive updates.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Preferences</h2>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="sound-effects">Sound Effects</Label>
              <Switch id="sound-effects" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <Switch id="dark-mode" />
            </div>
          </div>
        </div>
      </Card>

      <AlertDialog
        open={showPermissionDialog}
        onOpenChange={setShowPermissionDialog}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Enable Notifications</AlertDialogTitle>
            <AlertDialogDescription>
              This will allow us to send you important updates and
              notifications. You can change this setting at any time.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handlePermissionRequest}>
              Enable
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SettingsScreen;
