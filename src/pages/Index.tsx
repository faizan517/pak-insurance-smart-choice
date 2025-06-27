
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Car, Heart, Plane, User, Calculator, CheckCircle, Phone, Clock, Star, Users, Award, TrendingUp, Home, UserCheck, PawPrint, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

const Index = () => {
  const insuranceServices = [
    {
      title: "Group Health Insurance",
      description: "Comprehensive medical coverage for your employees",
      icon: Users,
      href: "/group-health",
      color: "from-[#113040] to-[#1D9785]",
      bgPattern: "bg-gradient-to-br from-[#113040]/10 to-[#1D9785]/10"
    },
    {
      title: "Group Life Insurance",
      description: "Secure your team's future with affordable group rates",
      icon: Shield,
      href: "/life",
      color: "from-[#1D9785] to-[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#1D9785]/10 to-[#2ABFAF]/10"
    },
    {
      title: "Individual & Family Health Plans",
      description: "Customizable health coverage for you and your loved ones",
      icon: Heart,
      href: "/health",
      color: "from-[#4CB2E1] to-[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#4CB2E1]/10 to-[#2ABFAF]/10"
    },
    {
      title: "Travel Insurance",
      description: "Coverage for domestic, international, Hajj & Umrah journeys",
      icon: Plane,
      href: "/travel",
      color: "from-[#0F6C4A] to-[#1D9785]",
      bgPattern: "bg-gradient-to-br from-[#0F6C4A]/10 to-[#1D9785]/10"
    },
    {
      title: "Motor Insurance",
      description: "Protect your cars and bikes with flexible coverage",
      icon: Car,
      href: "/motor",
      color: "from-[#F46416] to-[#4CB2E1]",
      bgPattern: "bg-gradient-to-br from-[#F46416]/10 to-[#4CB2E1]/10"
    },
    {
      title: "Home Insurance",
      description: "More than just a policy - protect your sanctuary",
      icon: Home,
      href: "/home",
      color: "from-[#113040] to-[#0F6C4A]",
      bgPattern: "bg-gradient-to-br from-[#113040]/10 to-[#0F6C4A]/10"
    },
    {
      title: "Domestic Helper Insurance",
      description: "Care for your household team with health protection",
      icon: UserCheck,
      href: "/domestic-helper",
      color: "from-[#2ABFAF] to-[#4CB2E1]",
      bgPattern: "bg-gradient-to-br from-[#2ABFAF]/10 to-[#4CB2E1]/10"
    },
    {
      title: "Parental Insurance",
      description: "Honor and protect your parents' health up to age 75",
      icon: User,
      href: "/parental",
      color: "from-[#1D9785] to-[#0F6C4A]",
      bgPattern: "bg-gradient-to-br from-[#1D9785]/10 to-[#0F6C4A]/10"
    },
    {
      title: "Pet Insurance",
      description: "Protect your furry family members with veterinary coverage",
      icon: PawPrint,
      href: "/pet",
      color: "from-[#F46416] to-[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#F46416]/10 to-[#2ABFAF]/10"
    },
    {
      title: "Shop Insurance",
      description: "Comprehensive coverage for your business premises",
      icon: ShoppingBag,
      href: "/shop",
      color: "from-[#4CB2E1] to-[#1D9785]",
      bgPattern: "bg-gradient-to-br from-[#4CB2E1]/10 to-[#1D9785]/10"
    }
  ];

  const whyChooseFeatures = [
    {
      icon: CheckCircle,
      title: "Dedicated to Simplicity",
      description: "No jargon, no hidden fees—just clear, honest policies.",
      color: "from-[#113040] to-[#1D9785]"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Your own account manager guides you from quote to claim.",
      color: "from-[#1D9785] to-[#2ABFAF]"
    },
    {
      icon: Clock,
      title: "Fast Digital Onboarding",
      description: "Get a tailored Group Health Insurance quote in 24 hours.",
      color: "from-[#4CB2E1] to-[#2ABFAF]"
    },
    {
      icon: Shield,
      title: "Largest Network of Cashless Services",
      description: "500+ Providers Network for cashless treatments.",
      color: "from-[#0F6C4A] to-[#1D9785]"
    },
    {
      icon: TrendingUp,
      title: "7-Day Claim Settlement",
      description: "Quick turnaround means your team gets paid fast.",
      color: "from-[#F46416] to-[#4CB2E1]"
    },
    {
      icon: Award,
      title: "Trusted Partnerships",
      description: "We work with Pakistan's top insurers to find you the best rates.",
      color: "from-[#113040] to-[#0F6C4A]"
    }
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: "Tell Us Your Needs",
      description: "Share your company size or personal requirements.",
      color: "from-[#113040] to-[#1D9785]"
    },
    {
      step: "02", 
      title: "Compare Top Plans",
      description: "We match you with the best coverage options.",
      color: "from-[#1D9785] to-[#2ABFAF]"
    },
    {
      step: "03",
      title: "Get Instant Coverage", 
      description: "Quick digital onboarding and policy issuance.",
      color: "from-[#4CB2E1] to-[#2ABFAF]"
    },
    {
      step: "04",
      title: "Enjoy Ongoing Support",
      description: "Dedicated claims guidance and annual plan reviews.",
      color: "from-[#0F6C4A] to-[#1D9785]"
    }
  ];

  const testimonials = [
    {
      name: "HR Manager",
      company: "TechStart Solutions",
      rating: 5,
      comment: "Ezee Insure made employee health coverage effortless. Their team handled everything—from plan design to claim support. Highly recommend!",
      location: "Karachi",
      avatar: "TS"
    },
    {
      name: "CFO",
      company: "GlobalIndustries Ltd.",
      rating: 5,
      comment: "I saved 15% on premiums without sacrificing coverage. The online portal is intuitive and the support is top-notch.",
      location: "Lahore",
      avatar: "GI"
    },
    {
      name: "Business Owner",
      company: "Family Business",
      rating: 5,
      comment: "Asaan Bhai made everything so simple! From quote to policy, the entire process was transparent and hassle-free.",
      location: "Islamabad",
      avatar: "FB"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#4CB2E1]/10">
      <Navbar />
      <QuoteForm />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#113040] via-[#1D9785] to-[#0F6C4A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#113040]/80 via-transparent to-[#1D9785]/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                An Ezee Way for
                <span className="block bg-gradient-to-r from-[#F46416] via-[#2ABFAF] to-[#4CB2E1] bg-clip-text text-transparent">
                  Pakistanis to Buy Insurance
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
                Simple. Transparent. Caring. Protect your team and family with Pakistan's most user-friendly insurance platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#F46416] to-[#2ABFAF] text-white hover:from-[#F46416]/90 hover:to-[#2ABFAF]/90 font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                onClick={() => window.dispatchEvent(new CustomEvent('openQuoteForm'))}
              >
                <Calculator className="h-6 w-6 mr-3" />
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ezee Insure */}
      <section className="py-28 bg-white relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-[#113040] mb-8 tracking-tight">
              Why Ezee Insure Leads in
              <span className="block bg-gradient-to-r from-[#1D9785] via-[#2ABFAF] to-[#4CB2E1] bg-clip-text text-transparent">
                Corporate and Personal Insurance
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${feature.color} p-8 rounded-3xl w-24 h-24 mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#113040] mb-6">
                  {feature.title}
                </h3>
                <p className="text-[#333333] text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Asaan Bhai */}
      <section className="py-28 bg-gradient-to-br from-[#1D9785]/10 via-white to-[#4CB2E1]/10 relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#113040] mb-8 tracking-tight">
              Introducing Asaan Bhai –
              <span className="block bg-gradient-to-r from-[#F46416] via-[#1D9785] to-[#2ABFAF] bg-clip-text text-transparent">
                Your Insurance Superhero
              </span>
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <img 
                src="/lovable-uploads/a8d9903f-5a71-47b8-9998-0eafcbaab10c.png" 
                alt="Asaan Bhai - Your Insurance Superhero" 
                className="w-80 h-auto mx-auto mb-8 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xl text-[#333333] leading-relaxed mb-8">
                Say hello to Asaan Bhai, our friendly shield mascot who brings Ezee Insure's promise to life! 
                With his trusty umbrella hat and checklist in hand, Asaan Bhai guides you through every step—making 
                insurance feel as easy and reliable as possible.
              </p>
              <p className="text-lg text-[#888888] leading-relaxed">
                Spot him on our site, social posts, and emails, always ready to protect and empower you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Insurance Services */}
      <section className="py-28 bg-white relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-[#113040] mb-8 tracking-tight">
              All Your Insurance Needs,
              <span className="block bg-gradient-to-r from-[#1D9785] via-[#2ABFAF] to-[#4CB2E1] bg-clip-text text-transparent">
                Covered Ezee
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {insuranceServices.map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-xl overflow-hidden ${service.bgPattern} h-full`}>
                  <CardHeader className="pb-8 relative">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-[#113040] mb-3 tracking-tight">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-[#333333] text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg py-4 rounded-xl font-semibold`}>
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/compare">
              <Button size="lg" className="bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] hover:from-[#1D9785]/90 hover:to-[#2ABFAF]/90 font-bold px-12 py-4 text-lg rounded-full shadow-xl">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 bg-gradient-to-br from-[#113040]/5 via-white to-[#1D9785]/5 relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-[#113040] mb-8 tracking-tight">
              Insurance in
              <span className="block bg-gradient-to-r from-[#F46416] via-[#1D9785] to-[#2ABFAF] bg-clip-text text-transparent">
                4 Easy Steps
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${step.color} text-white text-4xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-[#113040] mb-6">
                  {step.title}
                </h3>
                <p className="text-[#333333] text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/compare">
              <Button size="lg" className="bg-gradient-to-r from-[#F46416] to-[#1D9785] hover:from-[#F46416]/90 hover:to-[#1D9785]/90 font-bold px-12 py-4 text-lg rounded-full shadow-xl text-white">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-28 bg-white relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-[#113040] mb-8 tracking-tight">
              What Our
              <span className="block bg-gradient-to-r from-[#1D9785] via-[#2ABFAF] to-[#4CB2E1] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-white">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-2 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-[#F46416] fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-[#333333] text-lg leading-relaxed font-medium">
                    "{testimonial.comment}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#113040] to-[#1D9785] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-white">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#113040] text-lg">{testimonial.name}</div>
                      <div className="text-[#1D9785] font-medium">{testimonial.company}</div>
                      <div className="text-[#888888] text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 bg-gradient-to-r from-[#113040] via-[#1D9785] to-[#0F6C4A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#113040]/70 to-[#1D9785]/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Ready to Make Insurance Ezee?
          </h2>
          <p className="text-xl text-slate-200 mb-16 max-w-3xl mx-auto leading-relaxed">
            Take the Ezee Step Today
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#F46416] to-[#2ABFAF] text-white hover:from-[#F46416]/90 hover:to-[#2ABFAF]/90 font-bold px-16 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            onClick={() => window.dispatchEvent(new CustomEvent('openQuoteForm'))}
          >
            <Calculator className="h-6 w-6 mr-3" />
            Get Your Free Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
