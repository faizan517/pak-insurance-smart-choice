import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PawPrint, Stethoscope, AlertCircle, Syringe, Hourglass, HeartPulse, UploadCloud, Banknote, PhoneCall, ArrowBigRightDash } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const PetInsurance = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const coverages = [
    { title: "Age Eligibility", description: "Cats & dogs aged 8 weeks to 8 years.", icon: <PawPrint className="w-6 h-6 text-[#F46416]" /> },
    { title: "Illness Benefits", description: "Treatment during hospitalization including CT, MRI, cancer care, and therapies.", icon: <Stethoscope className="w-6 h-6 text-[#F46416]" /> },
    { title: "Accident Benefits", description: "Covers fractures, wound treatment, burns, and emergency care.", icon: <AlertCircle className="w-6 h-6 text-[#F46416]" /> },
    { title: "Non-Accidental Treatment", description: "IV fluids, medications, and alternative therapies.", icon: <Syringe className="w-6 h-6 text-[#F46416]" /> },
    { title: "Waiting Periods", description: "30 days for illnesses, 3 months for orthopedic issues.", icon: <Hourglass className="w-6 h-6 text-[#F46416]" /> },
    { title: "Wellness Add-Ons", description: "Optional check-ups and preventive care packages.", icon: <HeartPulse className="w-6 h-6 text-[#F46416]" /> },
  ];

  const keyFeatures = [
    { title: "Digital Claims", description: "Submit and track claims online in under 30 seconds.", icon: <UploadCloud className="w-8 h-8 text-[#1D9785]" /> },
    { title: "Fast Payouts", description: "Claims settled within 7 days after completion.", icon: <Banknote className="w-8 h-8 text-[#1D9785]" /> },
    { title: "Comprehensive Support", description: "24/7 helpline for veterinary help and inquiries.", icon: <PhoneCall className="w-8 h-8 text-[#1D9785]" /> },
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
                <PawPrint className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal font-[Ibrand] leading-tight">
              Pet Insurance Protect Your Furry Family Members
              <span className="block text-3xl md:text-3xl font-normal font-[Futura] text-blue-100 mt-4">
                Give your pets the care they deserve with specialized veterinary coverage
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
          Get Pet Insurance
          <ArrowBigRightDash className="h-7 w-7 ml-2" />
        </Button>
        <QuoteForm
          insuranceType="pet"
          insuranceTypeLabel="Pet Insurance"
          open={showQuoteForm}
          onOpenChange={setShowQuoteForm}
        />
      </div>
      <Footer />
    </div>
  );
};

export default PetInsurance;
