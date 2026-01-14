import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  Calendar, 
  Users, 
  DollarSign, 
  Heart, 
  Pill, 
  BarChart3, 
  MessageSquare, 
  Clock, 
  Shield,
  CheckCircle2,
  ArrowRight,
  Database,
  Zap,
  Package,
  Activity,
  ClipboardList,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UnaniClinicManagementSoftware() {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Advanced EMR with EHR",
      description: "Streamline patient data management by securely storing electronic medical records and health histories. Enhance efficiency with quick access to patient information for better treatment decisions."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Hijama Scheduling",
      description: "Seamless appointment management for Hijama therapy sessions. Schedule, track, and manage patient appointments efficiently with Hijri date visibility alongside English calendar dates."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Queue Management",
      description: "Streamline the doctor's schedule by organizing appointment slots, sending patient reminders, and managing tokens. Display token numbers for smooth and efficient patient flow throughout the day."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Pre-loaded Data",
      description: "Comprehensive collection of standard procedures, Unani herbs, medicines, and treatments. Quickly access relevant information, saving time and enhancing treatment efficiency for practitioners."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Massage - Cupping Scheduling",
      description: "Easy management of cupping therapy sessions. Efficiently schedule appointments, track sessions, and ensure smooth clinic operations with slot management for optimal patient care."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Revenue Analytics",
      description: "In-depth insights into your clinic's financial performance. Track earnings, identify trends, and optimize revenue generation for better financial management and growth planning."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Integrated with Email/SMS/WhatsApp",
      description: "Automated communication with patients through their preferred messaging platform. Send appointment reminders, updates, and notifications directly for enhanced patient engagement."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Streamlined Billing",
      description: "Simplify the payment process with quick invoicing and easy transaction tracking. Ensure accurate billing, reduce errors, and apply GST or discounts as required effortlessly."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Patient Engagement",
      description: "Enhance communication and interaction through personalized reminders, follow-ups, and feedback requests. Build stronger patient relationships and improve overall satisfaction."
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "State of the Art Pharmacy",
      description: "Streamline inventory management, prescriptions, and medication dispensing. Ensure efficient stock control, accurate prescription fulfillment, and smooth pharmacy operations for better patient service."
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Tailored for Unani Medicine",
      description: "Specifically designed workflows for Unani practices including Hijama, cupping, and herbal treatments"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Simple & User-Friendly",
      description: "Intuitive interface as easy to use as WhatsApp or Gmail - no technical expertise required"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Pre-loaded Unani Data",
      description: "Standard Unani procedures, herbs, medicines, and treatments included out of the box"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Hijri Calendar Integration",
      description: "View Hijri dates alongside English calendar for culturally appropriate scheduling"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Cloud-Based Access",
      description: "Access patient records from anywhere, anytime on computer, tablet, or smartphone"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Complete Practice Management",
      description: "All-in-one solution covering appointments, prescriptions, billing, and patient engagement"
    }
  ];

  const useCases = [
    {
      title: "Unani Clinics & Hospitals",
      description: "Complete management solution for traditional Unani medicine practices with specialized treatment tracking",
      icon: <Heart className="w-12 h-12" />
    },
    {
      title: "Hijama Therapy Centers",
      description: "Dedicated scheduling and management for Hijama (cupping therapy) sessions with cultural calendar support",
      icon: <Activity className="w-12 h-12" />
    },
    {
      title: "Integrated Wellness Centers",
      description: "Comprehensive solution for centers offering Unani medicine, massage therapy, and holistic treatments",
      icon: <Sparkles className="w-12 h-12" />
    }
  ];

  return (
    <>
      <SEO
        title="Best Unani Clinic Management Software | Simple & Effective - FelixaTouch"
        description="Best Unani clinic management software designed for traditional medicine practices. Simple, user-friendly solution for Unani clinics with Hijama scheduling, herbal prescriptions, EMR, and billing. Streamline your Unani practice with FelixaTouch."
        image="/og-image.png"
        url="/unani-clinic-management-software"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden pt-32 pb-20 px-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.1),transparent_50%)]" />
            
            <div className="max-w-7xl mx-auto relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-600/20">
                      FelixaTouch Unani
                    </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                    Best Simple
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-brand-primary">
                      Unani Clinic
                    </span>
                    <span className="block text-slate-900 dark:text-white">Management Software</span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                    FelixaTouch for Unani medicine streamlines treatment and management effectively. Handle patient records, e-prescriptions, appointments, and billing with a user-friendly interface that simplifies daily tasks while improving patient care.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="group text-lg h-14 px-8">
                      Book Demo
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                      View Features
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-8 pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-black text-emerald-600">Simple</div>
                      <div className="text-sm text-muted-foreground">Easy to Use</div>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div className="text-center">
                      <div className="text-3xl font-black text-brand-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Cloud Access</div>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div className="text-center">
                      <div className="text-3xl font-black text-purple-600">Unani</div>
                      <div className="text-sm text-muted-foreground">Specialized</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-brand-primary/20 rounded-3xl blur-3xl" />
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                    <Image
                      src="/unani-hijama-procedure.png"
                      alt="FelixaTouch Unani interface showing Hijama procedure scheduling and management"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* We Handle Everything Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900/50 dark:to-slate-900">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                We handle{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-brand-primary">
                  everything for you!
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                From <span className="font-semibold text-slate-900 dark:text-white">patient records to e-prescriptions, appointments, and billing</span>, FelixaTouch takes care of it all, so you can focus on what matters most—<span className="font-semibold text-slate-900 dark:text-white">your patients</span>. Our all-in-one clinic management software ensures a <span className="font-semibold text-slate-900 dark:text-white">smooth, paperless, and efficient workflow</span>, tailored specifically for <span className="font-semibold text-emerald-600">Unani medicine practices</span>.
              </p>
            </div>
          </section>

          {/* Prescription Feature Highlight */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">
                    Comprehensive{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-brand-primary">
                      Unani Prescription
                    </span>{" "}
                    Management
                  </h2>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Create detailed e-prescriptions with Unani herbs, traditional medicines, and treatment protocols. Track medication history, manage dosages, and ensure accurate prescription delivery for optimal patient care.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700 dark:text-slate-300">Pre-loaded Unani herbs and medicines database</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700 dark:text-slate-300">Digital prescription templates for common treatments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700 dark:text-slate-300">Automatic pharmacy integration for seamless fulfillment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700 dark:text-slate-300">Complete medication tracking and refill management</span>
                    </li>
                  </ul>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-brand-primary/20 rounded-3xl blur-3xl" />
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                    <Image
                      src="/unani-prescription.png"
                      alt="Unani prescription management interface with herbal medicines"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                  First{" "}
                  <span className="text-emerald-600">
                    Unani Clinic Software
                  </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Specially designed for Unani medicine practitioners with features that understand your unique workflow and cultural requirements
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-500/50 group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600/10 to-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <div className="text-emerald-600">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                  Why Choose{" "}
                  <span className="text-emerald-600">
                    FelixaTouch Unani
                  </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  The best simple clinic management software designed specifically for Unani practitioners
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all">
                    <div className="flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{benefit.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                  Perfect for Every{" "}
                  <span className="text-emerald-600">
                    Unani Practice
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-500/50">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600/10 to-brand-primary/10 flex items-center justify-center mx-auto mb-6 text-emerald-600">
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{useCase.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {useCase.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* User-Friendly CTA */}
          <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-brand-primary">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                The Most User-Friendly Software Ever
              </h2>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                FelixaTouch is designed to be the most user-friendly software you'll ever encounter. Its intuitive interface and streamlined workflows make it easy for anyone to learn and use, regardless of technical expertise.
              </p>
              
              <div className="pt-4">
                <Button size="lg" variant="secondary" className="group text-lg h-14 px-8 bg-white text-emerald-600 hover:bg-slate-50">
                  Get The Demo Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <p className="text-sm text-white/75">
                Don't miss our future updates! Get a free Demo Today!
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                Ready to Transform Your{" "}
                <span className="text-emerald-600">
                  Unani Practice?
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Join Unani practitioners who have digitized their practices with FelixaTouch. Experience improved patient care, streamlined workflows, and cultural compatibility with the best simple Unani clinic management software.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button size="lg" className="group text-lg h-14 px-8">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                  <Link href="/best-clinic-software-features">
                    View All Features
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}