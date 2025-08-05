import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Car, Heart, Plane, User, Calculator, CheckCircle, Phone, Clock, Star, Users, Award, TrendingUp, Home, UserCheck, PawPrint, ShoppingBag, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import family from '../assets/Group.png'
import ContactForm from "@/components/ContactForm";
import ChatBot from "@/components/ChatBot";
const Index = () => {
  const [visibleServices, setVisibleServices] = useState(6);

  const insuranceServices = [
    {
      title: "Group Health Insurance",
      description: "Comprehensive medical coverage for your employees",
      icon: Users,
      href: "/group-health",
      color: "[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#113040]/10 to-[#1D9785]/10"
    },
    {
      title: "Group Life Insurance",
      description: "Secure your team's future with affordable group rates",
      icon: Shield,
      href: "/life",
      color: "[#2ABFAF]",
      bgPattern: "[#2ABFAF]/10"
    },
    {
      title: "Family & Individual Plans",
      description: "Customizable health coverage for you and your loved ones",
      icon: Heart,
      href: "/health",
      color: "[#2ABFAF]",
      bgPattern: "[#2ABFAF]/10"
    },
    {
      title: "Parental Insurance",
      description: "Honor and protect your parents' health up to age 75",
      icon: User,
      href: "/parental",
      color: "[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#1D9785]/10 to-[#0F6C4A]/10"
    },
    {
      title: "Travel Insurance",
      description: "Coverage for domestic, international, Hajj & Umrah journeys",
      icon: Plane,
      href: "/travel",
      color: "[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#0F6C4A]/10 to-[#1D9785]/10"
    },
    {
      title: "Motor Insurance",
      description: "Protect your cars and bikes with flexible coverage",
      icon: Car,
      href: "/motor",
      color: "[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#F46416]/10 to-[#4CB2E1]/10"
    },
    
    {
      title: "Home Insurance",
      description: "More than just a policy - protect your sanctuary",
      icon: Home,
      href: "/home",
      color: "[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#113040]/10 to-[#0F6C4A]/10"
    },
    {
      title: "Domestic Helper Insurance",
      description: "Care for your household team with health protection",
      icon: UserCheck,
      href: "/domestic-helper",
      color: "[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#2ABFAF]/10 to-[#4CB2E1]/10"
    },
    
    {
      title: "Pet Insurance",
      description: "Protect your furry family members with veterinary coverage",
      icon: PawPrint,
      href: "/pet",
      color: "[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#F46416]/10 to-[#2ABFAF]/10"
    },
    {
      title: "Shop Insurance",
      description: "Comprehensive coverage for your business premises",
      icon: ShoppingBag,
      href: "/shop",
      color: "[#2ABFAF]",
      bgPattern: "bg-gradient-to-br from-[#4CB2E1]/10 to-[#1D9785]/10"
    }
  ];

  const whyChooseFeatures = [
    {
      icon: CheckCircle,
      title: "Dedicated to Simplicity",
      description: "No jargon, no hidden fees just clear, honest policies.",
      color: "#2ABFAF"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Your own account manager guides you from quote to claim.",
      color: "#2ABFAF"
    },
    {
      icon: Clock,
      title: "Fast Digital Onboarding",
      description: "Get a tailored Group Health Insurance quote in 24 hours.",
      color: "#2ABFAF"
    },
    {
      icon: Shield,
      title: "Largest Cashless Network",
      description: "500+ Providers Network for cashless treatments.",
      color: "#2ABFAF"
    },
    {
      icon: TrendingUp,
      title: "7-Day Claim Settlement",
      description: "Quick turnaround means your team gets paid fast.",
      color: "#2ABFAF"
    },
    {
      icon: Award,
      title: "Trusted Partnerships",
      description: "We work with Pakistan's top insurers to find you the best rates.",
      color: "#2ABFAF"
    }
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: "Tell Us Your Needs",
      description: "Share your company size or personal requirements.",
      color: "[#2ABFAF]"
    },
    {
      step: "02", 
      title: "Compare Top Plans",
      description: "We match you with the best coverage options.",
      color: "[#2ABFAF]"
    },
    {
      step: "03",
      title: "Get Instant Coverage", 
      description: "Quick digital onboarding and policy issuance.",
      color: "[#2ABFAF]"
    },
    {
      step: "04",
      title: "Enjoy Ongoing Support",
      description: "Dedicated claims guidance and annual plan reviews.",
      color: "[#2ABFAF]"
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
      href: "/group-life",
      color: "from-violet-500 via-purple-600 to-indigo-600",
      bgPattern: "bg-gradient-to-br from-violet-50 to-purple-100"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#4CB2E1]/10">
      <Navbar />
      <QuoteForm />
      
      {/* Hero Section */}
      <section className="relative w-full bg-white overflow-hidden">
        {/* Gradient Background Left */}
        <div className="absolute left-0 top-0 w-full md:w-1/2 h-full bg-[radial-gradient(circle_at_top_left,rgba(42,191,175,0.2)_0%,transparent_30%)] pointer-events-none z-0" />

        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-40 relative z-10">
          {/* Left Side: Heading, Text, Button */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal font-[Ibrand] text-black leading-tight">
              An <span className="text-[#F46416]">Ezee</span> Way for Pakistanis
              <span className="block">to Buy Insurance</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 font-normal font-[Futura] max-w-xl mx-auto lg:mx-0">
              Simple. Transparent. Caring. Protect your team & family with Pakistan's most user friendly insurance platform.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('insurance-services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 font-[Futura] rounded-full border-2 border-[#2ABFAF] text-[#2ABFAF] font-semibold hover:bg-[#2ABFAF] hover:text-white transition-all duration-300 text-sm sm:text-base">
              Get Started
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={family}
              alt="Family"
              className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Bar & Icons */}
        <div className="flex flex-col items-center px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 pt-16 sm:pt-20 lg:pt-32">
            {insuranceCategories.map((category, index) => (
              <Link key={index} to={category.href}>
                <div className="font-[Futura] group bg-gradient-to-b from-[#2ABFAF] to-[#113040] backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/20 hover:scale-110 transition-all duration-500 cursor-pointer shadow-xl">
                  <category.icon className="h-6 w-8 sm:h-8 w-10 lg:h-10 lg:w-12 text-white mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs sm:text-sm font-semibold text-white block text-center tracking-wide">{category.title.split(' ')[0]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* <section className="relative bg-gradient-to-br from-brand-blue via-brand-teal to-brand-sky text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-brand-blue/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl text-[#2ABFAF] lg:text-7xl font-bold leading-tight tracking-tight">
                An<span className="text-[#F46416]"> Ezee</span>  Way for
                <span className="block bg-[#113040] bg-clip-text text-transparent">
                Pakistanis to Buy Insurance
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-normal">
                Simple. Transparent. Caring. Protect your team and family with Pakistan's most user friendly insurance platform.
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
            <Button 
            size="lg" 
            className="bg-white text-black font-medium px-16 py-6 text-xl rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => window.dispatchEvent(new CustomEvent('openQuoteForm'))}
          >
            Get Your Free Quote
          </Button>
             
            </div>
          </div>
        </div>
      </section> */}
      {/* Why Choose Ezee Insure */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="font-[Ibrand] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#113040] mb-4 sm:mb-6 lg:mb-8 tracking-tight">
              Why Ezee Insure Leads in
              <span className="block bg-[#1a9182] bg-clip-text text-transparent">
              Corporate and Personal Insurance
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="bg-[#2ABFAF] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-6 sm:mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-[#113040] mb-3 sm:mb-4 md:mb-6 font-[Ibrand]">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#333333] leading-relaxed font-[Futura]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Asaan Bhai */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 xl:py-52 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-gradient-to-l from-[#1D9785]/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Mascot Image */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="relative flex justify-center lg:justify-start">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-white rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                    <img 
                      src={"/lovable-uploads/a8d9903f-5a71-47b8-9998-0eafcbaab10c.png"} 
                      alt="Asaan Bhai Mascot" 
                      className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain" 
                      style={{ imageRendering: 'auto' }} 
                    />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#F46416] rounded-full flex items-center justify-center shadow-xl animate-bounce">
                    <span className="text-white text-lg sm:text-2xl">💡</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#1D9785] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-base sm:text-xl">✓</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#113040] mb-4 sm:mb-6 lg:mb-8 leading-tight font-[Ibrand]">
                  <span className="bg-[#113040] bg-clip-text text-transparent"></span> 
                  Introducing Asaan Bhai 
                  <br className="hidden sm:block"/>
                  <span className="text-[#1a9182]"> Your Insurance Superhero</span> 
                </h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                  <p className="pt-2 font-[Futura]">
                    Say hello to Asaan Bhai, our friendly shield mascot who brings Ezee Insure's promise to life! With his trusty umbrella hat and checklist in hand, Asaan Bhai guides you through every step—making insurance feel as easy and reliable as possible. Spot him on our site, social posts, and emails, always ready to protect and empower you.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-[Futura]">
                  <a
                    href="https://wa.me/923348230456"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#1a9182] hover:bg-[#1D9785] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-xl hover:shadow-[#1a9182] transition-all duration-300 hover:scale-105">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                      Chat on Whatsapp
                    </Button>
                  </a>
                </div>
                {/* <ChatBot /> */}

                {/* Trust Indicators */}
                {/* <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm md:text-base text-gray-600">
                    <div className="flex items-center space-x-2 sm:space-x-3 bg-green-50 px-3 sm:px-4 py-2 rounded-full">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="font-medium">Available 24/7</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 bg-blue-50 px-3 sm:px-4 py-2 rounded-full">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse"></span>
                      <span className="font-medium">Speaks Urdu & English</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 bg-purple-50 px-3 sm:px-4 py-2 rounded-full">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full animate-pulse"></span>
                      <span className="font-medium">Licensed Insurance Advisor</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Insurance Services */}
      <section id="insurance-services" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#113040] mb-6 sm:mb-8 tracking-tight font-[Ibrand]">
              All Your Insurance Needs,
              <span className="block bg-[#1a9182] bg-clip-text text-transparent">
              Covered Ezee
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {insuranceServices.slice(0, visibleServices).map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 border-0 shadow-xl overflow-hidden h-full`}>
                  <CardHeader className="pb-6 sm:pb-8 relative">
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-${service.color} hover:bg-${service.bgPattern} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-normal text-[#113040] mb-2 sm:mb-3 tracking-tight font-[Ibrand]">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-[#333333] text-base sm:text-lg leading-relaxed font-[Futura]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className={`w-full bg-${service.color} hover:bg-${service.bgPattern} shadow-xl hover:shadow-2xl transition-all duration-300 text-base sm:text-lg py-3 sm:py-4 rounded-xl font-semibold`}>
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 flex flex-col items-center gap-4">
            {visibleServices < insuranceServices.length && (
              <Button
                size="lg"
                className="bg-[#1a9182] hover:bg-[#2ABFAF]/90 font-normal px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-xl font-[Futura]"
                onClick={() => setVisibleServices(insuranceServices.length)}
              >
                Show More
              </Button>
            )}
            {/* <Link to="/compare">
              <Button size="lg" className="bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] hover:from-[#1D9785]/90 hover:to-[#2ABFAF]/90 font-bold px-12 py-4 text-lg rounded-full shadow-xl">
                Explore Our Services
              </Button>
            </Link> */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 bg-gradient-to-br from-[#113040]/5 via-white to-[#1D9785]/5 relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-normal text-[#113040] mb-8 tracking-tight font-[Ibrand]">
              Insurance in
              <span className="block bg-[#1a9182] bg-clip-text text-transparent">
              4 Easy Steps
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-${step.color} font-[Ibrand] text-white text-4xl font-normal w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl `}>
                  {step.step}
                </div>
                <h3 className="text-2xl font-normal text-[#113040] mb-6 font-[Ibrand]">
                  {step.title}
                </h3>
                <p className="text-[#333333] text-lg leading-relaxed font-[Futura]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-16">
            <Link to="/compare">
              <Button size="lg" className="font-[Futura] bg-[#1a9182] hover:bg-[#1D9785]/90 font-normal px-12 py-4 text-lg rounded-full shadow-xl text-white">
                Get Started Today
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-28 bg-white relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-normal text-[#113040] mb-8 tracking-tight font-[Ibrand]">
              What Our
              <span className="block bg-[#1a9182] bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex flex-col h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-white justify-between"
              >
                <CardHeader className="pb-6 flex flex-col items-center">
                  {/* <div className="flex items-center justify-center space-x-2 mb-8"> */}
                    {/* {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-[#F46416] fill-current" />
                    ))} */}
                  {/* </div> */}
                  <CardDescription className="text-[#333333] text-lg leading-relaxed font-medium font-[Futura] text-center">
                    "{testimonial.comment}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center gap-4 mt-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#113040] to-[#1D9785] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-lg font-normal text-white font-[Ibrand]">{testimonial.avatar}</span>
                    </div>
                    <div className="text-center">
                      <div className="font-normal text-[#113040] text-lg font-[Ibrand]">{testimonial.name}</div>
                      <div className="text-[#1D9785] font-normal font-[Ibrand]">{testimonial.company}</div>
                      <div className="text-[#888888] text-sm font-[Futura]">{testimonial.location}</div>
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
          <h2 className="text-4xl md:text-5xl font-normal mb-8 tracking-tight font-[Ibrand]">
            Ready to Make Insurance Ezee?
          </h2>
          <p className="text-xl text-slate-200 mb-16 max-w-3xl mx-auto leading-relaxed font-[Futura]">
            Take the Ezee Step Today
          </p>
          <Button 
            size="lg" 
            className="bg-white font-[Futura] text-black hover:from-[#F46416]/90 hover:to-[#2ABFAF]/90 font-bold px-16 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            onClick={() => window.dispatchEvent(new CustomEvent('openQuoteForm'))}
          >
            {/* <Calculator className="h-6 w-6 mr-3" /> */}
            Get Your Free Quote
          </Button>
        </div>
      </section>
<ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
