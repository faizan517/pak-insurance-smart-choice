
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Car, Heart, Plane, User, Calculator, CheckCircle, Phone, Clock, Star, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const insuranceCategories = [
    {
      title: "Motor Insurance",
      description: "Comprehensive car and bike insurance",
      icon: Car,
      href: "/motor",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Health Insurance",
      description: "Medical coverage for you and family",
      icon: Heart,
      href: "/health",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Travel Insurance",
      description: "Secure your journey worldwide",
      icon: Plane,
      href: "/travel",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Life Insurance",
      description: "Protect your family's future",
      icon: User,
      href: "/life",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "SECP Registered",
      description: "Licensed and regulated by SECP"
    },
    {
      icon: Calculator,
      title: "Compare & Save",
      description: "Compare quotes from top insurers"
    },
    {
      icon: CheckCircle,
      title: "Instant Policies",
      description: "Get covered in minutes"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round the clock assistance"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "8+", label: "Insurance Partners" },
    { number: "24/7", label: "Customer Support" },
    { number: "99%", label: "Claim Settlement" }
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      rating: 5,
      comment: "Great service and competitive rates. Got my car insurance within minutes!",
      location: "Karachi"
    },
    {
      name: "Fatima Khan",
      rating: 5,
      comment: "Excellent health insurance plans. The claim process was smooth and fast.",
      location: "Lahore"
    },
    {
      name: "Muhammad Ali",
      rating: 5,
      comment: "Best travel insurance for my Europe trip. Highly recommended!",
      location: "Islamabad"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find The Best Insurance
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Get Quotes Online in Minutes
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pakistan's trusted insurance marketplace. Compare quotes from top insurers, 
              get instant coverage, and manage your policies all in one place.
            </p>

            <div className="flex justify-center space-x-4 pt-4">
              {insuranceCategories.map((category, index) => (
                <Link key={index} to={category.href}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                    <category.icon className="h-8 w-8 text-white mx-auto mb-2" />
                    <span className="text-sm text-white block text-center">{category.title.split(' ')[0]}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/compare">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                  <Calculator className="h-5 w-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/compare">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Categories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Providing the best insurance from all major insurance & takaful providers
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Compare and buy insurance online with instant digital policies
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {insuranceCategories.map((category, index) => (
              <Link key={index} to={category.href}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg group">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <Button className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90`}>
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Smart Choice?
            </h2>
            <p className="text-xl text-slate-600">
              We make insurance simple, transparent, and accessible
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Customers Love Us
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-slate-600 ml-2">4.8 Rating • 500+ Reviews</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-slate-700 text-base">
                    "{testimonial.comment}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Insurance made simple for you
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get quotes from top insurance companies in Pakistan. Compare, choose, and get covered instantly.
          </p>
          <Link to="/compare">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
              <Calculator className="h-5 w-5 mr-2" />
              Start Comparing Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
