
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Plane, MapPin, Calendar, Star, Shield, Globe, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TravelInsurance = () => {
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    travelers: "",
    age: "",
    name: "",
    email: "",
    phone: "",
    city: ""
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetQuotes = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Travel Insurance form submitted with data:", formData);
    
    if (!formData.destination || !formData.duration || !formData.travelers) {
      toast({
        title: "Please fill all required fields",
        description: "Destination, duration, and number of travelers are required",
        variant: "destructive"
      });
      return;
    }

    // Create quote data for comparison page
    const quoteData = {
      insuranceType: "travel",
      name: formData.name || "Travel Insurance Customer",
      email: formData.email || "",
      phone: formData.phone || "",
      city: formData.city || "",
      destination: formData.destination,
      duration: formData.duration,
      travelers: formData.travelers,
      age: formData.age
    };

    // Store form data in localStorage for the comparison page
    localStorage.setItem('quoteFormData', JSON.stringify(quoteData));
    
    console.log("Navigating to compare page with travel insurance data");
    navigate('/compare');
    
    toast({
      title: "Comparing Travel Insurance Plans!",
      description: "Showing you the best travel insurance options..."
    });
  };

  const benefits = [
    { icon: Globe, title: "Worldwide Coverage", desc: "Protection in 150+ countries globally" },
    { icon: Shield, title: "Medical Emergency", desc: "Up to $100,000 medical coverage" },
    { icon: Clock, title: "24/7 Assistance", desc: "Round the clock emergency support" },
    { icon: Plane, title: "Trip Protection", desc: "Flight delays and cancellation coverage" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <Plane className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Travel Insurance
              <span className="block text-3xl md:text-4xl font-normal text-green-100 mt-2">
                Secure Your Journey Worldwide
              </span>
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Comprehensive travel protection for domestic and international trips with 24/7 support
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quote Form */}
        <Card className="mb-12 shadow-2xl border-0 -mt-20 relative z-10 bg-white">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center">
              <MapPin className="h-6 w-6 mr-2" />
              Get Your Travel Insurance Quote
            </CardTitle>
            <CardDescription className="text-green-100 text-center">
              Plan your trip with complete peace of mind
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleGetQuotes}>
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Destination *</label>
                  <Select value={formData.destination} onValueChange={(value) => setFormData({...formData, destination: value})} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="schengen">Schengen Countries</SelectItem>
                      <SelectItem value="usa">USA/Canada</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                      <SelectItem value="worldwide">Worldwide</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Trip Duration *</label>
                  <Select value={formData.duration} onValueChange={(value) => setFormData({...formData, duration: value})} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Trip length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">Up to 7 days</SelectItem>
                      <SelectItem value="15">Up to 15 days</SelectItem>
                      <SelectItem value="30">Up to 30 days</SelectItem>
                      <SelectItem value="90">Up to 90 days</SelectItem>
                      <SelectItem value="annual">Annual Multi-trip</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Travelers *</label>
                  <Input 
                    placeholder="Number of travelers" 
                    value={formData.travelers}
                    onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                    className="h-12"
                    required
                  />
                </div>
                
                <div className="flex items-end">
                  <Button 
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg font-semibold"
                  >
                    Compare Plans
                  </Button>
                </div>
              </div>

              {/* Optional Contact Details */}
              <div className="grid md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">Age</label>
                  <Input 
                    placeholder="Enter your age" 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
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
            Why Choose Travel Insurance?
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
      </div>
      
      <Footer />
    </div>
  );
};

export default TravelInsurance;
