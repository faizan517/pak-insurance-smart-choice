
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Heart, Phone, Clock, Award, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GroupHealthInsurance = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetQuote = () => {
    // Create quote data for comparison page
    const quoteData = {
      insuranceType: "group-health",
      name: "Group Health Insurance Customer",
      email: "",
      phone: "",
      city: ""
    };

    localStorage.setItem('quoteFormData', JSON.stringify(quoteData));
    
    console.log("Navigating to compare page with group health insurance data");
    navigate('/compare');
    
    toast({
      title: "Getting Group Health Insurance Quotes!",
      description: "Showing you the best group health insurance options..."
    });
  };

  const coverages = [
    "In-Patient Hospitalization: Coverage for room, boarding, ICU, and hospital expenses.",
    "Major Medical Insurance: High-limit protection for critical illnesses and surgeries.",
    "Daycare Procedures & Surgeries: Benefits for treatments not requiring an overnight stay.",
    "Specialized Investigations in OPD: Diagnostics coverage for MRIs, CT scans, and much more.",
    "Emergency Accidental Treatment: Immediate care for accidental injuries.",
    "Out-Patient (OPD) Services: Optional coverage for clinic visits and doctor consultations.",
    "Pre & Post Hospitalization: Expenses before and after inpatient treatment.",
    "Maternity Benefits: Coverage for pregnancy and childbirth-related costs.",
    "Non-Accidental Medical Emergencies: Emergency treatments for sudden illnesses.",
    "Wellness Programs: Annual health screenings, preventive care, and telehealth access."
  ];

  const keyFeatures = [
    "Custom Benefit Design: Choose add-ons like dental, wellness, and OPD coverage.",
    "Dedicated HR Portal: Manage members, access reports, and download policy documents.",
    "Hassle-Free Claims: From submission to payout."
  ];

  const benefits = [
    { icon: Users, title: "Employee Coverage", desc: "Comprehensive health benefits for all employees" },
    { icon: Shield, title: "Corporate Rates", desc: "Special discounted rates for group policies" },
    { icon: Phone, title: "Dedicated Support", desc: "Dedicated relationship manager for your company" },
    { icon: Clock, title: "Easy Claims", desc: "Streamlined claims process for employees" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <Users className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Group Health Insurance
            </h1>
            <div className="text-center mt-12">
              <Button 
                onClick={handleGetQuote}
                className="px-12 h-14 bg-white text-purple-600 hover:bg-gray-100 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get a Group Health Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Group Health Insurance in Pakistan
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Protect your employees with comprehensive medical and wellness coverage:
          </p>

          {/* Coverages Section */}
          <Card className="mb-12 shadow-lg border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Coverages
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {coverages.map((coverage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-700">{coverage}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Features Section */}
          <Card className="mb-12 shadow-lg border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Choose Group Health Insurance?
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Group Health Insurance Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Comprehensive Coverage</h3>
                <p className="text-slate-600">Complete medical coverage including hospitalization, OPD, and preventive care</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Corporate Discounts</h3>
                <p className="text-slate-600">Special group rates and volume discounts for corporate clients</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Dedicated Support</h3>
                <p className="text-slate-600">Dedicated account manager and 24/7 support for your employees</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            onClick={handleGetQuote}
            className="px-12 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Group Health Quote
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GroupHealthInsurance;
