"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

const Logo = ({ scrolled }: { scrolled: boolean }) => (
    <Link href="/" className="flex items-center gap-2">
    <Image src="/demo.jpeg" alt="SustainTechCon Logo" width={32} height={32} className="h-8 w-auto rounded-full"/>
    <span className={cn(
      "text-xl font-bold font-headline",
      scrolled ? "text-foreground" : "text-white"
    )}>
      SustainTechCon
    </span>
  </Link>
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-colors duration-300",
      scrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
       <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo scrolled={scrolled} />
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
            <div className="hidden md:block">
                <Button asChild variant={scrolled ? 'default' : 'secondary'}>
                    <Link href="#tickets">Register</Link>
                </Button>
            </div>
            <div className="md:hidden ml-4">
              {isClient && (
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={cn(
                        "hover:bg-white/10",
                        scrolled ? "text-foreground hover:bg-black/10" : "text-white"
                      )}
                    >
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <div className="flex flex-col gap-6 p-6">
                      <Logo scrolled={true} />
                      <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>
                      <Button asChild className="mt-4">
                          <Link href="#tickets" onClick={() => setMobileMenuOpen(false)}>Register</Link>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              )}
            </div>
        </div>
      </div>
    </header>
  );
}
