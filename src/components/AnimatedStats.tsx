import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Heart, Globe, Users, Award } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatProps> = ({
  icon,
  number,
  label,
  suffix = "+",
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="text-center fade-in-up">
      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
        <div className="text-white text-2xl">{icon}</div>
      </div>
      <h3 className="text-4xl font-bold text-primary mb-2">
        {inView ? <CountUp end={number} duration={2.5} /> : 0}
        {suffix}
      </h3>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const AnimatedStats = () => {
  const stats: StatProps[] = [
    {
      icon: <Heart className="h-8 w-8" />,
      number: 500,
      label: "Families Served",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: 4,
      label: "Countries Reached",
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: 25,
      label: "Team Members",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: 10,
      label: "Years of Impact",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
