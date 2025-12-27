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
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

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

        {/* ================= RIGHT ACTIONS ================= */}
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/registration">Register</Link>
          </Button>

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

                <Button asChild>
                  <Link
                    href="/registration"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
