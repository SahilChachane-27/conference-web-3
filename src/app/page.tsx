import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Speakers } from "@/components/sections/speakers";
import { Stats } from "@/components/sections/stats";
import { Schedule } from "@/components/sections/schedule";
import { Testimonials } from "@/components/sections/testimonials";
import { Sponsors } from "@/components/sections/sponsors";
import { Tickets } from "@/components/sections/tickets";
import { Venue } from "@/components/sections/venue";
import { MapSection } from "@/components/sections/map-section";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Speakers />
        <Stats />
        <Schedule />
        <Testimonials />
        <Sponsors />
        <Tickets />
        <Venue />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <Link href="#home" className="fixed bottom-4 right-4">
        <Button size="icon" className="rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground">
          <ArrowUp className="h-6 w-6" />
          <span className="sr-only">Back to Top</span>
        </Button>
      </Link>
    </div>
  );
}
