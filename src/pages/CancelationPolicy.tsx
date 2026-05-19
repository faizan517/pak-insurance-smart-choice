import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Scale, // Used for Policy/Rules icon
  RefreshCw, // Used for Refund/Cancel icon
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RefundAndCancelationPolicy = () => {
  const navigate = useNavigate();

  // Sirf zaroori section rakha gaya hai
  const sections = [
    { id: 1, title: "Refund and Cancelation", icon: RefreshCw },
  ];

  const policyText =
    "Your refund or cancellation will be processed in accordance with your policy or by your insurer, as per the applicable terms and conditions.";

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
              {/* Title update kiya gaya hai */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
                Refund and Cancelation Policy
              </h1>
              <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Effective immediately
              </p>
            </div>
            <Badge variant="secondary" className="w-fit">
              <Scale className="w-3 h-3 mr-1" />
              Terms & Conditions
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {/* Quick Navigation section agar aap single policy ke liye nahi chahte toh hata sakte hain, lekin maine navigation link ko maintain rakha hai */}
        <Card className="p-6 mb-8 animate-fade-in shadow-lg hover-scale">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            Policy Overview
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
            {/* Refund and Cancelation Policy Section */}
            <section id="section-1" className="scroll-mt-24">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                {/* Title update kiya gaya hai */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  1. Refund and Cancelation Policy
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-10">
                {policyText}
              </p>
              {/* Maine Separator hata diya hai kyunki ab sirf ek hi section hai */}
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Component name update kiya gaya hai
export default RefundAndCancelationPolicy;