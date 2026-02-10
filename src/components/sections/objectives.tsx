import { objectives } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icons from "lucide-react";

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & Icons.LucideProps) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    if (!LucideIcon) {
        return <Icons.CheckCircle2 {...props} />;
    }
    return <LucideIcon {...props} />;
};

export function Objectives() {
  return (
    <section id="objectives" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Conference</span> Objectives
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Our primary goals for fostering innovation and collaboration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {objectives.map((objective, index) => (
                <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon name={objective.icon} className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-xl leading-tight">
                            {objective.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">{objective.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
