
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">ezee insure</span>
                <span className="text-xs text-slate-400">Insurance Platform</span>
              </div>
            </Link>
            <p className="text-slate-300 leading-relaxed">
              Pakistan's trusted insurance marketplace, making insurance simple, transparent, and accessible for everyone.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-slate-400">Smart PFM Pvt Ltd</p>
              <p className="text-sm text-slate-400">SECP Registered (NTN: 7461155)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Insurance Products</h3>
            <div className="space-y-3">
              {[
                { name: "Motor Insurance", href: "/motor" },
                { name: "Health Insurance", href: "/health" },
                { name: "Travel Insurance", href: "/travel" },
                { name: "Life Insurance", href: "/life" },
                { name: "Takaful Insurance", href: "/takaful" },
                { name: "Compare All", href: "/compare" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
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
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Refund Policy", href: "/refund" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
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
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">021-111-212-212</p>
                  <p className="text-sm text-slate-300">Customer Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="text-white font-medium">info@ezeeinsure.pk</p>
                  <p className="text-sm text-slate-300">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Karachi, Pakistan</p>
                  <p className="text-sm text-slate-300">Head Office</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Mon-Sat: 9:00 AM - 6:00 PM</p>
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
              © 2025 ezee insure Insurance Platform. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
