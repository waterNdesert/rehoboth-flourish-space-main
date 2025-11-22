import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Globe, Mail, Linkedin } from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedStats from "@/components/AnimatedStats";
import SponsorsCarousel from "@/components/SponsorsCarousel";

import heroImage from "@/assets/hero/hero-families.webp";

// Import sponsor logos
import trafficordPartnershipImg from "@/assets/sponsors/Trafford-Partnership-150x150.webp";
import trafficordHousingImg from "@/assets/sponsors/Trafford-Housing-Trust.webp";
import netImg from "@/assets/sponsors/NET-272x182.webp";
import lifeChurchImg from "@/assets/sponsors/Life-church-Manchester-150x150.webp";
import cahnImg from "@/assets/sponsors/CAHN-272x182.webp";
import nhsImg from "@/assets/sponsors/NHS-BT-300x85.webp";
import btegImg from "@/assets/sponsors/BTEG.webp";
import gmcvoImg from "@/assets/sponsors/GMCVO-272x182.webp";
import comicReliefImg from "@/assets/sponsors/Comic-Relief-150x150.webp";
import artCouncilImg from "@/assets/sponsors/Arts Council England.webp";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  color?: string;
  category?: "leadership" | "staff" | "trustees";
}

interface TeamMatrixProps {
  team: TeamMember[];
  trustees?: TeamMember[];
}

