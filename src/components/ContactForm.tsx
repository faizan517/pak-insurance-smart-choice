import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactForm = () => (
  <div className="w-full py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal text-[#113040] mb-4 font-[Ibrand]">
          Get In Touch
        </h2>
        <p className="text-xl font-[Futura] text-gray-600 max-w-2xl mx-auto">
          Have questions about insurance? We're here to help! Reach out to our expert team for personalized assistance.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 font-[Futura]">
        {/* Contact Information Cards */}
        <div className="lg:col-span-1 space-y-6 font-[Ibrand] font-normal">
          <Card className="bg-gradient-to-r from-[#113040] to-[#1D9785] text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-normal mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-normal">+92 334 8230456</p>
                    <p className="text-sm text-white/80 font-[Futura]">24/7 Support</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-normal">info@ezeeinsure.com</p>
                    <p className="text-sm text-white/80 font-[Futura]">General Inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-normal">302, Plot # LS 6/7, Street 09, Block 14, Gulistan-e-Johar</p>
                    <p className="text-sm text-white/80 font-[Futura]">Karachi, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-normal">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-white/80 font-[Futura]">Business Hours</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 font-[Futura]">
          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-normal text-[#113040] font-[Ibrand] mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-normal text-[#113040]">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1D9785] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-normal text-[#113040]">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1D9785] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-normal text-[#113040]">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1D9785] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-normal text-[#113040]">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Your company name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1D9785] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-normal text-[#113040]">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1D9785] focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-normal text-[#113040]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1D9785] focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#1D9785] text-white font-normal text-base text-center font-[Ibrand] py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"          >
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default ContactForm;