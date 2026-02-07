import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Shield, TrendingUp, Users, Zap, Globe, HeadphonesIcon, FileText, CreditCard, Cloud, MessageSquare, Workflow, Lock, Activity } from "lucide-react";

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General Overview",
      icon: HelpCircle,
      faqs: [
        {
          question: "What is Felixatouch?",
          answer: "Felixatouch is a comprehensive, 100% cloud-based clinic management software designed to streamline healthcare operations. It offers a suite of tools including Electronic Medical Records (EMR), queue management, billing, and lab/pharmacy integration to help healthcare providers optimize their practice and improve patient care."
        },
        {
          question: "Is the software cloud-based?",
          answer: "Yes, Felixatouch is 100% cloud-based. This means all your data is stored securely in the cloud, and you can access your clinic's records from anywhere at any time using an internet connection."
        },
        {
          question: "How many devices can I connect to the system?",
          answer: "Felixatouch allows you to connect with an unlimited number of devices (desktops, laptops, and tablets) regardless of their location, ensuring seamless access for your entire staff."
        }
      ]
    },
    {
      category: "Clinical Features",
      icon: FileText,
      faqs: [
        {
          question: "Does Felixatouch support Electronic Medical Records (EMR)?",
          answer: "Yes. The software includes an advanced EMR system that allows for secure management of patient data, medical history, and treatment plans. It is designed for easy updates and compliance with healthcare standards."
        },
        {
          question: "Can I create digital prescriptions?",
          answer: "Absolutely. The 'Impressive Prescription' feature allows doctors to generate professional, clear, and visually appealing prescriptions in just a few clicks using customizable templates."
        },
        {
          question: "How does the software handle patient follow-ups?",
          answer: "The 'Next-Visit Setup' allows doctors to schedule follow-up appointments instantly during the consultation, ensuring patient adherence to treatment plans and reducing drop-offs."
        }
      ]
    },
    {
      category: "Operations & Workflow",
      icon: Workflow,
      faqs: [
        {
          question: "How does the Queue Management system work?",
          answer: "Felixatouch offers an Easy Queue & Appointment Management system where the front desk can generate, prioritize, or pause queues. It also integrates with a Token Display System to notify patients of their turn in real-time, reducing reception crowding."
        },
        {
          question: "Does it include Lab and Pharmacy management?",
          answer: "Yes. Lab Management enables digital test ordering, sample tracking, and direct storage of results into the patient's EMR. Pharmacy Management tracks stock levels, expiry dates, and real-time sales to prevent leakages and ensure timely medicine dispensing."
        },
        {
          question: "Can I manage clinic inventory?",
          answer: "Yes, the Inventory Management tool allows you to monitor stocks of medicines, consumables, and lab items. It includes automated reorder alerts to prevent shortages and minimize wastage."
        }
      ]
    },
    {
      category: "Billing & Finance",
      icon: CreditCard,
      faqs: [
        {
          question: "What billing features are included?",
          answer: "Felixatouch provides a flexible payment and billing system. It features Charge Capture Billing, which records every service, procedure, and consultation in real-time to minimize revenue leakage."
        },
        {
          question: "Does the software support insurance claims?",
          answer: "Yes. The Insurance Management module helps you handle claims, approvals, and settlements within the platform, supporting multiple insurers and simplifying documentation."
        },
        {
          question: "Can I track staff incentives?",
          answer: "Yes, there is an Incentive & Commission Management feature that automatically calculates commissions for doctors, technicians, or staff based on services, sales, or procedures."
        }
      ]
    },
    {
      category: "Reporting & Analytics",
      icon: Activity,
      faqs: [
        {
          question: "What kind of insights can I get from the software?",
          answer: "The software provides Analytics Dashboards for real-time monitoring of clinic performance, Revenue Dashboards to visualize income from consultations, labs, and pharmacy, and Custom Date-Wise Reports with detailed reports filtered by daily, weekly, or monthly ranges to analyze expenses and patient inflow."
        }
      ]
    },
    {
      category: "Security & Revenue Protection",
      icon: Lock,
      faqs: [
        {
          question: "How does Felixatouch safeguard clinic owners from revenue leakage?",
          answer: "Felixatouch acts as a digital watchdog by utilizing an Integrated Charge Capture module. This ensures that every clinical action—whether it's a lab test, a pharmacy dispense, or a minor procedure—is automatically linked to the patient's bill. Because the financial charge is triggered the moment the doctor saves the order, it is impossible for staff to 'forget' to bill for a service, effectively plugging potential income gaps."
        },
        {
          question: "In what ways does the software prevent employee malpractice and fraud?",
          answer: "The system is designed with multiple layers of accountability: Audit Trails (every entry, edit, or deletion is logged with a 'digital footprint,' showing exactly who made the change and when), Role-Based Access (restrict staff permissions so only authorized personnel can handle billing, view sensitive data, or apply discounts), Standardized Pricing (pre-set price lists prevent staff from manually altering costs or providing unauthorized 'custom' pricing), and Inventory Reconciliation (real-time tracking ensures that no medicine or lab consumable leaves the clinic without a corresponding digital record and payment)."
        },
        {
          question: "Can I monitor my clinic's finances if I am not physically present?",
          answer: "Yes. Since Felixatouch is 100% cloud-based, clinic owners can access the Real-Time Analytics Dashboard from any location via a smartphone or laptop. This allows you to monitor live patient flow, total collections, and pending dues instantly, ensuring you always have a 'pulse' on your business regardless of where you are."
        }
      ]
    },
    {
      category: "Patient Engagement",
      icon: Users,
      faqs: [
        {
          question: "How does Felixatouch help in communicating with patients?",
          answer: "The Engagement Messaging feature allows you to stay connected with patients through automated SMS, email, or WhatsApp. You can send appointment confirmations, health tips, and promotional offers to enhance your clinic's branding."
        },
        {
          question: "Is there a limit on patient records?",
          answer: "No. Felixatouch allows you to store an unlimited number of patient records securely."
        }
      ]
    },
    {
      category: "WhatsApp Integration & Communication",
      icon: MessageSquare,
      faqs: [
        {
          question: "Does Felixatouch integrate with WhatsApp?",
          answer: "Yes, Felixatouch features a robust WhatsApp integration designed to automate patient communication and improve engagement. This allows the clinic to send important updates directly to a patient's mobile phone instantly."
        },
        {
          question: "What automated message templates are included?",
          answer: "The software comes with pre-configured templates for essential clinic operations, including: Prescription Delivery (send digital prescriptions directly to the patient's WhatsApp immediately after their consultation), Booking Notifications (automatically send appointment confirmations and reminders to reduce 'no-shows'), Lab Report Delivery (notify patients as soon as their results are ready and deliver the digital report securely), and Birthday Wishes (automate personalized greetings to patients to build long-term loyalty and a personal touch)."
        },
        {
          question: "Can a clinic get a customized WhatsApp integration service?",
          answer: "Yes. Beyond the standard templates, clinics can request customized WhatsApp integration services. This allows you to create and deliver additional message templates tailored to your specific workflow, promotional campaigns, or specialized patient instructions."
        },
        {
          question: "Is WhatsApp messaging more effective than SMS?",
          answer: "While Felixatouch supports both, WhatsApp integration typically sees higher open rates and allows for easier delivery of rich media, such as PDF lab reports and prescriptions, making it more convenient for both the clinic and the patient."
        }
      ]
    },
    {
      category: "Complete Clinical Workflow Management",
      icon: Workflow,
      faqs: [
        {
          question: "Can I consider Felixatouch to manage my entire clinical workflow?",
          answer: "Yes. Felixatouch is built as an all-in-one integrated platform that connects every department of your clinic. It eliminates manual handovers and ensures that data flows seamlessly from the front desk to the specialized treatment rooms."
        },
        {
          question: "How does the integrated workflow look in practice?",
          answer: "The software synchronizes the following steps into one unified journey: Patient Intake (seamless patient registration, appointment scheduling, and live token management), Doctor Consultation (doctors use an advanced EMR to record notes and orders), and Digital Orders (once the doctor hits 'Save,' orders are instantly routed to Pharmacy for immediate fulfillment, Laboratory for sample collection and testing, Procedure Room for minor treatments or nursing care, and Ultrasound & Radiology for specialized scanning orders)."
        },
        {
          question: "What is the 'Charge Capture' module?",
          answer: "The Charge Capture module is a financial safeguard that ensures every service provided—whether it's a consultation, a lab test, or a procedure—is automatically added to the patient's bill. This provides Error-Free Billing (no more forgotten items or manual entry mistakes) and Malpractice-Free Security (by automating the link between the clinical order and the final invoice, the system prevents financial leakages and ensures total transparency in clinic revenue)."
        }
      ]
    },
    {
      category: "Support & Getting Started",
      icon: HeadphonesIcon,
      faqs: [
        {
          question: "How can I see a demo of the software?",
          answer: "You can request a free demo by filling out the contact form on the Felixatouch website or by contacting their support team at +91 8137077217 or support@intpurple.com."
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
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 to-emerald-600 p-12 md:p-16 text-center">
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
                        <a href="tel:+918137077217">Call +91 8137077217</a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold text-lg px-8 py-6 h-auto rounded-xl transition-all duration-300"
                        asChild
                      >
                        <a href="mailto:support@intpurple.com">Email Support</a>
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
                  <Link
                    href="/best-clinic-software-features"
                     className="group bg-white dark:bg-slate-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Features
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Discover all the powerful features
                    </p>
                  </Link>

                  <Link
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
                  </Link>

                  <Link
                    href="/unani-clinic-management-software"
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Unani Software
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Tailored for Unani practices
                    </p>
                  </Link>
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