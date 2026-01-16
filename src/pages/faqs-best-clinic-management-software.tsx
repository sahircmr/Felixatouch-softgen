import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Shield, TrendingUp, Users, Zap, Globe, HeadphonesIcon, FileText, CreditCard, GraduationCap } from "lucide-react";

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Features & Capabilities",
      icon: Zap,
      faqs: [
        {
          question: "What features does your clinic management software offer?",
          answer: "Our software includes features such as appointment scheduling, patient record management, e-prescriptions, automated reminders, queue management, billing, reporting tools and other relevant features."
        },
        {
          question: "Can I generate reports for financial analysis and patient data?",
          answer: "Yes, our software provides detailed revenue analytics and customizable reporting tools to help you track performance, trends, and patient data efficiently."
        },
        {
          question: "How can I manage patient appointments and queues?",
          answer: "Our software simplifies appointment scheduling, rescheduling, and queue management, ensuring a smooth and efficient workflow for your clinic."
        }
      ]
    },
    {
      category: "Revenue & Growth",
      icon: TrendingUp,
      faqs: [
        {
          question: "Can Felixatouch help identify areas of revenue growth?",
          answer: "Yes! Felixatouch analyzes your clinic's financial data to identify trends, gaps, and opportunities for growth. You can pinpoint underperforming areas and implement targeted strategies to improve revenue, whether through pricing adjustments, service offerings, or enhanced patient retention."
        },
        {
          question: "How can Felixatouch help increase my clinic's lead generation and footfall?",
          answer: "Felixatouch boosts your clinic's digital presence through targeted marketing strategies that attract more leads and increase footfall. By optimizing your clinic's online visibility, engaging with potential patients, and converting them into loyal clients, Felixatouch helps drive consistent revenue growth."
        },
        {
          question: "Can I track real-time revenue data with Felixatouch?",
          answer: "Yes! Felixatouch offers real-time revenue tracking, allowing you to monitor your clinic's financial performance at any time. Stay on top of key metrics like revenue, patient volume, and more, so you can make timely decisions that optimize your clinic's revenue."
        },
        {
          question: "Will using Felixatouch reduce administrative costs?",
          answer: "Yes! Felixatouch helps automate many administrative tasks such as billing, appointment scheduling, and patient record management. This reduces the need for manual processes, saving time and resources, which in turn lowers administrative costs and increases overall clinic revenue."
        }
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      faqs: [
        {
          question: "How secure is the patient data in the software?",
          answer: "Patient data is protected through advanced encryption methods and secure access controls, ensuring compliance with global standards and safeguarding sensitive information."
        },
        {
          question: "Is the software compatible with my existing systems?",
          answer: "Yes, FelixaTouch is designed to integrate seamlessly with your existing tools and systems, ensuring smooth transitions and minimal disruption."
        }
      ]
    },
    {
      category: "Access & Availability",
      icon: Globe,
      faqs: [
        {
          question: "Can I access the software remotely?",
          answer: "Yes, our cloud-based system allows you to access patient records, appointments, and other features securely from any location with an internet connection."
        }
      ]
    },
    {
      category: "Training & Support",
      icon: GraduationCap,
      faqs: [
        {
          question: "Is training provided for new users?",
          answer: "Absolutely! We offer comprehensive training and support to ensure your team can fully utilize the software's features from day one. However, FelixaTouch is designed with user-friendly interfaces, making it learn easy and navigate the system."
        },
        {
          question: "How do I get support if I have issues with the software?",
          answer: "Our dedicated support team is available 24/7 via phone, email, or live chat to assist with any technical issues or questions you may have."
        }
      ]
    },
    {
      category: "Payments & Billing",
      icon: CreditCard,
      faqs: [
        {
          question: "Can the software handle both online and offline payments?",
          answer: "Yes, FelixaTouch supports flexible payment options, allowing both online and cash payments to be processed seamlessly and securely."
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="FAQs - Best Clinic Management Software | FelixaTouch"
        description="Find answers to frequently asked questions about FelixaTouch clinic management software. Learn about features, security, pricing, support, and how our software can transform your clinic operations."
        url="https://felixatouch.com/faqs-best-clinic-management-software"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <Header />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-purple-500/5 to-emerald-500/5" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4">
                  <HelpCircle className="w-4 h-4" />
                  Frequently Asked Questions
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight">
                  Your Questions,{" "}
                  <span className="text-brand-primary">Answered</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Everything you need to know about FelixaTouch clinic management software
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto space-y-16">
                {faqCategories.map((category, categoryIndex) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={categoryIndex} className="space-y-6">
                      {/* Category Header */}
                      <div className="flex items-center gap-4 pb-4 border-b-2 border-brand-primary/20">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-purple-600 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                          {category.category}
                        </h2>
                      </div>

                      {/* FAQs in this category */}
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.faqs.map((faq, faqIndex) => (
                          <AccordionItem
                            key={faqIndex}
                            value={`item-${categoryIndex}-${faqIndex}`}
                            className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:border-brand-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
                          >
                            <AccordionTrigger className="px-6 py-5 text-left hover:no-underline">
                              <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                                {faq.question}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Still Have Questions CTA */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary via-purple-600 to-emerald-600 p-12 md:p-16 text-center">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                      <HeadphonesIcon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                      Still Have Questions?
                    </h2>
                    
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                      Our support team is available 24/7 to help you with any questions about FelixaTouch clinic management software
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                      <Button
                        size="lg"
                        className="bg-white text-brand-primary hover:bg-slate-50 font-semibold text-lg px-8 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        asChild
                      >
                        <a href="#demo">Book a Demo</a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold text-lg px-8 py-6 h-auto rounded-xl transition-all duration-300"
                        asChild
                      >
                        <a href="mailto:support@felixatouch.com">Contact Support</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-16 bg-slate-100 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                  Explore More About FelixaTouch
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <a
                    href="/best-clinic-software-features"
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-brand-primary"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-primary to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Features
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Discover all the powerful features
                    </p>
                  </a>

                  <a
                    href="/dental-clinic-management-software"
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Dental Software
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Specialized dental clinic solution
                    </p>
                  </a>

                  <a
                    href="/unani-clinic-management-software"
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-600"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Unani Software
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Tailored for Unani practices
                    </p>
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