import Image from 'next/image';
import { sponsors } from '@/lib/data';

export function Sponsors() {
  return (
    <section id="sponsors" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Event</span> Sponsors
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Check who makes this event possible
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-headline mb-6 text-yellow-500">Gold Sponsors</h3>
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap mb-16">
            {sponsors.gold.map((sponsor) => (
              <div key={sponsor.name} className="relative h-20 w-40">
                <Image
                  src={sponsor.image.imageUrl}
                  alt={sponsor.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="160px"
                  data-ai-hint={sponsor.image.imageHint}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-headline mb-6 text-slate-400">Silver Sponsors</h3>
          <div className="flex justify-center items-center gap-8 md:gap-10 flex-wrap">
            {sponsors.silver.map((sponsor) => (
              <div key={sponsor.name} className="relative h-16 w-32">
                 <Image
                  src={sponsor.image.imageUrl}
                  alt={sponsor.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="128px"
                  data-ai-hint={sponsor.image.imageHint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
