import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/LogoC1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const insuranceCategories = [
    {
      name: "Health & Life",
      items: [
        { name: "Group Health Insurance", href: "/group-health" },
        { name: "Group Life Insurance", href: "/group-life" },
        { name: "Individual & Family Health", href: "/health" },
      ]
    },
    {
      name: "Motor & Travel",
      items: [
        { name: "Motor Insurance", href: "/motor" },
        { name: "Travel Insurance", href: "/travel" },
      ]
    },
    {
      name: "Property & Others",
      items: [
        { name: "Home Insurance", href: "/home" },
        { name: "Shop Insurance", href: "/shop" },
        { name: "Pet Insurance", href: "/pet" },
        { name: "Domestic Helper", href: "/domestic-helper" },
        { name: "Parental Insurance", href: "/parental" },
      ]
    }
  ];

  const handleMouseEnter = (categoryName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredCategory(categoryName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleGetQuote = () => {
    console.log("Get Quote button clicked");
    window.dispatchEvent(new CustomEvent('openQuoteForm'));
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EEEEEE] shadow-sm font-[Futura]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Ezee Insure Logo" 
              className="h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 font-[Futura]">
            {insuranceCategories.map((category) => (
              <div 
                key={category.name}
                className="relative font-[Futura]"
                onMouseEnter={() => handleMouseEnter(category.name)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Remove background on hover from Button */}
                <Button 
                  variant="ghost" 
                  className="text-[#333333] hover:text-[#1D9785] transition-colors duration-200 font-normal flex items-center gap-1 !bg-transparent hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"
                >
                  {category.name}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hoveredCategory === category.name ? 'rotate-180' : ''}`} />
                </Button>
                
                {/* Dropdown Content */}
                {hoveredCategory === category.name && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 font-[Futura] bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={() => handleMouseEnter(category.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="font-[Futura] block px-4 py-2 text-sm text-[#333333] hover:text-[#1D9785] transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/about"
              className="text-[#333333] hover:text-[#1D9785]  transition-colors duration-200 font-[Futura] font-normal"
            >
              About
            </Link>
            
            <Link
              to="/FAQ"
              className="text-[#333333] hover:text-[#1D9785] transition-colors duration-200 font-[Futura] font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-[#888888]">
              <Phone className="h-4 w-4" />
              <span>+92 334 8230456</span>
            </div>
            <Button 
              size="sm" 
              className="bg-[#F46416] hover:bg-[#F46416]/80 text-white font-medium  font-[Futura]"
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
                {insuranceCategories.map((category) => (
                  <div key={category.name}>
                    <div className="font-semibold text-[#1D9785] mb-2">{category.name}</div>
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-[#333333] hover:text-[#1D9785] transition-colors duration-200 font-medium py-1 pl-4 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
                
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="text-[#333333] hover:text-[#1D9785] transition-colors duration-200 font-medium py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/FAQ"
                    className="text-[#333333] hover:text-[#1D9785] transition-colors duration-200 font-medium py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
                
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
