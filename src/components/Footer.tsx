
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#113040] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Ezee Insure</span>
                <span className="text-xs text-slate-400">Insurance Made Ezee</span>
              </div>
            </Link>
            <p className="text-slate-300 leading-relaxed">
              More Than Just Insurance — Experience, Care, and Security, the Ezee Way. Making insurance accessible, understandable, and supportive for every Pakistani.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-slate-400">Smart PFM Pvt Ltd</p>
              <p className="text-sm text-slate-400">SECP Registered Company</p>
            </div>
          </div>

          {/* Insurance Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Insurance Products</h3>
            <div className="space-y-3">
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
            <h3 className="text-lg font-semibold">Support & Resources</h3>
            <div className="space-y-3">
              {[
                { name: "Help Center", href: "/help" },
                { name: "Claims Support", href: "/claims" },
                { name: "FAQ", href: "/faq" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" }
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
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#2ABFAF] mt-1" />
                <div>
                  <p className="text-white font-medium">+92 334 8230456</p>
                  <p className="text-sm text-slate-300">24/7 Customer Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#4CB2E1] mt-1" />
                <div>
                  <p className="text-white font-medium">info@ezeeinsure.com</p>
                  <p className="text-sm text-slate-300">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#F46416] mt-1" />
                <div>
                  <p className="text-white font-medium">123 Insurance Tower</p>
                  <p className="text-sm text-slate-300">Karachi, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#1D9785] mt-1" />
                <div>
                  <p className="text-white font-medium">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-slate-300">Business Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Ezee Insure. All rights reserved. | More Than Just Insurance — Experience, Care, and Security, the Ezee Way.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-slate-400 hover:text-[#2ABFAF] text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-[#2ABFAF] text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-[#2ABFAF] text-sm transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
