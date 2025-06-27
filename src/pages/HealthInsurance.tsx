import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Heart, Users, Shield, Star, Phone, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HealthInsurance = () => {
  const [formData, setFormData] = useState({
    age: "",
    coverage: "",
    members: "",
    preExisting: "",
    name: "",
    email: "",
    phone: "",
    city: ""
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCompareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Health Insurance form submitted with data:", formData);
    
    if (!formData.age || !formData.coverage || !formData.members) {
      toast({
        title: "Please fill all required fields",
        description: "Age, coverage type, and family members are required",
        variant: "destructive"
      });
      return;
    }

    // Create quote data for comparison page
    const quoteData = {
      insuranceType: "individual-health",
      name: formData.name || "Health Insurance Customer",
      email: formData.email || "",
      phone: formData.phone || "",
      age: formData.age,
      city: formData.city || "",
      familyMembers: formData.members,
      coverage: formData.coverage,
      preExisting: formData.preExisting
    };

    // Store form data in localStorage for the comparison page
    localStorage.setItem('quoteFormData', JSON.stringify(quoteData));
    
    console.log("Navigating to compare page with health insurance data");
    navigate('/compare');
    
    toast({
      title: "Comparing Health Insurance Plans!",
      description: "Showing you the best health insurance options..."
    });
  };

  const plans = [
    {
      name: "EFU Health Guard",
      company: "EFU Life",
      premium: "Rs. 25,000",
      coverage: "Rs. 500,000",
      features: ["Hospitalization Coverage", "OPD Benefits", "Maternity Coverage", "Emergency Services"],
      rating: 4.5,
      reviews: "2.1k",
      color: "from-red-500 to-pink-600",
      popular: false
    },
    {
      name: "Jubilee Family Health",
      company: "Jubilee Life", 
      premium: "Rs. 35,000",
      coverage: "Rs. 750,000",
      features: ["Family Coverage", "Pre-existing Conditions", "Ambulance Service", "Cashless Treatment"],
      rating: 4.7,
      reviews: "3.2k",
      color: "from-blue-500 to-blue-600",
      popular: true
    },
    {
      name: "TPL Health Plus",
      company: "TPL Insurance",
      premium: "Rs. 22,000",
      coverage: "Rs. 400,000", 
      features: ["Individual Plan", "Room Rent Coverage", "Surgery Coverage", "Medicine Allowance"],
      rating: 4.3,
      reviews: "1.8k",
      color: "from-green-500 to-emerald-600",
      popular: false
    }
  ];

  const benefits = [
    { icon: Heart, title: "Comprehensive Coverage", desc: "Complete medical protection for you and family" },
    { icon: Shield, title: "Cashless Treatment", desc: "Network hospitals across Pakistan" },
    { icon: Phone, title: "24/7 Support", desc: "Round the clock customer assistance" },
    { icon: Clock, title: "Quick Claims", desc: "Fast claim processing and settlement" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-pink-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <Heart className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Health Insurance
              <span className="block text-3xl md:text-4xl font-normal text-red-100 mt-2">
                Protect Your Family's Health
              </span>
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Comprehensive health coverage with cashless treatment at 500+ hospitals nationwide
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quote Form */}
        <Card className="mb-12 shadow-2xl border-0 -mt-20 relative z-10 bg-white">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Users className="h-6 w-6 mr-2" />
              Get Your Health Insurance Quote
            </CardTitle>
            <CardDescription className="text-red-100 text-center">
              Compare plans and find the best coverage for your family
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleCompareSubmit}>
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Age *</label>
                  <Input 
                    placeholder="Enter age" 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="h-12"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Coverage Type *</label>
                  <Select value={formData.coverage} onValueChange={(value) => setFormData({...formData, coverage: value})} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select coverage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="parents">Parents</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Family Members *</label>
                  <Select value={formData.members} onValueChange={(value) => setFormData({...formData, members: value})} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Number of members" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Just me</SelectItem>
                      <SelectItem value="2">2 Members</SelectItem>
                      <SelectItem value="3">3 Members</SelectItem>
                      <SelectItem value="4">4+ Members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-end">
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-lg font-semibold"
                  >
                    Compare Plans
                  </Button>
                </div>
              </div>
              
              {/* Optional Contact Details */}
              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <Input 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <Input 
                    placeholder="+92 300 1234567" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-10"
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Choose Health Insurance?
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

        {/* Health Plans */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Choose Your Health Plan
            </h2>
            <p className="text-xl text-slate-600">
              Compare features and find the perfect coverage for your needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 hover:bg-blue-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 justify-end">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{plan.rating}</span>
                      </div>
                      <span className="text-xs text-slate-500">({plan.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-slate-500">{plan.company}</p>
                  
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {plan.premium}
                      <span className="text-lg font-normal text-slate-500">/year</span>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Coverage: {plan.coverage}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 h-12 text-lg font-semibold`}>
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HealthInsurance;
