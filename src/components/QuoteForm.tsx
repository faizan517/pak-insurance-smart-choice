import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// TODO: Replace with your EmailJS credentials
const EMAILJS_SERVICE_ID  = "service_zcqx5xt";
const EMAILJS_TEMPLATE_ID = "template_ikfzeq5";
const EMAILJS_PUBLIC_KEY  = "NOPguYIR9tcAM_H5o";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export type QuoteFormProps = {
  insuranceType?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  insuranceTypeLabel?: string;
};

const QuoteForm = ({ insuranceType, open, onOpenChange, insuranceTypeLabel }: QuoteFormProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof open === 'boolean' && typeof onOpenChange === 'function';
  const dialogOpen = isControlled ? open! : internalOpen;
  const setDialogOpen = isControlled ? onOpenChange! : setInternalOpen;

  const [formData, setFormData] = useState({
    insuranceType: insuranceType || "",
    name: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    familyMembers: "",
    description: ""
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  // Open via custom event
  useEffect(() => {
    const handler = () => setDialogOpen(true);
    window.addEventListener('openQuoteForm', handler);
    return () => window.removeEventListener('openQuoteForm', handler);
  }, []);

  // Sync insuranceType prop
  useEffect(() => {
    if (insuranceType) {
      setFormData(prev => ({ ...prev, insuranceType }));
    }
  }, [insuranceType]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required
    const { insuranceType, name, email, phone } = formData;
    if (!insuranceType || !name || !email || !phone) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    // Send via EmailJS
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData
      );
      toast({ title: "Quote request emailed!", description: "We received your request.", variant: "default" });
      localStorage.setItem('quoteFormData', JSON.stringify(formData));
      setDialogOpen(false);
      // navigate('/compare');
    } catch (err) {
      console.error('EmailJS error:', err);
      toast({ title: "Failed to send email", description: "Try again later.", variant: "destructive" });
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[500px] w-full mx-auto px-4 max-h-[90vh] overflow-y-auto font-[Futura] ">
        <DialogHeader>
          <DialogTitle className="text-2xl font-normal text-[#113040] text-left font-[Ibrand] ">
            Get Your Free Quote
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Insurance Type */}
          <div className="space-y-2">
            <Label htmlFor="insuranceType" className="text-sm font-medium text-[#333333]">
              Insurance Type *
            </Label>
            <Select
              id="insuranceType"
              value={formData.insuranceType}
              onValueChange={v => handleInputChange('insuranceType', v)}
              disabled={!!insuranceType}
            >
              <SelectTrigger>
                {insuranceType && insuranceTypeLabel ? insuranceTypeLabel : <SelectValue placeholder="Select insurance type" />}
              </SelectTrigger>
              <SelectContent>
                {/* <SelectItem value="group-health">Group Health</SelectItem> */}
                <SelectItem value="group-life">Group Life</SelectItem>
                <SelectItem value="individual-health">Individual & Family Health</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="motor">Motor</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="domestic">Domestic Helper</SelectItem>
                <SelectItem value="parental">Parental</SelectItem>
                <SelectItem value="pet">Pet</SelectItem>
                <SelectItem value="shop">Shop</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-[#333333]">Full Name *</Label>
              <Input id="name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} placeholder="Your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-[#333333]">Phone Number *</Label>
              <Input id="phone" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} placeholder="+92 300 1234567" required />
            </div>
          </div>
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-[#333333]">Email Address *</Label>
            <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="Your email" required />
          </div>
          {/* Age & City */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium text-[#333333]">Age</Label>
              <Input id="age" value={formData.age} onChange={e => handleInputChange('age', e.target.value)} placeholder="Your age" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium text-[#333333]">City</Label>
              <Input id="city" value={formData.city} onChange={e => handleInputChange('city', e.target.value)} placeholder="Your city" />
            </div>
          </div> */}
          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-[#333333]">Description</Label>
            <textarea id="description" value={formData.description} onChange={e => handleInputChange('description', e.target.value)} placeholder="Additional details (optional)" className="w-full border border-gray-300 rounded-lg p-2 min-h-[80px]" />
          </div>
          {/* Family Members (conditional) */}
          {(formData.insuranceType === 'individual-health' || formData.insuranceType === 'group-health') && (
            <div className="space-y-2">
              <Label htmlFor="familyMembers" className="text-sm font-medium text-[#333333]">Number of Family Members</Label>
              <Select id="familyMembers" value={formData.familyMembers} onValueChange={v => handleInputChange('familyMembers', v)}>
                <SelectTrigger><SelectValue placeholder="Select members" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 font-normal font-[Ibrand] ">
            <Button type="button" variant="outline" onClick={() => setDialogOpen(false)} className="flex-1">Cancel</Button>
            <Button type="submit" className="flex-1 bg-gradient-to-r from-[#1D9785] to-[#2ABFAF] text-white">Get Quote</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
