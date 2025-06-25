
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, MapPin, Phone, Clock, CheckCircle } from "lucide-react";

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Licensed & Regulated
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Smart PFM Pvt Ltd is a SECP registered company providing transparent and reliable insurance services across Pakistan.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-slate-200">SECP Registered (NTN: 7461155)</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-green-400" />
                <span className="text-slate-200">Karachi Head Office</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-green-400" />
                <span className="text-slate-200">021-111-212-212</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-green-400" />
                <span className="text-slate-200">Mon-Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
                <p className="text-slate-300">Secure Transactions</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">50K+</h3>
                <p className="text-slate-300">Policies Issued</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                <p className="text-slate-300">Support Available</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">5 Min</h3>
                <p className="text-slate-300">Quick Quotes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
