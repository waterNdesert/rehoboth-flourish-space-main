import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const Prayer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground fade-in-up">
            Prayer Ministry
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            You are not alone. We are here to pray with you.
          </p>
        </div>
      </section>

      {/* Prayer Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16 text-center fade-in-up">
              <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
                A Slice of Peace
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In times of joy or challenge, prayer offers comfort, strength, and connection. 
                Our prayer ministry is dedicated to supporting you and your family through every season of life.
                Share your prayer request with us, and our team will lift you up in prayer.
              </p>
            </div>

            {/* Prayer Request Form */}
            <div className="bg-card border border-border rounded-lg p-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
                Share Your Prayer Request
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address (Optional)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    We'll only use this to follow up if you'd like us to
                  </p>
                </div>

                <div>
                  <label htmlFor="request" className="block text-sm font-medium mb-2 text-foreground">
                    Prayer Request
                  </label>
                  <Textarea
                    id="request"
                    placeholder="Share what's on your heart..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="anonymous" />
                  <label
                    htmlFor="anonymous"
                    className="text-sm text-muted-foreground leading-tight cursor-pointer"
                  >
                    I would like my prayer request to remain anonymous
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Prayer Request
                </Button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-muted-foreground mb-4">
                All prayer requests are treated with confidentiality and care.
              </p>
              <p className="text-sm text-muted-foreground">
                For urgent pastoral support, please contact us directly at{' '}
                <a href="mailto:prayer@rehobothforfamilies.org" className="text-primary hover:underline">
                  prayer@rehobothforfamilies.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prayer;
