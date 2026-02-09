import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Check,
  Users,
  UserCog,
  Activity,
  DoorOpen,
  Sparkles,
  TrendingUp,
  Plus,
  IndianRupee,
  Building2,
  Stethoscope,
  FlaskConical,
  Pill,
  Activity as RadiologyIcon
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LeadGenerationForm } from "@/components/LeadGenerationForm";

export default function PricingPage() {
  const [demoFormOpen, setDemoFormOpen] = useState(false);
  const bucket1Features = [
    "Smart appointment & token management system",
    "Secure EMR / EHR with complete patient records",
    "OPD and practice management tools",
    "Integrated billing with flexible payment options",
    "Real-time revenue dashboards and financial reports",
    "WhatsApp, SMS, and email integration",
    "Cloud access on unlimited devices",
    "Multi-branch and multi-location clinic management",
    "Role-based access for doctors and staff",
    "Professional prescriptions and private doctor notes",
    "One-click reports in PDF and Excel",
    "Advanced analytics for sales and purchases"
  ];

  const additionalFeatures = [
    "Custom branding with letterheads & templates",
    "Integrated pharmacy & centralized inventory with smart alerts",
    "Secure document and record management",
    "Staff attendance, incentives & performance analytics",
    "Medical, fitness & visit certificate generation",
    "Advanced revenue & financial insights",
    "In-house lab reports & Hijama service support",
    "Real-time patient flow & token management",
    "Third-party, device & multi-location integrations",
    "Comprehensive visit summaries & clinical reports",
  ];

  const addOns = [
    {
      name: "Doctor",
      icon: Stethoscope,
      modulePrice: "5,000",
      userPrice: null,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "Pharmacy",
      icon: Pill,
      modulePrice: "2,500",
      userPrice: "1,000",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Lab",
      icon: FlaskConical,
      modulePrice: "2,000",
      userPrice: "1,000",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Radiology",
      icon: RadiologyIcon,
      modulePrice: "1,000",
      userPrice: "500",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <>
      <SEO
        title="Pricing & Plans - Affordable Clinic Management Software | FelixaTouch"
        description="Transparent pricing for FelixaTouch clinic management software. Choose from flexible plans for small clinics to large hospitals. Bucket 1: ₹10,000 | Bucket 2: ₹13,000. No hidden fees. Get started today!"
        url="/clinic-software-pricing"
      />
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <Badge className="px-6 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-emerald-600 text-white border-0">
                  <IndianRupee className="w-4 h-4 inline mr-2" />
                  Transparent Pricing
                </Badge>

                <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
                  Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-600">Perfect Plan</span>
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Flexible pricing designed for clinics of all sizes. No hidden fees, no surprises. Just powerful software to transform your practice.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-5 gap-0 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] lg:items-stretch">

                  <div className="lg:col-span-2 p-8 lg:p-12 bg-slate-50/50 dark:bg-slate-800/20 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="flex-shrink-0 mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-4 shadow-sm">
                          <Sparkles className="w-3.5 h-3.5" />
                          Enterprise Clinic Management Features
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                          Everything you need <br />
                          <span className="text-slate-400 font-medium">to Manage and Scale Your Clinic</span>
                        </h2>
                      </div>

                      <div className="space-y-5 pr-6">
                        {bucket1Features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-4 group">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 dark:bg-emerald-900/30 flex items-center justify-center">
                              <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 stroke-[3px]" />
                            </div>
                            <span className="text-[0.9375rem] text-slate-600 dark:text-slate-400 leading-snug group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-xs text-slate-400 font-medium italic">
                          * All core clinic management features are included in every subscription plan.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 p-8 lg:p-12 space-y-10 bg-white dark:bg-slate-900 flex flex-col">
                    <div className="text-center space-y-3 w-full flex-shrink-0">
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Choose the Best Clinic Management Plan for Your Practice</h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Affordable, transparent yearly pricing designed for small and growing healthcare clinics.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="flex flex-col p-8 rounded-3xl border-2 border-purple-600 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex-shrink-0 mb-6">
                          <Badge className="mb-4 bg-purple-100 dark:bg-slate-800 text-purple-600 dark:text-slate-300 hover:bg-slate-100 border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider pointer-events-none">Best for Small Clinics</Badge>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Starter</h3>
                          <div className="mt-3 flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-purple-600 dark:text-white tracking-tight">₹10,000</span>
                            <span className="text-slate-400 text-sm font-medium">/year</span>
                          </div>
                        </div>

                        <div className="space-y-1 mb-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                          {[
                            { Icon: Users, label: "Doctors", val: "2 user" },
                            { Icon: UserCog, label: "Receptionists", val: "2 user" },
                            { Icon: Activity, label: "Therapists", val: "1 user" },
                            { Icon: DoorOpen, label: "Procedure Rooms", val: "1 user" }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 py-3 border-b border-slate-50 dark:border-slate-800 last:border-0">
                              <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                                <item.Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                              </div>
                              <span className="text-sm text-slate-500 dark:text-slate-400 flex-1">{item.label}</span>
                              <span className="font-semibold text-slate-900 dark:text-white">{item.val}</span>
                            </div>
                          ))}
                        </div>

                        <div className="px-2">
                          <Button className="w-full bg-purple-600 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 rounded-xl font-bold py-6 transition-all" onClick={() => setDemoFormOpen(true)}>
                            Get Started
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-col p-8 rounded-3xl border-2 border-emerald-500 bg-white dark:bg-slate-900 relative hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-emerald-500/10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] shadow-lg shadow-emerald-500/30 z-20">
                          Most Popular 
                        </div>

                        <div className="flex-shrink-0 mb-6">
                          <Badge className="mb-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider pointer-events-none">Growth Clinic Plan</Badge>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Popular</h3>
                          <div className="mt-3 flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-emerald-500 dark:text-white tracking-tight">₹13,000</span>
                            <span className="text-slate-400 text-sm font-medium">/year</span>
                          </div>
                        </div>

                        <div className="space-y-1 mb-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                          {[
                            { Icon: Users, label: "Doctors", val: "5 user" },
                            { Icon: UserCog, label: "Receptionists", val: "5 user" },
                            { Icon: Activity, label: "Therapists", val: "3 user" },
                            { Icon: DoorOpen, label: "Procedure Rooms", val: "3 user" }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 py-3 border-b border-slate-50 dark:border-slate-800 last:border-0">
                              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                                <item.Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                              </div>
                              <span className="text-sm text-slate-500 dark:text-slate-400 flex-1">{item.label}</span>
                              <span className="font-semibold text-slate-900 dark:text-white">{item.val}</span>
                            </div>
                          ))}
                        </div>

                        <div className="px-2">
                          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold py-6 transition-all" onClick={() => setDemoFormOpen(true)}>
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 grid lg:grid-cols-5 gap-0 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] lg:items-stretch">

                  <div className="lg:col-span-2 p-10 lg:p-14 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-purple-900 dark:to-indigo-950 text-white flex flex-col justify-center relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />

                    <div className="relative z-10 space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                        <Sparkles className="w-3.5 h-3.5" />
                        Advanced Clinic Software Add-On
                      </div>

                      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                        Unlock Advanced <br /> Capabilities
                      </h2>

                      <div className="pt-6">
                        <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2">Flat Add-on Cost</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold tracking-tighter">₹5,000</span>
                          <span className="text-white/80 text-lg font-medium">/year</span>
                        </div>
                      </div>

                      {/* <Button
                        className="w-full mt-8 bg-white text-purple-700 hover:bg-purple-50 rounded-2xl font-bold py-7 shadow-xl shadow-purple-900/20 transition-all active:scale-95"
                        onClick={() => setDemoFormOpen(true)}
                      >
                       Upgrade to Premium Features
                      </Button> */}
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-10 lg:p-14 bg-white dark:bg-slate-900">
                    <div className="h-full flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                        Included Premium Modules
                        <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                      </h3>
                      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                        {additionalFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center">
                              <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 stroke-[3px]" />
                            </div>
                            <p className="text-[0.9rem] text-slate-600 dark:text-slate-400 leading-tight font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-8">
                        <p className="text-xs text-slate-400 font-medium italic border-l-2 border-purple-200 dark:border-purple-900 pl-4">
                          This premium bundle can be added to either Starter or Popular plans to enhance your clinic management experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                  <Badge className="px-6 py-2 text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    Modular Add-Ons
                  </Badge>

                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
                    Expand Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Capabilities</span>
                  </h2>

                  <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    Add specialized modules to enhance your clinic management system
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {addOns.map((addon, index) => {
                    const Icon = addon.icon;
                    return (
                      <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className={`absolute inset-0 bg-gradient-to-br ${addon.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                        <div className="p-6 space-y-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${addon.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>

                          <div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                              {addon.name}
                            </h3>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Module Price</span>
                                <div className="flex items-baseline gap-1">
                                  <IndianRupee className="w-4 h-4" />
                                  <span className="text-xl font-bold text-slate-900 dark:text-white">{addon.modulePrice}</span>
                                  <span className="text-slate-400 text-xs font-medium">/year</span>
                                </div>
                              </div>

                              {addon.userPrice && (
                                <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Per User</span>
                                  <div className="flex items-baseline gap-1">
                                    <IndianRupee className="w-4 h-4" />
                                    <span className="text-xl font-bold text-slate-900 dark:text-white">{addon.userPrice}</span>
                                    <span className="text-slate-400 text-xs font-medium">/year</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-emerald-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  Ready to Transform Your Clinic?
                </h2>

                <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Join 500+ healthcare professionals who trust FelixaTouch. Start your free demo today!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 font-bold px-8 py-6 text-lg group" onClick={() => setDemoFormOpen(true)}>
                    Book Free Demo
                    <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-700 font-bold px-8 py-6 text-lg" asChild>
                    <Link href="/clinic-management-software-testimonials">
                      Read Reviews
                    </Link>
                  </Button>
                </div>

                <p className="text-white/80 text-sm">
                  No credit card required • Free 14-day trial • Cancel anytime
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <LeadGenerationForm open={demoFormOpen} onOpenChange={setDemoFormOpen} source="pricing_page" />
    </>
  );
}
