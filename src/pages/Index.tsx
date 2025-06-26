
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
      color: "from-blue-500 via-blue-600 to-indigo-600",
      bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-100"
    },
    {
      title: "Health Insurance",
      description: "Medical coverage for you and family",
      icon: Heart,
      href: "/health",
      color: "from-rose-500 via-pink-600 to-red-600",
      bgPattern: "bg-gradient-to-br from-rose-50 to-pink-100"
    },
    {
      title: "Travel Insurance",
      description: "Secure your journey worldwide",
      icon: Plane,
      href: "/travel",
      color: "from-emerald-500 via-teal-600 to-cyan-600",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-100"
    },
    {
      title: "Life Insurance",
      description: "Protect your family's future",
      icon: User,
      href: "/life",
      color: "from-violet-500 via-purple-600 to-indigo-600",
      bgPattern: "bg-gradient-to-br from-violet-50 to-purple-100"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "SECP Registered",
      description: "Licensed and regulated by SECP",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calculator,
      title: "Compare & Save",
      description: "Compare quotes from top insurers",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: CheckCircle,
      title: "Instant Policies",
      description: "Get covered in minutes",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round the clock assistance",
      color: "from-rose-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers", color: "from-blue-500 to-cyan-500" },
    { number: "8+", label: "Insurance Partners", color: "from-emerald-500 to-teal-500" },
    { number: "24/7", label: "Customer Support", color: "from-violet-500 to-purple-500" },
    { number: "99%", label: "Claim Settlement", color: "from-rose-500 to-pink-500" }
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      rating: 5,
      comment: "Great service and competitive rates. Got my car insurance within minutes!",
      location: "Karachi",
      avatar: "AH"
    },
    {
      name: "Fatima Khan",
      rating: 5,
      comment: "Excellent health insurance plans. The claim process was smooth and fast.",
      location: "Lahore",
      avatar: "FK"
    },
    {
      name: "Muhammad Ali",
      rating: 5,
      comment: "Best travel insurance for my Europe trip. Highly recommended!",
      location: "Islamabad",
      avatar: "MA"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-blue-900/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Find The Best
                <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Insurance Coverage
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
                Pakistan's most trusted insurance marketplace. Compare quotes from top insurers, 
                get instant coverage, and manage your policies seamlessly.
              </p>
            </div>

            <div className="flex justify-center space-x-8 pt-8">
              {insuranceCategories.map((category, index) => (
                <Link key={index} to={category.href}>
                  <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:scale-110 transition-all duration-500 cursor-pointer shadow-xl">
                    <category.icon className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-semibold text-white block text-center tracking-wide">{category.title.split(' ')[0]}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-16">
              <Link to="/compare">
                <Button size="lg" className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 hover:from-amber-500 hover:to-orange-600 font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <Calculator className="h-6 w-6 mr-3" />
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/compare">
                <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-gray-900 px-12 py-6 text-lg font-semibold rounded-full backdrop-blur-sm">
                  View All
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-indigo-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-block p-6 rounded-3xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {stat.number}
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Categories */}
      <section className="py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              Choose Your Perfect
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Insurance Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compare and buy insurance online with instant digital policies from Pakistan's leading insurers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {insuranceCategories.map((category, index) => (
              <Link key={index} to={category.href}>
                <Card className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-xl overflow-hidden ${category.bgPattern} h-full`}>
                  <CardHeader className="pb-8 relative">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="h-12 w-12 text-white" />
                      </div>
                      <div className="text-right">
                        <Badge className="bg-white/90 text-gray-700 font-semibold px-4 py-2 shadow-md">
                          Popular Choice
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg py-4 rounded-xl font-semibold`}>
                      Get Quote Now
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              Why Choose
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                EzeeInsure?
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We make insurance simple, transparent, and accessible for everyone
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${feature.color} p-8 rounded-3xl w-24 h-24 mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-28 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              What Our Customers
              <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-10 w-10 text-yellow-400 fill-current" />
              ))}
              <span className="text-xl text-gray-600 ml-6 font-semibold">4.8 Rating • 500+ Reviews</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-2 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 text-lg leading-relaxed font-medium">
                    "{testimonial.comment}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-6">
                    <div className="w-18 h-18 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-white">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-blue-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Ready to Get Protected?
          </h2>
          <p className="text-xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust us with their insurance needs. 
            Get quotes from top insurance companies in Pakistan instantly.
          </p>
          <Link to="/compare">
            <Button size="lg" className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 hover:from-amber-500 hover:to-orange-600 font-bold px-16 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <Calculator className="h-6 w-6 mr-3" />
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
