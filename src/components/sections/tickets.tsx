

"use client";

import { useState } from 'react';
import Image from 'next/image';
import { tickets } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export function Tickets() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState('');

    const handleGetTicket = (ticketType: string) => {
        setSelectedTicket(ticketType);
        setDialogOpen(true);
    };

    const bgImage = PlaceHolderImages.find(img => img.id === 'tickets-background');
    
    return (
        <section id="tickets" className="relative text-white py-20 md:py-28">
            {bgImage && (
                <Image
                    src={bgImage.imageUrl}
                    alt={bgImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={bgImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-primary/90" />
            <div className="container relative mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">
                        <span className="text-accent">Registration</span> Details
                    </h2>
                    <p className="text-lg text-primary-foreground/80 mt-2 max-w-4xl mx-auto">
                        At least one author must register for each accepted paper to ensure inclusion in the conference proceedings. Registration fee is non-refundable. For detailed guidelines, please <Link href="/registration-guidelines" className='underline hover:text-accent'>click here</Link>.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-white/20">
                   <Table>
                        <TableHeader>
                            <TableRow className="border-b border-white/20">
                                <TableHead className="text-white font-bold text-base md:text-lg">Registration Type</TableHead>
                                <TableHead className="text-accent font-bold text-base md:text-lg text-center">Early Bird</TableHead>
                                <TableHead className="text-accent font-bold text-base md:text-lg text-center">Late Bird</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tickets.map((ticket) => (
                                <TableRow key={ticket.type} className="border-0">
                                    <TableCell className="font-headline text-base md:text-lg font-semibold text-white">{ticket.type}</TableCell>
                                    <TableCell className="font-bold text-base md:text-lg text-white text-center">
                                        {ticket.earlyBird.usd} / {ticket.earlyBird.inr}
                                    </TableCell>
                                    <TableCell className="font-bold text-base md:text-lg text-white text-center">
                                        {ticket.lateBird.usd} / {ticket.lateBird.inr}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                   </Table>
                </div>
            </div>

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="text-primary font-headline">Registration Confirmation</AlertDialogTitle>
                    <AlertDialogDescription>
                        You have successfully simulated registering for the conference.
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

    