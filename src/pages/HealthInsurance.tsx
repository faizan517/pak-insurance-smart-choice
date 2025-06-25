
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Heart, Users, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HealthInsurance = () => {
  const [formData, setFormData] = useState({
    age: "",
    coverage: "",
    members: "",
    preExisting: ""
  });

  const plans = [
    {
      name: "EFU Health Guard",
      premium: "Rs. 25,000",
      coverage: "Rs. 500,000",
      features: ["Hospitalization", "OPD Coverage", "Maternity", "Emergency"],
      rating: 4.5,
      color: "from-red-500 to-pink-600"
    },
    {
      name: "Jubilee Family Health",
      premium: "Rs. 35,000", 
      coverage: "Rs. 750,000",
      features: ["Family Coverage", "Pre-existing Conditions", "Ambulance", "Cashless Treatment"],
      rating: 4.7,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "TPL Health Plus",
      premium: "Rs. 22,000",
      coverage: "Rs. 400,000", 
      features: ["Individual Plan", "Room Rent", "Surgery Coverage", "Medicine"],
      rating: 4.3,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-red-500 to-pink-600 p-4 rounded-2xl">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Health Insurance Plans
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive health coverage for you and your family with cashless treatment and nationwide network
          </p>
        </div>

        {/* Quote Form */}
        <Card className="mb-12 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Users className="h-6 w-6 mr-2 text-red-500" />
              Get Health Insurance Quote
            </CardTitle>
            <CardDescription>
              Tell us about your health insurance needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Age</label>
                <Input 
                  placeholder="Enter age" 
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Coverage Type</label>
                <Select value={formData.coverage} onValueChange={(value) => setFormData({...formData, coverage: value})}>
                  <SelectTrigger>
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Family Members</label>
                <Select value={formData.members} onValueChange={(value) => setFormData({...formData, members: value})}>
                  <SelectTrigger>
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
                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700">
                  Compare Plans
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Plans */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Available Health Plans
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
                      {plan.premium}/year
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
                  
                  <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700">
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
