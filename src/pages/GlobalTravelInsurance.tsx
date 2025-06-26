
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shield, Calculator, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GlobalTravelInsurance = () => {
  const globalTravelTypes = [
    {
      title: "Worldwide Coverage",
      description: "Travel anywhere in the world with confidence",
      href: "/travel/worldwide"
    },
    {
      title: "Multi-Trip",
      description: "Annual coverage for frequent travelers",
      href: "/travel/multi-trip"
    },
    {
      title: "Single Trip",
      description: "One-time travel insurance coverage",
      href: "/travel/single-trip"
    },
    {
      title: "Business Travel",
      description: "Corporate travel insurance solutions",
      href: "/travel/business"
    },
    {
      title: "Visitor Travel",
      description: "Insurance for visitors to Pakistan",
      href: "/travel/visitor"
    },
    {
      title: "New Immigrant Travel",
      description: "Coverage for new immigrants",
      href: "/travel/new-immigrant"
    },
    {
      title: "J1 Visa Travel",
      description: "Specialized coverage for J1 visa holders",
      href: "/travel/j1-visa"
    },
    {
      title: "Student Visa",
      description: "Travel insurance for students",
      href: "/travel/student-visa"
    },
    {
      title: "Schengen Visa Travel",
      description: "Europe travel insurance for Schengen visa",
      href: "/travel/schengen-visa"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6 text-emerald-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Travel Insurance</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Comprehensive travel insurance for international journeys
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-orange-600">BROWSE BY TYPE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalTravelTypes.map((type, index) => (
              <Link key={index} to={type.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Get Quote</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlobalTravelInsurance;
