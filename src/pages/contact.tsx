import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Building2, 
  User, 
  MessageSquare,
  CheckCircle2,
  Loader2,
  Globe
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    clinicName: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Contact form submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        clinicName: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch | FelixaTouch"
        description="Have questions about FelixaTouch clinic management software? Contact our team for demos, support, or sales inquiries. Available in India, UAE, Qatar, Bahrain, and KSA."
        url="/contact"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">We're Here to Help</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
                  Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Have questions about FelixaTouch? Our team is ready to help you find the perfect solution for your clinic.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                      Contact Information
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Reach out to us through any of these channels, and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">+91 8137077217</p>
                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-6pm IST</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">support@intpurple.com</p>
                        <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-sm text-muted-foreground mt-1">IST (Indian Standard Time)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Sales Available In</h3>
                        <div className="flex flex-wrap gap-2">
                          {["India", "UAE", "Qatar", "Bahrain", "KSA"].map((country) => (
                            <span 
                              key={country}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-background border border-primary/30 text-foreground"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
                  {!isSubmitted ? (
                    <>
                      <div className="mb-8">
                        <h2 className="text-3xl font-black text-foreground mb-2">
                          Send Us a Message
                        </h2>
                        <p className="text-muted-foreground">
                          Fill out the form below and we'll get back to you shortly.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" />
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            required
                            placeholder="Dr. John Smith"
                            value={formData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)}
                            className="border-border focus:ring-primary focus:border-primary"
                          />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                              <Mail className="w-4 h-4 text-primary" />
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              placeholder="doctor@clinic.com"
                              value={formData.email}
                              onChange={(e) => handleChange("email", e.target.value)}
                              className="border-border focus:ring-primary focus:border-primary"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                              <Phone className="w-4 h-4 text-primary" />
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => handleChange("phone", e.target.value)}
                              className="border-border focus:ring-primary focus:border-primary"
                            />
                          </div>
                        </div>

                        {/* Clinic Name */}
                        <div className="space-y-2">
                          <Label htmlFor="clinicName" className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-primary" />
                            Clinic/Hospital Name
                          </Label>
                          <Input
                            id="clinicName"
                            placeholder="City General Hospital"
                            value={formData.clinicName}
                            onChange={(e) => handleChange("clinicName", e.target.value)}
                            className="border-border focus:ring-primary focus:border-primary"
                          />
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-primary" />
                            Subject *
                          </Label>
                          <Select required value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
                            <SelectTrigger className="border-border focus:ring-primary focus:border-primary">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="demo">Request a Demo</SelectItem>
                              <SelectItem value="sales">Sales Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="pricing">Pricing Information</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                            Message *
                          </Label>
                          <Textarea
                            id="message"
                            required
                            placeholder="Tell us more about your requirements..."
                            rows={6}
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            className="border-border focus:ring-primary focus:border-primary resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-6 text-base shadow-lg"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          By submitting this form, you agree to our Terms of Service and Privacy Policy.
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="py-12 text-center space-y-6">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25 animate-in zoom-in-50 duration-500">
                          <CheckCircle2 className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="space-y-2 animate-in fade-in-50 duration-700">
                        <h3 className="text-2xl font-black text-foreground">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                          Thank you for contacting us. Our team will get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}
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