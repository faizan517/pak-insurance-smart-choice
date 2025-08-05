import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// TODO: replace with your own EmailJS credentials
const EMAILJS_SERVICE_ID  = "service_zcqx5xt";
const EMAILJS_TEMPLATE_ID = "template_r65meav";
const EMAILJS_PUBLIC_KEY  = "NOPguYIR9tcAM_H5o";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Single option component with dynamic coloring
const EmployeeCountOption = ({ label, value, color, selected, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(value)}
    style={{
      backgroundColor: selected ? color : "#fff",
      borderColor: selected ? color : "#e5e7eb"
    }}
    className="flex items-center space-x-2 p-3 border rounded-lg w-full"
  >
    <span
      className="w-3 h-3 rounded-full flex-shrink-0"
      style={{ backgroundColor: selected ? "#fff" : color }}
    />
    <div className={`text-sm ${selected ? "text-white" : "text-gray-900"}`}>
      <div className="font-medium">{label}</div>
      <div className={selected ? "text-white/90" : "text-gray-500"}>employees</div>
    </div>
  </button>
);

const GroupHealthQuoteForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    renewal: "",
    employeeCount: ""
  });
  const { toast } = useToast();

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const handleRenewal = (value) => setForm({ ...form, renewal: value });
  const handleEmployeeCount = (value) => setForm({ ...form, employeeCount: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // basic validation
    if (!form.firstName || !form.lastName || !form.email) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }

    // send form data via EmailJS
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          mobile: form.mobile,
          company: form.company,
          renewal: form.renewal,
          employeeCount: form.employeeCount
        }
      );
      toast({ title: "Request submitted!", description: "We will call you back soon.", variant: "default" });
      // optional callback
      onSubmit?.();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: "Submission failed", description: "Please try again later.", variant: "destructive" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6 font-[Futura]">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-normal text-black font-[Ibrand]">Assure your employees of better health</h3>
        <button type="button" onClick={onSubmit} className="text-gray-500 hover:text-gray-700">
          {/* <X className="w-5 h-5" /> */}
        </button>
      </div>

      {/* Name/Email row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 text-gray-700 text-sm">First Name</label>
          <Input placeholder="First Name" value={form.firstName} onChange={handleChange('firstName')} className="bg-gray-100" />
        </div>
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Last Name</label>
          <Input placeholder="Last Name" value={form.lastName} onChange={handleChange('lastName')} className="bg-gray-100" />
        </div>
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Work Email Address</label>
          <Input type="email" placeholder="yourname@company.com" value={form.email} onChange={handleChange('email')} className="bg-gray-100" />
        </div>
      </div>

      {/* Mobile/Company/Renewal row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Mobile Number</label>
          <Input placeholder="888 8899 999" value={form.mobile} onChange={handleChange('mobile')} className="bg-gray-100" />
        </div>
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Company Name</label>
          <Input placeholder="Company Name" value={form.company} onChange={handleChange('company')} className="bg-gray-100" />
        </div>
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Insurance renewal due month?</label>
          <Select value={form.renewal} onValueChange={handleRenewal}>
            <SelectTrigger className="w-full bg-gray-100">
              <SelectValue placeholder="Select month…" />
            </SelectTrigger>
            <SelectContent>
              {['January','February','March','April','May','June','July','August','September','October','November','December'].map((m) => (
                <SelectItem key={m} value={m}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Employee count & Call button */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Employee count</label>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 flex-grow">
            <EmployeeCountOption label="0 to 100" value="0-100" color="#F4D35E" selected={form.employeeCount==='0-100'} onSelect={handleEmployeeCount} />
            <EmployeeCountOption label="100-500" value="100-500" color="#EE6C4D" selected={form.employeeCount==='100-500'} onSelect={handleEmployeeCount} />
            <EmployeeCountOption label="500-1000" value="500-1000" color="#8AC926" selected={form.employeeCount==='500-1000'} onSelect={handleEmployeeCount} />
            <EmployeeCountOption label="1000+" value="1000+" color="#4FB0AE" selected={form.employeeCount==='1000+'} onSelect={handleEmployeeCount} />
          </div>
          <Button type="submit" className="bg-[#1D9785] text-[#FFFFFF] font-normal text-base font-[Ibrand] whitespace-nowrap md:ml-4 md:mt-0">
            Get a call back
          </Button>
        </div>
      </div>
    </form>
  );
};

export default GroupHealthQuoteForm;
