import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2,
  CheckCircle2,
  Smartphone,
  Zap,
  Shield,
  TrendingUp,
  Users,
  FileText,
  MessageSquare,
  UserPlus,
  Sparkles,
  ClipboardList,
  Timer,
  Database
} from "lucide-react";

export default function SmartDigitalPatientRegistration() {
  return (
    <>
      <SEO
        title="What is the Smart and Digital Approach to Patient Registration in Healthcare? | FelixaTouch Blog"
        description="Discover how smart digital patient registration transforms healthcare operations. Learn about complete and spot registration workflows in FelixaTouch, designed for fast, flexible, and EMR-ready patient onboarding."
        url="/blog/smart-digital-patient-registration-healthcare"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-purple-500/5 to-emerald-500/5" />
            
            <div className="container mx-auto px-4 md:px-6 max-w-5xl relative">
              {/* Back to Blog */}
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 font-semibold mb-8 group transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              {/* Article Metadata */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20">
                  Patient Registration
                </Badge>
                <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20">
                  Digital Healthcare
                </Badge>
                <Badge className="bg-purple-500/10 text-purple-600 hover:bg-purple-500/20">
                  EMR Systems
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                What is the Smart and Digital Approach to{" "}
                <span className="bg-gradient-to-r from-brand-primary via-purple-600 to-emerald-600 text-transparent bg-clip-text">
                  Patient Registration
                </span>{" "}
                in Healthcare?
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">February 5, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">FelixaTouch Team</span>
                </div>
              </div>

              {/* Share Button */}
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "What is the Smart and Digital Approach to Patient Registration in Healthcare?",
                      url: window.location.href,
                    });
                  }
                }}
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </Button>
            </div>
          </section>

          {/* Article Content */}
          <article className="py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              
              {/* Introduction */}
              <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Patient registration is the first and most crucial step in any healthcare journey. From identifying patients correctly to maintaining accurate medical records, an efficient registration process directly impacts clinical operations, patient experience, and long-term care quality.
                </p>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  With increasing patient volumes and digital transformation in healthcare, clinics need a <strong>fast, flexible, and EMR-ready patient registration system</strong>. <strong className="text-brand-primary">Felixatouch</strong> is designed to meet exactly these needs.
                </p>
              </div>

              {/* What Is Patient Registration Section */}
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-primary to-purple-600 flex items-center justify-center">
                    <ClipboardList className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                    What Is Patient Registration?
                  </h2>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    Patient registration is the process of capturing patient details during their first interaction with a clinic or hospital. This information forms the foundation of the patient's <strong>Electronic Medical Record (EMR)</strong> and is used across consultations, diagnostics, billing, and follow-ups.
                  </p>

                  <div className="bg-gradient-to-r from-brand-primary/5 to-emerald-500/5 rounded-xl p-6 border border-brand-primary/20">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      A well-structured patient registration system helps clinics:
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Avoid duplicate or incorrect records",
                        "Reduce waiting time",
                        "Improve care continuity",
                        "Streamline administrative workflows"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                          <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Patient Registration Workflows Section */}
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-brand-primary flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                    Patient Registration Workflows in Felixatouch
                  </h2>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Felixatouch supports <strong>two practical patient registration workflows</strong>, allowing clinics to handle both detailed registrations and quick walk-in cases efficiently.
                </p>

                {/* Workflow 1: Complete Patient Registration */}
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-brand-primary to-purple-600 rounded-t-2xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <UserPlus className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1">
                          1. Complete Patient Registration
                        </h3>
                        <p className="text-white/90 text-sm">
                          <strong>Used By:</strong> Admin / Front Desk / Doctor
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-b-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 border-t-0">
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                      Complete Patient Registration is used to create a <strong>permanent and comprehensive patient profile</strong>.
                    </p>

                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 mb-6 border border-emerald-200 dark:border-emerald-800">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-emerald-600" />
                        When to Use
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "First-time patients",
                          "Long-term treatment cases",
                          "Patients requiring follow-ups and history tracking"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-brand-primary" />
                        Steps to Complete Patient Registration in Felixatouch
                      </h4>
                      <ol className="space-y-4">
                        {[
                          "Log in to Felixatouch as Admin, Front Desk staff, or Doctor.",
                          "Open the Patient Registration module from the dashboard.",
                          "Select Complete Patient Registration.",
                          "Enter full patient details such as: Demographic information, Contact details, Identity and reference data",
                          "Save the record to generate a permanent EMR."
                        ].map((step, index) => (
                          <li key={index} className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 pt-1">{step}</p>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Screenshot Placeholder */}
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 mb-6">
                      <div className="text-center">
                        <Database className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600 dark:text-slate-400 font-semibold mb-2">
                          Figure 1: Complete Patient Registration Screen in Felixatouch
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">
                          Comprehensive form with demographic information, contact details, and medical history fields
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50 to-brand-primary/5 dark:from-emerald-900/20 dark:to-brand-primary/10 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        Outcome:
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        A detailed patient profile is created and securely stored with lifelong medical history for accurate consultations and continuity of care.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Workflow 2: Spot (Quick) Patient Registration */}
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-t-2xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Timer className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1">
                          2. Spot (Quick) Patient Registration
                        </h3>
                        <p className="text-white/90 text-sm">
                          <strong>Used By:</strong> Admin / Front Desk / Doctor
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-b-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 border-t-0">
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                      Spot Registration is designed for <strong>walk-in patients</strong> or situations where speed is critical.
                    </p>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6 border border-purple-200 dark:border-purple-800">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        When to Use
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Emergency or urgent visits",
                          "High patient volume hours",
                          "One-time consultations"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-emerald-600" />
                        Steps to Spot Patient Registration in Felixatouch
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "Navigate to the Patient Registration module.",
                          "Select Spot / Quick Registration.",
                          "Enter minimal required details such as: Patient name, Contact number",
                          "Save and proceed directly to consultation or billing."
                        ].map((step, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Screenshot Placeholder */}
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 mb-6">
                      <div className="text-center">
                        <Smartphone className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600 dark:text-slate-400 font-semibold mb-2">
                          Figure 2: Spot Patient Registration Screen in Felixatouch
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">
                          Minimal form with just name, phone, and gender for quick walk-in registrations
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50 to-purple-50 dark:from-emerald-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        Outcome:
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        Patients are registered within seconds, significantly reducing waiting time and improving front-desk efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Clinics Choose Felixatouch Section */}
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                    Why Clinics Choose Felixatouch for Patient Registration
                  </h2>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    Felixatouch simplifies patient registration while ensuring accuracy and speed:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Users,
                        color: "brand-primary",
                        title: "Dual Registration Modes",
                        description: "For different clinical scenarios"
                      },
                      {
                        icon: Zap,
                        color: "emerald-600",
                        title: "Faster Patient Onboarding",
                        description: "Reduce waiting times significantly"
                      },
                      {
                        icon: Shield,
                        color: "purple-600",
                        title: "Centralized EMR Management",
                        description: "Secure and lifelong medical records"
                      },
                      {
                        icon: TrendingUp,
                        color: "brand-primary",
                        title: "Reduced Administrative Workload",
                        description: "Streamline front-desk operations"
                      },
                      {
                        icon: Database,
                        color: "emerald-600",
                        title: "Seamless Integration",
                        description: "With appointments, billing, labs, and pharmacy"
                      }
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 hover:border-brand-primary dark:hover:border-brand-primary transition-colors group"
                      >
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${feature.color} to-${feature.color}/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Conclusion Section */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-brand-primary flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                    Conclusion
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-brand-primary/5 via-purple-500/5 to-emerald-500/5 rounded-2xl p-8 border border-brand-primary/20">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    Patient registration is more than a formality—it is the backbone of efficient healthcare delivery. With Felixatouch, clinics can manage both comprehensive and quick patient registrations effortlessly while maintaining accurate and lifelong medical records.
                  </p>

                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    Whether it's a regular patient or a walk-in visit,{" "}
                    <span className="text-brand-primary">Felixatouch ensures patient registration is simple, fast, and future-ready</span>.
                  </p>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-brand-primary via-purple-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
                <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-3xl font-black mb-4">
                  Ready to Transform Your Patient Registration Process?
                </h3>
                <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                  Experience the power of smart digital patient registration with Felixatouch. Book a free demo today and see how we can streamline your clinic operations.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="gap-2">
                      <UserPlus className="w-5 h-5" />
                      Book Free Demo
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button size="lg" variant="outline" className="gap-2 bg-white/10 hover:bg-white/20 text-white border-white/30">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Related Articles */}
              <section className="mt-16">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                  Related Articles
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Complete Guide to EMR Systems",
                      link: "/blog",
                      badge: "EMR"
                    },
                    {
                      title: "Best Practices for Clinic Management",
                      link: "/blog",
                      badge: "Operations"
                    },
                    {
                      title: "Digital Transformation in Healthcare",
                      link: "/blog",
                      badge: "Technology"
                    }
                  ].map((article, index) => (
                    <Link
                      key={index}
                      href={article.link}
                      className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-brand-primary dark:hover:border-brand-primary hover:shadow-lg transition-all"
                    >
                      <Badge className="mb-3 bg-brand-primary/10 text-brand-primary">
                        {article.badge}
                      </Badge>
                      <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors">
                        {article.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}