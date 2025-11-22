import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if popup was already shown
    const wasShown = localStorage.getItem("newsletter-popup-shown");
    if (wasShown) {
      return;
    }

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
        localStorage.setItem("newsletter-popup-shown", "true");
      }
    };

    // Timeout fallback (30 seconds)
    const timeoutId = setTimeout(() => {
      if (!isOpen) {
        setIsOpen(true);
        localStorage.setItem("newsletter-popup-shown", "true");
      }
    }, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Reset after animation
      setTimeout(() => {
        setIsOpen(false);
        setEmail("");
        setSubmitted(false);
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 animate-scale-up p-4">
        <div className="bg-white dark:bg-slate-950 rounded-lg shadow-xl p-8 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1 hover:bg-gray-100 dark:hover:bg-slate-900 rounded transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {submitted ? (
            <div className="text-center py-6">
              <div className="text-5xl mb-4 animate-bounce">✨</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Thank you!
              </h3>
              <p className="text-muted-foreground">
                Check your email for exclusive updates and stories.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-serif font-bold mb-2 text-foreground">
                Join Our Community
              </h2>
              <p className="text-muted-foreground mb-6">
                Stay updated on how we're making a difference in families'
                lives.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-secondary/50 border-primary/20"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Subscribe
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsletterPopup;
