
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Compare from "./pages/Compare";
import MotorInsurance from "./pages/MotorInsurance";
import BikeInsurance from "./pages/BikeInsurance";
import HealthInsurance from "./pages/HealthInsurance";
import TravelInsurance from "./pages/TravelInsurance";
import GlobalTravelInsurance from "./pages/GlobalTravelInsurance";
import GroupHealthInsurance from "./pages/GroupHealthInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import TakafulInsurance from "./pages/TakafulInsurance";
import ThirdPartyInsurance from "./pages/motor/ThirdPartyInsurance";
import ComprehensiveInsurance from "./pages/motor/ComprehensiveInsurance";
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
          
          {/* Motor Insurance Routes */}
          <Route path="/motor" element={<MotorInsurance />} />
          <Route path="/motor/third-party" element={<ThirdPartyInsurance />} />
          <Route path="/motor/comprehensive" element={<ComprehensiveInsurance />} />
          <Route path="/motor/takaful" element={<TakafulInsurance />} />
          
          {/* Bike Insurance Routes */}
          <Route path="/bike" element={<BikeInsurance />} />
          <Route path="/bike/third-party" element={<ThirdPartyInsurance />} />
          <Route path="/bike/comprehensive" element={<ComprehensiveInsurance />} />
          <Route path="/bike/motorcycle" element={<BikeInsurance />} />
          
          {/* Health Insurance Routes */}
          <Route path="/health" element={<HealthInsurance />} />
          <Route path="/health/individual" element={<HealthInsurance />} />
          <Route path="/health/family" element={<HealthInsurance />} />
          <Route path="/health/critical-illness" element={<HealthInsurance />} />
          <Route path="/health/hospital-cash" element={<HealthInsurance />} />
          
          {/* Travel Insurance Routes */}
          <Route path="/travel" element={<TravelInsurance />} />
          <Route path="/travel/schengen" element={<TravelInsurance />} />
          <Route path="/travel/student" element={<TravelInsurance />} />
          <Route path="/travel/visitor" element={<TravelInsurance />} />
          <Route path="/travel/hajj-umrah" element={<TravelInsurance />} />
          <Route path="/travel/worldwide" element={<GlobalTravelInsurance />} />
          <Route path="/travel/multi-trip" element={<GlobalTravelInsurance />} />
          <Route path="/travel/single-trip" element={<GlobalTravelInsurance />} />
          <Route path="/travel/business" element={<GlobalTravelInsurance />} />
          <Route path="/travel/new-immigrant" element={<GlobalTravelInsurance />} />
          <Route path="/travel/j1-visa" element={<GlobalTravelInsurance />} />
          <Route path="/travel/student-visa" element={<GlobalTravelInsurance />} />
          <Route path="/travel/schengen-visa" element={<GlobalTravelInsurance />} />
          
          {/* Global Travel Insurance Routes */}
          <Route path="/global-travel" element={<GlobalTravelInsurance />} />
          
          {/* Group Health Insurance Routes */}
          <Route path="/group-health" element={<GroupHealthInsurance />} />
          <Route path="/group-health/employee" element={<GroupHealthInsurance />} />
          <Route path="/group-health/corporate" element={<GroupHealthInsurance />} />
          <Route path="/group-health/sme" element={<GroupHealthInsurance />} />
          <Route path="/group-health/medical" element={<GroupHealthInsurance />} />
          
          {/* Life Insurance Routes */}
          <Route path="/life" element={<LifeInsurance />} />
          
          {/* Takaful Insurance Routes */}
          <Route path="/takaful" element={<TakafulInsurance />} />
          <Route path="/takaful/motor" element={<TakafulInsurance />} />
          <Route path="/takaful/travel" element={<TakafulInsurance />} />
          <Route path="/takaful/family" element={<TakafulInsurance />} />
          <Route path="/takaful/general" element={<TakafulInsurance />} />
          
          {/* Home and Specialized Routes */}
          <Route path="/home" element={<Index />} />
          <Route path="/specialized" element={<Index />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
