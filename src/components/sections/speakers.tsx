
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { speakers } from '@/lib/data';
import { Twitter, Linkedin, Github } from 'lucide-react';

export function Speakers() {
  return (
    <section id="speakers" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Speakers
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Invited talks by eminent academicians, industry experts, and technology leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="overflow-hidden group text-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  {speaker.image && (
                    <Image
                      src={speaker.image.imageUrl || '/image.png'}
                      alt={`Portrait of ${speaker.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      data-ai-hint={speaker.image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {speaker.image && (
                        <Image
                            src={speaker.image.imageUrl || '/image.png'}
                            alt={`Portrait of ${speaker.name}`}
                            width={80}
                            height={80}
                            className="rounded-full border-4 border-white/50 mb-3"
                        />
                    )}
                    <p className="text-sm text-center text-white">{speaker.bio}</p>
                  </div>
                </div>
              </CardContent>
              <div className="p-4">
                <h3 className="text-xl font-bold font-headline">{speaker.name}</h3>
                <p className="text-sm text-primary">{speaker.title}</p>
              </div>
              <CardFooter className="bg-muted/50 p-2 justify-center">
                  <div className="flex gap-4">
                      <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={18} /></a>
                      <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={18} /></a>
                      <a href="#" className="text-muted-foreground hover:text-primary"><Github size={18} /></a>
                  </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
