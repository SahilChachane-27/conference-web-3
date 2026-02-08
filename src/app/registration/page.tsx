'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Tickets } from "@/components/sections/tickets";
import { FirebaseClientProvider } from "@/firebase";

function RegistrationPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <Tickets />
      </main>
      <Footer />
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <FirebaseClientProvider>
      <RegistrationPageContent />
    </FirebaseClientProvider>
  );
}
