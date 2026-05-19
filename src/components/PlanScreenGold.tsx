import React, { useMemo, useState } from 'react';
import { ArrowLeft, Info, Building2, Phone, Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/efu.png';

// Dialog + Inputs (shadcn/ui)
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type BuyForm = {
  fullName: string;
  dob: string;
  cnic: string;
  email: string;
  phone: string;
};

const initialBuyForm: BuyForm = {
  fullName: '',
  dob: '',
  cnic: '',
  email: '',
  phone: '',
};

const WEB3FORMS_ACCESS_KEY =
  (import.meta as any)?.env?.VITE_WEB3FORMS_KEY || '7073a61e-9061-4faf-aa77-6cb35a58f056';

const PlanDetails = () => {
  const navigate = useNavigate();

  // Plan data
  const planData = {
    provider: "EFU Life",
    planName: "Health Shield - Gold",
    hospitalizationCover: "Rs. 4.5 lac per person",
    roomType: "Semi-Pvt",
    hospitals: "290 Hospitals",
    dailyRoomLimit: "Private",
    cashlessOptions: "290 Hospitals",
    sitTests: "Rs.90,000",
    daycareSurgeries: "49 Daycare",
    complicatedDeliveryLimit: "Rs. 180,000",
    periodicity: "Premium/Year"
  };

  const medicalBenefits = [
    { title: "Emergency Dental Treatment due to Accidental Injuries", status: "Covered", info: true, benefit: "Covered (within 48 hours of an accident only)" },
    { title: "Emergency Accidental Outpatient Expense", status: "Covered", info: true, benefit: "Covered (within 48 hours of an accident only)"},
    { title: "Emergency International Expenses", status: "Covered", info: true, benefit: "Covered Reasonable & Customary charges only for emergency hospitalization abroad."},
    { title: "Daycare Surgeries & Specialized Investigations", status: "Covered", info: true, benefit: "Dialysis, Cataract, MRI/CT, Endoscopy, Thallium, Angio, Echo, Treatment of fractures, Emergency dental for pain relief within 48 hours (accidental)"},
    { title: "Pre & Post Hospitalization", status: "30 Days", info: true, benefit: "Consultations, medicines and lab tests within window covered"},
    { title: "Freelook Period", status: "14 Days after the date of deduction", info: false, benefit: "Cancel within 14 days for full refund if no claim"},
    { title: "Waiting Period", status: "14 Days from the date of deduction", info: true, benefit: "Only accidental emergencies covered during waiting period"},
    { title: "Maternity", status: "Pay additional Rs 32,000 and get covered for up to Rs 180,000", info: true, benefit: "Optional rider with 9-month waiting period"},
  ];

  const exclusions = [
    { id: 'a', text: "Any treatment or operation deemed ‘medically unnecessary’ including plastic surgery, spa treatment, tests or treatments related to fertility, infertility, contraception or sterilization and prostheses, corrective devices and medical appliances not surgically required." },
    { id: 'b', text: "Birth defects or congenital illness." },
    { id: 'c', text: "Self-inflicted injury, attempted suicide, abuse of alcohol, drug addiction or abuse and treatment of any sexually transmitted diseases." },
    { id: 'd', text: "Psychotic, mental or nervous disorders (including any neuroses and their physiological or psychosomatic manifestations) or sexual reassignment (whether or not for psychological reasons)." },
    { id: 'e', text: "Any experimental or unproven treatment." },
    { id: 'f', text: "Participating in exercises or operations while serving with either of the armed or paramilitary forces or while performing any form of police duty." },
    { id: 'g', text: "Injury or illness due to natural catastrophes, epidemic, including, but not limited to, flood, earthquake, avalanche and cyclone." },
    { id: 'h', text: "Treatment received outside Pakistan." },
    { id: 'i', text: "9-month waiting period for maternity (if covered in the plan); in case of non-coverage, it will be excluded." },
    { id: 'j', text: "Any cosmetic surgeries." },
  ];

  const moreFeatures = [
    {
      title: "Pre-existing conditions covered",
      details: [
        "25% of the respective H&R Limits for the first year.",
        "50% of the respective H&R Limits for the second year.",
        "100% of the respective H&R Limits for the third year and onwards.",
      ],
    },
  ];

  // Premium math
  const basePremium = 30500;
  const maternityAddOn = 47500;
  const maternityCover = false;
  const totalPremium = 32000;

  // UI state
  const [hoveredBenefitIndex, setHoveredBenefitIndex] = useState<number | null>(null);

  // BUY NOW dialog state
  const [openBuy, setOpenBuy] = useState(false);
  const [form, setForm] = useState<BuyForm>(initialBuyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof BuyForm, string>>>({});
  const [genericError, setGenericError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (key: keyof BuyForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setGenericError(null);
  };

  // validators
  const isEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v.trim());
  const isCnic  = (v: string) => /^(\d{5}-\d{7}-\d{1}|\d{13})$/.test(v.trim());
  const isPhone = (v: string) => /^(03\d{9}|\+92\d{10})$/.test(v.trim());
  const notEmpty = (v: string) => v.trim().length > 1;

  const validate = (): boolean => {
    const next: Partial<Record<keyof BuyForm, string>> = {};
    if (!notEmpty(form.fullName)) next.fullName = 'Full name is required';
    if (!form.dob) next.dob = 'Date of birth is required';
    if (!isCnic(form.cnic)) next.cnic = 'CNIC must be 13 digits or 12345-1234567-1';
    if (!isEmail(form.email)) next.email = 'Enter a valid email';
    if (!isPhone(form.phone)) next.phone = 'Phone must be 03XXXXXXXXX or +92XXXXXXXXXX';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleBuySubmit = async () => {
    if (submitting) return;
    if (!validate()) return;

    setSubmitting(true);
    setGenericError(null);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New EFU Health Shield - Gold lead`,
        from_name: "Ezee Insure Website",
        name: form.fullName,
        email: form.email,
        // optional visible custom fields:
        phone: form.phone,
        cnic: form.cnic,
        dob: form.dob,
        plan: planData.planName,
        // premium: `PKR ${totalPremium.toLocaleString()}`,
        // main message body (nice to have for email clients):
        message: [
          `Plan: ${planData.planName}`,
          `DOB: ${form.dob}`,
          `CNIC: ${form.cnic}`,
          `Phone: ${form.phone}`,
          // `Premium: PKR ${totalPremium.toLocaleString()}`
        ].join("\n"),
        // Optional server-side redirect after success:
        // redirect: "https://your-site.com/thank-you",
        // Honeypot (bots will likely fill this):
        botcheck: ""
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data?.success) {
        setSuccess(true);
        setSubmitting(false);
        setTimeout(() => {
          setOpenBuy(false);
          setSuccess(false);
          setForm(initialBuyForm);
          navigate('/');
        }, 2500);
      } else {
        console.error("Web3Forms error:", data);
        setGenericError(data?.message || "Submission failed. Please try again.");
        setSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setGenericError("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" size="sm" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to plans
          </Button>
        </div>
      </div>

      {/* Plan Overview */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img src={logo} alt="logo" className="w-28 h-auto" />
                  <div className="flex-1">
                    <h1 className="text-xl font-bold text-foreground mb-2">{planData.planName}</h1>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <span>Hospitalization Cover</span>
                        </div>
                        <div className="font-medium">{planData.hospitalizationCover}</div>
                        <div className="text-muted-foreground">{planData.roomType}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <span>Daily Room & Board Limit</span>
                        </div>
                        <div className="font-medium">{planData.dailyRoomLimit}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <span>Cashless Treatment at</span>
                        </div>
                        <div className="font-medium">{planData.hospitals}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Normal Delivery Limit</div>
                        <div className="font-medium">{planData.sitTests}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Complicated Delivery Limit</div>
                        <div className="font-medium">{planData.complicatedDeliveryLimit}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="benefits">Medical Benefits</TabsTrigger>
                <TabsTrigger value="documents">Policy Documents</TabsTrigger>
                <TabsTrigger value="claims">Exclusions</TabsTrigger>
                <TabsTrigger value="features">More Features</TabsTrigger>
              </TabsList>

              <TabsContent value="benefits" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {medicalBenefits.map((benefit, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 relative">
                            <h3 className="font-medium text-sm">{benefit.title}</h3>
                            {benefit.info && (
                              <div
                                className="relative"
                                onMouseEnter={() => setHoveredBenefitIndex(index)}
                                onMouseLeave={() => setHoveredBenefitIndex(null)}
                                style={{ display: 'inline-block' }}
                              >
                                <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                {hoveredBenefitIndex === index && benefit.benefit && (
                                  <div className="absolute z-20 left-1/2 -translate-x-1/2 mt-2 min-w-[220px] max-w-xs bg-white border border-gray-200 shadow-lg rounded px-3 py-2 text-xs text-gray-800">
                                    {benefit.benefit}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="mt-1">
                            {benefit.status === 'Covered' ? (
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                Covered
                              </Badge>
                            ) : (
                              <div className="text-sm text-muted-foreground">{benefit.status}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="documents" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Policy Documents</h3>
                      <p className="text-muted-foreground">All policy documents will be available after purchase.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="claims" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Exclusions</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The following treatments, events, conditions, activities and their related or consequential expenses are excluded from the Policy, unless specifically agreed upon in writing by the Company:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 pl-2">
                        {exclusions.map((item) => (
                          <li key={item.id}>{item.text}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">More Features</h3>
                      {moreFeatures.map((feature, index) => (
                        <div key={index} className="mb-4">
                          <h4 className="font-medium text-base mb-2">{feature.title}</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-2">
                            {feature.details.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Purchase Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 shadow-lg border-primary/30 border-2">
              <CardHeader className="bg-primary/5 rounded-t-lg pb-4">
                <div className="flex flex-col items-center">
                  <div className="text-lg font-bold mb-1 text-primary">Premium by Age</div>
                  <table className="w-full text-sm mb-2 border border-muted rounded overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="py-2 px-3 border-b border-muted font-semibold text-left">Age</th>
                        <th className="py-2 px-3 border-b border-muted font-semibold text-right">Annual Premium (PKR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-muted/50 transition">
                        <td className="py-2 px-3 border-b border-muted">2 mo - 17 yrs</td>
                        <td className="py-2 px-3 border-b border-muted text-right">19,000</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition">
                        <td className="py-2 px-3 border-b border-muted">18 - 45 yrs</td>
                        <td className="py-2 px-3 border-b border-muted text-right">13,500</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition">
                        <td className="py-2 px-3 border-b border-muted">46 - 59 yrs</td>
                        <td className="py-2 px-3 border-b border-muted text-right">20,000</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition">
                        <td className="py-2 px-3 border-b border-muted">60 - 65 yrs</td>
                        <td className="py-2 px-3 border-b border-muted text-right">28,500</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition">
                        <td className="py-2 px-3 border-b border-muted">Contribution for maternity Plans (Optional Rider) *</td>
                        <td className="py-2 px-3 border-b border-muted text-right">32,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardHeader>
              <CardContent className="space-y-5 pt-6">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-base font-semibold py-2 rounded-lg shadow"
                  size="lg"
                  onClick={() => setOpenBuy(true)}
                >
                  Buy Now
                </Button>
                <div className="pt-4 border-t border-muted space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="font-medium">+92-334-8230456</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="font-medium">info@ezeeinsure.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* BUY NOW DIALOG */}
      <Dialog open={openBuy} onOpenChange={(v) => { setOpenBuy(v); if (!v) { setSuccess(false); } }}>
        <DialogContent className="sm:max-w-md">
          {!success ? (
            <>
              <DialogHeader>
                <DialogTitle>Enter Details</DialogTitle>
              </DialogHeader>

              <div className="space-y-4 pt-2">
                {/* (Optional) hidden honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />

                {/* Generic top error */}
                {genericError && (
                  <div className="text-xs text-red-600 -mt-2">{genericError}</div>
                )}

                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="e.g. Muhammad Ali"
                    value={form.fullName}
                    onChange={(e) => onChange('fullName', e.target.value)}
                  />
                  {errors.fullName && <p className="text-xs text-red-600">{errors.fullName}</p>}
                </div>

                {/* DOB */}
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={form.dob}
                    max={new Date().toISOString().split('T')[0]}
                    onChange={(e) => onChange('dob', e.target.value)}
                  />
                  {errors.dob && <p className="text-xs text-red-600">{errors.dob}</p>}
                </div>

                {/* CNIC */}
                <div className="space-y-2">
                  <Label htmlFor="cnic">CNIC</Label>
                  <Input
                    id="cnic"
                    placeholder="12345-1234567-1"
                    value={form.cnic}
                    onChange={(e) => onChange('cnic', e.target.value)}
                  />
                  {errors.cnic && <p className="text-xs text-red-600">{errors.cnic}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => onChange('email', e.target.value)}
                  />
                  {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Number</Label>
                  <Input
                    id="phone"
                    placeholder="03XXXXXXXXX"
                    value={form.phone}
                    onChange={(e) => onChange('phone', e.target.value)}
                  />
                  {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                </div>

                {/* Summary strip */}
                <div className="rounded-lg border p-3 text-sm bg-muted/30">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Plan</span>
                    <span className="font-medium">{planData.planName}</span>
                  </div>
                  {/* <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Premium</span>
                    <span className="font-semibold">PKR {totalPremium.toLocaleString()}</span>
                  </div> */}
                </div>
              </div>

              <DialogFooter className="mt-4">
                <Button variant="outline" onClick={() => setOpenBuy(false)} disabled={submitting}>
                  Cancel
                </Button>
                <Button onClick={handleBuySubmit} disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Confirm & Continue'}
                </Button>
              </DialogFooter>
            </>
          ) : (
            // SUCCESS VIEW
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 grid place-items-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center animate-[pop_300ms_ease-out]">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold">Thank you!</h3>
              <p className="text-sm text-slate-600 mt-1">
                Your details have been received. Redirecting you to <b>Home</b>…
              </p>
              <div className="mt-5">
                <Button onClick={() => { setOpenBuy(false); setSuccess(false); navigate('/'); }}>
                  Go to Homepage now
                </Button>
              </div>
              <style>{`
                @keyframes pop {
                  0% { transform: scale(0.6); opacity: 0.4; }
                  60% { transform: scale(1.08); opacity: 1; }
                  100% { transform: scale(1); opacity: 1; }
                }
              `}</style>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PlanDetails;
