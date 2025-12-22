import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { heroData } from '@/lib/data';
import { CalendarDays, MapPin } from 'lucide-react';
import { Countdown } from './countdown';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full text-white">
      <Carousel className="absolute inset-0 h-full w-full">
        <CarouselContent className="h-full">
          {heroData.images.map((img, index) => (
            <CarouselItem key={index} className="h-full">
              <Image
                src="/2.jpg"
                alt="banner"
                fill
                className="object-cover"
                priority={index === 0}
                data-ai-hint={img.imageHint}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <div className="space-y-6 max-w-4xl">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                {heroData.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-200">
              {heroData.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-lg md:text-xl text-slate-200">
                <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <span>{heroData.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{heroData.location}</span>
                </div>
            </div>

            <div className="my-8">
                <Countdown targetDate={heroData.countdownTarget} />
            </div>

            <div className='flex gap-4 justify-center'>
              <Button asChild size="lg">
                <Link href="#tickets">Register Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                <Link href="#papers">Submit Paper</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
