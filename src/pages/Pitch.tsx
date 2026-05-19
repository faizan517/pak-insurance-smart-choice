import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Building2,
  Hospital,
  Landmark,
  Users,
  ArrowRight,
  Globe,
} from "lucide-react";

// Note: Make sure these paths are correct in your project
import ezeeInsureLogo from "@/assets/ezee-insure-logo.png";
import ezeeTechLogo from "@/assets/ezee-tech-logo.png";

// --- HERO SECTION ---
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />

      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float delay-300" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">
              30-Second Elevator Pitch
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            <span className="text-primary">Hi, I'm </span>
            <span className="text-secondary">Nabeel</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Founder of
          </motion.p>

          {/* Brand logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="brand-card px-6 py-4"
            >
              <img
                src={ezeeInsureLogo}
                alt="Ezee Insure"
                className="h-16 md:h-20 w-auto"
              />
            </motion.div>
            <span className="text-3xl text-secondary font-bold">&</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="brand-card px-6 py-4"
            >
              <img
                src={ezeeTechLogo}
                alt="Ezee Technologies"
                className="h-16 md:h-20 w-auto"
              />
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
          >
            Building{" "}
            <span className="text-primary font-semibold">
              Pakistan's first AI-powered insurance infrastructure
            </span>{" "}
            — a backbone that connects insurers, corporates, and consumers
            through{" "}
            <span className="text-secondary font-semibold">
              speed, automation, and trust
            </span>
            .
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

// --- METRICS SECTION HELPER ---
const MetricCard = ({ value, label, suffix = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
      const prefix = value.replace(/[0-9.+]/g, "");
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(numericValue * easeOut);

        setDisplayValue(prefix + current + (value.includes("+") ? "+" : ""));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      const timer = setTimeout(animate, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="brand-card p-8 text-center glow-box"
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary metric-glow mb-3">
        {displayValue}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base font-medium uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

// --- METRICS SECTION ---
const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-primary">
            Since launching in <span className="text-secondary">May 2025</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our traction speaks for itself
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <MetricCard
            value="PKR 60M+"
            label="Gross Transaction Value"
            delay={0}
          />
          <MetricCard value="50+" label="Corporates Onboarded" delay={200} />
          <MetricCard
            value="3-5 days → minutes"
            label="Quote Time Reduction"
            delay={400}
          />
        </div>

        {/* Speed highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block brand-card px-8 py-6 glow-box">
            <p className="text-lg md:text-xl text-foreground">
              Built technology that cuts insurance quotation time from{" "}
              <span className="line-through text-muted-foreground">
                3–5 days
              </span>{" "}
              to just{" "}
              <span className="text-secondary font-bold text-2xl md:text-3xl">
                a few minutes
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- OPPORTUNITY SECTION ---
const OpportunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    { icon: Building2, label: "Business" },
    { icon: Hospital, label: "Hospital" },
    { icon: Landmark, label: "Bank" },
    { icon: Users, label: "Family" },
  ];

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              The Opportunity
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-secondary">$2.39 Billion</span>{" "}
              <span className="text-primary">Market</span>
            </h2>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="brand-card p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-destructive">
                    &lt;1%
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary">
                    Digital Penetration
                  </h3>
                  <p className="text-muted-foreground">
                    Virtually untouched by technology
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pakistan's insurance market remains largely analog, with
                outdated processes and no modern infrastructure to support the
                digital transformation that other industries have embraced.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="brand-card p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary">
                    No Modern Infrastructure
                  </h3>
                  <p className="text-muted-foreground">
                    Yet everyone depends on it
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Despite being essential to risk management, the insurance
                industry lacks the technological backbone needed to serve its
                users efficiently and transparently.
              </p>
            </motion.div>
          </div>

          {/* Industries that depend on insurance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-8 text-lg">
              Every sector depends on insurance infrastructure
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="brand-card px-6 py-4 flex items-center gap-3"
                >
                  <industry.icon className="w-6 h-6 text-secondary" />
                  <span className="font-medium text-primary">
                    {industry.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- SOLUTION SECTION ---
const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              Our Solution
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-primary">
              Fixing the broken processes.
              <br />
              <span className="text-secondary">
                Building the rails for the next decade.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Two complementary platforms working together to transform
              insurance in Pakistan and emerging markets.
            </p>
          </motion.div>

          {/* Two pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ezee Insure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="brand-card p-8 md:p-10 h-full border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <img
                  src={ezeeInsureLogo}
                  alt="Ezee Insure"
                  className="h-14 w-auto mb-6"
                />

                <p className="text-2xl text-primary font-medium mb-6">
                  The Distribution Engine
                </p>

                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>
                      Connects insurers, corporates, and consumers seamlessly
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Streamlined policy distribution and management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>End-to-end customer journey optimization</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Ezee Tech */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="brand-card p-8 md:p-10 h-full border-2 border-secondary/10 hover:border-secondary/30 transition-colors">
                <img
                  src={ezeeTechLogo}
                  alt="Ezee Technologies"
                  className="h-14 w-auto mb-6"
                />

                <p className="text-2xl text-secondary font-medium mb-6">
                  The Intelligence Layer
                </p>

                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>AI-powered automation and decision making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Smart underwriting and risk assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Data-driven insights and analytics</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Combined vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="brand-card p-8 md:p-12 text-center glow-box">
              <Globe className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-primary">
                Together, building the future of insurance
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground">
                <span className="text-primary font-semibold">Fast.</span>{" "}
                <span className="text-secondary font-semibold">Digital.</span>{" "}
                <span className="text-foreground font-semibold">Human.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- FOOTER SECTION ---
const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo marks */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <img
              src={ezeeInsureLogo}
              alt="Ezee Insure"
              className="h-12 w-auto"
            />
            <div className="w-px h-10 bg-border" />
            <img
              src={ezeeTechLogo}
              alt="Ezee Technologies"
              className="h-12 w-auto"
            />
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-lg mb-8">
            Building the rails for the next decade of insurance in Pakistan and
            emerging markets.
          </p>

          {/* CTA */}
          <motion.a
            href="https://wa.me/923341255897"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold text-lg hover:brightness-110 transition-all glow-box"
          >
            Let's Connect
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>

          {/* Founder */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              Founded by{" "}
              <span className="text-primary font-medium">Nabeel</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2025 Ezee Technologies. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// --- MAIN COMPONENT ---
export default function Pitch() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <MetricsSection />
      <OpportunitySection />
      <SolutionSection />
      <FooterSection />
    </main>
  );
}
