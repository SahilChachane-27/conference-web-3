'use client';

import { useEffect, useMemo } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useCollection } from '@/firebase/firestore/use-collection';
import { tickets as defaultTickets } from '@/lib/data';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { errorEmitter } from '@/firebase/error-emitter';

type Ticket = {
    id: string;
    type: string;
    category: string;
    earlyBird: { usd: string; inr: string };
    lateBird: { usd: string; inr: string };
    features?: string[];
    featured?: boolean;
};

type FormValues = {
    tickets: Ticket[];
};

export default function AdminTicketsPage() {
    const firestore = useFirestore();
    const { toast } = useToast();
    const ticketsCollectionRef = useMemo(() => firestore ? collection(firestore, 'sustainTechConCollections', 'data', 'tickets') : null, [firestore]);
    const { data: ticketsData, isLoading } = useCollection<Ticket>(ticketsCollectionRef);

    const form = useForm<FormValues>({
        defaultValues: {
            tickets: [],
        },
    });
    
    const { fields } = useFieldArray({
        control: form.control,
        name: 'tickets',
    });

    useEffect(() => {
        if (ticketsData) {
            // Sort to maintain a consistent order
            const sortedData = [...ticketsData].sort((a, b) => defaultTickets.findIndex(t => t.type === a.type) - defaultTickets.findIndex(t => t.type === b.type));
            form.reset({ tickets: sortedData });
        }
    }, [ticketsData, form]);

    const handleInitializeData = async () => {
        if (!firestore) return;
        const batch = writeBatch(firestore);
        defaultTickets.forEach((ticketData) => {
            const ticketId = ticketData.type.toLowerCase().replace(/ /g, '-');
            const docRef = doc(firestore, 'sustainTechConCollections', 'data', 'tickets', ticketId);
            batch.set(docRef, ticketData);
        });
        await batch.commit();
        toast({
            title: 'Success!',
            description: 'Ticket data has been initialized.',
        });
    };
    
    const onSubmit = async (data: FormValues) => {
        if (!firestore) return;
        const batch = writeBatch(firestore);
        data.tickets.forEach(ticket => {
            const { id, ...ticketData } = ticket;
            const docRef = doc(firestore, 'sustainTechConCollections', 'data', 'tickets', id);
            batch.update(docRef, ticketData);
        });

        try {
            await batch.commit();
            toast({
                title: 'Success!',
                description: 'Ticket prices have been updated.',
            });
        } catch (e: any) {
            if (ticketsCollectionRef) {
                errorEmitter.emit('permission-error', {
                    path: ticketsCollectionRef.path,
                    operation: 'update'
                });
            }
        }
    };

    if (isLoading) {
        return <div className="flex h-full w-full items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
    }

    if (!ticketsData || ticketsData.length === 0) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Initialize Ticket Data</CardTitle>
                    <CardDescription>No ticket data found in the database. You can initialize it with default values.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={handleInitializeData}>Initialize Default Tickets</Button>
                </CardContent>
            </Card>
        );
    }
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>Registration Fees</CardTitle>
                <CardDescription>Manage ticket prices for the conference.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Type</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Early Bird (USD)</TableHead>
                                <TableHead>Early Bird (INR)</TableHead>
                                <TableHead>Late Bird (USD)</TableHead>
                                <TableHead>Late Bird (INR)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {fields.map((field, index) => (
                                <TableRow key={field.id}>
                                    <TableCell>{form.watch(`tickets.${index}.type`)}</TableCell>
                                    <TableCell>{form.watch(`tickets.${index}.category`)}</TableCell>
                                    <TableCell><Input {...form.register(`tickets.${index}.earlyBird.usd`)} /></TableCell>
                                    <TableCell><Input {...form.register(`tickets.${index}.earlyBird.inr`)} /></TableCell>
                                    <TableCell><Input {...form.register(`tickets.${index}.lateBird.usd`)} /></TableCell>
                                    <TableCell><Input {...form.register(`tickets.${index}.lateBird.inr`)} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Button type="submit" className="mt-6" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Saving...' : 'Save All Changes'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
