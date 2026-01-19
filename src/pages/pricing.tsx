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

export default function PricingPage() {
  const bucket1Features = [
    "Smart appointment and token-based queue system for smooth patient flow",
    "Real-time token display with live patient progress tracking",
    "Secure EMR for complete clinical documentation",
    "Quick patient onboarding with demographic details",
    "Role-based access for doctors, nurses, lab, therapist and admin users",
    "Centralized management for multi-branch or group hospitals",
    "Secure cloud access from unlimited devices",
    "Financial dashboards with detailed purchase and sales insights",
    "Visually rich prescription design",
    "Private doctor's notes accessible only by the doctor",
    "Billing directly linked to prescriptions",
    "Instant WhatsApp sharing of summaries and patient details",
    "Flexible billing with partial, deferred, and discounted payments",
    "Real-time revenue tracking and charge capture",
    "Automated multi-channel notifications via WhatsApp, SMS, and email",
    "Simple report generation and export in PDF or Excel",
    "Comprehensive analytics for purchase and sales reports"
  ];

  const additionalFeatures = [
    "Custom letterhead for both print and digital documents",
    "Integrated pharmacy with stock control and expiry alerts",
    "Centralized inventory with low-stock summaries and WhatsApp alerts",
    "Document management for easy record and attachment access",
    "Automated staff incentive and commission tracking",
    "Quick generation of medical and fitness certificates",
    "Staff attendance, shift closure, and compliance performance analytics",
    "Integration with third-party labs, pharmacies, devices, and multi-location clinics",
    "Real-time token display system",
    "Customizable templates",
    "Hijama service support",
    "Lab report creation and management",
    "Revenue analytics and financial insights",
    "Comprehensive visit summaries"
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
        url="/pricing"
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

          {/* Main Pricing Buckets */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Bucket 1 */}
                  <Card className="relative overflow-hidden border-2 hover:border-purple-600 transition-all duration-300 hover:shadow-2xl group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="p-8 space-y-6 relative">
                      {/* Header */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200">
                            Small Clinic
                          </Badge>
                          <Building2 className="w-8 h-8 text-purple-600" />
                        </div>
                        
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                          Bucket 1
                        </h2>
                        
                        <div className="flex items-baseline gap-2">
                          <IndianRupee className="w-8 h-8 text-purple-600" />
                          <span className="text-6xl font-black text-purple-600">10,000</span>
                          <span className="text-slate-600 dark:text-slate-400">/month</span>
                        </div>
                      </div>

                      {/* Team Size */}
                      <div className="grid grid-cols-2 gap-4 py-6 border-y">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-medium">Doctors</span>
                          </div>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">2</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <UserCog className="w-4 h-4" />
                            <span className="text-sm font-medium">Receptionists</span>
                          </div>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">2</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Activity className="w-4 h-4" />
                            <span className="text-sm font-medium">Therapists</span>
                          </div>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">1</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <DoorOpen className="w-4 h-4" />
                            <span className="text-sm font-medium">Procedure Rooms</span>
                          </div>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">1</p>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                        {bucket1Features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-6 text-lg group" asChild>
                        <Link href="#demo">
                          Get Started
                          <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </Card>

                  {/* Bucket 2 */}
                  <Card className="relative overflow-hidden border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-600 transition-all duration-300 hover:shadow-2xl group bg-gradient-to-br from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-slate-900">
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2 text-sm font-bold">
                      POPULAR
                    </div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="p-8 space-y-6 relative mt-8">
                      {/* Header */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200">
                            Growing Practice
                          </Badge>
                          <Building2 className="w-8 h-8 text-emerald-600" />
                        </div>
                        
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                          Bucket 2
                        </h2>
                        
                        <div className="flex items-baseline gap-2">
                          <IndianRupee className="w-8 h-8 text-emerald-600" />
                          <span className="text-6xl font-black text-emerald-600">13,000</span>
                          <span className="text-slate-600 dark:text-slate-400">/month</span>
                        </div>
                      </div>

                      {/* Team Size */}
                      <div className="grid grid-cols-2 gap-4 py-6 border-y">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-medium">Doctors</span>
                          </div>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">5</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <UserCog className="w-4 h-4" />
                            <span className="text-sm font-medium">Receptionists</span>
                          </div>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">5</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Activity className="w-4 h-4" />
                            <span className="text-sm font-medium">Therapists</span>
                          </div>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">3</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <DoorOpen className="w-4 h-4" />
                            <span className="text-sm font-medium">Procedure Rooms</span>
                          </div>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">3</p>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                        {bucket1Features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-6 text-lg group" asChild>
                        <Link href="#demo">
                          Get Started
                          <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </div>

                {/* Additional Features Section */}
                <Card className="border-2 border-purple-200 dark:border-purple-800 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-emerald-600 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-black">Additional Premium Features</h2>
                        <p className="text-white/90 text-lg">Unlock advanced capabilities for your clinic</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Bucket 1 Add-on */}
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">For Bucket 1</h3>
                          <div className="flex items-baseline gap-1">
                            <Plus className="w-5 h-5 text-purple-600" />
                            <IndianRupee className="w-6 h-6 text-purple-600" />
                            <span className="text-3xl font-black text-purple-600">15,000</span>
                          </div>
                        </div>
                        
                        <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                          {additionalFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bucket 2 Add-on */}
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">For Bucket 2</h3>
                          <div className="flex items-baseline gap-1">
                            <Plus className="w-5 h-5 text-emerald-600" />
                            <IndianRupee className="w-6 h-6 text-emerald-600" />
                            <span className="text-3xl font-black text-emerald-600">18,000</span>
                          </div>
                        </div>
                        
                        <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                          {additionalFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
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
                                </div>
                              </div>
                              
                              {addon.userPrice && (
                                <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Per User</span>
                                  <div className="flex items-baseline gap-1">
                                    <IndianRupee className="w-4 h-4" />
                                    <span className="text-xl font-bold text-slate-900 dark:text-white">{addon.userPrice}</span>
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
                  <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 font-bold px-8 py-6 text-lg group" asChild>
                    <Link href="#demo">
                      Book Free Demo
                      <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
    </>
  );
}