'use client';

import { useMemo } from 'react';
import { doc } from 'firebase/firestore';
import { useFirestore, useDoc, FirebaseClientProvider } from '@/firebase';
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { Preamble } from "@/components/sections/preamble";
import { Objectives } from "@/components/sections/objectives";
import { AboutCollege } from "@/components/sections/about-college";
import { Organizers } from "@/components/sections/organizers";
import { Speakers } from '@/components/sections/speakers';
import { Schedule } from '@/components/sections/schedule';
import { Tickets } from '@/components/sections/tickets';

type Config = {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  countdownTarget: string;
};

function HomePageContent() {
  const firestore = useFirestore();
  const configRef = useMemo(() => firestore ? doc(firestore, 'sustainTechConCollections', 'data') : null, [firestore]);
  const { data: config, isLoading } = useDoc<Config>(configRef);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero config={config} isLoading={isLoading} />
        <div className="relative bg-background z-10">
          <Preamble config={config} isLoading={isLoading} />
          <Speakers />
          <Schedule />
          <Tickets />
          <AboutCollege />
          <Organizers />
        </div>
      </main>
      <Footer />
      <Link href="#home" className="fixed bottom-4 right-4 z-50">
        <Button size="icon" className="rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground">
          <ArrowUp className="h-6 w-6" />
          <span className="sr-only">Back to Top</span>
        </Button>
      </Link>
    </div>
  );
}


export default function Home() {
  return (
    <FirebaseClientProvider>
      <HomePageContent />
    </FirebaseClientProvider>
  );
}
