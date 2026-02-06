import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      email, 
      formType: "subscription",
      fullName: "Subscriber" 
    }),
  });
  
  setIsSubmitting(false);
  setEmail("");
  alert("Subscribed!");
};
  // Placeholder blog posts - will be replaced with actual blog content
  const blogPosts = [
    {
      id: 1,
      title: "What is the Smart and Digital Approach to Patient Registration in Healthcare?",
      excerpt: "Discover how smart digital patient registration transforms healthcare operations. Learn about complete and spot registration workflows in FelixaTouch, designed for fast, flexible, and EMR-ready patient onboarding.",
      image: "/og-image.png",
      category: "Patient Registration",
      date: "2026-02-05",
      readTime: "8 min read",
      slug: "smart-digital-patient-registration-healthcare"
    },
    {
      id: 2,
      title: "10 Ways Clinic Management Software Improves Patient Care",
      excerpt: "Discover how modern clinic management software enhances patient experience, reduces wait times, and improves overall healthcare delivery.",
      image: "/og-image.png",
      category: "Patient Care",
      date: "2026-01-20",
      readTime: "5 min read",
      slug: "improve-patient-care-clinic-software"
    },
    {
      id: 3,
      title: "Complete Guide to Digital Prescriptions in 2026",
      excerpt: "Everything you need to know about transitioning from paper to digital prescriptions, including benefits, best practices, and compliance.",
      image: "/og-image.png",
      category: "Digital Health",
      date: "2026-01-18",
      readTime: "7 min read",
      slug: "digital-prescriptions-guide"
    },
    {
      id: 4,
      title: "Why Unani Clinics Need Specialized Management Software",
      excerpt: "Learn how specialized features for Unani medicine practices can streamline operations and preserve traditional treatment methods.",
      image: "/og-image.png",
      category: "Unani Medicine",
      date: "2026-01-15",
      readTime: "6 min read",
      slug: "unani-clinic-software-benefits"
    }
  ];

  return (
    <>
      <SEO
        title="Blog - Healthcare Technology Insights | FelixaTouch"
        description="Stay updated with the latest insights on clinic management, healthcare technology, digital health trends, and best practices for running successful medical practices."
        url="/blog"
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
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Healthcare Insights & Updates</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
                  FelixaTouch <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Expert insights on clinic management, healthcare technology, and best practices for modern medical practices.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Coming Soon Message */}
              <div className="mt-16 text-center">
                <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                  <BookOpen className="w-12 h-12 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">More Content Coming Soon!</h3>
                    <p className="text-muted-foreground max-w-md">
                      We're working on bringing you more valuable insights about healthcare technology, clinic management, and industry best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                  Stay <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Informed</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Subscribe to our newsletter for the latest updates on healthcare technology and clinic management best practices.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
        <input
          type="email"
          required
          value={email} // Added value
          onChange={(e) => setEmail(e.target.value)} // Added onChange
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button 
          type="submit" // Added type
          disabled={isSubmitting} // Added disabled state
          size="lg" 
          className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}