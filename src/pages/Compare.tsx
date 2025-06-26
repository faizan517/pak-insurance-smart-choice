
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Star, Shield, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Compare = () => {
  const [insuranceType, setInsuranceType] = useState("motor");
  
  const mockQuotes = [
    {
      insurer: "Jubilee General Insurance",
      logo: "JGI",
      premium: "Rs. 15,500",
      rating: 4.5,
      features: ["Third Party Coverage", "Own Damage", "24/7 Claims", "Roadside Assistance"],
      discount: "10% Online Discount",
      color: "from-blue-500 to-blue-600"
    },
    {
      insurer: "EFU General Insurance", 
      logo: "EFU",
      premium: "Rs. 14,200",
      rating: 4.3,
      features: ["Comprehensive Coverage", "Natural Disasters", "Theft Protection", "Free Towing"],
      discount: "15% First Year Discount",
      color: "from-green-500 to-green-600"
    },
    {
      insurer: "TPL Insurance",
      logo: "TPL", 
      premium: "Rs. 16,800",
      rating: 4.6,
      features: ["Zero Depreciation", "Accident Forgiveness", "Premium Support", "Quick Claims"],
      discount: "5% Loyalty Discount",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Compare Insurance Quotes
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Find the best insurance coverage at the most competitive prices from Pakistan's leading insurers
          </p>
        </div>

        {/* Quote Form */}
        <Card className="mb-12 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl">Get Your Quotes</CardTitle>
            <CardDescription>
              Fill in your details to compare personalized quotes from multiple insurers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Insurance Type</label>
                <Select value={insuranceType} onValueChange={setInsuranceType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="motor">Motor Insurance</SelectItem>
                    <SelectItem value="health">Health Insurance</SelectItem>
                    <SelectItem value="travel">Travel Insurance</SelectItem>
                    <SelectItem value="life">Life Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Age</label>
                <Input placeholder="Enter your age" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="karachi">Karachi</SelectItem>
                    <SelectItem value="lahore">Lahore</SelectItem>
                    <SelectItem value="islamabad">Islamabad</SelectItem>
                    <SelectItem value="faisalabad">Faisalabad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Compare Quotes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Results */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Your Personalized Quotes
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {mockQuotes.map((quote, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
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
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {quote.premium}
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
                      Buy Now
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

        {/* Why Choose Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Why Compare with ezee insure?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Unbiased Comparison</h3>
              <p className="text-slate-600">We show you all available options without any bias towards specific insurers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Real-Time Quotes</h3>
              <p className="text-slate-600">All quotes are fetched in real-time directly from insurer systems</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Support</h3>
              <p className="text-slate-600">Our insurance experts are available to help you make the right choice</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Compare;
