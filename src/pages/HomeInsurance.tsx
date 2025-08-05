import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Shield, Building2, UsersRound, Timer, MousePointerClick, PhoneCall, ArrowBigRightDash } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const HomeInsurance = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const coverages = [
    { title: "Home Owner Protection", description: "Safeguard your property and contents from accidental damage, fire, theft, and natural disasters.", icon: <Shield className="w-6 h-6 text-[#F46416]" /> },
    { title: "Landlord Coverage", description: "Ensure your rental property's safety with comprehensive protection for structure, liability, and tenant defaults.", icon: <Building2 className="w-6 h-6 text-[#F46416]" /> },
    { title: "Tenant Shield", description: "Keep your rented space secure—coverage for personal belongings, liability, and rent loss.", icon: <UsersRound className="w-6 h-6 text-[#F46416]" /> },
  ];

  const keyFeatures = [
    { title: "7-Day Claim Settlement", description: "Fast-track processing for prompt reimbursements.", icon: <Timer className="w-8 h-8 text-[#1D9785]" /> },
    { title: "30-Second Claim Filing", description: "Quick, simple online claim submission.", icon: <MousePointerClick className="w-8 h-8 text-[#1D9785]" /> },
    { title: "End-to-End Digital Experience", description: "Manage policies, file claims, and track status entirely online.", icon: <PhoneCall className="w-8 h-8 text-[#1D9785]" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <section className="relative bg-gradient-to-r from-[#113040] to-[#2ABFAF] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <Home className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal font-[Ibrand] leading-tight">
              Home Insurance More Than Just a Policy
              <span className="block text-3xl md:text-3xl font-normal font-[Futura] text-blue-100 mt-4">
                We protect your sanctuary of memories and dreams against accidents, disasters, and the unexpected.
              </span>
            </h1>
          </div>
        </div>
      </section>

      <main className="flex-grow w-full py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-16 w-full max-w-6xl mx-auto">
            <section>
              <h3 className="text-3xl font-normal text-[#113040] mb-10 font-[Ibrand] text-center">
                Key Coverages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coverages.map((cov, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    <div className="flex flex-col font-[Futura] items-center text-center space-y-4">
                      <div className="p-3 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                        {cov.icon}
                      </div>
                      <div>
                        <h4 className="font-normal text-[#113040] mb-2 text-lg font-[Ibrand]">{cov.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{cov.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-normal font-[Ibrand] text-[#113040] mb-10 text-center">
                Customer Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {keyFeatures.map((f, idx) => (
                  <Card key={idx} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-teal-50 rounded-full group-hover:bg-teal-100 transition-colors">
                          {f.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-normal font-[Ibrand] text-[#113040] mb-4">{f.title}</h4>
                      <p className="text-gray-600 font-[Futura] leading-relaxed">{f.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <div className="py-8">
        <Button
          onClick={() => setShowQuoteForm(true)}
          className="font-[Ibrand] bg-[#1D9785] text-white text-xl font-normal px-16 py-6 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-3 mx-auto"
        >
          Get Home Insurance
          <ArrowBigRightDash className="h-7 w-7 ml-2" />
        </Button>
        <QuoteForm
          insuranceType="home"
          insuranceTypeLabel="Home Insurance"
          open={showQuoteForm}
          onOpenChange={setShowQuoteForm}
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomeInsurance;
