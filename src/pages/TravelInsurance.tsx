
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Plane, MapPin, Calendar, Star } from "lucide-react";
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
      premium: "Rs. 8,500",
      coverage: "€30,000",
      features: ["Medical Emergency", "Trip Cancellation", "Baggage Loss", "Visa Support"],
      rating: 4.6,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Jubilee Global Travel",
      premium: "Rs. 12,000",
      coverage: "$50,000", 
      features: ["Worldwide Coverage", "Adventure Sports", "Business Travel", "24/7 Assistance"],
      rating: 4.8,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "TPL Hajj Umrah",
      premium: "Rs. 6,500",
      coverage: "$25,000",
      features: ["Pilgrimage Coverage", "Medical Treatment", "Flight Delay", "Lost Passport"],
      rating: 4.4,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl">
              <Plane className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Travel Insurance Plans
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Secure travel coverage for domestic and international trips with comprehensive protection
          </p>
        </div>

        {/* Quote Form */}
        <Card className="mb-12 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-green-500" />
              Get Travel Insurance Quote
            </CardTitle>
            <CardDescription>
              Plan your trip with complete peace of mind
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Destination</label>
                <Select value={formData.destination} onValueChange={(value) => setFormData({...formData, destination: value})}>
                  <SelectTrigger>
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
                  <SelectTrigger>
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
                />
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  Get Quotes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Travel Plans */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Popular Travel Plans
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                      <Plane className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{plan.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="text-center py-4">
                    <div className="text-2xl font-bold text-slate-900 mb-1">
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
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
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
