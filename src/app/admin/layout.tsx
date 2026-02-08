'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { FirebaseClientProvider, useUser, useAuth } from '@/firebase';
import { LogOut, Settings, Ticket, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signOut } from 'firebase/auth';

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useUser();
    const auth = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/login');
        }
    }, [isLoading, user, router]);

    const handleLogout = async () => {
        if (auth) {
            await signOut(auth);
            router.replace('/login');
        }
    };

    if (isLoading || !user) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    const navLinkClasses = (path: string) => 
        `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === path ? 'bg-muted text-primary' : ''}`;

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/admin" className="flex items-center gap-2 font-semibold">
                            <span className="">SustainTechCon Admin</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link href="/admin" className={navLinkClasses('/admin')}>
                                <Settings className="h-4 w-4" />
                                Conference Settings
                            </Link>
                            <Link href="/admin/tickets" className={navLinkClasses('/admin/tickets')}>
                                <Ticket className="h-4 w-4" />
                                Registration Fees
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center justify-end gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{user.email}</span>
                        <Button onClick={handleLogout} variant="outline" size="sm">
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <FirebaseClientProvider>
            <AdminLayoutContent>{children}</AdminLayoutContent>
        </FirebaseClientProvider>
    );
}
