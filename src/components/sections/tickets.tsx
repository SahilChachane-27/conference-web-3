"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
                        <span className="text-accent">Get</span> Tickets
                    </h2>
                    <p className="text-lg text-primary-foreground/80 mt-2">
                        Join the biggest digital event of the year
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {tickets.map((ticket) => (
                        <Card key={ticket.type} className={cn(
                            "bg-card/80 backdrop-blur-sm text-card-foreground flex flex-col transition-all duration-300 hover:scale-105",
                            ticket.featured && "border-accent border-2 scale-105 shadow-2xl"
                        )}>
                            {ticket.featured && <div className="bg-accent text-center py-1 text-sm font-bold text-accent-foreground">Best Selling</div>}
                            <CardHeader className="text-center">
                                <CardTitle className="font-headline text-3xl">{ticket.type}</CardTitle>
                                <p className="text-4xl font-bold text-primary">
                                    <span className="text-2xl align-top">$</span>
                                    {ticket.price}
                                    <span className="text-sm font-normal text-muted-foreground">/person</span>
                                </p>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {ticket.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Check className="h-5 w-5 text-green-500" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button 
                                    onClick={() => handleGetTicket(ticket.type)}
                                    variant={ticket.featured ? "default" : "secondary"} 
                                    className={cn("w-full", ticket.featured && "bg-accent hover:bg-accent/90 text-accent-foreground")}
                                >
                                    Get Ticket
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="text-primary font-headline">Booking Confirmation</AlertDialogTitle>
                    <AlertDialogDescription>
                        You have successfully simulated booking a ticket for the <span className="font-bold">{selectedTicket}</span> package.
                        This is a demonstration and no actual ticket has been issued.
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
