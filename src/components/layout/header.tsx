"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, socialLinks } from "@/lib/data";
import * as Icons from "lucide-react";

const Icon = ({
  name,
  ...props
}: {
  name: keyof typeof Icons;
} & React.ComponentProps<typeof Icons.Icon>) => {
  const LucideIcon = Icons[name] as React.ComponentType<any>;
  return <LucideIcon {...props} />;
};

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <Image
      src="/reframed_logo-preview.png"
      alt="SustainTechCon Logo"
      width={160}
      height={48}
      className="h-12 w-40"
      priority
    />
  </Link>
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />

        {/* ================= DESKTOP NAV ================= */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((link) =>
            link.isDropdown ? (
              <div key={link.label} className="relative group">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-black"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                <div className="absolute left-0 mt-2 hidden min-w-[220px] rounded-md bg-white shadow-lg group-hover:block">
                  {link.subLinks?.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
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
                className="text-sm font-medium text-black hover:text-gray-700"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* ================= RIGHT SIDE (IMAGE + SOCIAL ICONS) ================= */}
        <div className="hidden md:flex items-center gap-6">
          {/* Image (not logo) */}
          <Image
            src="/scopus.png" // change path if needed
            alt="Header Visual"
            width={60}
            height={80}
            className="object-contain"
          />

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black hover:text-gray-700 transition-colors"
              >
                <Icon name={link.icon} className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open Menu">
              <Menu className="h-6 w-6 text-black" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-6 p-6">
              <Logo />

              <nav className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.isDropdown ? (
                    <div key={link.label}>
                      <p className="text-sm font-semibold text-black">
                        {link.label}
                      </p>
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {link.subLinks?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-black hover:text-gray-700"
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
                      className="text-lg font-medium text-black hover:text-gray-700"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Social icons in mobile */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-black hover:text-gray-700"
                  >
                    <Icon name={link.icon} className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
