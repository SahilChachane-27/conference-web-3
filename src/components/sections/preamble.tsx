'use client';

import { objectives, preamble, heroData as staticHeroData } from "@/lib/data";
import { CheckCircle, Loader2 } from "lucide-react";
import { Countdown } from './countdown';
import Link from "next/link";
import { Button } from "../ui/button";

type Config = {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    countdownTarget: string;
} | null;

interface PreambleProps {
  config: Config;
  isLoading: boolean;
}

export function Preamble({ config, isLoading }: PreambleProps) {
  const preambleData = config || staticHeroData;

  return (
    <section id="preamble" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            {isLoading ? (
              <div className="h-12 flex items-center justify-center mb-4"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
            ) : (
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
                  About <span className="text-primary">{preambleData.title}</span>
              </h2>
            )}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {preamble.content}
            </p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-2xl font-headline font-bold mb-6">Why Join Us?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left mx-auto max-w-lg">
                {objectives.map((objective) => (
                    <li key={objective.title} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                        <span>{objective.title}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="event-countdown text-center mb-12">		   
            <h4 className="font-headline text-2xl mb-4 text-center">Event Starts In:</h4>
            <div className="flex justify-center">
              {isLoading ? (
                <div className="h-[112px] flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
              ) : (
                <Countdown targetDate={preambleData.countdownTarget} />
              )}
            </div>
        </div>
        
        <div className="text-center">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/registration">Get Your Ticket Today</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
