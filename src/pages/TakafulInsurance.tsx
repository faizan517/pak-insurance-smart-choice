
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Shield, Star, Moon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TakafulInsurance = () => {
  const [formData, setFormData] = useState({
    type: "",
    age: "",
    amount: "",
    term: ""
  });

  const plans = [
    {
      name: "Pak Qatar Motor Takaful",
      premium: "Rs. 18,000",
      coverage: "Rs. 1,500,000",
      features: ["Shariah Compliant", "Own Damage", "Third Party", "Roadside Assistance"],
      rating: 4.6,
      color: "from-teal-500 to-cyan-600"
    },
    {
      name: "Family Takaful Plan",
      premium: "Rs. 28,000",
      coverage: "Rs. 10,000,000", 
      features: ["Life Protection", "Investment Growth", "Wakala Model", "Profit Sharing"],
      rating: 4.7,
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Travel Takaful Coverage",
      premium: "Rs. 9,500",
      coverage: "$30,000",
      features: ["Medical Emergency", "Baggage Protection", "Trip Cancellation", "Halal Food"],
      rating: 4.5,
      color: "from-blue-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 rounded-2xl">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Takaful Insurance Plans
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Shariah-compliant insurance solutions based on Islamic principles of mutual cooperation
          </p>
        </div>

        {/* Quote Form */}
        <Card className="mb-12 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Moon className="h-6 w-6 mr-2 text-teal-500" />
              Get Takaful Insurance Quote
            </CardTitle>
            <CardDescription>
              Choose from our Shariah-compliant insurance products
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Takaful Type</label>
                <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="motor">Motor Takaful</SelectItem>
                    <SelectItem value="family">Family Takaful</SelectItem>
                    <SelectItem value="travel">Travel Takaful</SelectItem>
                    <SelectItem value="general">General Takaful</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Age</label>
                <Input 
                  placeholder="Enter age" 
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Coverage Amount</label>
                <Select value={formData.amount} onValueChange={(value) => setFormData({...formData, amount: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500000">Rs. 5 Lac</SelectItem>
                    <SelectItem value="1000000">Rs. 10 Lac</SelectItem>
                    <SelectItem value="2000000">Rs. 20 Lac</SelectItem>
                    <SelectItem value="5000000">Rs. 50 Lac</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700">
                  Get Quotes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Takaful Plans */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Shariah-Compliant Plans
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                      <Shield className="h-8 w-8 text-white" />
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
                  
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700">
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

export default TakafulInsurance;
