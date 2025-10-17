import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Terms & Conditions</h1>
          <p className="text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="p-6 md:p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to EzeeInsure.com ("Ezee Insure", "we", "our", "us").
              By accessing, browsing, or using this website or our mobile application, you agree to be bound by these Terms & Conditions ("Terms").
              If you do not agree, please do not use this website.
            </p>
          </section>

          {/* Nature of Services */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Nature of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ezee Insure operates as a digital insurance aggregator platform that connects users with licensed insurance companies ("Insurers") in Pakistan.
              We do not underwrite insurance policies ourselves. The products displayed are issued, priced, and serviced by the respective insurance partners.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 18 years old, legally competent, and a resident of Pakistan to use our services or purchase insurance through Ezee Insure.
            </p>
          </section>

          {/* Use of the Platform */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Use of the Platform</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">You agree:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>To provide accurate and up-to-date information.</li>
              <li>Not to misuse or attempt unauthorized access to our systems.</li>
              <li>To use the platform only for lawful purposes.</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>All payments made through EzeeInsure.com are processed via secure, PCI-DSS-compliant payment gateways.</li>
              <li>Payments are collected on behalf of the insurer for policy issuance.</li>
              <li>Upon successful payment, a digital receipt and policy confirmation will be shared via email/WhatsApp/SMS.</li>
              <li>Ezee Insure does not store any card or banking details.</li>
            </ul>
          </section>

          {/* Refunds & Cancellations */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Refunds & Cancellations</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Refunds are subject to the respective insurer's cancellation policy.</li>
              <li>If your policy is not issued due to technical or verification issues, the full amount will be refunded within 7–10 business days.</li>
              <li>No refund will be made once a policy is issued, except in cases of duplication or system error.</li>
            </ul>
          </section>

          {/* Data Privacy & Security */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Privacy & Security</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>All personal data shared on EzeeInsure.com is handled per our Privacy Policy.</li>
              <li>We follow strict data encryption and access controls to protect user information.</li>
              <li>By using the site, you consent to the collection, use, and sharing of data with insurers and payment processors as required for policy issuance.</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclaimers</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Ezee Insure acts only as an intermediary between customers and insurers.</li>
              <li>We are not responsible for claim decisions, policy benefits, or disputes arising between the insurer and the insured.</li>
              <li>Prices, benefits, and terms of policies are controlled by the insurer and may change without prior notice.</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Ezee Insure shall not be liable for:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Any loss arising due to technical failures, downtime, or payment gateway errors.</li>
              <li>Indirect, incidental, or consequential damages from the use of the website.</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of Pakistan, and any disputes will be subject to the jurisdiction of the courts in Karachi, Pakistan.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">For any queries or support:</p>
            <div className="space-y-2 text-muted-foreground ml-4">
              <p>📧 info@ezeeinsure.com</p>
              <p>🌐 www.ezeeinsure.com</p>
            </div>
          </section>

          {/* Accept Button */}
          <div className="pt-6 border-t">
            <Button 
              onClick={() => navigate(-1)}
              className="w-full md:w-auto"
            >
              I Understand
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsAndConditions;
