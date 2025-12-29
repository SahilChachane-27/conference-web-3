
import { committeeData } from "@/lib/data";
import { cn } from "@/lib/utils";

const SectionTitle = ({ title }: { title: string }) => (
    <div className="mb-8 text-center">
        <h3 className="font-headline text-3xl font-bold text-primary">{title}</h3>
    </div>
);

const MemberCard = ({ name, role, isAdvisory }: { name:string, role: string, isAdvisory?: boolean}) => (
    <div className={cn(
        "text-center p-6 h-full flex flex-col justify-center rounded-lg transition-shadow duration-300",
        isAdvisory ? "bg-primary/5 hover:shadow-md" : "bg-white hover:shadow-lg"
    )}>
        <p className="font-bold text-lg text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
    </div>
);

const ContactCard = ({ name, role }: { name:string, role: string}) => (
    <div className="text-center bg-white p-6 h-full flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="font-bold text-lg text-foreground">{name}</p>
        <p className="text-sm text-primary font-semibold">{role}</p>
    </div>
);

export function Committee() {
  return (
    <section id="committee" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Organizing <span className="text-primary">Committee</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Meet the dedicated team behind SustainTechCon 2026.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
            <SectionTitle title={committeeData.chiefPatrons.title} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {committeeData.chiefPatrons.members.map((member, i) => (
                    <div key={i} className="text-center bg-white p-6 rounded-lg shadow-lg border-b-4 border-primary transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center">
                        <p className="font-bold text-lg text-black">{member.name}</p>
                        <p className="text-sm text-black/80">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary text-center mb-4">{committeeData.generalChief.title}</h3>
              <MemberCard {...committeeData.generalChief.members[0]} />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary text-center mb-4">{committeeData.convener.title}</h3>
              <MemberCard {...committeeData.convener.members[0]} />
            </div>
          </div>
        </div>


        {/* Patrons */}
        <div className="my-16">
            <SectionTitle title={committeeData.patrons.title} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {committeeData.patrons.members.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
        </div>

        {/* Advisory Committee */}
        <div className="my-16">
            <SectionTitle title={committeeData.advisoryCommittee.title} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {committeeData.advisoryCommittee.members.map((member, i) => <MemberCard key={i} {...member} isAdvisory />)}
            </div>
        </div>
        
        {/* Co-convener and Contacts */}
        <div className="my-16">
            <SectionTitle title={committeeData.correspondenceContact.title} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {committeeData.correspondenceContact.members.map((member, i) => (
                    <ContactCard key={i} {...member} />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
