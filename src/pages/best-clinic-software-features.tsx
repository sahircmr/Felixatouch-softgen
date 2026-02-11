import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeadGenerationForm } from "@/components/LeadGenerationForm";
import { useState } from "react";
import { 
  FileText, 
  Users, 
  Calendar, 
  Monitor, 
  ClipboardList, 
  Pill,
  FlaskConical,
  MessageSquare,
  CalendarCheck,
  FileStack,
  Package,
  CreditCard,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Smartphone,
  Database
} from "lucide-react";

export default function FeaturesPage() {
  const [demoFormOpen, setDemoFormOpen] = useState(false);

  return (
    <>
      <SEO
        title="Best Clinic Software Features | FelixaTouch - Complete Feature Suite"
        description="Explore FelixaTouch's comprehensive suite of features designed to streamline clinic management. From EMR to billing, analytics to patient engagement - everything you need."
        url="https://felixatouch.com/best-clinic-software-features/"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Header />

        <main className="pt-24 pb-16">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                FelixaTouch <span className="text-primary-600">Features</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Felixatouch, the cloud based clinic software offers a comprehensive suite of features designed to streamline clinic management. With a user-friendly interface, and secure data storage in cloud, Felixatouch helps healthcare providers deliver exceptional care while optimizing clinic operations. Transform your clinic today with Felixatouch.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-20">
              <Image
                src="/image_c4bd0fd2-3606-4c38-9eb6-020ac52af184.png"
                alt="Stethoscope on keyboard - Medical clinic software"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FileText className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Electronic Medical Records
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Felixatouch's advanced EMR system streamlines patient data management, making it easy to access, update, and share medical records securely. With intuitive features, it enhances efficiency, improves patient care, and ensures compliance with the latest healthcare standards.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_c4bd0fd2-3606-4c38-9eb6-020ac52af184.png"
                  alt="Electronic Medical Records system"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_b2d5d068-7eac-4e4c-ab79-36bbc85d4658.png"
                  alt="Patient demographics and family consultation"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Users className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Patient Demography
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  From personal information to medical history, our platform provides a comprehensive view of each patient, ensuring accurate records and easy access. This feature streamlines patient care, streamlines communication, and supports informed decision-making for better treatment outcomes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Calendar className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Easy Queue & Appointment Management
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Streamline patient flow, minimize wait times, and boost clinic efficiency with ease. The front desk can quickly generate, prioritize, cancel, or pause queues based on the clinic's needs, while admins can monitor all processes in real-time.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_2d0ff6b1-f829-4087-99a7-500a75ef2d56.png"
                  alt="Healthcare team collaboration and appointment management"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_a8e48c98-832a-4c08-add2-063cb5b46063.png"
                  alt="Token display system in waiting room"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Monitor className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Token Display System
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Felixatouch integrates with token display boards to manage patient flow efficiently. Patients get notified about their turn in real-time, reducing crowding at the reception and enhancing the overall patient experience.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <ClipboardList className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Queue Management
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Optimize patient movement across multiple departments with advanced queue management. Monitor waiting times, prioritize urgent cases, and balance workload between doctors. Clinics can deliver faster, more organized care with minimal delays.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_2d0ff6b1-f829-4087-99a7-500a75ef2d56.png"
                  alt="Team meeting for queue management planning"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_8e31e9f9-6bc6-47da-bc63-ce3474672863.png"
                  alt="Professional prescription bottles and medication management"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Pill className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Impressive Prescription
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Clear, professional, and visually appealing prescriptions in just a few clicks. With customizable templates and an intuitive design, prescriptions are easy to read, ensuring better communication with patients.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FlaskConical className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Lab Management
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Felixatouch provides comprehensive lab management modules, enabling seamless test ordering, sample tracking, and result management. Lab staff can receive and store results directly in the EMR. This feature ensures accuracy, speeds up turnaround times.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_cb5c6270-e58e-4d22-8c3a-f7bb7a726a2a.png"
                  alt="Laboratory management with medical team and analytics"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_ddd71541-ec9d-4d4b-acd2-99cbb25a7f4f.png"
                  alt="Doctor managing pharmacy inventory and prescriptions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Pill className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Pharmacy Management
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Manage your in-house or partnered pharmacy with ease. FelixaTouch tracks prescriptions, stock levels, expiry dates, and sales in real-time, ensuring timely dispensing and zero leakages.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FileStack className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Procedure Management & Ordering
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Organize and track clinical procedures with structured ordering and documentation. From minor treatments to advanced procedures, this feature ensures standardization, accurate billing, and improved coordination between doctors, nurses, and staff.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_c0953057-5b5a-49bd-b87c-b0876c7155ab.png"
                  alt="Medical professional managing procedures and ordering system"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_8705c036-3c52-4cd8-ad3f-bff2907ca476.png"
                  alt="SMS and email engagement messaging on mobile"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <MessageSquare className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Engagement Messaging
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Stay connected with patients through automated SMS, email, or WhatsApp reminders. Send appointment confirmations, follow-up reminders, health tips, and promotional offers to improve patient engagement and clinic branding.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <CalendarCheck className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Next-Visit Setup
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  FelixaTouch makes scheduling follow-ups seamless. Doctors can instantly set the next visit during consultation, ensuring patients stay on track with treatment plans and reducing drop-offs.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_fe059a92-ba49-4a99-927e-2da16f7f27da.png"
                  alt="Patient smiling during consultation with healthcare provider"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_a32d14d3-977d-4b8e-8a3f-f386d591be1a.png"
                  alt="Template creation and custom reports interface"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <FileText className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Easy Templates Creation
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Template feature lets you set customized templates for patient records, prescriptions, and other clinical documents in minutes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Package className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Inventory Management
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Monitor, manage, and control your clinic's stock with advanced inventory tools. Automate reorder alerts, track usage patterns, prevent wastage, and ensure uninterrupted supply of medicines, consumables, and lab items.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_0d78f378-b4b3-47c3-a40e-fb210a08b305.png"
                  alt="Pharmacy inventory management with tablet system"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
                  alt="Payment processing on mobile device"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <CreditCard className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Easy Payment & Billing System
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  FelixaTouch provides a seamless, secure, and flexible payment system, ensuring accurate transaction tracking for effortless financial management.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <ShieldCheck className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Insurance Management
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Handle insurance claims, approvals, and settlements within the platform. FelixaTouch supports multiple insurers, simplifies claim documentation, and tracks settlement statuses.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_2e8ecb24-db0a-433d-b6f1-6b8679e65962.png"
                  alt="Insurance management digital interface"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_ff9b40a8-0b0a-43b7-bc64-1b4164e52d89.png"
                  alt="Healthcare professional managing incentive and commission tracking system"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Incentive & Commission Management
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Motivate your team with performance-based incentives. Track and calculate commissions for doctors, lab technicians, or staff automatically, based on procedures, services, or sales.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Analytics Dashboards
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Monitor your clinic's performance with real-time insights, detailed reports, and key metrics to optimize operations and improve patient care.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_db924faa-a8ab-4967-88c9-e21d615dd15c.png"
                  alt="Analytics dashboards showing revenue metrics on multiple devices"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_a32d14d3-977d-4b8e-8a3f-f386d591be1a.png"
                  alt="Custom date-wise reports and documentation"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <FileText className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Custom Date-Wise Reports
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Generate detailed reports filtered by custom date ranges. Whether it's daily, weekly, or monthly insights, Felixatouch empowers administrators to analyze performance, revenue, expenses, and patient inflow with precision.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Revenue Dashboards
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Track your clinic's financial health with intuitive revenue dashboards. Visualize income streams from consultations, labs, pharmacy, and procedures.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_db924faa-a8ab-4967-88c9-e21d615dd15c.png"
                  alt="Revenue dashboards with financial analytics"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_8061e273-54a8-46a1-b0d9-2d960d123000.png"
                  alt="Mobile device and laptop showing multi-device connectivity"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Smartphone className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Connect With Unlimited Devices
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  FelixaTouch enables you to set up connections with an infinite number of devices, irrespective of their location. Accessible from tablets, desktops, and laptops for seamless access.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Database className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Store Unlimited Patient Records
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  FelixaTouch allows you to securely store an unlimited number of patient records, ensuring easy access and seamless management.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image_b2d5d068-7eac-4e4c-ab79-36bbc85d4658.png"
                  alt="Patient records storage"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          <section className=" bg-gradient-to-br from-purple-600 to-emerald-600 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Clinic?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Experience the complete feature suite with a free demo today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => setDemoFormOpen(true)}>
                  Book Free Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <LeadGenerationForm open={demoFormOpen} onOpenChange={setDemoFormOpen} source="features_page" />
    </>
  );
}