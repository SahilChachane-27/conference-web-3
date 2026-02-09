
'use client';

import { useMemo } from 'react';
import { collection } from 'firebase/firestore';
import { useFirestore, FirebaseClientProvider } from '@/firebase';
import { useCollection } from '@/firebase/firestore/use-collection';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { tickets as defaultTickets } from "@/lib/data";
import { Check } from "lucide-react";
import { Loader2 } from 'lucide-react';

type Ticket = {
    id: string;
    type: string;
    category: string;
    earlyBird: { usd: string; inr: string };
    lateBird: { usd: string; inr: string };
    features: string[];
    featured?: boolean;
};

function RegistrationGuidelinesContent() {
  const firestore = useFirestore();
  const ticketsCollectionRef = useMemo(() => firestore ? collection(firestore, 'sustainTechConCollections', 'data', 'tickets') : null, [firestore]);
  const { data: ticketsData, isLoading } = useCollection<Ticket>(ticketsCollectionRef);

  const tickets = useMemo(() => {
    if (!ticketsData) return [];
    return [...ticketsData].sort((a, b) => defaultTickets.findIndex(t => t.type === a.type) - defaultTickets.findIndex(t => t.type === b.type));
  }, [ticketsData]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-28">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-headline mb-8 text-primary">Registration Guidelines</h1>
            <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-8">
                <p>
                    To ensure a smooth registration process for SustainTechCon 2026, please review the following guidelines carefully. At least one author of each accepted paper must register for the conference for the paper to be included in the proceedings.
                </p>

                {isLoading ? (
                  <div className="flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>
                ) : (
                  <div>
                      <h2 className="text-2xl font-headline font-bold text-foreground mb-4">Fee Structure</h2>
                      <p>The registration fees for different categories are as follows:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                          {tickets.map(ticket => (
                              <li key={ticket.id}>
                                  <span className="font-semibold">{ticket.type}:</span> Early Bird: {ticket.earlyBird.usd} / {ticket.earlyBird.inr} | Late Bird: {ticket.lateBird.usd} / {ticket.lateBird.inr}
                              </li>
                          ))}
                      </ul>
                  </div>
                )}

                <div>
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-4">Entitlements for Registered Authors/Attendees</h2>
                     <ul className="space-y-3">
                        {(defaultTickets[0]?.features || []).map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-2 text-sm">
                        Note: Attendees not presenting a paper will receive a certificate of participation instead of presentation.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-4">Important Notes</h2>
                     <ul className="list-disc pl-5 space-y-2">
                        <li>The registration fee is non-refundable under any circumstances.</li>
                        <li>The fee covers one paper presentation. Additional papers by the same author may require a separate registration.</li>
                        <li>All payments must be made in USD or INR.</li>
                        <li>Please ensure you complete your registration and payment before the final camera-ready submission deadline to avoid any issues.</li>
                    </ul>
                </div>

                 <div>
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-4">How to Register</h2>
                     <p>
                        The registration process is simulated for this demonstration website. On a live conference site, you would typically follow a link to a payment portal and fill out a registration form.
                    </p>
                </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function RegistrationGuidelinesPage() {
    return (
        <FirebaseClientProvider>
            <RegistrationGuidelinesContent />
        </FirebaseClientProvider>
    );
}
