
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Calculator, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GroupHealthInsurance = () => {
  const groupHealthTypes = [
    {
      title: "Employee Benefits",
      description: "Comprehensive health benefits for employees",
      href: "/group-health/employee"
    },
    {
      title: "Corporate Health",
      description: "Large corporate health insurance plans",
      href: "/group-health/corporate"
    },
    {
      title: "SME Health Plans",
      description: "Health insurance for small and medium enterprises",
      href: "/group-health/sme"
    },
    {
      title: "Group Medical",
      description: "Group medical insurance coverage",
      href: "/group-health/medical"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-6 text-purple-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Group Health Insurance</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive health insurance solutions for organizations
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupHealthTypes.map((type, index) => (
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

export default GroupHealthInsurance;
