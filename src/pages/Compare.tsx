
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Shield, Phone, Award, Clock, Users, Heart } from "lucide-react";
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

  // Health Insurance specific companies
  const healthInsuranceCompanies = [
    {
      name: "EFU Health Guard",
      company: "EFU Life Insurance",
      logo: "EFU",
      rating: 4.5,
      premium: "Rs. 25,000",
      originalPremium: "Rs. 30,000",
      discount: "17% Online Discount",
      coverage: "Rs. 500,000",
      features: [
        "Hospitalization Coverage",
        "OPD Benefits",
        "Maternity Coverage",
        "Emergency Services",
        "Pre & Post Hospitalization"
      ],
      highlights: ["Most Trusted"],
      color: "from-blue-500 to-blue-600",
      trustScore: 95
    },
    {
      name: "Jubilee Family Health",
      company: "Jubilee Life Insurance",
      logo: "JLI",
      rating: 4.7,
      premium: "Rs. 35,000",
      originalPremium: "Rs. 40,000",
      discount: "12% Family Discount",
      coverage: "Rs. 750,000",
      features: [
        "Family Coverage",
        "Pre-existing Conditions",
        "Ambulance Service",
        "Cashless Treatment",
        "Wellness Programs"
      ],
      highlights: ["Highest Rated", "Best Value"],
      color: "from-green-500 to-green-600",
      trustScore: 97
    },
    {
      name: "TPL Health Plus",
      company: "TPL Insurance",
      logo: "TPL",
      rating: 4.3,
      premium: "Rs. 22,000",
      originalPremium: "Rs. 25,000",
      discount: "12% Special Offer",
      coverage: "Rs. 400,000",
      features: [
        "Individual Plan",
        "Room Rent Coverage",
        "Surgery Coverage",
        "Medicine Allowance",
        "Diagnostic Coverage"
      ],
      highlights: ["Budget Friendly"],
      color: "from-red-500 to-pink-600",
      trustScore: 89
    },
    {
      name: "Adamjee Health Shield",
      company: "Adamjee Insurance",
      logo: "AIC",
      rating: 4.2,
      premium: "Rs. 28,000",
      originalPremium: "Rs. 32,000",
      discount: "13% New Customer",
      coverage: "Rs. 600,000",
      features: [
        "Comprehensive Protection",
        "Critical Illness Cover",
        "Medical Emergencies",
        "Specialist Consultations",
        "Health Check-ups"
      ],
      highlights: ["Comprehensive"],
      color: "from-purple-500 to-purple-600",
      trustScore: 91
    }
  ];

  // Generic insurance companies for other types
  const genericInsuranceCompanies = [
    {
      name: "EFU General Insurance",
      company: "EFU General",
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
      company: "Jubilee General",
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
      company: "TPL Insurance",
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
    }
  ];

  // Choose companies based on insurance type
  const getInsuranceCompanies = () => {
    if (formData?.insuranceType === 'individual-health' || formData?.insuranceType === 'group-health') {
      return healthInsuranceCompanies;
    }
    return genericInsuranceCompanies;
  };

  const insuranceCompanies = getInsuranceCompanies();

  const getInsuranceTypeDisplay = () => {
    if (formData?.insuranceType === 'individual-health') return 'Health Insurance';
    if (formData?.insuranceType === 'group-health') return 'Group Health Insurance';
    if (formData?.insuranceType === 'travel') return 'Travel Insurance';
    if (formData?.insuranceType === 'motor') return 'Motor Insurance';
    return formData?.insuranceType || 'Insurance';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] p-4 rounded-2xl">
              {formData?.insuranceType?.includes('health') ? (
                <Heart className="h-12 w-12 text-white" />
              ) : (
                <Shield className="h-12 w-12 text-white" />
              )}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#113040] mb-4">
            Compare {getInsuranceTypeDisplay()} Quotes
          </h1>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto">
            {formData ? `Hello ${formData.name || 'Customer'}! ` : ''}
            Here are the best {getInsuranceTypeDisplay().toLowerCase()} options from Pakistan's leading insurers
          </p>
          {formData && (
            <div className="mt-6 p-4 bg-white rounded-lg shadow-md inline-block">
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-[#1D9785]" />
                  <strong>Type:</strong> {getInsuranceTypeDisplay()}
                </span>
                {formData.age && (
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-[#1D9785]" />
                    <strong>Age:</strong> {formData.age}
                  </span>
                )}
                {formData.familyMembers && (
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-[#1D9785]" />
                    <strong>Members:</strong> {formData.familyMembers}
                  </span>
                )}
                {formData.city && (
                  <span className="flex items-center">
                    <strong>City:</strong> {formData.city}
                  </span>
                )}
              </div>
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
                <p className="text-sm text-[#888888] mb-2">{company.company}</p>
                
                <div className="flex items-center space-x-2 mb-4">
                  {company.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs text-[#1D9785] border-[#1D9785]">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-center py-4 bg-gradient-to-r from-[#1D9785]/10 to-[#2ABFAF]/10 rounded-lg">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {company.originalPremium && (
                      <span className="text-lg text-[#888888] line-through">
                        {company.originalPremium}
                      </span>
                    )}
                    <div className="text-3xl font-bold text-[#113040]">
                      {company.premium}
                    </div>
                  </div>
                  {company.coverage && (
                    <Badge className="bg-gradient-to-r from-[#0F6C4A] to-[#1D9785] text-white mb-2">
                      Coverage: {company.coverage}
                    </Badge>
                  )}
                  <div className="text-sm text-[#1D9785] font-medium">
                    {company.discount}
                  </div>
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
