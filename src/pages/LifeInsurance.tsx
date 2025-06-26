
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, User, Shield, Users, Star, Heart, TrendingUp, Award } from "lucide-react";
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
      company: "EFU Life",
      premium: "Rs. 15,000",
      coverage: "Rs. 10,000,000",
      features: ["Pure Term Plan", "High Coverage", "Tax Benefits", "Online Application"],
      rating: 4.7,
      reviews: "3.1k",
      color: "from-purple-500 to-indigo-600",
      popular: false
    },
    {
      name: "Jubilee Family Protect",
      company: "Jubilee Life",
      premium: "Rs. 25,000",
      coverage: "Rs. 15,000,000", 
      features: ["Family Coverage", "Accidental Death", "Disability Benefit", "Premium Waiver"],
      rating: 4.8,
      reviews: "4.2k",
      color: "from-blue-500 to-blue-600",
      popular: true
    },
    {
      name: "State Life Savings",
      company: "State Life",
      premium: "Rs. 35,000",
      coverage: "Rs. 8,000,000",
      features: ["Investment Component", "Maturity Benefit", "Loan Facility", "Bonus Additions"],
      rating: 4.5,
      reviews: "2.8k",
      color: "from-green-500 to-emerald-600",
      popular: false
    }
  ];

  const benefits = [
    { icon: Shield, title: "Financial Security", desc: "Protect your family's financial future" },
    { icon: Heart, title: "Peace of Mind", desc: "Know your loved ones are protected" },
    { icon: TrendingUp, title: "Investment Growth", desc: "Build wealth while staying protected" },
    { icon: Award, title: "Tax Benefits", desc: "Save taxes under Section 80C" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <User className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Life Insurance
              <span className="block text-3xl md:text-4xl font-normal text-purple-100 mt-2">
                Secure Your Family's Future
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Comprehensive life coverage with flexible terms and competitive premiums
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quote Form */}
        <Card className="mb-12 shadow-2xl border-0 -mt-20 relative z-10 bg-white">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Users className="h-6 w-6 mr-2" />
              Get Your Life Insurance Quote
            </CardTitle>
            <CardDescription className="text-purple-100 text-center">
              Protect your loved ones with the right life insurance plan
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Age</label>
                <Input 
                  placeholder="Enter age" 
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Coverage Amount</label>
                <Select value={formData.coverage} onValueChange={(value) => setFormData({...formData, coverage: value})}>
                  <SelectTrigger className="h-12">
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
                  <SelectTrigger className="h-12">
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
                <Button className="w-full h-12 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-lg font-semibold">
                  Compare Plans
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Choose Life Insurance?
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

        {/* Life Insurance Plans */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Top Life Insurance Plans
            </h2>
            <p className="text-xl text-slate-600">
              Choose from term, whole life, and investment-linked policies
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

export default LifeInsurance;
