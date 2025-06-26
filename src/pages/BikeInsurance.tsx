
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Shield, Calculator, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BikeInsurance = () => {
  const bikeInsuranceTypes = [
    {
      title: "Motorcycle Insurance",
      description: "Complete protection for your motorcycle",
      href: "/bike/motorcycle"
    },
    {
      title: "Bike Third Party",
      description: "Mandatory third party liability coverage",
      href: "/bike/third-party"
    },
    {
      title: "Bike Comprehensive",
      description: "Full coverage including theft and damage",
      href: "/bike/comprehensive"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Bike className="h-16 w-16 mx-auto mb-6 text-blue-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bike Insurance</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Protect your two-wheeler with comprehensive bike insurance plans
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikeInsuranceTypes.map((type, index) => (
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

export default BikeInsurance;
