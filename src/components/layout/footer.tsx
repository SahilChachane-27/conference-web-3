
import Link from 'next/link';
import Image from 'next/image';
import { contactInfo, socialLinks, navLinks } from '@/lib/data';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

const LinkComponent = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => (
    <Link href={href} className={`text-sm text-white/80 hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap py-1 ${className}`}>
        {children}
    </Link>
);

export function Footer() {
  return (
    <footer className="bg-[#141c25] text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 mb-8">

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h2 className="font-headline text-2xl font-bold text-white text-center md:text-left">Quick Links</h2>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-1.5 mt-2">
                {navLinks.filter(l => !l.isDropdown).map(link => (
                    <LinkComponent key={link.href} href={link.href}>{link.label}</LinkComponent>
                ))}
                {navLinks.find(l => l.label === 'About')?.subLinks?.map(link => (
                     <LinkComponent key={link.href} href={link.href}>{link.label}</LinkComponent>
                ))}
            </nav>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h2 className="font-headline text-2xl font-bold text-white text-center">Get in Touch</h2>
            <div className="space-y-4 pt-4">
                {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-full">
                        <Icon name={info.icon} className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">{info.title}</h3>
                        <p className="text-sm text-white/80">{info.value}</p>
                    </div>
                </div>
                ))}
            </div>
          </div>
          
          {/* Follow Us */}
          <div className="space-y-4 flex flex-col items-center">
            <h2 className="font-headline text-2xl font-bold text-white">Follow Us</h2>
            <div className='pt-4'>
                <ul className="list-inline flex justify-center gap-4">
                {socialLinks.map((link) => (
                    <li key={link.name}>
                    <Link href={link.href} className="text-white/80 hover:text-white bg-white/10 p-3 rounded-full block">
                        <Icon name={link.icon} className="h-6 w-6" />
                        <span className="sr-only">{link.name}</span>
                    </Link>
                    </li>
                ))}
                </ul>
                <div className="mt-6">
                    <Image src="/rc-updated.jpeg" alt="Researcher Connect Logo" width={150} height={80} className="object-contain rounded-md" />
                </div>
            </div>
          </div>

        </div>

        <div className='text-center border-t border-white/20 pt-8 mt-8'>
            <p className="text-sm text-white/70">
            © Copyright {new Date().getFullYear()} - SustainTechCon by Researcher Connect Innovation & Impact Pvt Ltd
            </p>
        </div>
      </div>
    </footer>
  );
}
