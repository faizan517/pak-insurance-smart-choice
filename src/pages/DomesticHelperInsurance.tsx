import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Hospital, AlertTriangle, Stethoscope, Smile, ClipboardCheck, Baby, Wallet, Timer, MousePointerClick, LifeBuoy, ArrowBigRightDash } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const DomesticHelperInsurance = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const coverages = [
    { title: "Online Enrollment & Premium Payment", description: "Easy purchase and renewal via our digital platform or mobile app.", icon: <MousePointerClick className="w-6 h-6 text-[#F46416]" /> },
    { title: "In-Patient Hospitalization", description: "Coverage for room, boarding, ICU, and hospital expenses up to your selected limit.", icon: <Hospital className="w-6 h-6 text-[#F46416]" /> },
    { title: "Emergency Accidental Treatment", description: "Immediate cover for accidental injuries and emergency care.", icon: <AlertTriangle className="w-6 h-6 text-[#F46416]" /> },
    { title: "Pre & Post Hospitalization", description: "Expenses for 15 days before and after inpatient treatment.", icon: <Stethoscope className="w-6 h-6 text-[#F46416]" /> },
    { title: "Dental Treatment (Accidental Only)", description: "Pain relief dental care within 48 hours of an accident.", icon: <Smile className="w-6 h-6 text-[#F46416]" /> },
    { title: "Non-Panel Reimbursements", description: "Submit claims for non-network hospitals through the app—claims reimbursed seamlessly.", icon: <ClipboardCheck className="w-6 h-6 text-[#F46416]" /> },
    { title: "Maternity Benefits (Optional)", description: "Coverage for prenatal, delivery, and postnatal hospitalization costs.", icon: <Baby className="w-6 h-6 text-[#F46416]" /> },
    { title: "Annual Limit Options", description: "Choose from flexible sum-insured slabs per family or per person.", icon: <Wallet className="w-6 h-6 text-[#F46416]" /> },
  ];

  const keyFeatures = [
    { title: "7-Day Claim Settlement", description: "Quick reimbursement turnaround, once requirement is completed.", icon: <Timer className="w-8 h-8 text-[#1D9785]" /> },
    { title: "30-Second Claim Lodging", description: "File claims instantly online.", icon: <MousePointerClick className="w-8 h-8 text-[#1D9785]" /> },
    { title: "Offline Claim Support", description: "Assistance through offline channels if needed.", icon: <LifeBuoy className="w-8 h-8 text-[#1D9785]" /> },
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

              Domestic Helper Insurance Care for Your Household Team
              <span className="block text-3xl md:text-3xl font-normal font-[Futura] text-blue-100 mt-4">
                Ensure your household staff drivers, cooks, nannies, gardeners, and gatekeepers have the health protection they deserve.
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
          Get Domestic Helper Cover
          <ArrowBigRightDash className="h-7 w-7 ml-2" />

        </Button>
        <QuoteForm
          insuranceType="domestic-helper"
          insuranceTypeLabel="Domestic Helper Insurance"
          open={showQuoteForm}
          onOpenChange={setShowQuoteForm}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DomesticHelperInsurance;