
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Shield, Phone, Award, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Compare = () => {
  const [formData, setFormData] = useState<any>(null);
  
  useEffect(() => {
    const storedData = localStorage.getItem('quoteFormData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const insuranceCompanies = [
    {
      name: "EFU General Insurance",
      logo: "EFU",
      rating: 4.5,
      premium: "Rs. 12,500",
      originalPremium: "Rs. 15,000",
      discount: "20% Online Discount",
      features: [
        "Comprehensive Coverage",
        "24/7 Customer Support",
        "Fast Claim Settlement",
        "Nationwide Network",
        "Digital Policy Management"
      ],
      highlights: ["Best Value", "Popular Choice"],
      color: "from-blue-500 to-blue-600",
      trustScore: 95
    },
    {
      name: "Jubilee General Insurance",
      logo: "JGI",
      rating: 4.3,
      premium: "Rs. 14,200",
      originalPremium: "Rs. 16,500",
      discount: "15% First Year Discount",
      features: [
        "Third Party Coverage",
        "Own Damage Protection",
        "Roadside Assistance",
        "Free Towing Service",
        "Emergency Support"
      ],
      highlights: ["Trusted Brand"],
      color: "from-green-500 to-green-600",
      trustScore: 92
    },
    {
      name: "TPL Insurance",
      logo: "TPL",
      rating: 4.6,
      premium: "Rs. 13,800",
      originalPremium: "Rs. 15,800",
      discount: "12% Loyalty Discount",
      features: [
        "Zero Depreciation",
        "Accident Forgiveness",
        "Premium Support",
        "Quick Claims Processing",
        "Mobile App Access"
      ],
      highlights: ["Highest Rated"],
      color: "from-purple-500 to-purple-600",
      trustScore: 97
    },
    {
      name: "Adamjee Insurance",
      logo: "AIC",
      rating: 4.1,
      premium: "Rs. 15,600",
      originalPremium: "Rs. 17,200",
      discount: "10% Corporate Discount",
      features: [
        "Comprehensive Protection",
        "Personal Accident Cover",
        "Medical Expenses",
        "Legal Liability",
        "Workshop Network"
      ],
      highlights: ["Established Leader"],
      color: "from-orange-500 to-red-500",
      trustScore: 89
    },
    {
      name: "United Insurance",
      logo: "UIC",
      rating: 4.4,
      premium: "Rs. 13,200",
      originalPremium: "Rs. 15,500",
      discount: "18% Special Offer",
      features: [
        "Motor Insurance",
        "Personal Accident",
        "Theft Protection",
        "Fire & Natural Disasters",
        "Third Party Liability"
      ],
      highlights: ["Great Savings"],
      color: "from-teal-500 to-cyan-500",
      trustScore: 91
    },
    {
      name: "Pak Qatar Takaful",
      logo: "PQT",
      rating: 4.2,
      premium: "Rs. 14,500",
      originalPremium: "Rs. 16,800",
      discount: "14% Takaful Discount",
      features: [
        "Shariah Compliant",
        "Takaful Benefits",
        "Ethical Investment",
        "Community Support",
        "Transparent Process"
      ],
      highlights: ["Shariah Compliant"],
      color: "from-emerald-500 to-green-600",
      trustScore: 90
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#113040] mb-4">
            Compare Insurance Quotes
          </h1>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto">
            {formData ? `Hello ${formData.name}! ` : ''}
            Here are the best insurance options from Pakistan's leading insurers
          </p>
          {formData && (
            <div className="mt-4 text-sm text-[#888888]">
              Insurance Type: <span className="font-semibold text-[#1D9785]">{formData.insuranceType}</span>
              {formData.city && ` • Location: ${formData.city}`}
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-[#1D9785] mx-auto mb-2" />
            <h3 className="font-semibold text-[#113040]">Verified Insurers</h3>
            <p className="text-sm text-[#888888]">All companies are SECP registered</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Award className="h-8 w-8 text-[#F46416] mx-auto mb-2" />
            <h3 className="font-semibold text-[#113040]">Best Rates</h3>
            <p className="text-sm text-[#888888]">Guaranteed competitive pricing</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Clock className="h-8 w-8 text-[#4CB2E1] mx-auto mb-2" />
            <h3 className="font-semibold text-[#113040]">Instant Quotes</h3>
            <p className="text-sm text-[#888888]">Real-time pricing from insurers</p>
          </div>
        </div>

        {/* Insurance Companies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {insuranceCompanies.map((company, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              {company.highlights.includes("Best Value") && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#F46416] to-[#2ABFAF] text-white z-10">
                  Best Value
                </Badge>
              )}
              {company.highlights.includes("Highest Rated") && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#1D9785] to-[#0F6C4A] text-white z-10">
                  Highest Rated
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${company.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{company.logo}</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{company.rating}</span>
                    </div>
                    <div className="text-xs text-[#888888]">Trust Score: {company.trustScore}%</div>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-[#113040] mb-2">
                  {company.name}
                </CardTitle>
                
                <div className="flex items-center space-x-2 mb-2">
                  {company.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs text-[#1D9785] border-[#1D9785]">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-center py-4 bg-gradient-to-r from-[#1D9785]/10 to-[#2ABFAF]/10 rounded-lg">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    {company.originalPremium && (
                      <span className="text-lg text-[#888888] line-through">
                        {company.originalPremium}
                      </span>
                    )}
                    <div className="text-3xl font-bold text-[#113040]">
                      {company.premium}
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-[#0F6C4A] to-[#1D9785] text-white">
                    {company.discount}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2 mb-6">
                  {company.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#1D9785]" />
                      <span className="text-sm text-[#333333]">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <Button className={`w-full bg-gradient-to-r ${company.color} hover:opacity-90 shadow-lg`}>
                    Buy Now - Save {company.discount.split(' ')[0]}
                  </Button>
                  <Button variant="outline" className="w-full border-[#1D9785] text-[#1D9785] hover:bg-[#1D9785]/10">
                    <Phone className="h-4 w-4 mr-2" />
                    Call for Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Ezee Insure */}
        <div className="mt-20 text-center bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-[#113040] mb-8">
            Why Compare with Ezee Insure?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#113040] to-[#1D9785] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#113040] mb-2">Unbiased Comparison</h3>
              <p className="text-[#333333]">We show you all available options without any bias towards specific insurers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#113040] mb-2">Real-Time Quotes</h3>
              <p className="text-[#333333]">All quotes are fetched in real-time directly from insurer systems</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#F46416] to-[#4CB2E1] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#113040] mb-2">Expert Support</h3>
              <p className="text-[#333333]">Our insurance experts are available to help you make the right choice</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Compare;
