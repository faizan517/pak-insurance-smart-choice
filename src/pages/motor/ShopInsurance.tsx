import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, PawPrint, Stethoscope, AlertCircle, Syringe, Hourglass, HeartPulse, UploadCloud, Banknote, PhoneCall, ArrowBigRightDash, Shield } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const ShopInsurance = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const coverages = [
    { title: "Property & Contents Protection", description: "Covers shop structure, renovations, equipment, signboards, and stock.", icon: <Briefcase className="w-6 h-6 text-[#F46416]" /> },
    { title: "Package Options", description: "Two tiers: up to PKR 1,010,000 or PKR 2,020,000.", icon: <Banknote className="w-6 h-6 text-[#F46416]" /> },
    { title: "Business Interruption", description: "Loss of profit + extra costs: PKR 5,000–7,500/day.", icon: <UploadCloud className="w-6 h-6 text-[#F46416]" /> },
    { title: "Cash-in-Safe", description: "Covers cash theft/snatch up to PKR 10,000–20,000.", icon: <Banknote className="w-6 h-6 text-[#F46416]" /> },
    { title: "Personal Accident & Health", description: "Covers key staff: death & hospitalization.", icon: <Stethoscope className="w-6 h-6 text-[#F46416]" /> },
    { title: "Named Perils", description: "Fire, riot, explosion, earthquake, burglary, and more.", icon: <AlertCircle className="w-6 h-6 text-[#F46416]" /> },
    { title: "No Underinsurance & Single-Loss", description: "Full payout without deductions, per schedule.", icon: <Shield className="w-6 h-6 text-[#F46416]" /> },
  ];

  const keyFeatures = [
    { title: "Fast Claim Turnaround", description: "Surveyor in 24h, payouts in 7 working days.", icon: <Hourglass className="w-8 h-8 text-[#1D9785]" /> },
    { title: "Simple Documentation", description: "Online/offline claim, clear checklist.", icon: <UploadCloud className="w-8 h-8 text-[#1D9785]" /> },
    { title: "Comprehensive Support", description: "Guided claims assistance to minimize downtime.", icon: <PhoneCall className="w-8 h-8 text-[#1D9785]" /> },
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
                <Briefcase className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal font-[Ibrand] leading-tight">
              Shop Insurance Protect Your Business Premises
              <span className="block text-3xl md:text-3xl font-normal font-[Futura] text-blue-100 mt-4">
                Your shop is more than a workspace it’s your livelihood. Get covered for property, stock, and earnings.
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
                Coverages & Features
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
          Get Shop Insurance
          <ArrowBigRightDash className="h-7 w-7 ml-2" />
        </Button>
        <QuoteForm
          insuranceType="shop"
          insuranceTypeLabel="Shop Insurance"
          open={showQuoteForm}
          onOpenChange={setShowQuoteForm}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ShopInsurance;
