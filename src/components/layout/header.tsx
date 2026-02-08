"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "@/lib/data";

/* ================= ICON HELPER ================= */
const Icon = ({
  name,
  ...props
}: {
  name: keyof typeof Icons;
} & LucideProps) => {
  const LucideIcon = Icons[name] as React.FC<LucideProps>;
  return <LucideIcon {...props} />;
};

/* ================= LOGO ================= */
const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <Image
      src="/reframed_logo-preview.png"
      alt="SustainTechCon Logo"
      width={120}
      height={40}
      className="h-10 w-auto"
      priority
    />
  </Link>
);

/* ================= HEADER ================= */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className={`container mx-auto flex h-20 items-center justify-between px-4 md:px-6 transition-all duration-300`}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <div key={link.label} className="relative group">
                <button
                  type="button"
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${isScrolled || mobileMenuOpen ? 'text-black' : 'text-white'} hover:text-secondary`}>
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                <div className="absolute left-0 hidden min-w-[220px] pt-2 group-hover:block">
                  <div className="rounded-md bg-white shadow-lg py-2">
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-black' : 'text-white'} hover:text-secondary`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden md:flex items-center gap-4">
        </div>


        {/* ================= MOBILE MENU ================= */}
        <div className="md:hidden">
          {isClient && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open Menu">
                  <Menu className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-white">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 p-6">
                  <Logo />

                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) =>
                      link.isDropdown ? (
                        <div key={link.label}>
                          <p className="text-lg font-medium text-foreground">
                            {link.label}
                          </p>
                          <div className="ml-4 mt-2 flex flex-col gap-2">
                            {link.subLinks?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-foreground hover:text-secondary"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-medium text-foreground hover:text-secondary"
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </nav>

                  <div className="pt-4">
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
