import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Testimonials() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'testimonials-background');
  return (
    <section id="testimonials" className="relative text-white py-20 md:py-28">
       {bgImage && (
            <Image
                src="/2.jpg"
                alt="testimonials"
                fill
                className="object-cover"
                data-ai-hint={bgImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/70" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">They</span> Say
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-2">
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm text-white h-full">
                    <CardContent className="flex flex-col justify-between p-6 h-full">
                        <blockquote className="text-lg mb-4 before:content-['“'] before:mr-1 after:content-['”'] after:ml-1">
                            {testimonial.quote}
                        </blockquote>
                        <footer className="text-right text-accent font-bold">
                            — {testimonial.author}
                        </footer>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white hover:bg-white/20 hover:text-white border-white/20 -left-12" />
          <CarouselNext className="text-white hover:bg-white/20 hover:text-white border-white/20 -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
