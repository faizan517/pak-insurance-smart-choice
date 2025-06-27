
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Shield, Calculator, CheckCircle, Heart, Phone, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GroupHealthInsurance = () => {
  const [formData, setFormData] = useState({
    companySize: "",
    industry: "",
    employees: "",
    city: "",
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    existingPolicy: ""
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCompareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Group Health Insurance form submitted with data:", formData);
    
    if (!formData.companySize || !formData.employees || !formData.city) {
      toast({
        title: "Please fill all required fields",
        description: "Company size, number of employees, and city are required",
        variant: "destructive"
      });
      return;
    }

    // Create quote data for comparison page
    const quoteData = {
      insuranceType: "group-health",
      name: formData.contactPerson || formData.companyName || "Group Health Customer",
      email: formData.email || "",
      phone: formData.phone || "",
      city: formData.city,
      companySize: formData.companySize,
      industry: formData.industry,
      employees: formData.employees,
      companyName: formData.companyName,
      existingPolicy: formData.existingPolicy
    };

    // Store form data in localStorage for the comparison page
    localStorage.setItem('quoteFormData', JSON.stringify(quoteData));
    
    console.log("Navigating to compare page with group health insurance data");
    navigate('/compare');
    
    toast({
      title: "Comparing Group Health Insurance Plans!",
      description: "Showing you the best group health insurance options..."
    });
  };

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
              <span className="block text-3xl md:text-4xl font-normal text-purple-100 mt-2">
                Complete Health Coverage for Your Team
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Comprehensive health insurance solutions for organizations of all sizes
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quote Form */}
        <Card className="mb-12 shadow-2xl border-0 -mt-20 relative z-10 bg-white">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Calculator className="h-6 w-6 mr-2" />
              Get Your Group Health Insurance Quote
            </CardTitle>
            <CardDescription className="text-purple-100 text-center">
              Protect your employees with comprehensive health coverage
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleCompareSubmit}>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Size *</label>
                  <Select value={formData.companySize} onValueChange={(value) => setFormData({...formData, companySize: value})} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (2-50 employees)</SelectItem>
                      <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                      <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                      <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Number of Employees *</label>
                  <Input 
                    placeholder="Enter number of employees" 
                    value={formData.employees}
                    onChange={(e) => setFormData({...formData, employees: e.target.value})}
                    className="h-12"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">City *</label>
                  <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="karachi">Karachi</SelectItem>
                      <SelectItem value="lahore">Lahore</SelectItem>
                      <SelectItem value="islamabad">Islamabad</SelectItem>
                      <SelectItem value="faisalabad">Faisalabad</SelectItem>
                      <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
                  <Select value={formData.industry} onValueChange={(value) => setFormData({...formData, industry: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Existing Policy</label>
                  <Select value={formData.existingPolicy} onValueChange={(value) => setFormData({...formData, existingPolicy: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Do you have existing policy?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, we have existing policy</SelectItem>
                      <SelectItem value="no">No, this is our first policy</SelectItem>
                      <SelectItem value="expired">Had policy but expired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Company & Contact Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-8 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <Input 
                    placeholder="Enter company name" 
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Contact Person</label>
                  <Input 
                    placeholder="Enter contact person name" 
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter email address" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <Input 
                    placeholder="+92 300 1234567" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-lg font-semibold"
                >
                  Compare Group Plans
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

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
      </div>
      
      <Footer />
    </div>
  );
};

export default GroupHealthInsurance;
