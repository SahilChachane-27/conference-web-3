import { contactInfo } from '@/lib/data';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {contactInfo.map((info) => (
            <div key={info.title} className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                    <Icon name={info.icon} className="h-8 w-8 text-primary" />
                </div>
              <h3 className="text-xl font-bold font-headline mb-2">{info.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {info.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
