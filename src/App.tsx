
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Compare from "./pages/Compare";
import MotorInsurance from "./pages/MotorInsurance";
import HealthInsurance from "./pages/HealthInsurance";
import TravelInsurance from "./pages/TravelInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import TakafulInsurance from "./pages/TakafulInsurance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/motor" element={<MotorInsurance />} />
          <Route path="/motor/*" element={<MotorInsurance />} />
          <Route path="/bike" element={<MotorInsurance />} />
          <Route path="/bike/*" element={<MotorInsurance />} />
          <Route path="/health" element={<HealthInsurance />} />
          <Route path="/health/*" element={<HealthInsurance />} />
          <Route path="/travel" element={<TravelInsurance />} />
          <Route path="/travel/*" element={<TravelInsurance />} />
          <Route path="/life" element={<LifeInsurance />} />
          <Route path="/group-health/*" element={<HealthInsurance />} />
          <Route path="/takaful" element={<TakafulInsurance />} />
          <Route path="/takaful/*" element={<TakafulInsurance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
