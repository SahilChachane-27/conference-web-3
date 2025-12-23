
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { tickets } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"

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
                    <p className="text-lg text-primary-foreground/80 mt-2">
                        At least one author must register for each accepted paper to ensure inclusion in the conference proceedings.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {tickets.map((ticket, index) => (
                        <Card key={ticket.type} className={cn(
                            "bg-card/80 backdrop-blur-sm text-card-foreground flex flex-col transition-all duration-300 hover:scale-105",
                            ticket.featured && "border-accent border-2 scale-105 shadow-2xl"
                        )}>
                            {ticket.featured && <div className="bg-accent text-center py-1 text-sm font-bold text-accent-foreground">Most Popular</div>}
                            <CardHeader className="text-center">
                                <CardTitle className="font-headline text-2xl">{ticket.type}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                                <p className="text-sm text-muted-foreground">{ticket.description}</p>
                                <div className="text-4xl font-bold text-center font-headline text-primary">
                                    {ticket.cost}
                                </div>
                                <ul className="space-y-3 pt-4">
                                    {ticket.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <p className='text-xs text-muted-foreground text-center w-full'>Registration fee is non-refundable.</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="text-primary font-headline">Registration Confirmation</AlertDialogTitle>
                    <AlertDialogDescription>
                        You have successfully simulated registering for the <span className="font-bold">{selectedTicket}</span> category.
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
