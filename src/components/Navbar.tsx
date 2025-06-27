import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Group Health",
      items: [
        { name: "Employee Benefits", href: "/group-health/employee" },
        { name: "Corporate Health", href: "/group-health/corporate" },
        { name: "SME Health Plans", href: "/group-health/sme" },
        { name: "Group Medical", href: "/group-health/medical" },
      ]
    },
    {
      name: "Individual & Family",
      items: [
        { name: "Individual Health", href: "/health/individual" },
        { name: "Family Health", href: "/health/family" },
        { name: "Critical Illness", href: "/health/critical-illness" },
        { name: "Hospital Cash", href: "/health/hospital-cash" },
      ]
    },
    {
      name: "Travel",
      items: [
        { name: "Domestic Travel", href: "/travel/domestic" },
        { name: "International Travel", href: "/travel/international" },
        { name: "Hajj & Umrah", href: "/travel/hajj-umrah" },
        { name: "Student Protection", href: "/travel/student" },
      ]
    },
    {
      name: "Motor",
      items: [
        { name: "Car Insurance", href: "/motor" },
        { name: "Bike Insurance", href: "/bike" },
        { name: "Third Party", href: "/motor/third-party" },
        { name: "Comprehensive", href: "/motor/comprehensive" },
      ]
    },
    {
      name: "Specialized",
      items: [
        { name: "Home Insurance", href: "/home" },
        { name: "Domestic Helper", href: "/domestic-helper" },
        { name: "Parental Insurance", href: "/parental" },
        { name: "Pet Insurance", href: "/pet" },
        { name: "Shop Insurance", href: "/shop" },
      ]
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EEEEEE] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-[#113040] to-[#1D9785] p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#113040]">Ezee Insure</span>
              <span className="text-xs text-[#888888]">Insurance Made Ezee</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    <NavigationMenuTrigger className="text-[#333333] hover:text-[#1D9785] transition-colors duration-200 font-medium">
                      {category.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 bg-white">
                        {category.items.map((item) => (
                          <NavigationMenuLink key={item.name} asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#1D9785]/10 hover:text-[#1D9785] focus:bg-[#1D9785]/10 focus:text-[#1D9785]"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-[#888888]">
              <Phone className="h-4 w-4" />
              <span>+92 334 8230456</span>
            </div>
            <Link to="/compare">
              <Button size="sm" className="bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] hover:from-[#1D9785]/90 hover:to-[#2ABFAF]/90 text-white font-medium">
                Get Quote
              </Button>
            </Link>
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
                {navItems.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <h3 className="font-semibold text-[#113040] border-b border-[#EEEEEE] pb-2">
                      {category.name}
                    </h3>
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-[#333333] hover:text-[#1D9785] transition-colors duration-200 pl-4 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="pt-4 border-t border-[#EEEEEE]">
                  <div className="flex items-center space-x-2 text-sm text-[#888888] mb-4">
                    <Phone className="h-4 w-4" />
                    <span>+92 334 8230456</span>
                  </div>
                  <Link to="/compare">
                    <Button size="sm" className="w-full bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] hover:from-[#1D9785]/90 hover:to-[#2ABFAF]/90 text-white">
                      Get Quote
                    </Button>
                  </Link>
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
