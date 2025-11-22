import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Heart, Sparkles } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground fade-in-up">
            Our Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building strong connections across generations and experiences
          </p>
        </div>
      </section>

      {/* Community Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Men's Community */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                Men's Community
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A space for men to connect, share experiences, and grow together in faith, 
                fatherhood, and fellowship. Building strong foundations for family leadership.
              </p>
              <Button asChild variant="outline">
                <Link to="/community/men">Learn More</Link>
              </Button>
            </div>

            {/* Women's Community */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                Women's Community
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Empowering women through supportive connections, shared wisdom, and mutual 
                encouragement. A safe space to grow in confidence and purpose.
              </p>
              <Button asChild variant="outline">
                <Link to="/community/women">Learn More</Link>
              </Button>
            </div>

            {/* Youth Community */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                Our Youth
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nurturing the next generation with mentorship, activities, and opportunities 
                to develop character, skills, and meaningful relationships.
              </p>
              <Button asChild variant="outline">
                <Link to="/community/youth">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-semibold mb-6">
            Join Our Community
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Everyone is welcome. Find your place in our supportive and caring community.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Involved</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
