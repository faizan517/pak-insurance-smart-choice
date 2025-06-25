
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Calculator, CheckCircle, Phone, FileText } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Calculator,
      title: "Instant Quotes",
      description: "Get multiple insurance quotes in minutes with our smart comparison engine"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Pay safely with EasyPaisa, bank transfer, or credit card integration"
    },
    {
      icon: FileText,
      title: "Digital Policies",
      description: "Receive your insurance policy instantly via email and SMS"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support and claims assistance"
    },
    {
      icon: CheckCircle,
      title: "Verified Insurers",
      description: "All partner insurers are SECP registered and verified"
    },
    {
      icon: Phone,
      title: "Expert Advice",
      description: "Free consultation with our insurance experts"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Smart Choice?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We make insurance simple, transparent, and accessible for everyone in Pakistan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
