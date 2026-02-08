
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { collection } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useCollection } from '@/firebase/firestore/use-collection';
import { tickets as defaultTickets } from '@/lib/data';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Check, Loader2 } from 'lucide-react';

type Ticket = {
    id: string;
    type: string;
    category: string;
    earlyBird: { usd: string; inr: string };
    lateBird: { usd: string; inr: string };
    features: string[];
    featured?: boolean;
};

export function Tickets() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState('');

    const firestore = useFirestore();
    const ticketsCollectionRef = useMemo(() => firestore ? collection(firestore, 'tickets') : null, [firestore]);
    const { data: ticketsData, isLoading } = useCollection<Ticket>(ticketsCollectionRef);

    const handleGetTicket = (ticketType: string) => {
        setSelectedTicket(ticketType);
        setDialogOpen(true);
    };

    const tickets = useMemo(() => {
        if (!ticketsData) return [];
        // Sort to maintain a consistent order based on the default data
        return [...ticketsData].sort((a, b) => defaultTickets.findIndex(t => t.type === a.type) - defaultTickets.findIndex(t => t.type === b.type));
    }, [ticketsData]);
    
    return (
        <section id="tickets" className="bg-muted/60 py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">
                        Tickets
                    </h2>
                    <p className="text-lg text-muted-foreground mt-2 max-w-4xl mx-auto">
                        At least one author must register for each accepted paper to ensure inclusion in the conference proceedings. Registration fee is non-refundable. For detailed guidelines, please <Link href="/registration-guidelines" className='text-primary underline hover:text-primary/80'>click here</Link>.
                    </p>
                </div>

                {isLoading ? (
                    <div className="flex justify-center">
                        <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {tickets.map((ticket, index) => (
                            <div key={ticket.id || index} className={cn(
                                "bg-white rounded-lg shadow-lg border-t-4 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
                                "border-primary"
                            )}>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold font-headline mb-2">{ticket.type}</h3>
                                    <p className="text-muted-foreground mb-4">{ticket.category}</p>
                                    <div className="text-4xl font-bold font-headline mb-4">
                                        {ticket.earlyBird.usd} <span className="text-lg font-normal text-muted-foreground">/ {ticket.earlyBird.inr}</span>
                                     </div>
                                    <p className="text-sm text-muted-foreground">Late Bird: {ticket.lateBird.usd} / {ticket.lateBird.inr}</p>
                                </div>
                                <div className="p-8 bg-muted/30 flex-grow">
                                    <ul className="space-y-3">
                                        {(ticket.features || []).map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 mt-auto">
                                    <Button 
                                        onClick={() => handleGetTicket(ticket.type)} 
                                        size="lg" 
                                        className="w-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                                    >
                                        Get Ticket
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="text-primary font-headline">Registration Confirmation</AlertDialogTitle>
                    <AlertDialogDescription>
                        You have successfully simulated registering for the <strong>{selectedTicket}</strong> ticket.
                        This is a demonstration and no actual registration has been made.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setDialogOpen(false)}>OK</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    );
}

