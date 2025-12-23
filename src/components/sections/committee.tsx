
import { Card, CardContent } from "@/components/ui/card";
import { committeeData } from "@/lib/data";

const SectionTitle = ({ title }: { title: string }) => (
    <div className="mb-8 text-center">
        <h3 className="font-headline text-3xl font-bold text-primary">{title}</h3>
        <div className="w-20 h-0.5 bg-primary/50 mx-auto mt-2"></div>
    </div>
);

const MemberCard = ({ name, role }: { name:string, role: string, isAdvisory?: boolean}) => (
    <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6 flex flex-col items-center justify-center">
            <p className="font-bold text-lg text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
        </CardContent>
    </Card>
);

const ContactCard = ({ name, role }: { name:string, role: string}) => (
    <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6 flex flex-col items-center justify-center">
            <p className="font-bold text-lg text-foreground">{name}</p>
            <p className="text-sm text-primary font-semibold">{role}</p>
        </CardContent>
    </Card>
);

export function Committee() {
  return (
    <section id="committee" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Organizing</span> Committee
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Meet the dedicated team behind SustainTechCon 2026.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
            <SectionTitle title={committeeData.chiefPatrons.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {committeeData.chiefPatrons.members.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
        </div>

        <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div>
                    <SectionTitle title={committeeData.generalChief.title} />
                    {committeeData.generalChief.members.map((member, i) => <MemberCard key={i} {...member} />)}
                </div>
                <div>
                    <SectionTitle title={committeeData.convener.title} />
                    {committeeData.convener.members.map((member, i) => <MemberCard key={i} {...member} />)}
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
                {committeeData.advisoryCommittee.members.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
        </div>
        
        {/* Co-convener and Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="text-center">
                 <SectionTitle title={committeeData.coConvener.title} />
                {committeeData.coConvener.members.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
            <div>
                <SectionTitle title={committeeData.correspondenceContact.title} />
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {committeeData.correspondenceContact.members.map((member, i) => <ContactCard key={i} {...member} />)}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
