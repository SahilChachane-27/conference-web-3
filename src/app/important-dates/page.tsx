'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Schedule } from "@/components/sections/schedule";
import { Tickets } from "@/components/sections/tickets";
import { FirebaseClientProvider } from "@/firebase";

function ImportantDatesPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <Schedule />
        <Tickets />
      </main>
      <Footer />
    </div>
  );
}

export default function ImportantDatesPage() {
  return (
    <FirebaseClientProvider>
      <ImportantDatesPageContent />
    </FirebaseClientProvider>
  );
}
