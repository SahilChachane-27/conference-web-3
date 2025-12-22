import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { speakers } from '@/lib/data';

export function Speakers() {
  return (
    <section id="speakers" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Event</span> Speakers
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            We invite digital experts from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.slice(0, 3).map((speaker, index) => (
            <Card key={speaker.name} className="overflow-hidden group text-center lg:col-span-1 xl:col-span-1 sm:col-span-1 first:sm:col-span-2 first:sm:mx-auto first:max-w-sm sm:first:col-span-1 md:first:col-span-1 lg:first:col-span-1 xl:first:col-span-1">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={speaker.image.imageUrl}
                    alt={`Portrait of ${speaker.name}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={speaker.image.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-center text-white">{speaker.bio}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-center pt-4 pb-4">
                <h3 className="text-xl font-bold font-headline">{speaker.name}</h3>
                <p className="text-sm text-primary">{speaker.title}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {speakers.slice(3).map((speaker) => (
                <Card key={speaker.name} className="overflow-hidden group text-center">
                    <CardContent className="p-0">
                        <div className="relative aspect-square">
                        <Image
                            src={speaker.image.imageUrl}
                            alt={`Portrait of ${speaker.name}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                            data-ai-hint={speaker.image.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-sm text-center text-white">{speaker.bio}</p>
                        </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center pt-4 pb-4">
                        <h3 className="text-xl font-bold font-headline">{speaker.name}</h3>
                        <p className="text-sm text-primary">{speaker.title}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>

      </div>
    </section>
  );
}
