import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const faqs = [
  {
    q: "What is Group Health Insurance?",
    a: "A plan that covers medical expenses for employees under a single policy."
  },
  {
    q: "How do I get a Group Health Insurance quote?",
    a: "Click 'Get a Group Health Quote,' fill in basic company details, and receive a tailored proposal within 24 hours."
  },
  {
    q: "Can we customize our coverage benefits?",
    a: "Yes—choose add-ons like maternity, dental, wellness programs, and more."
  },
  {
    q: "How does the claims process work?",
    a: "Submit claims online via our portal; track status in real time; Ezee Insure handles follow-ups."
  },
  {
    q: "Which insurance companies does Ezee Insure partner with?",
    a: "We work with top insurers in Pakistan."
  },
  {
    q: "Is there a minimum number of employees for group plans?",
    a: "We offer group plans for as few as 05 employees—perfect for SMEs."
  },
  {
    q: "What documents are required to enroll?",
    a: "Basic employee information, company registration docs, and previous policy (if renewing)."
  },
  {
    q: "Can I add or remove employees mid-policy year?",
    a: "Yes. Use our HR portal or contact your account manager to update your roster."
  },
  {
    q: "How do individual plans differ from group plans?",
    a: "Individual plans are purchased personally, whereas group plans cover multiple employees under one group policy."
  },
  {
    q: "How do I contact support?",
    a: "Email info@ezeeinsure.com or call +92-334-8230456 (24/7)."
  }
];

const FAQ = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#E0F7FA] pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2ABFAF]/20 via-white to-[#1D9785]/10 text-center relative">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="bg-[#F46416]/20 rounded-full p-6 mb-4 shadow-lg">
            <HelpCircle className="h-16 w-16 text-[#F46416]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-normal text-[#113040] font-[Ibrand] mb-4">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-[#1D9785] font-[Futura] max-w-2xl mx-auto font-medium">
            Find answers to common questions about Group Health Insurance, claims, coverage limits, and policy setup with Ezee Insure.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 mt-8">
        <Accordion type="multiple" className="space-y-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={String(i)} className="bg-white rounded-2xl shadow-lg border border-[#2ABFAF]/20">
              <AccordionTrigger className="text-xl font-normal font-[Ibrand] text-[#113040] px-6 py-4 focus:outline-none">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6 font-[Futura]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

    </main>
<ContactForm />
    <Footer />
  </>
);

export default FAQ; 