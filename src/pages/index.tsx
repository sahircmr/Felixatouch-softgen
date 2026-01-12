import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { 
  Activity, 
  Calendar, 
  FileText, 
  DollarSign, 
  Package, 
  BarChart3, 
  MessageSquare, 
  Mail, 
  Phone,
  Stethoscope,
  HeartPulse,
  Users,
  ClipboardList,
  Smartphone,
  Star
} from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="FelixaTouch - Best Clinic Management Software | Healthcare Solutions India"
        description="FelixaTouch offers comprehensive clinic management software to streamline operations, boost growth, and maximize profitability. Free demo available with smart reports and analytics."
        url="https://felixatouch.com"
      />

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
                  Get Free Clinic Management Software Demo
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  FelixaTouch - Best clinic{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Management Software
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  FelixaTouch holds your hand to get you (and keep you!) as digital as you need by giving you access to a dedicated human expert and an intelligent platform, helping you{" "}
                  <strong className="text-foreground">increase your revenue and patient footfall</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8" asChild>
                    <Link href="#demo">Talk to an expert →</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                    <Link href="#features">See how it works</Link>
                  </Button>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/uploads/image_d3709a87-d48a-409f-b4c4-978d84fcc9c4.png"
                    alt="FelixaTouch Laboratory Tests Interface - Comprehensive lab management system"
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

        {/* Value Proposition Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never miss an appointment!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get proper track records of clinic!
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engage all patients with bulk messages!
            </p>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Looking for complete{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  clinic management software?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                FelixaTouch offers a free demo of its clinic management software to help you streamline operations, boost growth, and maximize profitability. With smart reports and analytics, you can access insights anytime and anywhere.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                For effortless adoption, we provide FelixaKit, an all in one hardware solution preloaded with FelixaTouch. <strong>It</strong> ensures quick setup, smooth onboarding, and hassle free management of patients, billing, labs, pharmacy, and more.
              </p>
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90" asChild>
                <Link href="#demo">BOOK DEMO</Link>
              </Button>
            </div>

            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
                Get FelixaTouch <em className="text-primary font-serif not-italic">free demo!</em>
              </h3>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Explore a smarter way to manage care, workflows, and growth in one platform.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Stethoscope className="w-8 h-8 text-primary" />,
                    title: "General Clinic",
                    description: "Manage daily consultations, patient records, and billing with ease."
                  },
                  {
                    icon: <Activity className="w-8 h-8 text-primary" />,
                    title: "Dental Clinic",
                    description: "Handle appointments, treatment plans, and patient histories efficiently."
                  },
                  {
                    icon: <HeartPulse className="w-8 h-8 text-primary" />,
                    title: "Doctor Practice",
                    description: "Simplify patient management, documentation & follow-ups in one place."
                  },
                  {
                    icon: <Users className="w-8 h-8 text-primary" />,
                    title: "Wellness Center",
                    description: "Manage clients, sessions, and services with a smooth digital workflow."
                  },
                  {
                    icon: <ClipboardList className="w-8 h-8 text-primary" />,
                    title: "Therapy Center",
                    description: "Track procedures, sessions, and progress with structured records."
                  },
                  {
                    icon: <FileText className="w-8 h-8 text-primary" />,
                    title: "Unani Clinic",
                    description: "Organize consultations, prescriptions, and patient data digitally."
                  }
                ].map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-primary">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Automated engagement{" "}
                <em className="text-primary font-serif not-italic">with patients!</em>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay connected with your patients like never before through an integrated system combining
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {[
                {
                  icon: <Phone className="w-10 h-10 text-green-600" />,
                  title: "WhatsApp",
                  description: "A mobile app landing page is the important and essentials amount product."
                },
                {
                  icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
                  title: "SMS",
                  description: "Deliver important notifications and alerts reliably, even without internet access. Everything you need to manage patients, operations, and growth efficiently in one system."
                },
                {
                  icon: <Mail className="w-10 h-10 text-orange-600" />,
                  title: "Mail",
                  description: "Share detailed information, reports, and follow-ups in a professional format."
                }
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop"
                alt="Doctor-patient consultation"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Our Key <em className="text-primary font-serif not-italic">Features</em>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage patients, operations, and growth efficiently in one system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-8 h-8 text-primary" />,
                  title: "Smart Prescriptions",
                  description: "Create and manage prescriptions easily using simplified formats and ready-to-use consultation templates."
                },
                {
                  icon: <Activity className="w-8 h-8 text-primary" />,
                  title: "Pharmacy & Labs",
                  description: "FelixaTouch's Lab Management module streamlines diagnostic workflows end-to-end. From test orders and prescriptions to automated report generation and charge capture, every step is logged in the patient's electronic record."
                },
                {
                  icon: <HeartPulse className="w-8 h-8 text-primary" />,
                  title: "Patient Care",
                  description: "Support better patient outcomes with automated medicine reminders and bulk communication tools"
                },
                {
                  icon: <DollarSign className="w-8 h-8 text-primary" />,
                  title: "Revenue",
                  description: "Track earnings effortlessly with digitized payments and a clear, actionable analytics dashboard."
                },
                {
                  icon: <Package className="w-8 h-8 text-primary" />,
                  title: "Inventory Management",
                  description: "Monitor and control clinic supplies, medicines, and inventory levels in real-time. Track usage, reduce wastage, and ensure uninterrupted supplies."
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-primary" />,
                  title: "Analytics Dashboards",
                  description: "Track clinic performance with real-time insights, key metrics, and clear reports to optimize operations and improve care."
                }
              ].map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto mt-16">
              <Image
                src="/uploads/image_bd6c3fa0-e3d1-4d74-8953-a3a3f23684f0.png"
                alt="FelixaTouch Revenue Analytics Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Maximize Your Clinic&apos;s Revenue with Data-Driven Insights
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Unlock the full potential of your clinic with Felixatouch&apos;s advanced analytics. Get actionable insights into your revenue streams, identify growth opportunities, and make informed decisions that directly impact your bottom line. Streamline operations and track performance to ensure your clinic thrives financially.
              </p>
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90" asChild>
                <Link href="#demo">Know More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Lovely <em className="text-primary font-serif not-italic">Customers</em>
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted by clinics, doctors, and care teams across multiple regions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  rating: 5,
                  text: "The simplicity and organization FelixaTouch bring to our workflow is impressive. It allows our team to focus more on patient care and less on administrative work",
                  name: "Dr. Alberto Argüello Villalobos",
                  location: "Aryal Care Costa Rica"
                },
                {
                  rating: 5,
                  text: "FelixaTouch has helped us manage patient information, staff coordination, and daily activities in a much more structured way. It has made our operations smoother and more transparent",
                  name: "Haris",
                  location: "Manager Peace Village"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">&quot;{testimonial.text}&quot;</p>
                    <div className="flex items-center space-x-4 pt-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Secure and Structured{" "}
                <em className="text-primary font-serif not-italic">Care Delivery</em>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ensure patient data security and deliver organized, coordinated care through structured therapy workflows and system-led processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Data Security & Compliance</h3>
                  <p className="text-muted-foreground">
                    FelixaTouch places top priority on patient data safety and security, adhering to DPDPA and ABDM compliance standards. With advanced encryption, secure access controls, and seamless integration with global frameworks, our platform safeguards sensitive information at every step. Designed to empower healthcare professionals, FelixaTouch ensures a trusted, reliable, and efficient system for managing patient care.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ClipboardList className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Complete Therapy Management</h3>
                  <p className="text-muted-foreground">
                    FelixaTouch brings structure and clarity to therapy services in the clinic. Doctors can order therapies directly from the patient&apos;s consultation dashboard, and these requests appear instantly on the therapist&apos;s dashboard for action. Therapists can view their schedules, update progress, and complete assigned sessions, while the front desk and administrators monitor every task to ensure smooth coordination. Even patients who come only for therapy, without a prior consultation, can be managed easily within the system. With Therapy Management in FelixaTouch, clinics deliver more organized, timely, and patient-focused care that builds confidence and satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <Card className="inline-block hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Dedicated Monthly Clinic Support</h3>
                  <p className="text-muted-foreground max-w-3xl">
                    At Felixatouch, we believe in building long-term partnerships with our clients. Our dedicated team will proactively contact your clinic monthly to ensure smooth operations, address any concerns, and offer expert advice. We also provide personalized recommendations to help streamline your workflows, optimize service delivery, and enhance patient satisfaction, ensuring your clinic stays ahead of the curve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <em className="text-primary font-serif not-italic">Founders</em>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The minds behind FelixaTouch are driven by one goal — to build smarter systems that help healthcare teams focus on what truly matters: patient care.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                      alt="Founder"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Founder Name</h3>
                  <p className="text-muted-foreground">
                    Passionate about transforming healthcare through technology
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <em className="text-primary font-serif not-italic">Questions</em>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Doubt in how to choose best clinic management software in India? Contact us for a version tailored to your needs. Get all your questions answered before making the right choice!
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto mb-12">
              <Image
                src="/uploads/image_54c5f5dc-7f31-45b1-b74a-de6924f6ee2d.png"
                alt="FelixaTouch on tablet device"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  What features does our clinic management software offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our software includes features such as appointment scheduling, patient record management, e-prescriptions, automated reminders, queue management, billing, reporting tools and other relevant features.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  Can FelixaTouch helps identify areas of revenue growth?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, FelixaTouch provides detailed analytics and insights that help identify revenue opportunities, track financial performance, and optimize clinic operations for better profitability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  How can Felixatouch help increase my clinic&apos;s lead generation and footfall?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  FelixaTouch enhances patient engagement through automated reminders, bulk messaging, and streamlined appointment booking, helping attract and retain more patients.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="demo" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Download Our App!
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access FelixaTouch on the go to manage care, workflows, and patient information anytime, anywhere.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8">
              <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md">
                <Image
                  src="/uploads/image_2a918a77-5e66-4531-a31e-5d999629aa35.png"
                  alt="FelixaTouch mobile app"
                  width={400}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Demo
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Don&apos;t miss our future updates! Get a free Demo Today!
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="tel:+918137077217">Contact Us</Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}