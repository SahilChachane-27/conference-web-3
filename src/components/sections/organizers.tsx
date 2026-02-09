
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { publishingPartners } from '@/lib/data';

export function Organizers() {
  const partners = [...publishingPartners, ...publishingPartners]; // Duplicate for seamless loop
  return (
    <section id="organizers" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Sponsors & Partners
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Proudly organized and supported by the following institutions. Want to become a sponsor? Get in touch!
          </p>
        </div>
        
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee">
                {partners.map((partner, index) => (
                    <li key={index}>
                        {partner.image && (
                            <Image src={partner.image.imageUrl} alt={partner.name} width={150} height={80} className="object-contain" data-ai-hint={partner.image.imageHint}/>
                        )}
                    </li>
                ))}
            </ul>
             <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee" aria-hidden="true">
                {partners.map((partner, index) => (
                    <li key={`clone-${index}`}>
                        {partner.image && (
                           <Image src={partner.image.imageUrl} alt={partner.name} width={150} height={80} className="object-contain" data-ai-hint={partner.image.imageHint}/>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="secondary" className="hover:bg-accent/90">
                <Link href="#">Become a Sponsor</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
