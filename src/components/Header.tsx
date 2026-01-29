import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity } from "lucide-react";
import { useState } from "react";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { LeadGenerationForm } from "@/components/LeadGenerationForm";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoFormOpen, setDemoFormOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FelixaTouch
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/best-clinic-software-features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/dental-clinic-management-software" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dental
            </Link>
            <Link href="/unani-clinic-management-software" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Unani
            </Link>
            <Link href="/faqs-best-clinic-management-software" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/clinic-management-software-testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <ThemeSwitch />
            <Button variant="outline" size="sm" asChild>
              <a href="https://clinic.felixatouch.com/" target="_blank" rel="noopener noreferrer">Login</a>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90" onClick={() => setDemoFormOpen(true)}>
              Book Demo
            </Button>
          </nav>

          <div className="flex md:hidden items-center space-x-4">
            <ThemeSwitch />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/best-clinic-software-features" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/dental-clinic-management-software" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dental
            </Link>
            <Link 
              href="/unani-clinic-management-software" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Unani
            </Link>
            <Link 
              href="/faqs-best-clinic-management-software" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/clinic-management-software-testimonials" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="/pricing" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button variant="outline" size="sm" asChild className="w-full">
              <a href="https://clinic.felixatouch.com/" target="_blank" rel="noopener noreferrer">Login</a>
            </Button>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-primary to-accent" 
              onClick={() => {
                setDemoFormOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Book Demo
            </Button>
          </nav>
        </div>
      )}

      <LeadGenerationForm open={demoFormOpen} onOpenChange={setDemoFormOpen} source="navigation" />
    </header>
  );
}