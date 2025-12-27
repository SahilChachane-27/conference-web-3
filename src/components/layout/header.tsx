
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Logo = ({ scrolled }: { scrolled: boolean }) => (
    <Link href="/" className="flex items-center gap-2">
    <Image src="/reframed logo.jpeg" alt="SustainTechCon Logo" width={160} height={48} className="h-12 w-40 "/>
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

  const navLinkClasses = (scrolled: boolean) => cn(
    "text-sm font-medium transition-colors",
    "text-foreground hover:text-primary"
  );

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-colors duration-300",
      scrolled ? "bg-white shadow-md" : "bg-white"
    )}>
       <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo scrolled={scrolled} />
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            link.isDropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className={cn(navLinkClasses(scrolled), "flex items-center gap-1 focus:outline-none")}>
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.subLinks?.map(subLink => (
                      <DropdownMenuItem key={subLink.href} asChild>
                        <Link href={subLink.href}>{subLink.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
                  key={link.href} 
                  href={link.href!} 
                  className={navLinkClasses(scrolled)}
                >
                  {link.label}
                </Link>
              )
          ))}
        </nav>

        <div className="flex items-center">
            <div className="hidden md:block">
                <Button asChild variant={scrolled ? 'default' : 'default'}>
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
                        scrolled ? "text-foreground hover:bg-black/10" : "text-foreground"
                      )}
                    >
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle className="sr-only">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-6 p-6">
                      <Logo scrolled={true} />
                      <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                          <div key={link.label}>
                            {link.isDropdown ? (
                              <div className="flex flex-col gap-2">
                                <span className="text-lg font-medium text-foreground/80">{link.label}</span>
                                <div className="flex flex-col gap-2 pl-4">
                                  {link.subLinks?.map(subLink => (
                                    <Link
                                      key={subLink.href}
                                      href={subLink.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-base font-normal text-foreground/70 hover:text-foreground transition-colors"
                                    >
                                      {subLink.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                href={link.href!}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                              >
                                {link.label}
                              </Link>
                            )}
                          </div>
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
