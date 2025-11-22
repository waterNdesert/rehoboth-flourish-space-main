import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamMatrix from "@/components/TeamMatrix";

// Import team member images
import elizabethImg from "@/assets/team/Elizabeth-233x300.webp";
import ugonnaImg from "@/assets/team/DrUgonnaChukwumaife.webp";
import yemisiImg from "@/assets/team/Oluyemisi Akinwumi.webp";
import nkirukaImg from "@/assets/team/Nkiruka-Patricia-Anderson-245x300.webp";
import funmiImg from "@/assets/team/Funmi Oyekan.webp";
import aaronImg from "@/assets/team/Aaron-Antrobus-243x300.webp";
import tillyImg from "@/assets/team/Tilly-221x300.webp";
import johnImg from "@/assets/team/John-Lawrie-205x300.webp";
import olawoleImg from "@/assets/team/Olawole-Kuti-251x300.webp";

const Team = () => {
  const team = [
    {
      name: "Elizabeth Dotun",
      role: "Director & Founder",
      bio: "Visionary leader dedicated to empowering families and building stronger communities.",
      image: elizabethImg,
    },
    {
      name: "Dr Ugonna Chukwumaife",
      role: "Health & Wellbeing",
      bio: "Medical professional focused on holistic family health and mental wellness.",
      image: ugonnaImg,
    },
    {
      name: "Oluyemisi Akinwumi",
      role: "Community Engagement Officer",
      bio: "Passionate about connecting families and building lasting community relationships.",
      image: yemisiImg,
    },
    {
      name: "Nkiruka Patricia Anderson",
      role: "Prayer & Outreach",
      bio: "Leading our spiritual support and prayer ministry initiatives.",
      image: nkirukaImg,
    },
    {
      name: "Funmi Oyekan",
      role: "Administration",
      bio: "Ensuring smooth operations and excellent organizational support.",
      image: funmiImg,
    },
    {
      name: "Aaron Antrobus",
      role: "Youth Team",
      bio: "Mentoring and inspiring young people in their personal growth journey.",
      image: aaronImg,
    },
    {
      name: "Tilly Keady",
      role: "Youth Team",
      bio: "Supporting youth programs and creating engaging activities.",
      image: tillyImg,
    },
  ];

  const trustees = [
    { name: "John Lawrie", role: "Trustee", image: johnImg },
    { name: "Olawole Kuti", role: "Trustee", image: olawoleImg },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground fade-in-up">
            Our Team
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Dedicated people working together to support families and build
            community
          </p>
        </div>
      </section>

      {/* Team Members & Trustees */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <TeamMatrix team={team} trustees={trustees} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
