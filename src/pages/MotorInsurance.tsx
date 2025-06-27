
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Car, Shield, CheckCircle, Star, Phone, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MotorInsurance = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    make: "",
    model: "",
    year: "",
    engine: "",
    city: "",
    previousClaims: "",
    coverageType: "",
    name: "",
    email: "",
    phone: ""
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const carMakes = [
    "Toyota", "Honda", "Suzuki", "Hyundai", "KIA", "Nissan", "Mitsubishi", "Mercedes", "BMW", "Audi"
  ];

  const cities = [
    "Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi", "Multan", "Peshawar", "Quetta"
  ];

  const handleGetQuotes = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Motor Insurance form submitted with data:", formData);
    
    if (!formData.vehicleType || !formData.make || !formData.city) {
      toast({
        title: "Please fill all required fields",
        description: "Vehicle type, make, and city are required",
        variant: "destructive"
      });
      return;
    }

    // Create quote data for comparison page
    const quoteData = {
      insuranceType: "motor",
      name: formData.name || "Motor Insurance Customer",
      email: formData.email || "",
      phone: formData.phone || "",
      city: formData.city,
      vehicleType: formData.vehicleType,
      make: formData.make,
      model: formData.model,
      year: formData.year,
      engine: formData.engine,
      coverageType: formData.coverageType,
      previousClaims: formData.previousClaims
    };

    // Store form data in localStorage for the comparison page
    localStorage.setItem('quoteFormData', JSON.stringify(quoteData));
    
    console.log("Navigating to compare page with motor insurance data");
    navigate('/compare');
    
    toast({
      title: "Comparing Motor Insurance Plans!",
      description: "Showing you the best motor insurance options..."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-2xl">
              <Car className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Motor Insurance
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Protect your vehicle with comprehensive motor insurance from Pakistan's leading insurers. 
            Compare quotes instantly and get coverage in minutes.
          </p>
        </div>

        {/* Quote Form */}
        <Card className="mb-12 shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <Calculator className="h-6 w-6 mr-2" />
              Get Your Motor Insurance Quote
            </CardTitle>
            <CardDescription className="text-blue-100">
              Fill in your vehicle details to get personalized quotes from multiple insurers
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleGetQuotes}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Vehicle Type *</label>
                  <Select value={formData.vehicleType} onValueChange={(value) => setFormData({...formData, vehicleType: value})} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">Car</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="pickup">Pickup Truck</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Make *</label>
                  <Select value={formData.make} onValueChange={(value) => setFormData({...formData, make: value})} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select make" />
                    </SelectTrigger>
                    <SelectContent>
                      {carMakes.map((make) => (
                        <SelectItem key={make} value={make.toLowerCase()}>{make}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Model Year</label>
                  <Input 
                    placeholder="e.g., 2020" 
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Engine (CC)</label>
                  <Input 
                    placeholder="e.g., 1300" 
                    value={formData.engine}
                    onChange={(e) => setFormData({...formData, engine: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">City *</label>
                  <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city.toLowerCase()}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Coverage Type</label>
                  <Select value={formData.coverageType} onValueChange={(value) => setFormData({...formData, coverageType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select coverage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comprehensive">Comprehensive</SelectItem>
                      <SelectItem value="thirdparty">Third Party Only</SelectItem>
                      <SelectItem value="thirdpartyfire">Third Party + Fire & Theft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Previous Claims</label>
                  <Select value={formData.previousClaims} onValueChange={(value) => setFormData({...formData, previousClaims: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Claims history" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Claims</SelectItem>
                      <SelectItem value="1">1 Claim</SelectItem>
                      <SelectItem value="2">2 Claims</SelectItem>
                      <SelectItem value="3+">3+ Claims</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Optional Contact Details */}
              <div className="grid md:grid-cols-3 gap-4 mb-8 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <Input 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <Input 
                    placeholder="+92 300 1234567" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit"
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-12"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Compare Plans
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Choose Motor Insurance with ezee insure?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Comprehensive Coverage</h3>
                <p className="text-slate-600">Protection against accidents, theft, fire, and natural disasters</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Policy Issuance</h3>
                <p className="text-slate-600">Get your digital policy certificate immediately after payment</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Claims Support</h3>
                <p className="text-slate-600">Round-the-clock assistance for claims and roadside emergencies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MotorInsurance;
