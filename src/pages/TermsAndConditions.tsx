import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield, FileText, Lock, CreditCard, RefreshCw, AlertCircle, Scale, Mail, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const sections = [
    { id: 1, title: "Introduction", icon: FileText },
    { id: 2, title: "Nature of Services", icon: Shield },
    { id: 3, title: "Eligibility", icon: FileText },
    { id: 4, title: "Use of the Platform", icon: Shield },
    { id: 5, title: "Payment Terms", icon: CreditCard },
    { id: 6, title: "Refunds & Cancellations", icon: RefreshCw },
    { id: 7, title: "Data Privacy & Security", icon: Lock },
    { id: 8, title: "Disclaimers", icon: AlertCircle },
    { id: 9, title: "Limitation of Liability", icon: AlertCircle },
    { id: 10, title: "Governing Law", icon: Scale },
    { id: 11, title: "Contact Information", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b bg-card/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 hover-scale"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <Badge variant="secondary" className="w-fit">
              <Shield className="w-3 h-3 mr-1" />
              Legally Binding
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {/* Quick Navigation */}
        <Card className="p-6 mb-8 animate-fade-in shadow-lg hover-scale">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#section-${section.id}`}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {section.id}. {section.title}
                  </span>
                </a>
              );
            })}
          </div>
        </Card>

        <Card className="p-6 md:p-10 shadow-xl animate-fade-in"
          style={{ animationDelay: '0.1s' }}>
          <div className="space-y-10">
            {/* Introduction */}
            <section id="section-1" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">1. Introduction</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-14">
                Welcome to EzeeInsure.com ("Ezee Insure", "we", "our", "us").
                By accessing, browsing, or using this website or our mobile application, you agree to be bound by these Terms & Conditions ("Terms").
                If you do not agree, please do not use this website.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* Nature of Services */}
            <section id="section-2" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">2. Nature of Services</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-14">
                Ezee Insure operates as a digital insurance aggregator platform that connects users with licensed insurance companies ("Insurers") in Pakistan.
                We do not underwrite insurance policies ourselves. The products displayed are issued, priced, and serviced by the respective insurance partners.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* Eligibility */}
            <section id="section-3" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">3. Eligibility</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-14">
                You must be at least 18 years old, legally competent, and a resident of Pakistan to use our services or purchase insurance through Ezee Insure.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* Use of the Platform */}
            <section id="section-4" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">4. Use of the Platform</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-14 mb-4">You agree:</p>
              <ul className="space-y-3 pl-14">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">To provide accurate and up-to-date information.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Not to misuse or attempt unauthorized access to our systems.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">To use the platform only for lawful purposes.</span>
                </li>
              </ul>
              <Separator className="mt-8" />
            </section>

            {/* Payment Terms */}
            <section id="section-5" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">5. Payment Terms</h2>
                </div>
              </div>
              <ul className="space-y-3 pl-14">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">All payments made through EzeeInsure.com are processed via secure, PCI-DSS-compliant payment gateways.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Payments are collected on behalf of the insurer for policy issuance.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Upon successful payment, a digital receipt and policy confirmation will be shared via email/WhatsApp/SMS.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Ezee Insure does not store any card or banking details.</span>
                </li>
              </ul>
              <Separator className="mt-8" />
            </section>

            {/* Refunds & Cancellations */}
            <section id="section-6" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">6. Refunds & Cancellations</h2>
                </div>
              </div>
              <ul className="space-y-3 pl-14">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Refunds are subject to the respective insurer's cancellation policy.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">If your policy is not issued due to technical or verification issues, the full amount will be refunded within 7–10 business days.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">No refund will be made once a policy is issued, except in cases of duplication or system error.</span>
                </li>
              </ul>
              <Separator className="mt-8" />
            </section>

            {/* Data Privacy & Security */}
            <section id="section-7" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">7. Data Privacy & Security</h2>
                </div>
              </div>
              <ul className="space-y-3 pl-14">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">All personal data shared on EzeeInsure.com is handled per our Privacy Policy.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">We follow strict data encryption and access controls to protect user information.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">By using the site, you consent to the collection, use, and sharing of data with insurers and payment processors as required for policy issuance.</span>
                </li>
              </ul>
              <Separator className="mt-8" />
            </section>

            {/* Disclaimers */}
            <section id="section-8" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">8. Disclaimers</h2>
                </div>
              </div>
              <ul className="space-y-3 pl-14">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Ezee Insure acts only as an intermediary between customers and insurers.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">We are not responsible for claim decisions, policy benefits, or disputes arising between the insurer and the insured.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Prices, benefits, and terms of policies are controlled by the insurer and may change without prior notice.</span>
                </li>
              </ul>
              <Separator className="mt-8" />
            </section>

            {/* Limitation of Liability */}
            <section id="section-9" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">9. Limitation of Liability</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-14 mb-4">Ezee Insure shall not be liable for:</p>
              <ul className="space-y-3 pl-14">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Any loss arising due to technical failures, downtime, or payment gateway errors.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Indirect, incidental, or consequential damages from the use of the website.</span>
                </li>
              </ul>
              <Separator className="mt-8" />
            </section>

            {/* Governing Law */}
            <section id="section-10" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">10. Governing Law</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-14">
                These Terms are governed by the laws of Pakistan, and any disputes will be subject to the jurisdiction of the courts in Karachi, Pakistan.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* Contact Information */}
            <section id="section-11" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">11. Contact Information</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-14 mb-4">For any queries or support:</p>
              <div className="space-y-3 pl-14">
                <a href="mailto:info@ezeeinsure.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">info@ezeeinsure.com</span>
                </a>
                <a href="https://www.ezeeinsure.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Globe className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">www.ezeeinsure.com</span>
                </a>
              </div>
            </section>

            {/* Accept Button */}
            <div className="pt-10">
              <Separator className="mb-8" />
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-muted/50 p-6 rounded-lg">
                <div>
                  <p className="font-semibold text-foreground mb-1">Ready to proceed?</p>
                  <p className="text-sm text-muted-foreground">By continuing, you agree to these terms and conditions</p>
                </div>
                <Button 
                  onClick={() => navigate(-1)}
                  size="lg"
                  className="w-full sm:w-auto hover-scale"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  I Understand & Accept
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsAndConditions;
