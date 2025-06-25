
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Heart, Plane, User, Shield, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const InsuranceCategories = () => {
  const categories = [
    {
      title: "Motor Insurance",
      description: "Comprehensive coverage for cars and motorbikes with instant quotes",
      icon: Car,
      gradient: "from-blue-500 to-blue-600",
      href: "/motor",
      features: ["Third Party", "Comprehensive", "Online Claims"]
    },
    {
      title: "Health Insurance",
      description: "Individual, family and parental health coverage options",
      icon: Heart,
      gradient: "from-red-500 to-pink-600",
      href: "/health",
      features: ["Family Plans", "COVID Coverage", "Cashless Treatment"]
    },
    {
      title: "Travel Insurance",
      description: "Schengen, student, and global travel insurance policies",
      icon: Plane,
      gradient: "from-green-500 to-emerald-600",
      href: "/travel",
      features: ["Visa Support", "Medical Coverage", "Trip Cancellation"]
    },
    {
      title: "Life Insurance",
      description: "Term life and personal accident insurance for your family",
      icon: User,
      gradient: "from-purple-500 to-indigo-600",
      href: "/life",
      features: ["Term Life", "Accident Cover", "Hospital Cash"]
    },
    {
      title: "Takaful Insurance",
      description: "Shariah-compliant motor and travel insurance products",
      icon: Shield,
      gradient: "from-teal-500 to-cyan-600",
      href: "/takaful",
      features: ["Shariah Compliant", "Motor Takaful", "Travel Takaful"]
    },
    {
      title: "Compare All",
      description: "Side-by-side comparison of all insurance products",
      icon: Calculator,
      gradient: "from-orange-500 to-yellow-600",
      href: "/compare",
      features: ["Price Comparison", "Coverage Analysis", "Best Deals"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Insurance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare quotes from Pakistan's leading insurers and find the perfect coverage for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to={category.href}>
                  <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;
