
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const QuoteForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    insuranceType: "",
    name: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    familyMembers: ""
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleOpenForm = () => {
      console.log("Quote form opening");
      setIsOpen(true);
    };
    window.addEventListener('openQuoteForm', handleOpenForm);
    return () => window.removeEventListener('openQuoteForm', handleOpenForm);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted with data:", formData);
    
    if (!formData.insuranceType || !formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    // Store form data in localStorage for the comparison page
    localStorage.setItem('quoteFormData', JSON.stringify(formData));
    
    console.log("Navigating to compare page");
    setIsOpen(false);
    navigate('/compare');
    
    toast({
      title: "Quote request submitted!",
      description: "Redirecting to compare quotes..."
    });
  };

  const handleInputChange = (field: string, value: string) => {
    console.log(`Updating ${field} to ${value}`);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#113040]">Get Your Free Quote</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="insuranceType" className="text-sm font-medium text-[#333333]">
              Insurance Type *
            </Label>
            <Select value={formData.insuranceType} onValueChange={(value) => handleInputChange('insuranceType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select insurance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="group-health">Group Health Insurance</SelectItem>
                <SelectItem value="individual-health">Individual & Family Health</SelectItem>
                <SelectItem value="travel">Travel Insurance</SelectItem>
                <SelectItem value="motor">Motor Insurance</SelectItem>
                <SelectItem value="home">Home Insurance</SelectItem>
                <SelectItem value="life">Life Insurance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-[#333333]">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium text-[#333333]">
                Age
              </Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                placeholder="Enter your age"
                min="18"
                max="100"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-[#333333]">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-[#333333]">
                Phone Number *
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+92 300 1234567"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium text-[#333333]">
                City
              </Label>
              <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="karachi">Karachi</SelectItem>
                  <SelectItem value="lahore">Lahore</SelectItem>
                  <SelectItem value="islamabad">Islamabad</SelectItem>
                  <SelectItem value="faisalabad">Faisalabad</SelectItem>
                  <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                  <SelectItem value="multan">Multan</SelectItem>
                  <SelectItem value="peshawar">Peshawar</SelectItem>
                  <SelectItem value="quetta">Quetta</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {(formData.insuranceType === 'individual-health' || formData.insuranceType === 'group-health') && (
            <div className="space-y-2">
              <Label htmlFor="familyMembers" className="text-sm font-medium text-[#333333]">
                Number of Family Members
              </Label>
              <Select value={formData.familyMembers} onValueChange={(value) => handleInputChange('familyMembers', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of members" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Member</SelectItem>
                  <SelectItem value="2">2 Members</SelectItem>
                  <SelectItem value="3">3 Members</SelectItem>
                  <SelectItem value="4">4 Members</SelectItem>
                  <SelectItem value="5">5+ Members</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] hover:from-[#1D9785]/90 hover:to-[#2ABFAF]/90 text-white"
            >
              Get Quote
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
