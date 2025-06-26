import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Calculator, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Compare & Buy
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Insurance Online
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Pakistan's trusted insurance marketplace. Compare quotes from top insurers, 
                get instant coverage, and manage your policies all in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/compare">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                  <Calculator className="h-5 w-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/compare">
               <Button
  size="lg"
  variant="outline"
  className="border-white text-black hover:bg-white hover:text-black px-8"
>
  View All Products
</Button>

              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>SECP Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Instant Digital Policies</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="text-center space-y-6">
                  <div className="bg-white/20 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">50,000+</h3>
                    <p className="text-blue-100">Satisfied Customers</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">8+</h3>
                    <p className="text-blue-100">Insurance Partners</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                    <p className="text-blue-100">Customer Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
