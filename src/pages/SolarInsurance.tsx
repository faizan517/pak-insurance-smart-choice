import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sun,
  ShieldCheck,
  Flame,
  Zap,
  CloudRain,
  Settings,
  FileText,
  Clock,
  AlertTriangle,
  ArrowBigRightDash,
  ClipboardList,
  Plane,
  Users,
  Hammer,
  MapPin,
  Battery,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

const SolarInsurance = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const { toast } = useToast();

  const coverages = [
    {
      title: "Fire & Lightning",
      description:
        "Comprehensive protection against fire and lightning damage.",
      icon: <Flame className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Atmospheric Disturbance",
      description:
        "Covers hail, snow, wind, hurricane, cyclone, tornado, typhoon, rain, and flood.",
      icon: <CloudRain className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Electrical Clause “B”",
      description: "Coverage for electrical breakdown or short circuits.",
      icon: <Zap className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Burglary & House Breaking",
      description:
        "Protection against theft through forcible and violent entry.",
      icon: <ShieldCheck className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Impact Damage",
      description: "Coverage for physical impact damage to the solar setup.",
      icon: <Hammer className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Riot, Strike & Malicious Damage",
      description:
        "Safety against converting riots, strikes, and malicious acts.",
      icon: <Users className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Aircraft & Aerial Devices",
      description: "Damage caused by aircraft or other aerial devices.",
      icon: <Plane className="w-6 h-6 text-[#F46416]" />,
    },
    {
      title: "Explosion",
      description: "Coverage against explosion damage.",
      icon: <Flame className="w-6 h-6 text-[#F46416]" />,
    },
  ];

  const features = [
    {
      title: "Pan Pakistan Coverage",
      description: "Geographical limit extends to all of Pakistan.",
      icon: <MapPin className="w-8 h-8 text-[#1D9785]" />,
    },
    {
      title: "3KVA to 20KVA",
      description:
        "Plans available for solar setups ranging from 3KVA to 20KVA.",
      icon: <Battery className="w-8 h-8 text-[#1D9785]" />,
    },
    {
      title: "Quick Claim Processing",
      description:
        "Cheque issued within 10 working days of document submission.",
      icon: <Clock className="w-8 h-8 text-[#1D9785]" />,
    },
  ];

  const terms = [
    "Insurance coverage for Solar Panel(s) lying/stored/situated at the Insured’s premises only.",
    "Burglary risk covered consequent upon actual forcible and violent entry.",
    "Sum insured must equal the cost of replacement by new items of same capacity.",
    "Losses due to breakdown or malfunction are excluded.",
    "Deductible: 10% of the Loss Amount on EEL.",
    "Accessories (inverter, batteries) must be placed in a designated covered room.",
    "Subject to testing and commission certificate.",
  ];

  const documents = [
    "Claim Form; duly filled, signed and stamped",
    "Fire brigade report (if applicable)",
    "Repair/Replacement Invoice(s)",
    "Proof of loss (photos, sales register, etc.)",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#113040] to-[#2ABFAF] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <Sun className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal font-[Ibrand] leading-tight">
              Solar PV System Insurance
              <span className="block text-2xl md:text-3xl font-normal font-[Futuru] text-blue-100 mt-4">
                Complete protection for your Solar Investment
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-blue-50 font-[Futuru]">
              Covers Solar Panels including inverters, battery, and accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow w-full py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-16 w-full max-w-6xl mx-auto">
            {/* Scope of Coverage */}
            <section>
              <h3 className="text-3xl font-normal text-[#113040] mb-10 font-[Ibrand] text-center">
                Scope of Coverage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coverages.map((cov, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex flex-col font-[Futuru] items-center text-center space-y-4">
                      <div className="p-3 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                        {cov.icon}
                      </div>
                      <div>
                        <h4 className="font-normal text-[#113040] mb-2 text-lg font-[Ibrand]">
                          {cov.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {cov.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <h3 className="text-3xl font-normal text-[#113040] mb-10 font-[Ibrand] text-center">
              Why Choose Our Solar Insurance?
            </h3>
            {/* Features Grid */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((f, idx) => (
                  <Card
                    key={idx}
                    className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-teal-50 rounded-full group-hover:bg-teal-100 transition-colors">
                          {f.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-normal font-[Ibrand] text-[#113040] mb-2">
                        {f.title}
                      </h4>
                      <p className="text-gray-600 font-[Futuru]">
                        {f.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            {/* Terms and Exclusions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Terms */}
              {/* <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-[#1D9785]" />
                  <h3 className="text-2xl font-normal font-[Ibrand] text-[#113040]">
                    Terms & Conditions
                  </h3>
                </div>
                <ul className="space-y-4 font-[Futuru]">
                  {terms.map((term, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#F46416] flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{term}</span>
                    </li>
                  ))}
                </ul>
              </section> */}

              {/* Exclusions & Documents */}
              {/* <div className="space-y-8">
                <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                    <h3 className="text-2xl font-normal font-[Ibrand] text-[#113040]">
                      Exclusions
                    </h3>
                  </div>
                  <ul className="space-y-4 font-[Futuru] text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold">•</span>
                      Mysterious disappearance
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold">•</span>
                      Terrorism, Sabotage War and Political Violence
                    </li>
                  </ul>
                </section>

                <section className="bg-teal-50 p-8 rounded-2xl border border-teal-100">
                  <div className="flex items-center gap-3 mb-6">
                    <ClipboardList className="w-8 h-8 text-[#1D9785]" />
                    <h3 className="text-2xl font-normal font-[Ibrand] text-[#113040]">
                      Required Documents
                    </h3>
                  </div>
                  <ul className="space-y-3 font-[Futuru]">
                    {documents.map((doc, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-gray-700 items-start"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#1D9785] mt-1" />
                        <span className="text-sm">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div> */}
            </div>
            {/* Claim Procedure */}
            {/* <section className="bg-[#113040] text-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-bold mb-8 text-center font-[Ibrand]">
                Claim Procedure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-[Futuru]">
                <div>
                  <div className="text-[#F46416] text-4xl font-bold mb-4">
                    01
                  </div>
                  <h4 className="text-xl font-bold mb-2">Intimation</h4>
                  <p className="text-gray-300">
                    Intimate claim within 24 hours of the incident.
                  </p>
                </div>
                <div>
                  <div className="text-[#F46416] text-4xl font-bold mb-4">
                    02
                  </div>
                  <h4 className="text-xl font-bold mb-2">Survey</h4>
                  <p className="text-gray-300">
                    Surveyor appointment within 24 hours if needed.
                  </p>
                </div>
                <div>
                  <div className="text-[#F46416] text-4xl font-bold mb-4">
                    03
                  </div>
                  <h4 className="text-xl font-bold mb-2">Settlement</h4>
                  <p className="text-gray-300">
                    Cheque issued within 10 days of document submission.
                  </p>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </main>

      <div className="py-8">
        {/* <div className="container mx-auto text-center"> */}
        {/* <p className="mb-4 text-gray-500 text-sm">
            Premium 1.7% (Taxes to be applicable) - Residential Only
          </p> */}
        <Button
          onClick={() => setShowQuoteForm(true)}
          className="font-[Ibrand] bg-[#1D9785] text-white text-xl font-normal px-16 py-6 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-3 mx-auto"
        >
          Get Solar Insurance Quote
          <ArrowBigRightDash className="h-7 w-7 ml-2" />
        </Button>
        {/* </div> */}

        <QuoteForm
          insuranceType="solar"
          insuranceTypeLabel="Solar PV System Insurance"
          open={showQuoteForm}
          onOpenChange={setShowQuoteForm}
        />
      </div>
      <Footer />
    </div>
  );
};

export default SolarInsurance;
