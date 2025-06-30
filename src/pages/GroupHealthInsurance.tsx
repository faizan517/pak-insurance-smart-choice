
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Heart, Phone, Clock, Award, CheckCircle, Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GroupHealthInsurance = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetQuote = () => {
    const quoteData = {
      insuranceType: "group-health",
      name: "Group Health Insurance Customer",
      email: "",
      phone: "",
      city: ""
    };

    localStorage.setItem('quoteFormData', JSON.stringify(quoteData));
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
    { icon: Users, title: "Employee Coverage", desc: "Comprehensive health benefits for all employees", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Corporate Rates", desc: "Special discounted rates for group policies", color: "from-green-500 to-emerald-500" },
    { icon: Phone, title: "24/7 Support", desc: "Dedicated relationship manager for your company", color: "from-purple-500 to-pink-500" },
    { icon: Clock, title: "Easy Claims", desc: "Streamlined claims process for employees", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-lg p-8 rounded-full shadow-2xl">
                <Users className="h-20 w-20 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Group Health Insurance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare coverage for your entire team
            </p>
            <div className="flex justify-center items-center space-x-4 text-blue-100">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-lg">Trusted by 500+ Companies</span>
              <Star className="h-5 w-5 fill-current" />
            </div>
            <div className="pt-8">
              <Button 
                onClick={handleGetQuote}
                className="px-16 py-6 bg-white text-indigo-600 hover:bg-blue-50 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="h-6 w-6 mr-2" />
                Get a Group Health Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Group Health Insurance in Pakistan
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Protect your employees with comprehensive medical and wellness coverage
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className={`bg-gradient-to-r ${benefit.color} p-4 rounded-2xl w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coverages Section */}
        <Card className="mb-16 shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <CardTitle className="text-3xl flex items-center relative z-10">
              <Shield className="h-8 w-8 mr-3" />
              Coverages
            </CardTitle>
            <CardDescription className="text-blue-100 text-lg relative z-10">
              Comprehensive protection for all your healthcare needs
            </CardDescription>
          </CardHeader>
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-8">
              {coverages.map((coverage, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{coverage}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Features Section */}
        <Card className="mb-16 shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <CardTitle className="text-3xl flex items-center relative z-10">
              <Award className="h-8 w-8 mr-3" />
              Key Features
            </CardTitle>
            <CardDescription className="text-purple-100 text-lg relative z-10">
              Advanced features designed for modern businesses
            </CardDescription>
          </CardHeader>
          <CardContent className="p-10">
            <div className="space-y-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-xl hover:bg-purple-50 transition-colors duration-200 border-l-4 border-purple-500">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-purple-500 mt-1" />
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Final Call to Action */}
        <Card className="text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white border-0 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          <CardContent className="p-16 relative z-10">
            <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Team?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get personalized group health insurance quotes tailored to your company's needs
            </p>
            <Button 
              onClick={handleGetQuote}
              className="px-12 py-6 bg-white text-indigo-600 hover:bg-blue-50 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="h-6 w-6 mr-2" />
              Get a Group Health Quote
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default GroupHealthInsurance;
