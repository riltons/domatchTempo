import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Phone, Mail } from "lucide-react";
import { User as UserType } from "@/types/auth";

interface RegisterFormProps {
  onSubmit: (userData: Partial<UserType>) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(formData);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your details below to create your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              id="name"
              placeholder="John Doe"
              className="pl-10"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              className="pl-10"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email (optional)</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="pl-10"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <Button variant="outline" type="button" className="w-full">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </Button>
      </div>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
