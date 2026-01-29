import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2, Building2, Mail, Phone, User, MapPin, Briefcase } from "lucide-react";

interface LeadGenerationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

export function LeadGenerationForm({ open, onOpenChange, source = "website" }: LeadGenerationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    clinicName: "",
    clinicType: "",
    location: "",
    teamSize: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Form submitted:", { ...formData, source });

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
        clinicType: "",
        location: "",
        teamSize: "",
        message: "",
      });
      onOpenChange(false);
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto custom-scrollbar">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-black text-slate-900 dark:text-white">
                Book Your Free Demo
              </DialogTitle>
              <DialogDescription className="text-base text-slate-600 dark:text-slate-400">
                Fill in your details and our team will reach out to schedule a personalized demo of FelixaTouch.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-primary" />
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  required
                  placeholder="Dr. John Smith"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="border-slate-300 dark:border-slate-700 focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="doctor@clinic.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="border-slate-300 dark:border-slate-700 focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-primary" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="border-slate-300 dark:border-slate-700 focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>
              </div>

              {/* Clinic Name */}
              <div className="space-y-2">
                <Label htmlFor="clinicName" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-primary" />
                  Clinic/Hospital Name *
                </Label>
                <Input
                  id="clinicName"
                  required
                  placeholder="City General Hospital"
                  value={formData.clinicName}
                  onChange={(e) => handleChange("clinicName", e.target.value)}
                  className="border-slate-300 dark:border-slate-700 focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>

              {/* Clinic Type & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clinicType" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-brand-primary" />
                    Clinic Type *
                  </Label>
                  <Select required value={formData.clinicType} onValueChange={(value) => handleChange("clinicType", value)}>
                    <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-brand-primary focus:border-brand-primary">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Clinic</SelectItem>
                      <SelectItem value="dental">Dental Clinic</SelectItem>
                      <SelectItem value="unani">Unani Clinic</SelectItem>
                      <SelectItem value="ayurveda">Ayurveda Clinic</SelectItem>
                      <SelectItem value="multispecialty">Multispecialty Hospital</SelectItem>
                      <SelectItem value="diagnostic">Diagnostic Center</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-primary" />
                    Location *
                  </Label>
                  <Input
                    id="location"
                    required
                    placeholder="City, State, Country"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    className="border-slate-300 dark:border-slate-700 focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>
              </div>

              {/* Team Size */}
              <div className="space-y-2">
                <Label htmlFor="teamSize" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Team Size
                </Label>
                <Select value={formData.teamSize} onValueChange={(value) => handleChange("teamSize", value)}>
                  <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-brand-primary focus:border-brand-primary">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 members</SelectItem>
                    <SelectItem value="6-10">6-10 members</SelectItem>
                    <SelectItem value="11-20">11-20 members</SelectItem>
                    <SelectItem value="21-50">21-50 members</SelectItem>
                    <SelectItem value="50+">50+ members</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Additional Information
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your specific requirements or questions..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="border-slate-300 dark:border-slate-700 focus:ring-brand-primary focus:border-brand-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-primary to-emerald-600 hover:from-brand-primary/90 hover:to-emerald-600/90 text-white font-semibold py-6 text-base shadow-lg shadow-brand-primary/25"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Book Free Demo"
                )}
              </Button>

              <p className="text-xs text-center text-slate-500 dark:text-slate-400">
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
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Thank You!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Your demo request has been submitted successfully. Our team will contact you within 24 hours to schedule your personalized demo.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}