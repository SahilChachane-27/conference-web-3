import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container py-12 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name={link.icon} className="h-6 w-6" />
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © Copyright {new Date().getFullYear()} - Event Planner Pro by Firebase Studio
        </p>
      </div>
    </footer>
  );
}
