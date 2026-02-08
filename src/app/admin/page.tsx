'use client';

import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { doc, setDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useDoc } from '@/firebase/firestore/use-doc';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { errorEmitter } from '@/firebase/error-emitter';

const configSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    subtitle: z.string().min(1, 'Subtitle is required'),
    date: z.string().min(1, 'Date is required'),
    location: z.string().min(1, 'Location is required'),
});

type ConfigFormValues = z.infer<typeof configSchema>;

export default function AdminConferencePage() {
    const firestore = useFirestore();
    const { toast } = useToast();
    const configRef = useMemo(() => firestore ? doc(firestore, 'sustainTechConCollections', 'data') : null, [firestore]);
    const { data: configData, isLoading } = useDoc<ConfigFormValues>(configRef);

    const form = useForm<ConfigFormValues>({
        resolver: zodResolver(configSchema),
        defaultValues: {
            title: '',
            subtitle: '',
            date: '',
            location: '',
        },
    });

    useEffect(() => {
        if (configData) {
            form.reset(configData);
        }
    }, [configData, form]);

    const onSubmit = async (data: ConfigFormValues) => {
        if (!configRef) return;
        try {
            await setDoc(configRef, data);
            toast({
                title: 'Success!',
                description: 'Conference settings have been updated.',
            });
        } catch (e: any) {
             errorEmitter.emit('permission-error', {
                path: configRef.path,
                operation: 'update',
                requestResourceData: data,
            });
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Conference Settings</CardTitle>
                <CardDescription>Manage general conference details.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subtitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Subtitle</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Saving...' : 'Save Settings'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
