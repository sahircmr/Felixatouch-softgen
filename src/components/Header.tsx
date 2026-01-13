import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity } from "lucide-react";
import { useState } from "react";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <ThemeSwitch />
            <Button variant="outline" size="sm" asChild>
              <Link href="#demo">Login</Link>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
              <Link href="#demo">Book Demo</Link>
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
              href="#benefits" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              href="#testimonials" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#faq" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link href="#demo">Login</Link>
            </Button>
            <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent" asChild>
              <Link href="#demo">Book Demo</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}