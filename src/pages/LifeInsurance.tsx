
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, User, Shield, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LifeInsurance = () => {
  const [formData, setFormData] = useState({
    age: "",
    coverage: "",
    term: "",
    income: ""
  });

  const plans = [
    {
      name: "EFU Term Life",
      premium: "Rs. 15,000",
      coverage: "Rs. 10,000,000",
      features: ["Pure Term Plan", "High Coverage", "Tax Benefits", "Online Application"],
      rating: 4.7,
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Jubilee Family Protect",
      premium: "Rs. 25,000",
      coverage: "Rs. 15,000,000", 
      features: ["Family Coverage", "Accidental Death", "Disability Benefit", "Premium Waiver"],
      rating: 4.8,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "State Life Savings",
      premium: "Rs. 35,000",
      coverage: "Rs. 8,000,000",
      features: ["Investment Component", "Maturity Benefit", "Loan Facility", "Bonus Additions"],
      rating: 4.5,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 rounded-2xl">
              <User className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Life Insurance Plans
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Secure your family's financial future with comprehensive life insurance coverage
          </p>
        </div>

        {/* Quote Form */}
        <Card className="mb-12 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Users className="h-6 w-6 mr-2 text-purple-500" />
              Get Life Insurance Quote
            </CardTitle>
            <CardDescription>
              Protect your loved ones with the right life insurance plan
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Coverage Amount</label>
                <Select value={formData.coverage} onValueChange={(value) => setFormData({...formData, coverage: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select coverage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5000000">Rs. 50 Lac</SelectItem>
                    <SelectItem value="10000000">Rs. 1 Crore</SelectItem>
                    <SelectItem value="20000000">Rs. 2 Crore</SelectItem>
                    <SelectItem value="50000000">Rs. 5 Crore</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Policy Term</label>
                <Select value={formData.term} onValueChange={(value) => setFormData({...formData, term: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 Years</SelectItem>
                    <SelectItem value="15">15 Years</SelectItem>
                    <SelectItem value="20">20 Years</SelectItem>
                    <SelectItem value="30">30 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                  Compare Plans
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Life Insurance Plans */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Top Life Insurance Plans
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
                  
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
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

export default LifeInsurance;
