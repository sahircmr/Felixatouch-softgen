import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, MapPin, Building2, Globe2, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Dr. K.T. Ajmal",
      role: "Unani Doctor",
      location: "Calicut",
      image: "/testimonial-dr-ajmal.png",
      testimonial: "FelixaTouch has helped our Unani clinic move from manual records to a structured digital system. Patient histories, prescriptions, and follow-ups are now well organized, making daily clinic operations smoother and more reliable.",
      keywords: ["Unani clinic management", "digital patient records"],
      rating: 5,
    },
    {
      name: "Dr. Niyas",
      role: "Multispeciality Clinic Doctor",
      location: "India",
      image: "/testimonial-dr-niyas.png",
      testimonial: "Managing multiple departments became much easier with FelixaTouch. The software brings together patient records, billing, and staff coordination in one place, improving efficiency across our multispeciality clinic.",
      keywords: ["multispeciality clinic software", "clinic workflow management"],
      rating: 5,
    },
    {
      name: "Dr. Riyas",
      role: "Clinic Doctor",
      location: "Germany",
      image: "/testimonial-dr-niyas.png",
      testimonial: "FelixaTouch provides a clear and dependable system for managing clinical operations. From patient data to reporting, everything works in a connected and secure manner, which is essential for modern clinics.",
      keywords: ["secure EMR", "clinic management system"],
      rating: 5,
    },
    {
      name: "Dr. Alberto",
      role: "Clinic Doctor",
      location: "Costa Rica",
      image: "/testimonial-dr-alberto.png",
      testimonial: "The simplicity of FelixaTouch makes a real difference in our daily work. It reduces administrative effort and allows our team to focus more on patient care rather than managing multiple tools.",
      keywords: ["simple clinic software", "patient care management"],
      rating: 5,
    },
    {
      name: "Haris",
      role: "Manager",
      location: "Peace Village",
      image: "/testimonial-dr-niyas.png",
      testimonial: "FelixaTouch has brought structure and transparency to our operations at Peace Village. Managing patient information, staff coordination, and daily activities is now more organized and efficient.",
      keywords: ["healthcare operations management", "patient information system"],
      rating: 5,
    },
    {
      name: "Dr. Mayoof",
      role: "Ayurveda & Unani Clinic Doctor",
      location: "UAE",
      image: "/testimonial-dr-female.png",
      testimonial: "FelixaTouch supports both Ayurveda and Unani practices effectively. The platform helps manage patient records, treatments, and follow-ups in a secure and well-structured digital environment.",
      keywords: ["Ayurveda clinic software", "Unani EMR system"],
      rating: 5,
    },
  ];

  const stats = [
    { value: "500+", label: "Happy Clinics", icon: Building2 },
    { value: "15+", label: "Countries", icon: Globe2 },
    { value: "98%", label: "Satisfaction Rate", icon: Award },
    { value: "24/7", label: "Support Available", icon: Star },
  ];

  return (
    <>
      <SEO
        title="Clinic Management Software Testimonials | Real Doctor Reviews - FelixaTouch"
        description="Read real testimonials from doctors and clinic managers worldwide using FelixaTouch clinic management software. Discover how we help Unani, Ayurveda, dental, and multispeciality clinics improve operations, patient care, and efficiency."
        image="/og-image.png"
        url="https://felixatouch.com/clinic-management-software-testimonials"
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-emerald-500/10 to-purple-600/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <Badge className="bg-gradient-to-r from-purple-600 to-emerald-600 text-white border-0 px-6 py-2 text-sm">
                  <Star className="w-4 h-4 mr-2 inline" />
                  Trusted by Healthcare Professionals Worldwide
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
                  What Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-600">
                    Doctors Say
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Real experiences from healthcare professionals who transformed their clinic operations with FelixaTouch clinic management software
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card key={index} className="p-6 text-center border-2 hover:border-purple-300 transition-all hover:shadow-lg">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-emerald-600 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Testimonials Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Trusted by Healthcare{" "}
                  <span className="text-purple-600">Professionals</span>{" "}
                  <span className="text-emerald-600">Worldwide</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  From Unani and Ayurveda clinics to multispeciality hospitals, discover how FelixaTouch helps healthcare providers deliver better patient care
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={index} 
                    className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-200 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-emerald-600/10 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="relative">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-600 to-emerald-600 rounded-full flex items-center justify-center opacity-20">
                        <Quote className="w-8 h-8 text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                        {testimonial.testimonial}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-purple-200">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900 dark:text-white text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                            {testimonial.role}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-emerald-600">
                            <MapPin className="w-4 h-4" />
                            {testimonial.location}
                          </div>
                        </div>
                      </div>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {testimonial.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Global Reach Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30 dark:from-slate-900 dark:to-purple-900/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <Badge className="bg-emerald-600 text-white border-0 px-6 py-2">
                  <Globe2 className="w-4 h-4 mr-2 inline" />
                  Global Healthcare Solution
                </Badge>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                  Serving Clinics from{" "}
                  <span className="text-emerald-600">India</span> to{" "}
                  <span className="text-purple-600">Costa Rica</span>
                </h2>
                
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  FelixaTouch is trusted by healthcare professionals across continents. From traditional Unani and Ayurveda practices to modern multispeciality clinics, our software adapts to diverse healthcare needs worldwide.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                  {[
                    "Unani Clinics",
                    "Ayurveda Centers",
                    "Dental Practices",
                    "Multispeciality Hospitals",
                    "General Clinics",
                    "Wellness Centers",
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-600/20 to-emerald-600/20 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <Card className="relative overflow-hidden border-0 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-emerald-600" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                  
                  <div className="relative z-10 p-12 md:p-16 text-center text-white space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                      Ready to Join Our Growing Family of{" "}
                      <span className="text-yellow-300">Happy Doctors?</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                      Experience the difference FelixaTouch makes in your clinic operations. Start your free demo today and see why doctors worldwide trust us.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                      <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                        <Link href="/#demo">Book Free Demo</Link>
                      </Button>
                      <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6 font-bold transition-all hover:scale-105">
                        <Link href="/best-clinic-software-features">View All Features</Link>
                      </Button>
                    </div>

                    <div className="pt-8 flex items-center justify-center gap-2 text-purple-100">
                      <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                      <span className="text-lg">No credit card required • Free 14-day trial</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Clinic Management Software Testimonials",
            "description": "Real testimonials from doctors and clinic managers worldwide using FelixaTouch clinic management software",
            "url": "https://felixatouch.com/clinic-management-software-testimonials",
            "review": testimonials.map((t) => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": 5,
              },
              "author": {
                "@type": "Person",
                "name": t.name,
                "jobTitle": t.role,
              },
              "reviewBody": t.testimonial,
              "itemReviewed": {
                "@type": "SoftwareApplication",
                "name": "FelixaTouch Clinic Management Software",
                "applicationCategory": "HealthApplication",
              },
            })),
          }),
        }}
      />
    </>
  );
}