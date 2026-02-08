"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import { collection } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useCollection } from '@/firebase/firestore/use-collection';
import { tickets as defaultTickets } from '@/lib/data';
import { Loader2 } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

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
    const firestore = useFirestore();
    const ticketsCollectionRef = useMemo(() => firestore ? collection(firestore, 'tickets') : null, [firestore]);
    const { data: ticketsData, isLoading } = useCollection<Ticket>(ticketsCollectionRef);

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
                    <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border">
                        <Table>
                            <TableHeader>
                                <TableRow className='hover:bg-transparent'>
                                    <TableHead className="text-base font-bold">Ticket Type</TableHead>
                                    <TableHead className="text-base font-bold">Category</TableHead>
                                    <TableHead className="text-base font-bold">Early Bird (USD / INR)</TableHead>
                                    <TableHead className="text-base font-bold">Late Bird (USD / INR)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tickets.map((ticket) => (
                                    <TableRow key={ticket.id}>
                                        <TableCell className="font-medium">{ticket.type}</TableCell>
                                        <TableCell>{ticket.category}</TableCell>
                                        <TableCell>{ticket.earlyBird.usd} / {ticket.earlyBird.inr}</TableCell>
                                        <TableCell>{ticket.lateBird.usd} / {ticket.lateBird.inr}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </div>
        </section>
    );
}
