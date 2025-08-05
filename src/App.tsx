import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import { useEffect } from "react";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import ParentInsurance from "./pages/ParentInsurance";
import ShopInsurance from "./pages/motor/ShopInsurance";
import PetInsurance from "./pages/PetInsurance";
import DomesticHelper from "./pages/DomesticHelperInsurance";
import HomeInsurence from "./pages/HomeInsurance";
import GlobalLifeInsurance from "./pages/GroupLifeInsurance";
import PlanDetails from "./pages/PlanDetails";
// import PlanScreen from "./components/PlanScreen";


const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/plan" element={<PlanScreen />} /> */}
          <Route path="/compare" element={<Compare />} />
          
          {/* Motor Insurance Routes */}
          <Route path="/motor" element={<MotorInsurance />} />
          {/* <Route path="/motor/third-party" element={<ThirdPartyInsurance />} /> */}
          {/* <Route path="/motor/comprehensive" element={<ComprehensiveInsurance />} /> */}
          {/* <Route path="/motor/takaful" element={<TakafulInsurance />} /> */}
          
          {/* Bike Insurance Routes */}
          <Route path="/bike" element={<BikeInsurance />} />
          {/* <Route path="/bike/third-party" element={<ThirdPartyInsurance />} />
          <Route path="/bike/comprehensive" element={<ComprehensiveInsurance />} />
          <Route path="/bike/motorcycle" element={<BikeInsurance />} /> */}
          
          {/* Health Insurance Routes */}
          <Route path="/health" element={<HealthInsurance />} />
          {/* <Route path="/health/individual" element={<HealthInsurance />} />
          <Route path="/health/family" element={<HealthInsurance />} />
          <Route path="/health/critical-illness" element={<HealthInsurance />} />
          <Route path="/health/hospital-cash" element={<HealthInsurance />} /> */}
          
          {/* Travel Insurance Routes */}
          <Route path="/travel" element={<TravelInsurance />} />
          <Route path="/parental" element={<ParentInsurance />} />
          <Route path="/shop" element={<ShopInsurance />} />
          <Route path="/domestic-helper" element={<DomesticHelper />} />
          <Route path="/pet" element={< PetInsurance/>} />



          {/* <Route path="/travel/schengen" element={<TravelInsurance />} />
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
          <Route path="/travel/schengen-visa" element={<GlobalTravelInsurance />} /> */}
          
          {/* Global Travel Insurance Routes */}
          <Route path="/global-travel" element={<GlobalTravelInsurance />} />
          
          {/* Group Health Insurance Routes */}
          <Route path="/group-health" element={<GroupHealthInsurance />} />
          <Route path="/group-life" element={<GlobalLifeInsurance />} />
          {/* <Route path="/group-health/employee" element={<GroupHealthInsurance />} />
          <Route path="/group-health/corporate" element={<GroupHealthInsurance />} />
          <Route path="/group-health/sme" element={<GroupHealthInsurance />} /> */}
          {/* <Route path="/group-health/medical" element={<GroupHealthInsurance />} /> */}
          
          {/* Life Insurance Routes */}
          <Route path="/life" element={<LifeInsurance />} />
          
          {/* Takaful Insurance Routes */}
          {/* <Route path="/takaful" element={<TakafulInsurance />} />
          <Route path="/takaful/motor" element={<TakafulInsurance />} />
          <Route path="/takaful/travel" element={<TakafulInsurance />} />
          <Route path="/takaful/family" element={<TakafulInsurance />} />
          <Route path="/takaful/general" element={<TakafulInsurance />} /> */}
          
          {/* Home and Specialized Routes */}
          <Route path="/home" element={<HomeInsurence />} />
          <Route path="/specialized" element={<Index />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/plan-details" element={<PlanDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  </QueryClientProvider>
);

export default App;
