import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Users, Database, Globe, FileText, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | FelixaTouch - Clinic Management Software"
        description="FelixaTouch Privacy Policy - Learn how we collect, use, and protect your data in compliance with DPDPA, GDPR, and HIPAA regulations. Effective Date: 12th December 2024."
        url="/privacy-policy-2"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <Header />

        <main className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-primary to-purple-600 rounded-2xl mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Effective Date: <span className="font-semibold text-brand-primary">12th December 2024</span>
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-brand-primary" />
                  Introduction
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  At Felixatouch, a product of Intpurple Technologies LLP, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Felixatouch. By using our software and services, you agree to the collection and use of your information as described in this policy.
                </p>
              </section>

              {/* 1. Information We Collect */}
              <section className="mb-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <Database className="w-6 h-6 text-purple-600" />
                  1. Information We Collect
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  We collect various types of information to provide, improve, and personalize our services:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-l-4 border-brand-primary">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Personal Information</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Information such as your name, email address, phone number, and clinic details that you provide when creating an account or using the services.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-l-4 border-emerald-600">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Patient Health Information</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      If you are a clinic or healthcare provider using Felixatouch, you may collect and manage patient data such as medical records, treatment history, and other sensitive health information. This data is processed in accordance with applicable privacy laws and regulations, including <span className="font-semibold">DPDPA, GDPR, or HIPAA</span> as applicable.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-l-4 border-purple-600">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Usage Data</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Information about how you use our software, including activity logs, device details, and interaction data. This helps us understand usage patterns and improve our product.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-l-4 border-blue-600">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Payment Information</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      If applicable, payment details related to subscription fees or other services offered through Felixatouch.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. How We Use Your Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-emerald-600" />
                  2. How We Use Your Information
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  The information we collect is used for the following purposes:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary mt-1">●</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white">Providing and Maintaining Services:</strong>
                      <span className="text-slate-700 dark:text-slate-300"> To provide you with access to Felixatouch, including managing accounts, processing transactions, and offering customer support.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">●</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white">Improving Our Product:</strong>
                      <span className="text-slate-700 dark:text-slate-300"> To enhance the user experience by understanding how the software is used and improving its functionality.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 mt-1">●</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white">Communication:</strong>
                      <span className="text-slate-700 dark:text-slate-300"> To send you important service-related updates, product announcements, or to respond to your support inquiries.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">●</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white">Compliance with Legal Obligations:</strong>
                      <span className="text-slate-700 dark:text-slate-300"> To comply with applicable laws and regulations related to data privacy and healthcare, ensuring the secure handling of sensitive health data.</span>
                    </div>
                  </li>
                </ul>
              </section>

              {/* 3. Data Security */}
              <section className="mb-12 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/20 dark:to-blue-950/20 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-emerald-600" />
                  3. Data Security
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  We take data security seriously. Felixatouch uses encryption and other security measures to protect personal and sensitive information from unauthorized access or disclosure. However, no method of online data transmission is entirely secure, and while we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              {/* 4. Data Sharing and Disclosure */}
              <section className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  We do not sell or rent your personal or health-related information to third parties. However, we may share your data in the following situations:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Service Providers</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      We may share your data with third-party vendors or contractors who assist us in providing and maintaining Felixatouch (e.g., cloud hosting, billing services).
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Legal Requirements</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      We may disclose your information when required to do so by law or to protect the rights, property, or safety of Intpurple Technologies LLP, our users, or others.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Business Transactions</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      If Felixatouch or Intpurple Technologies LLP undergoes a merger, acquisition, or asset sale, your information may be transferred to the new entity.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. User Rights Under DPDPA */}
              <section className="mb-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-brand-primary" />
                  5. User Rights Under DPDPA
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Depending on your jurisdiction, and specifically under DPDPA, you have the following rights regarding your personal data:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                    <h3 className="font-semibold text-brand-primary mb-2">Access</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      You have the right to request access to the personal data we hold about you.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                    <h3 className="font-semibold text-emerald-600 mb-2">Correction</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      You can request corrections to any inaccurate or incomplete data.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-600 mb-2">Deletion</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      You can request the deletion of your personal data, subject to legal or contractual obligations.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-600 mb-2">Data Portability</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      You have the right to request your data in a structured, commonly used format.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-600 mb-2">Withdrawal of Consent</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      If processing is based on consent, you can withdraw consent at any time.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4">
                    <h3 className="font-semibold text-pink-600 mb-2">Objection</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      You can object to processing based on legitimate interests.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 md:col-span-2">
                    <h3 className="font-semibold text-red-600 mb-2">Right to Lodge a Complaint</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      You have the right to lodge a complaint with the relevant <strong>Data Protection Authority</strong> if you believe your rights have been violated.
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 mt-6">
                  To exercise these rights, please contact us at <a href="mailto:contact@intpurple.com" className="text-brand-primary hover:underline font-semibold">contact@intpurple.com</a>.
                </p>
              </section>

              {/* 6-12 Additional Sections */}
              <section className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Felixatouch uses cookies and similar technologies to enhance your experience. Cookies help us track user preferences and usage patterns. You can manage cookie settings through your browser, but disabling cookies may limit your ability to use some features of the software.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">7. Third-Party Links</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Felixatouch may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">8. Data Retention</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  We retain personal and health-related data for as long as necessary to provide the services you use, or as required by law. Once the data is no longer needed, we will securely delete or anonymize it in accordance with applicable laws.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">9. Data Protection Officer (DPO)</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  If required by the DPDPA, we have appointed a Data Protection Officer (DPO) who can be contacted for any questions regarding data privacy. You may reach our DPO at <a href="mailto:dpo@intpurple.com" className="text-brand-primary hover:underline font-semibold">dpo@intpurple.com</a>.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">10. Cross-Border Data Transfers</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  If your data is transferred to or accessed in countries outside the jurisdiction of DPDPA, we ensure that the data will be subject to appropriate safeguards (e.g., through Standard Contractual Clauses or Privacy Shield).
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We will post the updated policy on this page and update the "Effective Date" at the top. Significant changes will be communicated via email or notifications within the software.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-br from-brand-primary to-purple-600 rounded-xl p-8 text-white">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  12. Contact Us
                </h2>
                <p className="mb-6 opacity-90">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-3">
                  <p className="font-semibold text-lg">Intpurple Technologies LLP</p>
                  <p>
                    <strong>Email:</strong> <a href="mailto:contact@intpurple.com" className="hover:underline">contact@intpurple.com</a>
                  </p>
                  <p>
                    <strong>Website:</strong> <a href="https://www.intpurple.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.intpurple.com</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}