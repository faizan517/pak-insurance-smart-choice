import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeartPulse, Hospital, Ambulance, Microscope, Clock4, Baby, Landmark, LayoutList, PhoneCall, ArrowBigRightDash, Biohazard } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const HealthInsurance = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const coverages = [
    { title: "Annual Hospitalization Limits", description: "Choose from PKR 100,000 up to PKR 650,000 per person.", icon: <Hospital className="w-6 h-6 text-[#F46416]" /> },
    { title: "Daily Room & Board", description: "Up to PKR 20,000 per day.", icon: <LayoutList className="w-6 h-6 text-[#F46416]" /> },
    { title: "Sub-Limits", description: "Emergency treatment, ambulance, daycare surgeries, diagnostic scans.", icon: <Ambulance className="w-6 h-6 text-[#F46416]" /> },
    { title: "Specialized Investigations & Daycare", description: "MRI, CT scans, endoscopy, dialysis, cataract (IOL up to PKR 25,000).", icon: <Microscope className="w-6 h-6 text-[#F46416]" /> },
    { title: "Pre & Post Hospitalization", description: "30 days before and after hospitalization covered.", icon: <Clock4 className="w-6 h-6 text-[#F46416]" /> },
    { title: "Maternity & Newborn Care", description: "Optional add-on covering prenatal to newborn expenses.", icon: <Baby className="w-6 h-6 text-[#F46416]" /> },
    { title: "COVID-19 Coverage", description: "Included for fully vaccinated members.", icon: <Biohazard className="w-6 h-6 text-[#F46416]" /> },
    { title: "Network Access", description: "Cashless treatment at 230+ panel hospitals in Pakistan.", icon: <Landmark className="w-6 h-6 text-[#F46416]" /> },
  ];

  const keyFeatures = [
    { title: "Multiple Plan Tiers", description: "Multiple plans to match your budget and coverage needs.", icon: <LayoutList className="w-8 h-8 text-[#1D9785]" /> },
    { title: "24/7 Medical Helpline", description: "Expert guidance anytime.", icon: <PhoneCall className="w-8 h-8 text-[#1D9785]" /> },
    { title: "Digital Policy Management", description: "Download cards and policy docs within 15 days.", icon: <Landmark className="w-8 h-8 text-[#1D9785]" /> },
    { title: "Fast Claims", description: "File online and get reimbursed in 7 days.", icon: <Clock4 className="w-8 h-8 text-[#1D9785]" /> },
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
                <HeartPulse className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal font-[Ibrand] leading-tight">
              Individual & Family Health Insurance
              <span className="block text-3xl md:text-3xl font-normal font-[Futura] text-blue-100 mt-4">
                Secure health coverage for yourself and loved ones with customizable plans
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
                Plan Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          Explore Individual Plans
          <ArrowBigRightDash className="h-7 w-7 ml-2" />
        </Button>
        <QuoteForm
          insuranceType="individual-health"
          insuranceTypeLabel="Individual & Family Health Insurance"
          open={showQuoteForm}
          onOpenChange={setShowQuoteForm}
        />
      </div>
      <Footer />
    </div>
  );
};

export default HealthInsurance;
