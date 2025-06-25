
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Car, Heart, Plane, User, Calculator, CheckCircle, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InsuranceCategories from "@/components/InsuranceCategories";
import PartnerLogos from "@/components/PartnerLogos";
import TrustIndicators from "@/components/TrustIndicators";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <HeroSection />
      <InsuranceCategories />
      <FeaturesSection />
      <PartnerLogos />
      <TrustIndicators />
      <Footer />
    </div>
  );
};

export default Index;
