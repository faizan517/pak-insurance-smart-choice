import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Briefcase, Shield, Users, Heart, Plane, Car,
  Home, UserCheck, User, PawPrint, ShoppingBag
} from "lucide-react";

const services = [
  {
    icon: <Users className="h-8 w-8 text-[#2ABFAF]" />, title: "Group Health Insurance", id: "group-health",
    desc: "Protect your employees with comprehensive medical and wellness coverage.",
    features: [
      "In-Patient Hospitalization: Coverage for room, boarding, ICU, and hospital expenses.",
      "Major Medical Insurance: High-limit protection for critical illnesses and surgeries.",
      "Daycare Procedures & Surgeries: Benefits for treatments not requiring an overnight stay.",
      "Specialized Investigations in OPD: Diagnostics coverage for MRIs, CT scans, and much more.",
      "Emergency Accidental Treatment: Immediate care for accidental injuries.",
      "Out-Patient (OPD) Services: Optional coverage for clinic visits and doctor consultations.",
      "Pre & Post Hospitalization: Expenses before and after inpatient treatment.",
      "Maternity Benefits: Coverage for pregnancy and childbirth-related costs.",
      "Non-Accidental Medical Emergencies: Emergency treatments for sudden illnesses.",
      "Wellness Programs: Annual health screenings, preventive care, and telehealth access."
    ],
    cta: "Get a Group Health Quote"
  },
  {
    icon: <Shield className="h-8 w-8 text-[#2ABFAF]" />, title: "Group Life Insurance", id: "group-life",
    desc: "Secure your team's future with affordable group rates.",
    features: [
      "Flexible Coverage: Tailor sum assured by employee grade.",
      "Fast Payouts: Dedicated claims support for beneficiaries."
    ],
    cta: "Get a Group Life Quote"
  },
  {
    icon: <Heart className="h-8 w-8 text-[#2ABFAF]" />, title: "Individual & Family Health Plans", id: "family-health",
    desc: "Secure health coverage for yourself and loved ones with customizable plans.",
    features: [
      "Annual Hospitalization Limits: Choose from PKR 100,000 up to PKR 650,000 per person.",
      "Daily Room & Board: Up to PKR 20,000 per day.",
      "Sub-Limits: Emergency accidental treatment, local ambulance, day-care surgeries, and diagnostic scans.",
      "Specialized Investigations & Daycare: MRI, CT scans, endoscopy, dialysis, cataract (IOL up to PKR 25,000) and minor procedures.",
      "Pre & Post Hospitalization: 30 days pre- and 30 days post-hospitalization coverage.",
      "Maternity & Newborn Care: Optional add-on covering prenatal, delivery (normal/C-section), postnatal, and newborn expenses.",
      "COVID-19 Coverage: Included for fully vaccinated members under the plan.",
      "Network Access: Cashless treatment at 230+ panel hospitals across Pakistan.",
      "Multiple Plan Tiers: Multiple plans to match your budget and coverage needs.",
      "24/7 Medical Helpline: Expert guidance anytime.",
      "Digital Policy Management: Download cards and policy docs online within 15 days of issuance.",
      "Fast Claims: File online and receive reimbursements in 7 days after the requirement completion."
    ],
    cta: "Explore Individual Plans"
  },
  {
    icon: <Plane className="h-8 w-8 text-[#2ABFAF]" />, title: "Travel Insurance", id: "travel",
    desc: "Whether you're traveling across Pakistan or abroad, we cover all your travel needs with easy, digital support and fast claims.",
    features: [
      "Domestic Travel: Coverage for medical emergencies, lost baggage, trip interruptions, and more within Pakistan.",
      "International Travel: Emergency medical care, evacuation, repatriation, and baggage protection anywhere in the world.",
      "Hajj & Umrah: Coverage for unforeseen incidents, medical assistance, and repatriation during pilgrimage.",
      "Ziarat Packages: Comprehensive protection for religious visits with 24/7 support.",
      "Student Protection: Health, travel delays, personal liability, and emergency assistance for international students.",
      "7-Day Claim Settlement: Fast-track processing so you get reimbursed quickly.",
      "30-Second Claim Filing: Quick and simple online claim submission.",
      "End-to-End Digital Experience: Manage your policy, submit claims, and track status entirely online."
    ],
    cta: "Get Travel Insurance"
  },
  {
    icon: <Car className="h-8 w-8 text-[#2ABFAF]" />, title: "Motor Insurance", id: "motor",
    desc: "Protect your vehicle with flexible, technology-driven coverage.",
    features: [
      "Comprehensive Plans: Covers theft, accidental damage, total loss, and third-party liability.",
      "Risk-Based Premiums: Customized premium according to your vehicle's profile.",
      "Self-Assessment: Submit minor claims at preferred service centers without hassle.",
      "Zero-Claim Bonus: Earn rewards for safe driving.",
      "Fast Claim Settlement: 7-day turnaround and 30-second online claim lodging.",
      "Value-Adds: Courtesy cars, registration cost cover, and telematics-based safe-driving discounts."
    ],
    cta: "Get Motor Insurance"
  },
  {
    icon: <Home className="h-8 w-8 text-[#2ABFAF]" />, title: "Home Insurance", id: "home",
    desc: "Your home is a sanctuary of memories and dreams. Ezee Insure's Home Insurance goes beyond coverage—it's a commitment to protect your emotional and financial investment.",
    features: [
      "Home Owner Protection: Safeguard your property and contents from accidental damage, fire, theft, and natural disasters.",
      "Landlord Coverage: Ensure your rental property's safety with comprehensive protection for structure, liability, and tenant defaults.",
      "Tenant Shield: Coverage for personal belongings, liability, and rent loss.",
      "7-Day Claim Settlement: Fast-track processing for prompt reimbursements.",
      "30-Second Claim Filing: Quick, simple online claim submission.",
      "End-to-End Digital Experience: Manage policies, file claims, and track status entirely online."
    ],
    cta: "Get Home Insurance"
  },
  {
    icon: <UserCheck className="h-8 w-8 text-[#2ABFAF]" />, title: "Domestic Helper Insurance", id: "domestic-helper",
    desc: "Ensure your household staff—drivers, cooks, nannies, gardeners, and gatekeepers—have the health protection they deserve.",
    features: [
      "Online Enrollment & Premium Payment: Easy purchase and renewal via our digital platform or mobile app.",
      "In-Patient Hospitalization: Coverage for room, boarding, ICU, and hospital expenses up to your selected limit.",
      "Emergency Accidental Treatment: Immediate cover for accidental injuries and emergency care.",
      "Pre & Post Hospitalization: Expenses for 15 days before and after inpatient treatment.",
      "Dental Treatment (Accidental Only): Pain relief dental care within 48 hours of an accident.",
      "Non-Panel Reimbursements: Submit claims for non-network hospitals through the app—claims reimbursed seamlessly.",
      "Maternity Benefits (Optional): Coverage for prenatal, delivery, and postnatal hospitalization costs.",
      "Annual Limit Options: Choose from flexible sum-insured slabs per family or per person.",
      "7-Day Claim Settlement: Quick reimbursement turnaround, once requirement is completed.",
      "30-Second Claim Lodging: File claims instantly online.",
      "Offline Claim Support: Assistance through offline channels if needed."
    ],
    cta: "Get Domestic Helper Cover"
  },
  {
    icon: <User className="h-8 w-8 text-[#2ABFAF]" />, title: "Parental Insurance", id: "parental",
    desc: "Honor and protect the health of your parents with tailored coverage up to age 75.",
    features: [
      "Options A–D: Annual hospitalization limits from PKR 300,000 to PKR 1,000,000.",
      "Daily Room & Board: Sub-limit up to PKR 20,000 per day.",
      "Emergency Coverage: Accidental ER visits and up to PKR 5,000 for medical emergencies.",
      "Specialized Investigations & Daycare: Coverage for MRI, CT scan, angiography, dialysis, cataract (IOL up to PKR 25,000), and minor procedures.",
      "Pre & Post Hospitalization: 30 days prior and post coverage.",
      "Age Bands: 45–49, 50–54, 55–59, 60–64, 65–69, 70–75 years with tiered premiums.",
      "Pre-Existing Phased Cover: 25% in year 1, 50% year 2, 75% year 3, and 100% from year 4.",
      "Network Hospitals: Cashless access at 300+ approved facilities.",
      "Reimbursement via IBFT: Seamless non-panel claim settlement.",
      "Dedicated Seniors Support: Personalized assistance and annual health check-ups."
    ],
    cta: "Protect Your Parents"
  },
  {
    icon: <PawPrint className="h-8 w-8 text-[#2ABFAF]" />, title: "Pet Insurance", id: "pet",
    desc: "Give your pets the care they deserve with specialized veterinary coverage.",
    features: [
      "Age Eligibility: Cats & dogs aged 8 weeks to 8 years.",
      "Illness Benefits: Covers treatment costs for illnesses during hospitalization, including diagnostics (CT, MRI), cancer care, and specialized therapies.",
      "Accident Benefits: Covers accidental injuries such as fractures, wound treatment, burns, and emergency care.",
      "Non-Accidental Treatment: Therapeutic care including IV fluids, medications, and alternative therapies prescribed by a licensed veterinarian.",
      "Waiting Periods: 30 days for illnesses, 3 months for orthopedic issues.",
      "Wellness Add-Ons: Optional annual health check-ups and preventive care packages.",
      "Digital Claims: Submit and track claims online in under 30 seconds.",
      "Fast Payouts: Claims settled within 7 days after the requirement completion.",
      "Comprehensive Support: 24/7 helpline for veterinary assistance and claim inquiries."
    ],
    cta: "Get Pet Insurance"
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-[#2ABFAF]" />, title: "Shop Insurance", id: "shop",
    desc: "Comprehensive coverage for your business premises.",
    features: [
      "Covers fire, theft, natural disasters, and accidental damage.",
      "Flexible sum-insured options for small and large businesses.",
      "Business interruption cover available.",
      "Fast claim settlement and digital policy management."
    ],
    cta: "Get Shop Insurance"
  }
];
const Services = () => (
  <>
    <Navbar />
    <main className="bg-white">
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] bg-gradient-to-r from-white to-[#1D9785] flex flex-col justify-center relative text-white">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center px-6 py-12">
          <div className="flex-1">
            {/* Placeholder for future image or illustration */}
          </div>
          <div className="flex-1 text-right">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              But I must explain<br />to you how all<br />this mistaken idea of.
            </h1>
            <p className="mb-6 max-w-md ml-auto">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...
            </p>
            <Button className="bg-gradient-to-r from-[#2ABFAF] to-[#1D9785] text-white rounded-full px-6 py-2 hover:scale-105 transition">
              Commodi Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid gap-24">
        {services.map((s, i) => (
          <div
            key={s.id}
            id={s.id}
            className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-10 items-start`}
          >
            <div className="bg-[#2ABFAF]/10 rounded-2xl p-6 flex items-center justify-center">
              {s.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#113040] mb-2">
                {s.title}
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4">{s.desc}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                {s.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <Button className="bg-gradient-to-r from-[#2ABFAF] to-[#1D9785] text-white font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition-all">
                {s.cta}
              </Button>
            </div>
          </div>
        ))}
      </section>
      {/* Contact Form Section */}
      <section className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-20 mt-8 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-[#113040] mb-4">Contact Us</h3>
        <form className="w-full space-y-4">
          <div className="flex gap-4">
            <input type="text" placeholder="Name" className="flex-1 border border-gray-300 rounded-lg px-4 py-2" />
            <input type="email" placeholder="Email" className="flex-1 border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <div className="flex gap-4">
            <input type="text" placeholder="Phone" className="flex-1 border border-gray-300 rounded-lg px-4 py-2" />
            <input type="text" placeholder="Subject" className="flex-1 border border-gray-300 rounded-lg px-4 py-2" />
          </div>
          <textarea placeholder="Message" className="w-full border border-gray-300 rounded-lg px-4 py-2" rows={4}></textarea>
          <Button className="bg-[#2ABFAF] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-[#113040] transition-all w-full">Send Message</Button>
        </form>
      </section>
    </main>
    <Footer />
  </>
);

export default Services;
