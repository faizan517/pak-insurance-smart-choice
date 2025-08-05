import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Users,
  Clock,
  Heart,
  Check,
  Car,
  Wrench,
  MapPin,
  Phone,
  Zap,
  Award,
  Star,
  FileText,
  TrendingUp,
  Car as CarIcon,
  Calculator,
  Plane,
  ArrowBigRightDash,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const TravelInsurance = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleAge: "",
    coverageType: "",
    city: "",
    name: "",
    email: "",
    phone: "",
    vehicleNumber: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCompareSubmit = (e) => {
    e.preventDefault();
    if (!formData.vehicleType || !formData.coverageType || !formData.city) {
      toast({
        title: "Please fill all required fields",
        description: "Vehicle type, coverage type, and city are required",
        variant: "destructive",
      });
      return;
    }
    const quoteData = {
      insuranceType: "motor",
      name: formData.name || "Motor Insurance Customer",
      email: formData.email || "",
      phone: formData.phone || "",
      vehicleType: formData.vehicleType,
      vehicleAge: formData.vehicleAge,
      coverageType: formData.coverageType,
      city: formData.city,
      vehicleNumber: formData.vehicleNumber,
    };
    localStorage.setItem("quoteFormData", JSON.stringify(quoteData));
    navigate("/compare");
    toast({
      title: "Comparing Motor Insurance Plans!",
      description: "Showing you the best motor insurance options...",
    });
  };

  const coverages = [
    {
      title: "Domestic Travel",
      description:
        "Explore your own backyard worry-free—coverage for medical emergencies, lost baggage, trip interruptions, and more within Pakistan.",
      icon: <Shield className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "International Travel",
      description:
        "Journey globally with confidence—emergency medical care, evacuation, repatriation, and baggage protection anywhere in the world.",
      icon: <Car className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Hajj & Umrah",
      description: "Focus on your spiritual journey—coverage for unforeseen incidents, medical assistance, and repatriation during pilgrimage.",
      icon: <FileText className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Ziarat Packages",
      description: "Make every pilgrimage blessed—comprehensive protection for religious visits with 24/7 support.",
      icon: <TrendingUp className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Student Protection",
      description: "Study abroad safely—health, travel delays, personal liability, and emergency assistance designed for international students.",
      icon: <Zap className="w-6 h-6 text-[#F46416]" />,
    },
    // {
    //   title: "Courtesy Cars",
    //   description: "Get a replacement vehicle while yours is being repaired.",
    //   icon: <CarIcon className="w-6 h-6 text-[#F46416]" />,
    // },
    // {
    //   title: "Registration Cost Cover",
    //   description: "Coverage for vehicle registration and documentation costs.",
    //   icon: <Calculator className="w-6 h-6 text-[#F46416]" />,
    // },
    // {
    //   title: "Telematics Discounts",
    //   description: "Safe-driving discounts based on real-time driving behavior.",
    //   icon: <Star className="w-6 h-6 text-[#F46416]" />,
    // },
  ];

  const keyFeatures = [
    {
      title: "7-Day Claim Settlement",
      description:
        "Fast-track processing so you get reimbursed quickly.",
      icon: <Zap className="w-8 h-8 text-[#1D9785]" />,
    },
    {
      title: "30-Second Claim Filing:",
      description:
        "Quick and simple online claim submission.",
      icon: <Shield className="w-8 h-8 text-[#1D9785]" />,
    },
    {
      title: "End-to-End Digital Experience",
      description:
        "Manage your policy, submit claims, and track status entirely online.",
      icon: <Phone className="w-8 h-8 text-[#1D9785]" />,
    },
  ];

  const benefits = [
    { title: "Comprehensive Protection" },
    { title: "Quick Claims Settlement" },
    { title: "Network Garages" },
    { title: "Digital Documents" },
  ];

  const insuranceTypes = [
    {
      type: "Comprehensive",
      description: "Complete protection for your vehicle",
      price: "From Rs. 15,000",
      features: ["Own Damage", "Third Party", "Theft", "Natural Calamities"],
    },
    {
      type: "Third Party",
      description: "Basic mandatory coverage",
      price: "From Rs. 5,000",
      features: [
        "Third Party Liability",
        "Personal Accident",
        "Basic Coverage",
      ],
    },
    {
      type: "Third Party + Fire & Theft",
      description: "Enhanced third party coverage",
      price: "From Rs. 8,000",
      features: ["Third Party", "Fire Damage", "Theft Protection"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#113040] to-[#2ABFAF] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
              <Plane className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal font-[Ibrand] leading-tight">
              Travel Insurance for Every Journey
              <span className="block text-3xl md:text-3xl font-normal font-[Futura] text-blue-100 mt-4">
                Whether you're traveling across Pakistan or abroad, we cover all your travel needs with easy, digital support and fast claims.
              </span>
            </h1>
            {/* <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive car and bike insurance from Pakistan's top insurers.
              Compare quotes instantly and get covered in minutes.
            </p> */}
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#113040] mb-12 text-center">Choose Your Coverage Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {insuranceTypes.map((insurance, idx) => (
              <Card key={idx} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-[#1D9785]">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#113040] mb-2">{insurance.type}</h3>
                    <p className="text-gray-600 mb-4">{insurance.description}</p>
                    <div className="text-2xl font-bold text-[#F46416] mb-6">{insurance.price}</div>
                    <ul className="space-y-2 mb-8">
                      {insurance.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center justify-center space-x-2">
                          <Check className="w-4 h-4 text-[#1D9785]" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={handleCompareSubmit}
                      className="w-full bg-gradient-to-r from-[#F46416] to-[#1D9785] text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform"
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <main className="flex-grow w-full py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-16 w-full max-w-6xl mx-auto">
            {/* Coverages */}
            <section>
              <h3 className="text-3xl font-normal text-[#113040] mb-10 font-[Ibrand] text-center">
                Comprehensive Motor Coverage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coverages.map((cov, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex flex-col font-[Futura] items-center text-center space-y-4">
                      <div className="p-3 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                        {cov.icon}
                      </div>
                      <div>
                        <h4 className="font-normal text-[#113040] mb-2 text-lg font-[Ibrand]">
                          {cov.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {cov.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h3 className="text-3xl font-normal font-[Ibrand] text-[#113040] mb-10 text-center">
                Why Choose Our Motor Insurance?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {keyFeatures.map((f, idx) => (
                  <Card
                    key={idx}
                    className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-teal-50 rounded-full group-hover:bg-teal-100 transition-colors">
                          {f.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-normal font-[Ibrand] text-[#113040] mb-4">
                        {f.title}
                      </h4>
                      <p className="text-gray-600 font-[Futura] leading-relaxed">
                        {f.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Benefits */}
            {/* <section className="font-[Ibrand] bg-gradient-to-r from-[#113040] to-[#1D9785] text-white p-10 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-normal mb-8 text-center">
                Key Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center space-y-3 text-center"
                  >
                    <div className="p-3 bg-white/20 rounded-full">
                      <Check className="w-6 h-6 text-[#F46416]" />
                    </div>
                    <span className="font-normal font-[Ibrand] text-lg">{b.title}</span>
                  </div>
                ))}
              </div>
            </section> */}
          </div>
        </div>
      </main>
      <div className="py-8">
        <Button
          onClick={() => setShowQuoteForm(true)}
          className="font-[Ibrand] bg-[#1D9785] text-white text-xl font-normal px-16 py-6 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-3 mx-auto"
        >
        Get Free Travel Insurance Quote
        <ArrowBigRightDash className="h-7 w-7 ml-2" />

        </Button>
        <QuoteForm
          insuranceType="travel"
          insuranceTypeLabel="Travel Insurance"
          open={showQuoteForm}
          onOpenChange={setShowQuoteForm}
        />
      </div>
      <Footer />
    </div>
  );
};

export default TravelInsurance;
