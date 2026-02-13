import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <SEOElements />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-343702999"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-343702999', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "FelixaTouch",
              "applicationCategory": "HealthApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "Free demo available"
              },
              "description": "Complete clinic management software to streamline operations, boost growth, and maximize profitability",
              "operatingSystem": "Web, Android",
              "featureList": [
                "Appointment Scheduling",
                "Patient Record Management",
                "E-Prescriptions",
                "Lab Management",
                "Pharmacy Management",
                "Billing & Invoicing",
                "Analytics Dashboard",
                "Automated Reminders",
                "WhatsApp Integration",
                "SMS Notifications",
                "Email Communication"
              ],
              "provider": {
                "@type": "Organization",
                "name": "intpurpleTechonolgies",
                "telephone": "+91-8137077217",
                "email": "support@intpurple.com"
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "intpurpleTechonolgies",
              "url": "https://felixatouch.com",
              "logo": "https://felixatouch.com/og-image.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8137077217",
                "contactType": "customer service",
                "email": "support@intpurple.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/felixatouch",
                "https://www.linkedin.com/company/intpurple",
                "https://www.instagram.com/felixatouch"
              ]
            })
          }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What features does FelixaTouch clinic management software offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our software includes features such as appointment scheduling, patient record management, e-prescriptions, automated reminders, queue management, billing, lab management, pharmacy management, and reporting tools."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can FelixaTouch help identify areas of revenue growth?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, FelixaTouch provides detailed analytics and insights that help identify revenue opportunities, track financial performance, and optimize clinic operations for better profitability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can Felixatouch help increase my clinic's lead generation and footfall?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FelixaTouch enhances patient engagement through automated reminders, bulk messaging via WhatsApp, SMS and Email, and streamlined appointment booking, helping attract and retain more patients."
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}