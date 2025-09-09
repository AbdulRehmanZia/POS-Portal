// components/AdminLogin.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Monitor, Loader2, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setToken } from "../middleware/TokenDecode";
import api from "@/ApiInstance";

// 🔹 Form Interface
interface LoginForm {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false) ;
  const { toast } = useToast();
  const navigate = useNavigate();

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.post(
        "/user/super-admin-login",
        formData
      );

      if (response.status === 200 && response.data.success) {
        // Store token  
        setToken(response.data.data);

        toast({
          title: "Success!",
          description: "Super Admin Logged In Successfully",
        });

        // Redirect to Dashboard
        navigate("/admin/dashboard", { replace: true });
      } else {
        toast({
          title: "Error",
          description: response.data.message || "Failed to login Super Admin",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Network error. Please try again.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="h-screen bg-gradient-feature flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo + Title */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="p-2 bg-gradient-hero rounded-lg">
              <Monitor className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              RetailPOS
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Super Admin Login
          </h1>
        </div>

        {/* Card */}
        <Card className="shadow-feature">
          <CardHeader />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                variant="hero"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Login Super Admin"
                )}
              </Button>
            </form>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;