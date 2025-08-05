import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, User } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#E0F7FA] pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#2ABFAF]/20 via-white to-[#1D9785]/10 text-center relative">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="bg-[#2ABFAF]/20 rounded-full p-6 mb-4 shadow-lg">
              <Mail className="h-16 w-16 text-[#2ABFAF]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#113040] mb-4">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-[#1D9785] max-w-2xl mx-auto font-medium">
              Contact Ezee Insure for a free quote or customer support. Our team is ready to assist you with all insurance needs in Pakistan.
            </p>
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 mt-8">
          {/* Business Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#2ABFAF] flex flex-col gap-8 justify-center">
            <div className="flex items-start gap-4 text-[#113040] group hover:bg-[#2ABFAF]/5 p-4 rounded-xl transition-all duration-300">
              <div className="bg-[#2ABFAF]/10 p-3 rounded-full group-hover:bg-[#2ABFAF]/20 transition-colors duration-300">
                <MapPin className="h-6 w-6 text-[#2ABFAF] flex-shrink-0" />
              </div>
              <div>
                <span className="font-bold text-lg block mb-2 text-[#1D9785]">Office Address</span>
                <span className="text-lg leading-relaxed">123 Insurance Tower, Karachi, Pakistan</span>
              </div>
            </div>
            <div className="flex items-start gap-4 text-[#113040] group hover:bg-[#2ABFAF]/5 p-4 rounded-xl transition-all duration-300">
              <div className="bg-[#2ABFAF]/10 p-3 rounded-full group-hover:bg-[#2ABFAF]/20 transition-colors duration-300">
                <Phone className="h-6 w-6 text-[#2ABFAF] flex-shrink-0" />
              </div>
              <div>
                <span className="font-bold text-lg block mb-2 text-[#1D9785]">Phone</span>
                <a href="tel:+923348230456" className="text-[#1D9785] hover:text-[#2ABFAF] hover:underline text-lg transition-colors duration-300">+92 334 8230456</a>
              </div>
            </div>
            <div className="flex items-start gap-4 text-[#113040] group hover:bg-[#2ABFAF]/5 p-4 rounded-xl transition-all duration-300">
              <div className="bg-[#2ABFAF]/10 p-3 rounded-full group-hover:bg-[#2ABFAF]/20 transition-colors duration-300">
                <Mail className="h-6 w-6 text-[#2ABFAF] flex-shrink-0" />
              </div>
              <div>
                <span className="font-bold text-lg block mb-2 text-[#1D9785]">Email</span>
                <a href="mailto:info@ezeeinsure.com" className="text-[#1D9785] hover:text-[#2ABFAF] hover:underline text-lg transition-colors duration-300">info@ezeeinsure.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4 text-[#113040] group hover:bg-[#2ABFAF]/5 p-4 rounded-xl transition-all duration-300">
              <div className="bg-[#2ABFAF]/10 p-3 rounded-full group-hover:bg-[#2ABFAF]/20 transition-colors duration-300">
                <User className="h-6 w-6 text-[#2ABFAF] flex-shrink-0" />
              </div>
              <div>
                <span className="font-bold text-lg block mb-2 text-[#1D9785]">Business Hours</span>
                <span className="text-lg leading-relaxed">Monday–Friday, 9:00 AM–6:00 PM</span>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#1D9785] flex flex-col justify-center">
            {submitted ? (
              <div className="text-green-600 text-xl font-semibold text-center py-12 animate-fade-in">Thank you! Your message has been sent.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#113040] font-medium mb-2">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2ABFAF]" />
                </div>
                <div>
                  <label className="block text-[#113040] font-medium mb-2">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2ABFAF]" />
                </div>
                <div>
                  <label className="block text-[#113040] font-medium mb-2">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2ABFAF]" />
                </div>
                <div>
                  <label className="block text-[#113040] font-medium mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2ABFAF]" />
                </div>
                <Button type="submit" className="bg-gradient-to-r from-[#2ABFAF] to-[#1D9785] text-white font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition-all w-full">Send Message</Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact; 