import { Card } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Trustee {
  name: string;
  role: string;
  image: string;
}

interface TeamMatrixProps {
  team: TeamMember[];
  trustees: Trustee[];
}

const TeamMatrix = ({ team, trustees }: TeamMatrixProps) => {
  return (
    <div className="space-y-16">
      {/* Team Members */}
      <div>
        <h2 className="text-4xl font-serif font-bold mb-12 text-center text-foreground fade-in-up">
          Team Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-1 text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Trustees */}
      <div className="border-t pt-16">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center text-foreground fade-in-up">
          Our Trustees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto gap-8">
          {trustees.map((trustee, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={trustee.image}
                  alt={trustee.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-1 text-foreground">
                  {trustee.name}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {trustee.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMatrix;
