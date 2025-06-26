
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Car, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThirdPartyInsurance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-r from-red-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-red-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Third Party Liability Insurance</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Mandatory coverage that protects you from third-party claims
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">What's Covered</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Third-party bodily injury</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Third-party property damage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Legal liability coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Court proceedings support</span>
                </div>
              </CardContent>
            </Card>

            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Get the most affordable third-party insurance that meets legal requirements 
                  and protects you from financial liability.
                </p>
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    Get Instant Quote
                  </Button>
                  <Link to="/compare">
                    <Button variant="outline" className="w-full" size="lg">
                      Compare Plans
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThirdPartyInsurance;
