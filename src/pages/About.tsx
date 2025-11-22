import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Home, Users, BookOpen, Coffee, Sparkles } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Users,
      title: "One-to-One Support",
      description: "Personalized guidance for families and individuals",
    },
    {
      icon: Home,
      title: "Home Visits",
      description: "Bringing support directly to your doorstep",
    },
    {
      icon: Coffee,
      title: "Coffee Mornings",
      description: "Casual gatherings to build community connections",
    },
    {
      icon: BookOpen,
      title: "Training & Workshops",
      description: "Educational programs for family development",
    },
    {
      icon: Sparkles,
      title: "Conferences",
      description: "Inspiring events bringing families together",
    },
    {
      icon: Heart,
      title: "Outreach & Collaboration",
      description: "Partnering with other organizations for greater impact",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground fade-in-up">
            About Rehoboth
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A faith-based charity dedicated to empowering families through love,
            support, and community
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Our Journey */}
            <div className="fade-in-up">
              <h2 className="text-4xl font-serif font-semibold mb-6 text-foreground">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Rehoboth for Families started as a befriending group in 2014 in
                Trafford, born from a passion for good family life and lived
                experiences. We officially became a registered charity in July
                2020, marking a significant milestone in our mission to serve
                families comprehensively.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We are a faith-based, family advocate organisation dedicated to
                enabling families to flourish by positively impacting family
                life and unlocking hidden potential. Our work is rooted in the
                belief that change is possible regardless of upbringing and past
                experiences.
              </p>
            </div>

            {/* The Name Rehoboth */}
            <div
              className="bg-gradient-to-r from-primary/5 to-secondary/10 p-8 rounded-lg border border-primary/20 fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">
                The Meaning of Rehoboth
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                <span className="font-semibold text-foreground">Rehoboth</span>{" "}
                is a Hebrew word meaning{" "}
                <span className="font-semibold text-primary">
                  "room" or "open space to flourish"
                </span>
                .
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The founder chose this name because the biblical story of
                Rehoboth depicts her own life journey. The passion for good
                family life and the work we do at Rehoboth is born from lived
                experiences, and we believe that change is possible regardless
                of upbringing and past experiences.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl font-serif font-semibold mb-6 text-foreground">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Mission
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our mission is to{" "}
                    <span className="font-semibold text-foreground">
                      enable families to flourish by positively impacting family
                      life and unlocking hidden potential
                    </span>
                    . We aim to promote positive family living, community
                    inclusion, and tackle the issues that affect children and
                    young people, especially how family breakdown affects their
                    development into adulthood.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">
                    Our Focus
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We work across diverse backgrounds and cultures, building
                    healthy relationships across diversity.{" "}
                    <span className="font-semibold text-foreground">
                      Ensuring good and flourishing family relationships is at
                      the core of all our work
                    </span>
                    . We support parents, children, young people, and families,
                    offering help and guidance on a range of family issues, and
                    are open to supporting people with or without faith.
                  </p>
                </div>
              </div>
            </div>

            {/* Who We Serve */}
            <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-4xl font-serif font-semibold mb-6 text-foreground">
                Who We Serve
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We support and work with{" "}
                <span className="font-semibold text-foreground">
                  parents, children, young people, and families
                </span>{" "}
                from all backgrounds and circumstances. Whether you're
                navigating difficult times, seeking to strengthen family bonds,
                or looking for community support, Rehoboth is here for you with
                compassion and respect.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our faith-based approach welcomes everyone, creating safe spaces
                where families can heal, grow, and flourish together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-semibold mb-4 text-foreground">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive support services designed to strengthen families and
              build community. We provide our services through:
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-semibold text-primary">
              One-to-one and home visits, coffee mornings, group trainings,
              workshops, conferences, excursions, social events, family
              outreach, collaboration with other organizations including faith
              groups, working alongside the local authority, and referral &
              signposting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-light via-background to-peach-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-semibold mb-12 text-foreground text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg hover:shadow-medium hover:scale-105 transition-all duration-300 fade-in-up border border-border/50">
                <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">
                  Love
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  At the heart of everything we do is unconditional love for
                  families and individuals. We believe in the dignity and worth
                  of every person and approach our work with genuine care and
                  compassion.
                </p>
              </div>
              <div
                className="bg-background/80 backdrop-blur-sm p-8 rounded-lg hover:shadow-medium hover:scale-105 transition-all duration-300 fade-in-up border border-border/50"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">
                  Kindness
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We approach every interaction with compassion and
                  understanding. Kindness is not just what we do—it's how we do
                  it, creating safe and welcoming spaces for all.
                </p>
              </div>
              <div
                className="bg-background/80 backdrop-blur-sm p-8 rounded-lg hover:shadow-medium hover:scale-105 transition-all duration-300 fade-in-up border border-border/50"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">
                  Forgiveness
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in healing, restoration, and the power of second
                  chances. Change is possible regardless of upbringing and past
                  experiences. We support families in moving forward with hope.
                </p>
              </div>
              <div
                className="bg-background/80 backdrop-blur-sm p-8 rounded-lg hover:shadow-medium hover:scale-105 transition-all duration-300 fade-in-up border border-border/50"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">
                  Community & Inclusion
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building lasting relationships across diversity. We work with
                  people from different backgrounds and cultures, fostering
                  healthy relationships and community connections that
                  strengthen us all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
