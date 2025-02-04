import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CameraViewProps {
  onCapture?: (image: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const CameraView = ({
  onCapture = () => {},
  isOpen = true,
  onClose = () => {},
}: CameraViewProps) => {
  const [permissionGranted, setPermissionGranted] = useState(true);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Placeholder for camera stream
  const mockCameraView = (
    <div className="relative w-full h-64 bg-slate-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Camera className="w-12 h-12 text-slate-400" />
      </div>
    </div>
  );

  const handleCaptureClick = () => {
    // Simulate capturing a photo
    const mockImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=photo";
    setPreviewImage(mockImage);
    onCapture(mockImage);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Take Photo</DialogTitle>
        </DialogHeader>

        <div className="bg-white p-4 rounded-lg space-y-4">
          {!permissionGranted ? (
            <Card className="p-4">
              <div className="text-center space-y-2">
                <X className="w-8 h-8 text-red-500 mx-auto" />
                <p className="text-sm text-gray-600">
                  Camera permission denied. Please enable camera access in your
                  browser settings.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setPermissionGranted(true)}
                >
                  Request Permission
                </Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {previewImage ? (
                <div className="relative w-full h-64">
                  <img
                    src={previewImage}
                    alt="Captured"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => setPreviewImage(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                mockCameraView
              )}

              <div className="flex justify-center">
                <Button onClick={handleCaptureClick} disabled={!!previewImage}>
                  Capture Photo
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CameraView;
