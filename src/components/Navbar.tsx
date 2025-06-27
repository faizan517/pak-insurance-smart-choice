
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Group Health", href: "/group-health" },
    { name: "Individual & Family", href: "/health" },
    { name: "Travel", href: "/travel" },
    { name: "Motor", href: "/motor" },
  ];

  const handleGetQuote = () => {
    console.log("Get Quote button clicked");
    window.dispatchEvent(new CustomEvent('openQuoteForm'));
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EEEEEE] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fd6b25ef-7816-4019-98ae-1372b7885033.png" 
              alt="Ezee Insure Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-[#333333] hover:text-[#1D9785] transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-[#888888]">
              <Phone className="h-4 w-4" />
              <span>+92 334 8230456</span>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] hover:from-[#1D9785]/90 hover:to-[#2ABFAF]/90 text-white font-medium"
              onClick={handleGetQuote}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-[#333333] hover:text-[#1D9785] transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-[#EEEEEE]">
                  <div className="flex items-center space-x-2 text-sm text-[#888888] mb-4">
                    <Phone className="h-4 w-4" />
                    <span>+92 334 8230456</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] hover:from-[#1D9785]/90 hover:to-[#2ABFAF]/90 text-white"
                    onClick={() => {
                      setIsOpen(false);
                      handleGetQuote();
                    }}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
