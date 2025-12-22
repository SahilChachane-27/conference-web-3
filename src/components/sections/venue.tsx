import { venueInfo } from '@/lib/data';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

export function Venue() {
  return (
    <section id="info" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Venue</span> Information
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Everything you need for a comfortable stay
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {venueInfo.map((info) => (
            <div key={info.title} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                 <Icon name={info.icon} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-headline mb-2">{info.title}</h3>
              <p className="text-muted-foreground">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
