
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/lib/data';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-5">
      <div className="container text-center">
        <ul className="list-inline mb-4 flex justify-center gap-4">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-primary-foreground/80 hover:text-white">
                <Icon name={link.icon} className="h-6 w-6" />
                <span className="sr-only">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-sm text-primary-foreground/70">
          © Copyright {new Date().getFullYear()} - SustainTechCon by Researcher Connect Innovation & Impact Pvt Ltd
        </p>
      </div>
    </footer>
  );
}