const TeamMatrix = ({ team, trustees = [] }: TeamMatrixProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Separate featured members (first 2) from grid
  const featuredMembers = team.slice(0, 2);
  const gridMembers = team.slice(2);
  const allMembers = [...team, ...trustees];

  const getRoleColor = (role: string): string => {
    if (role.includes("Director") || role.includes("Founder"))
      return "from-gold to-amber-500";
    if (role.includes("Trustee")) return "from-blue to-cyan-500";
    if (role.includes("Health")) return "from-emerald-500 to-teal-500";
    if (role.includes("Community")) return "from-purple-500 to-pink-500";
    if (role.includes("Prayer")) return "from-rose-500 to-pink-500";
    if (role.includes("Youth")) return "from-sky-500 to-blue-500";
    return "from-primary to-primary";
  };

  const getRoleIcon = (role: string): string => {
    if (role.includes("Director")) return "👑";
    if (role.includes("Health")) return "🏥";
    if (role.includes("Community")) return "🤝";
    if (role.includes("Prayer")) return "🙏";
    if (role.includes("Youth")) return "🎯";
    if (role.includes("Administration")) return "📋";
    if (role.includes("Trustee")) return "⭐";
    return "👤";
  };

  return (
    <div className="w-full space-y-20">
      {/* Featured Leadership Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-serif font-semibold text-foreground text-center">
          Leadership
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featuredMembers.map((member, index) => (
            <div
              key={index}
              className="group relative fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Featured Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image Container with Parallax */}
                <div className="relative h-96 overflow-hidden bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                    style={{
                      filter:
                        hoveredIndex === index
                          ? "brightness(1.1)"
                          : "brightness(0.9)",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${getRoleColor(
                      member.role
                    )} ${
                      hoveredIndex === index ? "opacity-30" : "opacity-60"
                    } transition-opacity duration-500`}
                  />
                </div>

                {/* Info Section */}
                <div className="relative bg-background p-8 border-t-2 border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <div
                        className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${getRoleColor(
                          member.role
                        )} text-white text-sm font-semibold mb-4`}
                      >
                        {member.role}
                      </div>
                    </div>
                    <span className="text-3xl">{getRoleIcon(member.role)}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Action Buttons - Revealed on Hover */}
                  <div
                    className={`flex gap-2 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-lg hover:bg-primary hover:text-white"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-lg hover:bg-primary hover:text-white"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  } shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Grid Section */}
      {gridMembers.length > 0 && (
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-semibold text-foreground text-center">
            Team Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridMembers.map((member, index) => (
              <div
                key={index}
                className="group fade-in-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index + 2)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Grid Card */}
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-secondary">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredIndex === index + 2 ? "scale-110" : "scale-100"
                      }`}
                      style={{
                        filter:
                          hoveredIndex === index + 2
                            ? "brightness(1.1)"
                            : "brightness(0.85)",
                      }}
                    />
                    {/* Color Accent Bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getRoleColor(
                        member.role
                      )}`}
                    />
                    {/* Role Icon Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-lg">
                      {getRoleIcon(member.role)}
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="relative bg-background p-6 border-t border-primary/20">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm font-semibold text-white px-2 py-1 rounded-full bg-gradient-to-r ${getRoleColor(
                        member.role
                      )} w-fit mb-3`}
                    >
                      {member.role}
                    </p>
                    <p
                      className={`text-sm text-muted-foreground leading-relaxed transition-all duration-500 ${
                        hoveredIndex === index + 2
                          ? "max-h-24 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {member.bio}
                    </p>

                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500 ${
                        hoveredIndex === index + 2 ? "opacity-100" : "opacity-0"
                      } shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trustees Section */}
      {trustees.length > 0 && (
        <div className="space-y-8 border-t-2 border-primary/20 pt-16">
          <h2 className="text-3xl font-serif font-semibold text-foreground text-center">
            Board of Trustees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {trustees.map((trustee, index) => (
              <div
                key={index}
                className="group fade-in-up"
                style={{
                  animationDelay: `${(gridMembers.length + index + 2) * 0.1}s`,
                }}
                onMouseEnter={() =>
                  setHoveredIndex(gridMembers.length + 2 + index)
                }
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Trustee Card */}
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-secondary">
                    <img
                      src={trustee.image}
                      alt={trustee.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredIndex === gridMembers.length + 2 + index
                          ? "scale-110"
                          : "scale-100"
                      }`}
                      style={{
                        filter:
                          hoveredIndex === gridMembers.length + 2 + index
                            ? "brightness(1.1)"
                            : "brightness(0.85)",
                      }}
                    />
                    {/* Color Accent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Info Section - Overlaid on Image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-1">
                      {trustee.name}
                    </h3>
                    <p
                      className={`inline-block text-sm font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${getRoleColor(
                        trustee.role
                      )}`}
                    >
                      {trustee.role}
                    </p>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500 ${
                      hoveredIndex === gridMembers.length + 2 + index
                        ? "opacity-100"
                        : "opacity-0"
                    } shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Index = () => {
  const sponsors = [
    { name: "Trafford Partnership", image: trafficordPartnershipImg },
    { name: "Trafford Housing Trust", image: trafficordHousingImg },
    { name: "National Emergencies Trust", image: netImg },
    { name: "LifeChurch Manchester", image: lifeChurchImg },
    { name: "CAHN", image: cahnImg },
    { name: "NHS", image: nhsImg },
    { name: "BTEG", image: btegImg },
    { name: "GMCVO", image: gmcvoImg },
    { name: "Comic Relief", image: comicReliefImg },
    { name: "Arts Council England", image: artCouncilImg },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-sky/20 to-gold/30" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-peach/20 rounded-full blur-2xl floating" />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-lavender/20 rounded-full blur-2xl floating"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-gold/20 rounded-full blur-2xl floating"
          style={{ animationDelay: "4s" }}
        />

        <div className="container relative z-10 mx-auto px-4 text-center fade-in-up">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary font-medium text-sm">
              Room to Flourish
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground leading-tight drop-shadow-lg">
            Promoting good family values,
            <br />
            <span className="gradient-text">
              unity, enduring love, forgiveness
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto font-medium">
            Spiritual, mental and emotional wellbeing for every family
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-base bg-gradient-primary hover:opacity-90 shadow-soft"
            >
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-2 border-primary bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedStats />

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-br from-lavender-light via-background to-peach-light/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center fade-in-up hover-lift bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft transition-all duration-300 hover:shadow-medium hover:scale-105">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Heart className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-3xl font-serif font-semibold mb-4 text-primary">
                Mission
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Rehoboth works towards building a community where families
                flourish through love, kindness, forgiveness, loyalty and trust.
              </p>
            </div>

            {/* Vision */}
            <div
              className="text-center fade-in-up hover-lift bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft transition-all duration-300 hover:shadow-medium hover:scale-105"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Users className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-3xl font-serif font-semibold mb-4 text-primary">
                Vision
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                To unlock the potential of families and strengthen the
                foundation of society through love, support and inclusion.
              </p>
            </div>

            {/* Reach */}
            <div
              className="text-center fade-in-up hover-lift bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft transition-all duration-300 hover:shadow-medium hover:scale-105"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-sky rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Globe className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-3xl font-serif font-semibold mb-4 text-primary">
                Reach
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Supporting families locally in Manchester and globally through
                our missions in Nigeria, Uganda, Ghana, and Zambia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary/50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-serif font-semibold mb-4 text-foreground">
              Our Partners & Sponsors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're grateful for the support of these organizations who share
              our vision for stronger families and communities
            </p>
          </div>

          <div
            className="max-w-6xl mx-auto fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <SponsorsCarousel sponsors={sponsors} />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-3xl pulse-soft" />
          <div
            className="absolute bottom-20 right-20 w-56 h-56 bg-white/30 rounded-full blur-3xl pulse-soft"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/30 rounded-full blur-3xl pulse-soft"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white font-medium">Join Our Community</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg">
            Every family deserves <br /> space to flourish
          </h2>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 font-medium">
            Join us in building a community where love, forgiveness, and support
            help families thrive
          </p>

          <Button
            asChild
            size="lg"
            className="text-base bg-white text-primary hover:bg-white/90 shadow-medium"
          >
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
