import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hospital, Stethoscope, ShieldCheck, AlertTriangle, HeartPulse, Syringe, HeartHandshake, ClipboardList, CheckCircle2, Phone, ArrowBigRightDash } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import GroupHealthQuoteForm from "@/components/GroupHealthQuoteForm";

const GroupHealthInsurance = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const coverages = [
    { title: "In-Patient Hospitalization", description: "Coverage for room, boarding, ICU, and hospital expenses.", icon: <Hospital className="w-6 h-6 text-[#F46416]" /> },
    { title: "Major Medical Insurance", description: "High-limit protection for critical illnesses and surgeries.", icon: <ShieldCheck className="w-6 h-6 text-[#F46416]" /> },
    { title: "Daycare Procedures & Surgeries", description: "Benefits for treatments not requiring an overnight stay.", icon: <Syringe className="w-6 h-6 text-[#F46416]" /> },
    { title: "Specialized Investigations in OPD", description: "Diagnostics coverage for MRIs, CT scans, and much more.", icon: <ClipboardList className="w-6 h-6 text-[#F46416]" /> },
    { title: "Emergency Accidental Treatment", description: "Immediate care for accidental injuries.", icon: <AlertTriangle className="w-6 h-6 text-[#F46416]" /> },
    { title: "Out-Patient (OPD) Services", description: "Optional coverage for clinic visits and doctor consultations.", icon: <Stethoscope className="w-6 h-6 text-[#F46416]" /> },
    { title: "Pre & Post Hospitalization", description: "Expenses before and after inpatient treatment.", icon: <ClipboardList className="w-6 h-6 text-[#F46416]" /> },
    { title: "Maternity Benefits", description: "Coverage for pregnancy and childbirth-related costs.", icon: <HeartPulse className="w-6 h-6 text-[#F46416]" /> },
    { title: "Non-Accidental Medical Emergencies", description: "Emergency treatments for sudden illnesses.", icon: <AlertTriangle className="w-6 h-6 text-[#F46416]" /> },
    { title: "Wellness Programs", description: "Annual health screenings, preventive care, and telehealth access.", icon: <HeartHandshake className="w-6 h-6 text-[#F46416]" /> },
  ];

  const keyFeatures = [
    { title: "Custom Benefit Design", description: "Choose add-ons like dental, wellness, and OPD coverage.", icon: <ClipboardList className="w-8 h-8 text-[#1D9785]" /> },
    { title: "Dedicated HR Portal", description: "Manage members, access reports, and download policy documents.", icon: <CheckCircle2 className="w-8 h-8 text-[#1D9785]" /> },
    { title: "Hassle-Free Claims", description: "From submission to payout.", icon: <Phone className="w-8 h-8 text-[#1D9785]" /> },
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
                <Hospital className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal font-[Ibrand] leading-tight">
              Group Health Insurance in Pakistan
              <span className="block text-3xl md:text-3xl font-normal font-[Futura] text-blue-100 mt-4">
                Protect your employees with comprehensive medical and wellness coverage
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
                Coverages
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
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    Get a Group Health Quote
    <ArrowBigRightDash className="h-7 w-7 ml-2" />
  </Button>

  <Dialog open={showQuoteForm} onOpenChange={setShowQuoteForm}>
  <DialogContent className="w-full max-w-screen-md mx-auto p-0 rounded-2xl max-h-[90vh] overflow-y-auto">
    <div className="relative">
      {/* Close button */}
      <button
        onClick={() => setShowQuoteForm(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        {/* <X className="w-6 h-6" /> */}
      </button>

      {/* Your form */}
      <GroupHealthQuoteForm onSubmit={() => setShowQuoteForm(false)} />
    </div>
  </DialogContent>
</Dialog>

</div>

      <Footer />
    </div>
  );
};

export default GroupHealthInsurance;
