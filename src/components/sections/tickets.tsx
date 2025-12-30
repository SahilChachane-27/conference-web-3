"use client";

import { useState } from 'react';
import Link from 'next/link';
import { tickets } from '@/lib/data';
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
import { Check } from 'lucide-react';

export function Tickets() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState('');

    const handleGetTicket = (ticketType: string) => {
        setSelectedTicket(ticketType);
        setDialogOpen(true);
    };
    
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tickets.map((ticket, index) => (
                        <div key={index} className={cn(
                            "bg-white rounded-lg shadow-lg border-t-4 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
                            ticket.featured ? "border-primary" : "border-gray-300"
                        )}>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold font-headline mb-2">{ticket.type}</h3>
                                <p className="text-muted-foreground mb-4">{ticket.category}</p>
                                <div className="text-4xl font-bold font-headline mb-4">
                                    {ticket.earlyBird.usd} <span className="text-lg font-normal text-muted-foreground">/ {ticket.earlyBird.inr}</span>
                                 </div>
                                <p className="text-sm text-muted-foreground">Early Bird Price. Late Bird: {ticket.lateBird.usd} / {ticket.lateBird.inr}</p>
                            </div>
                            <div className="p-8 bg-muted/30 flex-grow">
                                <ul className="space-y-3">
                                    {ticket.features.map((feature, i) => (
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
                                    className={cn(
                                        "w-full text-lg",
                                        ticket.featured ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/90"
                                    )}
                                >
                                    Get Ticket
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
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
