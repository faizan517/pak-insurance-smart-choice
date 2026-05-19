import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Shield,
  FileText,
  Lock,
  CreditCard,
  RefreshCw,
  AlertCircle,
  Scale,
  Mail,
  Globe,
  Database,
  Cookie,
  Eye,
  Link2,
  BellRing,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const sections = [
    { id: 1, title: "Introduction", icon: FileText },
    { id: 2, title: "Information We Collect", icon: Database },
    { id: 3, title: "How We Use Your Information", icon: Shield },
    { id: 4, title: "Sharing of Information", icon: CreditCard },
    { id: 5, title: "Data Security", icon: Lock },
    { id: 6, title: "Cookies Policy", icon: Cookie },
    { id: 7, title: "Your Rights", icon: Eye },
    { id: 8, title: "Data Retention", icon: RefreshCw },
    { id: 9, title: "Third-Party Links", icon: Link2 },
    { id: 10, title: "Policy Updates", icon: BellRing },
    { id: 11, title: "Contact Us", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b bg-card/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 hover-scale">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
                Privacy Policy
              </h1>
              <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <Badge variant="secondary" className="w-fit">
              <Shield className="w-3 h-3 mr-1" />
              User Data Protection
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

        <Card className="p-6 md:p-10 shadow-xl animate-fade-in">
          <div className="space-y-10">
            {/* 1. Introduction */}
            <section id="section-1" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">1. Introduction</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-10">
                Welcome to <strong>EzeeInsure.com</strong> (“Ezee Insure”, “we”, “our”, “us”).
                Your privacy is extremely important to us. This Privacy Policy explains how we
                collect, use, store, and protect your personal information when you visit our
                website, use our services, or interact with us online or through WhatsApp.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* 2. Information We Collect */}
            <section id="section-2" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Database className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">2. Information We Collect</h2>
              </div>
              <p className="text-muted-foreground pl-10 mb-4">
                We collect information to help provide you with accurate insurance quotes, process
                your policy, and offer better service. This may include:
              </p>
              <div className="pl-14 space-y-3">
                <p className="font-semibold text-foreground">a. Personal Information</p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Full name</li>
                  <li>CNIC number</li>
                  <li>Date of birth</li>
                  <li>Address and contact details (mobile, email, etc.)</li>
                  <li>Gender and marital status</li>
                  <li>Beneficiary details (for health or life insurance)</li>
                </ul>
                <p className="font-semibold text-foreground pt-3">b. Policy & Transaction Information</p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Policy number, insurer name, and coverage details</li>
                  <li>Payment information (amount, mode, reference ID)</li>
                  <li>Claim or refund-related details (if applicable)</li>
                </ul>
                <p className="font-semibold text-foreground pt-3">c. Technical Information</p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>IP address, browser type, device information</li>
                  <li>Usage data such as pages visited, session time, and click activity</li>
                  <li>Cookies or similar tracking technologies (to improve your experience)</li>
                </ul>
              </div>
              <Separator className="mt-8" />
            </section>

            {/* 3. How We Use Your Information */}
            <section id="section-3" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  3. How We Use Your Information
                </h2>
              </div>
              <ul className="list-disc pl-14 text-muted-foreground space-y-1">
                <li>Generating and displaying insurance quotes from licensed insurers</li>
                <li>Processing policy purchases and premium payments</li>
                <li>Sending policy confirmations, receipts, and renewal reminders</li>
                <li>Providing customer support via chat, WhatsApp, email, or phone</li>
                <li>Improving our website, app performance, and customer experience</li>
                <li>Compliance with legal or regulatory obligations (e.g., SECP, SBP)</li>
              </ul>
              <Separator className="mt-8" />
            </section>

            {/* 4. Sharing of Information */}
            <section id="section-4" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  4. Sharing of Information
                </h2>
              </div>
              <p className="text-muted-foreground pl-10 mb-3">
                We may share your information only where necessary, and only with trusted
                entities, including:
              </p>
              <ul className="list-disc pl-14 text-muted-foreground space-y-1">
                <li>Licensed insurance companies for quote generation, policy issuance, and claim processing</li>
                <li>Payment gateway partners for secure transaction processing</li>
                <li>Technology service providers assisting in hosting, analytics, and communication</li>
                <li>Regulatory bodies if required under Pakistani law</li>
              </ul>
              <p className="text-muted-foreground pl-10 mt-3">
                We do not sell or rent your personal data to any third party under any circumstance.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* 5. Data Security */}
            <section id="section-5" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lock className="w-5 h-5 text-primary" />
              </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground">5. Data Security</h2>
              </div>
              <ul className="list-disc pl-14 text-muted-foreground space-y-1">
                <li>SSL encryption for data transmission</li>
                <li>PCI DSS-compliant payment processing</li>
                <li>Restricted access to personal information</li>
                <li>Regular system monitoring and data backups</li>
              </ul>
              <p className="text-muted-foreground pl-10 mt-3">
                Despite these safeguards, no digital system is 100% immune to risks. However, we
                continually upgrade our security protocols to minimize threats.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* 6. Cookies Policy */}
            <section id="section-6" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">6. Cookies Policy</h2>
              </div>
              <p className="text-muted-foreground pl-10 mb-3">
                Our website uses cookies to improve your browsing experience. Cookies help us:
              </p>
              <ul className="list-disc pl-14 text-muted-foreground space-y-1">
                <li>Recognize returning users</li>
                <li>Save your quote or form progress</li>
                <li>Measure and improve performance analytics</li>
              </ul>
              <p className="text-muted-foreground pl-10 mt-3">
                You can control cookie settings in your browser at any time, but some parts of the
                site may not function properly if cookies are disabled.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* 7. Your Rights */}
            <section id="section-7" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Eye className="w-5 h-5 text-primary" />
              </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">7. Your Rights</h2>
              </div>
              <ul className="list-disc pl-14 text-muted-foreground space-y-1">
                <li>Access and review your personal data</li>
                <li>Request correction or deletion of inaccurate data</li>
                <li>Withdraw consent for marketing communication</li>
              </ul>
              <p className="text-muted-foreground pl-10 mt-3">
                You can exercise these rights by emailing{" "}
                <a href="mailto:info@ezeeinsure.com" className="text-primary hover:underline">
                  info@ezeeinsure.com
                </a>
              </p>
              <Separator className="mt-8" />
            </section>

            {/* 8. Data Retention */}
            <section id="section-8" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">8. Data Retention</h2>
              </div>
              <p className="text-muted-foreground pl-10 mb-3">
                We retain your personal data only as long as necessary for:
              </p>
              <ul className="list-disc pl-14 text-muted-foreground space-y-1">
                <li>Legal, regulatory, or contractual obligations</li>
                <li>Customer service or dispute resolution</li>
              </ul>
              <p className="text-muted-foreground pl-10 mt-3">
                After this period, data is securely deleted or anonymized.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* 9. Third-Party Links */}
            <section id="section-9" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Link2 className="w-5 h-5 text-primary" />
              </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  9. Third-Party Links
                </h2>
              </div>
              <p className="text-muted-foreground pl-10">
                EzeeInsure.com may contain links to external websites (e.g., insurer portals or
                payment gateways). We are not responsible for the privacy practices of those third
                parties. Please review their policies separately before sharing any information.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* 10. Policy Updates */}
            <section id="section-10" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BellRing className="w-5 h-5 text-primary" />
              </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">10. Policy Updates</h2>
              </div>
              <p className="text-muted-foreground pl-10">
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or legal requirements.
              </p>
              <Separator className="mt-8" />
            </section>

            {/* 11. Contact Us */}
            <section id="section-11" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">11. Contact Us</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-10 mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact:
              </p>
              <div className="space-y-3 pl-10">
                <a
                  href="mailto:info@ezeeinsure.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">info@ezeeinsure.com</span>
                </a>
                <a
                  href="https://www.ezeeinsure.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Globe className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">www.ezeeinsure.com</span>
                </a>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
