
import Image from 'next/image';

export function Organizers() {
  return (
    <section id="organizers" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Our</span> Organizers
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Proudly organized by the following institutions.
          </p>
        </div>
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            <Image src="/College.png" alt="College Logo" width={120} height={160} className="object-contain bg-white rounded-md" />
            <Image src="/SDG.webp" alt="College Logo" width={120} height={160} className="object-contain bg-white rounded-md" />
          <Image src="/RC Updated.jpeg" alt="Researcher Connect Logo" width={120} height={160} className="object-contain bg-white rounded-md" />
        </div>
      </div>
    </section>
  );
}
