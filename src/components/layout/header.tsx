"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

/* ================= LOGO ================= */
const Logo = () => {
    const logoImage = PlaceHolderImages.find(img => img.id === 'conference-logo');
    return (
        <Link href="/" className="flex items-center gap-2">
            {logoImage && (
                <Image
                    src={logoImage.imageUrl}
                    alt="SustainTechCon Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                    priority
                    data-ai-hint={logoImage.imageHint}
                />
            )}
        </Link>
    );
}

/* ================= HEADER ================= */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHomePage && !isScrolled;
  const linkColor = isTransparent ? 'text-white' : 'text-foreground';
  const headerBg = isTransparent ? 'bg-transparent' : 'bg-white shadow-md';
  const menuIconColor = isTransparent ? 'text-white' : 'text-black';

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerBg}`}>
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
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${linkColor} hover:text-secondary`}>
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                <div className="absolute left-0 hidden min-w-[220px] pt-2 group-hover:block">
                  <div className="rounded-md bg-white shadow-lg py-2">
                    {link.subLinks?.map((sub) => (
                      sub.href &&
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
              link.href && (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${linkColor} hover:text-secondary`}
                >
                  {link.label}
                </Link>
              )
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
                  <Menu className={`h-6 w-6 ${menuIconColor}`} />
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
                              sub.href && (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-foreground hover:text-secondary"
                                >
                                  {sub.label}
                                </Link>
                              )
                            ))}
                          </div>
                        </div>
                      ) : (
                        link.href && (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-medium text-foreground hover:text-secondary"
                          >
                            {link.label}
                          </Link>
                        )
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
