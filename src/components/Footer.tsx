
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react";
import logo2 from '../assets/LogoC1white.png'
const Footer = () => {
  return (
    <footer className="bg-[#113040] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="">
            <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo2} 
              alt="Ezee Insure Logo" 
              className="h-20 w-auto"
            />
            </Link>
            <p className="text-slate-300 leading-relaxed text-left font-[Futura]">
              More Than Just Insurance Experience, Care, and Security, the Ezee Way. Making insurance accessible, understandable, and supportive for every Pakistani.
            </p>
            <div className="space-y-2">
              {/* <p className="text-sm text-slate-400 font-[Futura]">ezee insure SMC Pvt Ltd</p> */}
              {/* <p className="text-sm text-slate-400">SECP Registered Company</p> */}
            </div>
          </div>

          {/* Insurance Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-normal font-[Ibrand]">Insurance Products</h3>
            <div className="space-y-3 font-[Futura]">
              {[
                { name: "Group Health Insurance", href: "/group-health" },
                { name: "Individual & Family Health", href: "/health" },
                { name: "Travel Insurance", href: "/travel" },
                { name: "Motor Insurance", href: "/motor" },
                { name: "Home Insurance", href: "/home" },
                { name: "Parental Insurance", href: "/parental" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-slate-300 hover:text-[#2ABFAF] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-normal font-[Ibrand]">Support & Resources</h3>
            <div className="space-y-3 font-[Futura]">
              {[
                // { name: "Help Center", href: "/help" },
                // { name: "Claims Support", href: "/claims" },
                { name: "FAQ", href: "/faq" },
                { name: "About Us", href: "/about" },
                // { name: "Contact Us", href: "contact" },
                // { name: "Privacy Policy", href: "/privacy" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-slate-300 hover:text-[#2ABFAF] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-normal font-[Ibrand]">Contact Us</h3>
            <div className="space-y-4 font-[Futura]">
            <div className="flex items-start space-x-3">
                <MapPin className="h-8 w-8 text-white mt-1" />
                <div>
                  <p className="text-white font-medium font-[Ibrand]">302, Plot # LS 6/7, Street 09, Block 14, Gulistan-e-Johar</p>
                  <p className="text-sm text-slate-300">Karachi, Pakistan</p>
                </div>
              </div>
            <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-white mt-1" />
                <div>
                  <p className="text-white font-normal font-[Ibrand]">info@ezeeinsure.com</p>
                  <p className="text-sm text-slate-300">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-white mt-1" />
                <div>
                  <p className="text-white font-medium font-[Ibrand]">+92 334 8230456</p>
                  <p className="text-sm text-slate-300">24/7 Customer Support</p>
                </div>
              </div>
              
              
              
              
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-white mt-1" />
                <div>
                  <p className="text-white font-medium font-[Ibrand]">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-slate-300">Business Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 font-[Futura]">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center">
              © 2025 Ezee Insure. All rights reserved.
            </p>
            {/* <div className="flex space-x-6">
              <Link to="/privacy" className="text-slate-400 hover:text-[#2ABFAF] text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-[#2ABFAF] text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-[#2ABFAF] text-sm transition-colors duration-200">
                Contact Us
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
