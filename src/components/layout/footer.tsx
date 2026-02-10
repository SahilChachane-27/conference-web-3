
import Link from 'next/link';
import Image from 'next/image';
import { contactInfo, socialLinks, navLinks } from '@/lib/data';
import { 
    Mail, Smartphone, Home, Facebook, Instagram, Youtube, type LucideProps
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const LinkComponent = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => (
    <Link href={href} className={`text-sm text-white/80 hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap py-1 ${className}`}>
        {children}
    </Link>
);

export function Footer() {
  const rcLogo = PlaceHolderImages.find(img => img.id === 'researcher-connect-logo');
  
  const iconMap: Record<string, React.FC<LucideProps>> = {
      Mail,
      Smartphone,
      Home,
      Facebook,
      Instagram,
      Youtube
  };

  return (
    <footer className="bg-[#141c25] text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 mb-8">

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h2 className="font-headline text-2xl font-bold text-white text-center md:text-left">Quick Links</h2>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-1.5 mt-2">
                {navLinks.filter(l => !l.isDropdown).map(link => (
                    link.href && <LinkComponent key={link.href} href={link.href}>{link.label}</LinkComponent>
                ))}
                {navLinks.find(l => l.label === 'About')?.subLinks?.map(link => (
                     link.href && <LinkComponent key={link.href} href={link.href}>{link.label}</LinkComponent>
                ))}
            </nav>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h2 className="font-headline text-2xl font-bold text-white text-center">Get in Touch</h2>
            <div className="space-y-4 pt-4">
                {contactInfo.map((info) => {
                    const Icon = iconMap[info.icon];
                    return (
                        <div key={info.title} className="flex items-start gap-4">
                            <div className="bg-white/10 p-2 rounded-full">
                                {Icon && <Icon className="h-5 w-5 text-white" />}
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">{info.title}</h3>
                                <p className="text-sm text-white/80">{info.value}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
          </div>
          
          {/* Follow Us */}
          <div className="space-y-4 flex flex-col items-center">
            <h2 className="font-headline text-2xl font-bold text-white">Follow Us</h2>
            <div className='pt-4'>
                <ul className="list-inline flex justify-center gap-4">
                {socialLinks.map((link) => {
                     const Icon = iconMap[link.icon];
                     return (
                        <li key={link.name}>
                            <Link href={link.href} className="text-white/80 hover:text-white bg-white/10 p-3 rounded-full block">
                                {Icon && <Icon className="h-6 w-6" />}
                                <span className="sr-only">{link.name}</span>
                            </Link>
                        </li>
                     )
                })}
                </ul>
                <div className="mt-6">
                    {rcLogo && (
                        <Image src={rcLogo.imageUrl} alt="Researcher Connect Logo" width={150} height={80} className="object-contain rounded-md" data-ai-hint={rcLogo.imageHint} />
                    )}
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
