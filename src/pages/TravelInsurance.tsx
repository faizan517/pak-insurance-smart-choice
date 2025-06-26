
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Plane, MapPin, Calendar, Star, Shield, Globe, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TravelInsurance = () => {
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    travelers: "",
    age: ""
  });

  const plans = [
    {
      name: "EFU Schengen Visa",
      company: "EFU General",
      premium: "Rs. 8,500",
      coverage: "€30,000",
      features: ["Medical Emergency", "Trip Cancellation", "Baggage Loss", "Visa Support"],
      rating: 4.6,
      reviews: "1.9k",
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      name: "Jubilee Global Travel",
      company: "Jubilee General",
      premium: "Rs. 12,000",
      coverage: "$50,000", 
      features: ["Worldwide Coverage", "Adventure Sports", "Business Travel", "24/7 Assistance"],
      rating: 4.8,
      reviews: "2.7k",
      color: "from-green-500 to-emerald-600",
      popular: true
    },
    {
      name: "TPL Hajj Umrah",
      company: "TPL Insurance",
      premium: "Rs. 6,500",
      coverage: "$25,000",
      features: ["Pilgrimage Coverage", "Medical Treatment", "Flight Delay", "Lost Passport"],
      rating: 4.4,
      reviews: "1.5k",
      color: "from-purple-500 to-indigo-600",
      popular: false
    }
  ];

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
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Destination</label>
                <Select value={formData.destination} onValueChange={(value) => setFormData({...formData, destination: value})}>
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Trip Duration</label>
                <Select value={formData.duration} onValueChange={(value) => setFormData({...formData, duration: value})}>
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Travelers</label>
                <Input 
                  placeholder="Number of travelers" 
                  value={formData.travelers}
                  onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                  className="h-12"
                />
              </div>
              
              <div className="flex items-end">
                <Button className="w-full h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg font-semibold">
                  Get Quotes
                </Button>
              </div>
            </div>
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

        {/* Travel Plans */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Popular Travel Plans
            </h2>
            <p className="text-xl text-slate-600">
              Choose the perfect plan for your destination and travel needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 hover:bg-green-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                      <Plane className="h-8 w-8 text-white" />
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

export default TravelInsurance;
