import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Heart, Zap, Briefcase, Building2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import about from '../assets/about.png'
const values = [
  {
    icon: <CheckCircle className="h-8 w-8 text-[#2ABFAF]" />, title: "Simplicity", desc: "Clear policies, easy processes."
  },
  {
    icon: <Shield className="h-8 w-8 text-[#2ABFAF]" />, title: "Integrity", desc: "Honest advice, no hidden costs."
  },
  {
    icon: <Heart className="h-8 w-8 text-[#2ABFAF]" />, title: "Empathy", desc: "Real support when you need it most."
  },
  {
    icon: <Zap className="h-8 w-8 text-[#2ABFAF]" />, title: "Innovation", desc: "Always improving with digital solutions."
  },
];

const About = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#E0F7FA] pb-20">
      {/* Hero Section */}
      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 px-4">
          {/* Left: Text */}
          <div className="flex-1 min-w-[220px] w-full mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4 md:mb-6 text-left font-[Ibrand]">
              About <span className="text-[#2ABFAF]">Ezee Insure</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-[Futura] text-[#113040] mb-4 text-left max-w-xl">
              Founded by industry veterans frustrated with confusing policies & slow service, Ezee Insure brings over 20 years of combined expertise to deliver a fresh, user-first approach. We exist to make insurance accessible, understandable, and truly supportive for every Pakistani.
            </p>
          </div>
          {/* Right: Image with border/shadow */}
          <div className="flex-1 flex justify-center items-center relative w-full">
            <img
              src={about}
              alt="Family walking together"
              className="relative z-10 object-cover w-full max-w-[500px] h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="max-w-4xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#F46416]">
          <h2 className="text-2xl font-normal font-[Ibrand] text-[#113040] mb-4">Our Mission</h2>
          <p className="text-lg font-[Futura] text-gray-700">To make insurance accessible, understandable, and supportive for every Pakistani—business or individual.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#F46416]">
          <h2 className="text-2xl font-normal text-[#113040] mb-4 font-[Ibrand]">Our Vision</h2>
          <p className="text-lg font-[Futura] text-gray-700">To be Pakistan's most trusted insurance partner, known for simplicity, speed, and service excellence.</p>
        </div>
      </section>
      {/* Values */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-normal text-[#113040] font-[Ibrand] mb-10 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border-t-4 border-[#2ABFAF]/20">
              {v.icon}
              <h3 className="text-xl font-normal font-[Ibrand] text-[#1D9785] mt-4 mb-2">{v.title}</h3>
              <p className="text-gray-600 font-[Futura] text-base">{v.desc}</p>
            </div>
          ))}
        </div>

      </section>
    </main>
<ContactForm />
    <Footer />
  </>
);

export default About; 