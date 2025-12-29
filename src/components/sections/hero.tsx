
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

import { heroData } from "@/lib/data";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full text-white"
    >
      {/* Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="/2.jpg"
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <div className="max-w-4xl space-y-6">
          <h1 className="font-headline text-5xl font-bold md:text-7xl lg:text-8xl tracking-tight uppercase">
            {heroData.title}
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-accent" />
              <span>{heroData.date}</span>
            </div>
            <div className="hidden sm:block">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>{heroData.location}</span>
            </div>
          </div>

           <p className="text-lg font-light text-slate-200 md:text-xl lg:text-2xl">
            {heroData.subtitle}
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <Link href="/registration">Get Tickets</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
