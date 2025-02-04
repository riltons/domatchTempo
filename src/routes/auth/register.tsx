import RegisterForm from "@/components/auth/RegisterForm";
import { User } from "@/types/auth";

export default function RegisterPage() {
  const handleRegister = async (userData: Partial<User>) => {
    // TODO: Implement registration logic with Supabase
    console.log("Register:", userData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
}
