
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Car, Shield, CheckCircle, Star, Phone, Calculator } from "lucide-react";
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
    coverageType: ""
  });

  const [showQuotes, setShowQuotes] = useState(false);

  const carMakes = [
    "Toyota", "Honda", "Suzuki", "Hyundai", "KIA", "Nissan", "Mitsubishi", "Mercedes", "BMW", "Audi"
  ];

  const cities = [
    "Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi", "Multan", "Peshawar", "Quetta"
  ];

  const mockQuotes = [
    {
      insurer: "Jubilee General Insurance",
      logo: "JGI",
      premium: "Rs. 15,500",
      originalPremium: "Rs. 17,200",
      discount: "10% Online Discount",
      rating: 4.5,
      features: ["Third Party Coverage", "Own Damage Protection", "24/7 Claims Support", "Roadside Assistance"],
      color: "from-blue-500 to-blue-600"
    },
    {
      insurer: "EFU General Insurance",
      logo: "EFU", 
      premium: "Rs. 14,200",
      originalPremium: "Rs. 16,700",
      discount: "15% First Year Discount",
      rating: 4.3,
      features: ["Comprehensive Coverage", "Natural Disasters", "Theft Protection", "Free Towing Service"],
      color: "from-green-500 to-green-600"
    },
    {
      insurer: "TPL Insurance",
      logo: "TPL",
      premium: "Rs. 16,800", 
      originalPremium: "Rs. 18,500",
      discount: "8% Multi-Policy Discount",
      rating: 4.6,
      features: ["Zero Depreciation", "Accident Forgiveness", "Premium Support", "Quick Claims Settlement"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const handleGetQuotes = () => {
    if (formData.vehicleType && formData.make && formData.city) {
      setShowQuotes(true);
    }
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Vehicle Type</label>
                <Select value={formData.vehicleType} onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Make</label>
                <Select value={formData.make} onValueChange={(value) => setFormData({...formData, make: value})}>
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

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
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

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-12"
                onClick={handleGetQuotes}
              >
                <Calculator className="h-5 w-5 mr-2" />
                Get Instant Quotes
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quotes Results */}
        {showQuotes && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Your Motor Insurance Quotes
              </h2>
              <p className="text-slate-600">
                Compare these personalized quotes and choose the best coverage for your vehicle
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {mockQuotes.map((quote, index) => (
                <Card key={index} className="relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  {index === 1 && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white z-10">
                      Best Value
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${quote.color} flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{quote.logo}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{quote.rating}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {quote.insurer}
                    </CardTitle>
                    
                    <div className="text-center py-4">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-lg text-slate-500 line-through">{quote.originalPremium}</span>
                        <span className="text-3xl font-bold text-slate-900">{quote.premium}</span>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {quote.discount}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {quote.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                        Buy Now - {quote.premium}
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Call for Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Choose Motor Insurance with Smart Choice?
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
