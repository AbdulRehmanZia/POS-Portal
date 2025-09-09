// App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Components
import AdminLogin from "./pages/Login";
import AdminDashboard from "./pages/AdminRegister";
import ProtectedRoute from "./components/ProtectedRoute";

// Utils
import { isAuthenticated } from "./middleware/TokenDecode";

const queryClient = new QueryClient();

const App = () => {
  const userIsAuthenticated = isAuthenticated();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route 
              path="/" 
              element={
                userIsAuthenticated ? (
                  <Navigate to="/admin/dashboard" replace />
                ) : (
                  <Index />
                )
              } 
            />
            
            {/* Login Route - Redirect to admin if already authenticated */}
            <Route 
              path="/login" 
              element={
                userIsAuthenticated ? (
                  <Navigate to="/admin/dashboard" replace />
                ) : (
                  <AdminLogin />
                )
              } 
            />

            {/* Protected Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute requireSuperAdmin={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;