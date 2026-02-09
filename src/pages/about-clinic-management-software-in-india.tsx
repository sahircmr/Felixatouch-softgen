import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Globe2,
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Shield,
  Rocket,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: "Startup India Recognized",
      description: "DPIIT recognized startup driving innovation in healthcare technology"
    },
    {
      icon: Globe2,
      title: "Global Presence",
      description: "Operating across India, UAE, Qatar, Bahrain, KSA, and Malta"
    },
    {
      icon: Users,
      title: "Microsoft Partner",
      description: "Partnering with Microsoft for enterprise solutions"
    },
    {
      icon: Target,
      title: "EU Business Engagement",
      description: "Engaged with Malta Enterprise for European business expansion"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering AI-powered healthcare solutions that transform patient care"
    },
    {
      icon: Shield,
      title: "Security",
      description: "HIPAA & GDPR compliant with data privacy by design"
    },
    {
      icon: Heart,
      title: "Care-Centric",
      description: "Putting patients and healthcare providers at the heart of everything we do"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "Committed to delivering world-class products and services"
    }
  ];

  const products = [
    {
      name: "FelixaTouch",
      description: "Comprehensive clinic management software with EMR, prescriptions, appointments, and billing",
      features: ["Smart Queue Management", "EMR & EHR", "Multi-branch Support", "WhatsApp Integration"]
    },
    {
      name: "Care Home Management",
      description: "Complete solution for elderly care facilities with treatment planning and family communication",
      features: ["Admission Management", "Barthel Index", "Wound Assessment", "Family Portal"]
    },
    {
      name: "Home Care Solution",
      description: "Remote care technology integrating healthcare devices for monitoring patient health",
      features: ["Remote Monitoring", "Device Integration", "Treatment Planning", "Compliance Tracking"]
    },
    {
      name: "Palliative Care",
      description: "Specialized solution for bedridden patients with home visit and volunteer management",
      features: ["Home Visit Management", "Volunteer System", "Ambulatory Services", "Digital Care Plans"]
    }
  ];

  const offices = [
    {
      country: "India",
      locations: [
        {
          name: "Bangalore Office",
          address: "Orbbiz Dew, Marthahalli, Bangalore, Karnataka",
          phone: "+91 9731066055"
        },
        {
          name: "NIT Calicut",
          address: "Technology Business Incubator, NIT Campus (P.O.), Calicut – 673601, Kerala",
          phone: "+91 9731066055"
        }
      ]
    },
    {
      country: "Malta",
      locations: [
        {
          name: "Malta Office",
          address: "Ewropa Business Centre, Level 3, Suite 701, Triq Dun Karm, Birkirkara, BKR9034",
          phone: "+356 77955600"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="About Us - IntPurple Technologies & FelixaCare Platform | FelixaTouch"
        description="Learn about IntPurple Technologies LLP, creators of the FelixaCare digital health platform. FelixaTouch is part of our comprehensive healthcare technology ecosystem serving clinics across India, UAE, Qatar, Bahrain, and KSA."
        url="/about-clinic-management-software-in-india"
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-20 sm:py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-emerald-50 dark:from-purple-950/20 dark:via-slate-900 dark:to-emerald-950/20" />
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" />
              <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Badge variant="outline" className="mb-6 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
                <Building2 className="w-4 h-4 mr-2" />
                Est. 2020 - Transforming Healthcare
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  IntPurple Technologies
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-8 leading-relaxed">
                Digitizing the future of healthcare using AI and innovative technology solutions.
                Creators of the FelixaCare digital health platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white shadow-lg">
                  <Link href="/contact-felixatouch">Get In Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://intpurple.com" target="_blank" rel="noopener noreferrer">
                    Visit IntPurple.com
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Company Overview */}
          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">
                    Who We Are
                  </h2>
                  <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
                    <p>
                      <strong className="text-slate-900 dark:text-white">IntPurple Technologies LLP</strong> is a pioneering healthcare technology company committed to delivering state-of-the-art Software as a Service (SaaS) solutions that transform the healthcare industry.
                    </p>
                    <p>
                      Our innovative <strong className="text-purple-600 dark:text-purple-400">FelixaCare digital health platform</strong> is designed to streamline administrative procedures, optimize operational efficiency, and enhance the quality of patient care for healthcare providers worldwide.
                    </p>
                    <p>
                      With expertise in <strong className="text-emerald-600 dark:text-emerald-400">web application development, mobile app development, AI integration, and cybersecurity</strong>, we provide comprehensive digital solutions that empower healthcare organizations to thrive in the modern era.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-emerald-100 dark:from-purple-900/20 dark:to-emerald-900/20 p-8 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <Building2 className="w-32 h-32 mx-auto text-purple-600 dark:text-purple-400" />
                      <div>
                        <p className="text-5xl font-black text-slate-900 dark:text-white mb-2">500+</p>
                        <p className="text-xl text-slate-600 dark:text-slate-400">Healthcare Professionals Trust Us</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Image Content - Now on the Left */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-purple-100 dark:from-emerald-900/10 dark:to-purple-900/10 rounded-3xl blur-2xl" />
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
                    <Image
                      src="/image_2d0ff6b1-f829-4087-99a7-500a75ef2d56.png" // Replace with your actual image path
                      alt="FelixaTouch Clinic Management Software in India"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative blob to match your site style */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
                </div>


                <div>

                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">
                    Clinic Management <br />
                    <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                      Software in India
                    </span>
                  </h2>
                  <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
                    <p>
                      <strong className="text-slate-900 dark:text-white">FelixaTouch</strong> leads as the top clinic management software in India, providing an all-in-one solution to streamline healthcare operations.
                    </p>
                    <p>
                      The software delivers various medical clinic solutions, catering to
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium"> general practitioners, Unani specialists, dentists, and wellness centers</span>.
                      FelixaTouch equips healthcare providers with a robust set of features tailored to meet their unique needs.
                    </p>
                    <p>
                      Whether for a small practice or a large clinic, FelixaTouch ensures smooth, efficient operations and enhances patient care. With the software, healthcare providers can focus on what matters most—delivering quality care.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </section>

          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
                    <p>
                      <strong className="text-slate-900 dark:text-white">Felixacare</strong> is the healthcare platform developed by IntPurple Technologies. Our flagship product,
                      <span className="text-purple-600 dark:text-purple-400 font-medium"> Felixatouch</span>, enhances the patient experience and optimizes clinic management.
                    </p>
                    <p>
                      With over 5 years of experience in technology and healthcare solutions, our team at IntPurple focuses on innovation and growth. We are committed to creating user-friendly tools that improve administrative efficiency and enhance patient care.
                    </p>
                    <p>
                      By combining our expertise and technology, we aim to make healthcare management smoother and more effective for both patients and providers across the region.
                    </p>
                  </div>

                </div>

                <div className="order-1 md:order-2 relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-emerald-100 dark:from-purple-900/10 dark:to-emerald-900/10 rounded-3xl blur-2xl" />
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
                    <Image
                      src="/image_8705c036-3c52-4cd8-ad3f-bff2907ca476.png"
                      alt="FelixaTouch Clinic Management Software Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl" />
                </div>
              </div>
            </div>
          </section>

          {/* FelixaCare Platform */}
          <section className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Our Platform
                </Badge>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">
                  The{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                    FelixaCare
                  </span>{" "}
                  Ecosystem
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  FelixaTouch is powered by the FelixaCare digital health platform - a comprehensive ecosystem
                  of AI-enabled healthcare solutions designed for modern medical practices.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700"
                  >
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-black mb-3">Platform Features</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                  <div>
                    <p className="font-semibold">Cloud-Based</p>
                    <p className="text-sm text-purple-100">Access Anywhere, Anytime</p>
                  </div>
                  <div>
                    <p className="font-semibold">AI-Powered</p>
                    <p className="text-sm text-purple-100">Intelligent Automation</p>
                  </div>
                  <div>
                    <p className="font-semibold">HIPAA & GDPR</p>
                    <p className="text-sm text-purple-100">Privacy by Design</p>
                  </div>
                  <div>
                    <p className="font-semibold">Smart Devices</p>
                    <p className="text-sm text-purple-100">IoT Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">
                  Our Achievements
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  Recognized globally for innovation and excellence in healthcare technology
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors duration-300"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-emerald-600 flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">
                  Our Core Values
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700"
                  >
                    <value.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Global Presence */}
          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
                  <Globe2 className="w-4 h-4 mr-2" />
                  International Presence
                </Badge>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">
                  Our Global Offices
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  Serving healthcare providers across multiple countries with local presence and support
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-emerald-600 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                        {office.country}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {office.locations.map((location, idx) => (
                        <div key={idx} className="space-y-2">
                          <p className="font-semibold text-slate-900 dark:text-white">
                            {location.name}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                            {location.address}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                            <Phone className="w-4 h-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                            {location.phone}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-2xl text-white text-center">
                <Globe2 className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-3">Sales Available In</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["India", "UAE", "Qatar", "Bahrain", "KSA", "Malta"].map((country, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      {country}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">
                Ready to Transform Your Healthcare Practice?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Join hundreds of healthcare professionals who trust IntPurple Technologies
                and the FelixaCare platform for their digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white shadow-lg">
                  <Link href="/contact-felixatouch">Contact Sales</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/clinic-software-pricing">View Pricing</Link>
                </Button>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <a href="mailto:Contact@IntPurple.com" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Contact@IntPurple.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <a href="tel:+919731066055" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                    +91 9731066055
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}