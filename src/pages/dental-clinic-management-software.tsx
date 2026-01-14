import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  ClipboardList, 
  DollarSign, 
  FileText, 
  Heart, 
  Lock, 
  Smartphone, 
  Users, 
  Zap,
  Shield,
  BarChart3,
  Pill,
  CheckCircle2,
  ArrowRight,
  Cloud,
  Database,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DentalClinicManagementSoftware() {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Advanced EMR with EHR",
      description: "Maintain detailed personalized consultation records, manage medication and procedures efficiently, and access a comprehensive patient profile for informed and personalized care."
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Color Code Based Tooth Status Marking",
      description: "Visually track and manage patient dental health with FelixaTouch. Easily identify and document various dental conditions with intuitive color-coded indicators, enhancing diagnostic accuracy and treatment planning."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Procedure, IOPA and Tasks",
      description: "Send appointment reminders, next visit updates, and medication reminders directly through FelixaTouch, enhancing patient engagement and satisfaction."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Streamlined Billing",
      description: "Simplify your billing process with FelixaTouch. Generate invoices quickly, process payments securely, and manage financial records effortlessly. Reduce errors and save time, allowing your staff to focus on patient care."
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Tooth Wise Prescriptions",
      description: "Enhance patient care with FelixaTouch's tooth-wise prescription feature. Provide personalized treatment plans and ensure accurate medication delivery with prescriptions tailored to individual teeth."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "State of the Art Pharmacy",
      description: "Ensure patient safety with automated drug interaction checks, electronic prescription management, and comprehensive medication tracking. Prescription will be automatically visible at pharmacy soon after consultation."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Revenue Analytics",
      description: "Get insights into your clinic's financial health with FelixaTouch's Revenue Analytics. Track revenue per doctor, booking rate, no-show rate and other key metrics."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Smart Devices & Integration",
      description: "Enjoy seamless use of FelixaTouch on any of your smart devices. Integrated with Email, WhatsApp and SMS. Access the software seamlessly on computer, or tablets, regardless of your location."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Simplicity in Design",
      description: "Use Felixatouch just like you use WhatsApp or Gmail. Its intuitive design ensures a seamless transition, making it effortless to learn and use."
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Up to 50% Cost Savings",
      description: "Realize significant infrastructure cost reductions with cloud-based deployment"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Complete Patient Records",
      description: "Access comprehensive patient profiles from any location, anytime"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Pre-loaded Data",
      description: "Standard dental procedures, medicines, lab work details, and treatments included"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "ERP Integration",
      description: "Seamlessly connect with accounting, inventory, and purchase modules"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Digitized Payment Management",
      description: "Process payments securely with automated invoicing and discount application"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Scan & Lab Ordering",
      description: "Electronically order scans and lab tests directly from patient records"
    }
  ];

  const useCases = [
    {
      title: "Single Dental Practice",
      description: "Perfect for solo practitioners looking to digitize their practice with comprehensive patient management and billing",
      icon: <Users className="w-12 h-12" />
    },
    {
      title: "Multi-Location Dental Chains",
      description: "Centralized management for dental clinic chains with unified patient records across all locations",
      icon: <Database className="w-12 h-12" />
    },
    {
      title: "Specialty Dental Clinics",
      description: "Tailored workflows for orthodontics, periodontics, endodontics, and other specialized dental practices",
      icon: <Sparkles className="w-12 h-12" />
    }
  ];

  return (
    <>
      <SEO
        title="Dental Clinic Management Software | FelixaTouch Dental"
        description="Ultimate cloud-based dental clinic management software designed for seamless integration. Experience improved patient care with advanced EMR, tooth charting, e-prescriptions, and efficient appointment scheduling. Digitize your dental practice today."
        image="/og-image.png"
        url="/dental-clinic-management-software"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden pt-32 pb-20 px-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.1),transparent_50%)]" />
            
            <div className="max-w-7xl mx-auto relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-semibold border border-brand-primary/20">
                      FelixaTouch Dental
                    </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                                      Ultimate Dental Clinic Management
                   
                    <span className="block text-slate-900 dark:text-white">Software</span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                    Digitize your dental practice with FelixaTouch, a cloud-based dental clinic management software designed for seamless integration. Experience improved patient care and streamlined operations through features such as e-prescriptions, advanced EMR, efficient appointment scheduling, and effective queue management.
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
                      <div className="text-3xl font-black text-brand-primary">50%</div>
                      <div className="text-sm text-muted-foreground">Cost Savings</div>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div className="text-center">
                      <div className="text-3xl font-black text-emerald-600">24/7</div>
                      <div className="text-sm text-muted-foreground">Cloud Access</div>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div className="text-center">
                      <div className="text-3xl font-black text-purple-600">Easy</div>
                      <div className="text-sm text-muted-foreground">Like WhatsApp</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-emerald-600/20 rounded-3xl blur-3xl" />
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                    <Image
                      src="/dental-interface-tablet.png"
                      alt="FelixaTouch Dental Interface - Comprehensive dental charting system"
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

          {/* Tooth Charting Feature Highlight */}
          <section className="py-20 px-4 bg-slate-100 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
                    <Image
                      src="/dental-examination.png"
                      alt="Interactive color-coded tooth chart for precise dental documentation"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">
                  Simplify dental charting with our interactive, color-coded tooth chart
                  </h2>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Streamline documentation and enhance diagnostic accuracy with visual tooth status tracking. Our intuitive system makes it easy to identify and document various dental conditions, improving treatment planning and patient communication.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-foreground">Visual color-coded tooth status indicators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-foreground">Easy documentation of dental conditions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-foreground">Enhanced diagnostic accuracy and treatment planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-foreground">Complete dental procedure tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                 Implement best practices with cloud-based FelixaTouch
                 
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Standardize your dental practice with FelixaTouch, the industry's premier management software. Establish best practices across all aspects of your clinic, from appointments to patient records.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-primary/50 group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-emerald-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <div className="text-brand-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Lab Orders Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-brand-primary/5 to-emerald-600/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">
                    Scan & Lab Ordering
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-600">
                      Made Simple
                    </span>
                  </h2>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Streamline your diagnostic processes with Felixatouch's integrated Scan & Lab Ordering feature. Electronically order scans and lab tests directly from patient records, eliminating manual processes and improving accuracy.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-foreground">Direct Electronic Ordering</h4>
                        <p className="text-sm text-muted-foreground">Order scans and lab tests directly from patient records</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="w-10 h-10 rounded-lg bg-emerald-600/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-foreground">Eliminate Manual Processes</h4>
                        <p className="text-sm text-muted-foreground">Reduce errors and save time with automated workflows</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="w-10 h-10 rounded-lg bg-purple-600/10 flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-foreground">Improved Accuracy</h4>
                        <p className="text-sm text-muted-foreground">Ensure accurate diagnostic ordering with digital integration</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-emerald-600/20 rounded-3xl blur-3xl" />
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                    <Image
                      src="/dental-lab-orders.png"
                      alt="Dental lab ordering system interface"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                  Global Support with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-600">
                    Complete Clinic Management
                  </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  FelixaTouch provides comprehensive solutions for every aspect of your dental practice
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all">
                    <div className="flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-20 px-4 bg-slate-100 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                    Perfect for Every  Dental Practice
                 
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-primary/50">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-emerald-600/10 flex items-center justify-center mx-auto mb-6 text-brand-primary">
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* User-Friendly CTA */}
          <section className="py-20 px-4 bg-gradient-to-br from-brand-primary to-emerald-600">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                The Most User-Friendly Software Ever
                text-4xl md:text-5xl font-black text-slate-900 dark:text-white
              </h2>
                          
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                FelixaTouch is designed to be the most user-friendly software you'll ever encounter. Its intuitive interface and streamlined workflows make it easy for anyone to learn and use, regardless of technical expertise.
              </p>
              
              <div className="pt-4">
                <Button size="lg" variant="secondary" className="group text-lg h-14 px-8 bg-white text-brand-primary hover:bg-slate-50">
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
                Ready to Transform Your Dental Practice?
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Join hundreds of dental practices that have digitized their operations with FelixaTouch. Experience improved patient care, streamlined workflows, and significant cost savings.
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