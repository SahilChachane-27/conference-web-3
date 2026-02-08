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
                    <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border">
                        <Table>
                            <TableHeader>
                                <TableRow className='hover:bg-transparent'>
                                    <TableHead className="text-base font-bold">Ticket Type</TableHead>
                                    <TableHead className="text-base font-bold">Category</TableHead>
                                    <TableHead className="text-base font-bold">Early Bird</TableHead>
                                    <TableHead className="text-base font-bold">Late Bird</TableHead>
                                    <TableHead className="text-right text-base font-bold">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tickets.map((ticket) => (
                                    <TableRow key={ticket.id}>
                                        <TableCell className="font-medium">{ticket.type}</TableCell>
                                        <TableCell>{ticket.category}</TableCell>
                                        <TableCell>{ticket.earlyBird.usd} / {ticket.earlyBird.inr}</TableCell>
                                        <TableCell>{ticket.lateBird.usd} / {ticket.lateBird.inr}</TableCell>
                                        <TableCell className="text-right">
                                            <Button 
                                                onClick={() => handleGetTicket(ticket.type)} 
                                                size="sm"
                                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                                            >
                                                Get Ticket
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
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