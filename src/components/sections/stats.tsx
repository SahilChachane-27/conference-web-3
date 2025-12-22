"use client";

import { useState, useEffect, useRef } from 'react';
import { stats } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

const CountUp = ({ end }: { end: number }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const duration = 2500;
  
    useEffect(() => {
      if (inView) {
        let start = 0;
        const endValue = end;
        const startTime = Date.now();
  
        const frame = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const current = Math.floor(progress * endValue);
          setCount(current);
          if (progress < 1) {
            requestAnimationFrame(frame);
          }
        };
        requestAnimationFrame(frame);
      }
    }, [inView, end]);
  
    return <h3 ref={ref} className="text-5xl font-bold font-headline">{count.toLocaleString()}</h3>;
};

export function Stats() {
    const bgImage = PlaceHolderImages.find(img => img.id === 'stats-background');

    return (
        <section className="relative text-white py-20 md:py-28">
            {bgImage && (
                 <Image
                    src={bgImage.imageUrl}
                    alt={bgImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={bgImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-primary/80" />
            <div className="container relative mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center flex flex-col items-center">
                            <Icon name={stat.icon} className="h-12 w-12 mb-4 text-accent" />
                            <CountUp end={stat.value} />
                            <span className="text-lg mt-2">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
