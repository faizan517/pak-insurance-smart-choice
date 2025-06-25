
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
      name: "Car",
      items: [
        { name: "Motor Insurance", href: "/motor" },
        { name: "Third Party Liability", href: "/motor/third-party" },
        { name: "Comprehensive Coverage", href: "/motor/comprehensive" },
        { name: "Auto Takaful", href: "/motor/takaful" },
      ]
    },
    {
      name: "Bike",
      items: [
        { name: "Motorcycle Insurance", href: "/bike" },
        { name: "Bike Third Party", href: "/bike/third-party" },
        { name: "Bike Comprehensive", href: "/bike/comprehensive" },
      ]
    },
    {
      name: "Health",
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
        { name: "Schengen Visa", href: "/travel/schengen" },
        { name: "Student Travel", href: "/travel/student" },
        { name: "Visitor Travel", href: "/travel/visitor" },
        { name: "Hajj Umrah", href: "/travel/hajj-umrah" },
      ]
    },
    {
      name: "Global Travel Insurance",
      items: [
        { name: "Worldwide Coverage", href: "/travel/worldwide" },
        { name: "Multi-Trip", href: "/travel/multi-trip" },
        { name: "Single Trip", href: "/travel/single-trip" },
        { name: "Business Travel", href: "/travel/business" },
      ]
    },
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
      name: "Takaful",
      items: [
        { name: "Motor Takaful", href: "/takaful/motor" },
        { name: "Travel Takaful", href: "/takaful/travel" },
        { name: "Family Takaful", href: "/takaful/family" },
        { name: "General Takaful", href: "/takaful/general" },
      ]
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">Smart Choice</span>
              <span className="text-xs text-slate-600">Insurance Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                      {category.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 bg-white">
                        {category.items.map((item) => (
                          <NavigationMenuLink key={item.name} asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-blue-600 focus:bg-slate-50 focus:text-blue-600"
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
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Phone className="h-4 w-4" />
              <span>021-111-212-212</span>
            </div>
            <Link to="/compare">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
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
                    <h3 className="font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      {category.name}
                    </h3>
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-slate-700 hover:text-blue-600 transition-colors duration-200 pl-4 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2 text-sm text-slate-600 mb-4">
                    <Phone className="h-4 w-4" />
                    <span>021-111-212-212</span>
                  </div>
                  <Link to="/compare">
                    <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
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
