
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Car, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ComprehensiveInsurance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Star className="h-16 w-16 mx-auto mb-6 text-blue-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Car Insurance</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Complete protection for your vehicle with extensive coverage options
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Complete Coverage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Own damage coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Third-party liability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Theft protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Natural disasters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Roadside assistance</span>
                </div>
              </CardContent>
            </Card>

            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Premium Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Get the most comprehensive protection for your vehicle with our 
                  all-inclusive insurance plans from top-rated insurers.
                </p>
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    Get Comprehensive Quote
                  </Button>
                  <Link to="/compare">
                    <Button variant="outline" className="w-full" size="lg">
                      Compare All Plans
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

export default ComprehensiveInsurance;
