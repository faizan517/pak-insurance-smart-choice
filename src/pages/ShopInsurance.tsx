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
  Plane,
} from "lucide-react";

const TravelInsurance = () => {
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
      title: "Comprehensive Plans",
      description:
        "Covers theft, accidental damage, total loss, and third-party liability.",
      icon: <Shield className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Risk-Based Premiums",
      description:
        " Customized premium according to your vehicle’s profile.",
      icon: <Car className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Personal Accident",
      description: "Coverage for driver and passengers in case of accidents.",
      icon: <Heart className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Engine Protect",
      description:
        "Protection against engine damage due to water ingression and oil leakage.",
      icon: <Wrench className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Zero Depreciation",
      description: "Full claim settlement without depreciation deduction.",
      icon: <Zap className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Roadside Assistance",
      description:
        "24/7 emergency assistance for breakdowns and towing services.",
      icon: <Phone className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Return to Invoice",
      description:
        "Compensation based on original invoice value in case of total loss.",
      icon: <Award className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Consumables Cover",
      description: "Coverage for engine oil, coolant, and other consumables.",
      icon: <Star className="w-6 h-6 text-[#F46416]" />,
    },
  ];

  const keyFeatures = [
    {
      title: "Instant Policy",
      description:
        "Get your motor insurance policy immediately after purchase with digital documents.",
      icon: <Zap className="w-8 h-8 text-[#1D9785]" />,
    },
    {
      title: "Cashless Claims",
      description:
        "Hassle-free claims at 1000+ network garages across Pakistan.",
      icon: <Shield className="w-8 h-8 text-[#1D9785]" />,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for claims and emergency services.",
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
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <Plane className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Travel Insurance
              <span className="block text-3xl md:text-4xl font-normal text-blue-100 mt-2">
                Secure Your Journey Worldwide
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive travel protection for domestic and international trips with 24/7 support
            </p>
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
              <h3 className="text-3xl font-bold text-[#113040] mb-10 text-center">
                Comprehensive Motor Coverage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coverages.map((cov, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                        {cov.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#113040] mb-2 text-lg">
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
              <h3 className="text-3xl font-bold text-[#113040] mb-10 text-center">
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
                      <h4 className="text-xl font-semibold text-[#113040] mb-4">
                        {f.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {f.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-gradient-to-r from-[#113040] to-[#1D9785] text-white p-10 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 text-center">
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
                    <span className="font-semibold text-lg">{b.title}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <div className="py-12">
      <Button
        onClick={handleCompareSubmit}
        className="bg-gradient-to-r from-[#F46416] to-[#1D9785] text-white text-xl font-bold px-16 py-6 rounded-full shadow-2xl transition-all hover:scale-105 ring-2 ring-[#F46416]/20 flex items-center gap-3 mx-auto"
      >
        Get Free Shop Insurance Quote
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Button>
      </div>
      <Footer />
    </div>
  );
};

export default TravelInsurance;
