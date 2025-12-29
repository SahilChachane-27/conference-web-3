
import Image from 'next/image';

const logos = [
    { src: "/College.png", alt: "College Logo" },
    { src: "/SDG.webp", alt: "SDG Logo" },
    { src: "/RC Updated.jpeg", alt: "Researcher Connect Logo" },
];

export function Organizers() {
  return (
    <section id="organizers" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Our</span> Organizers & Collaborators
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Proudly organized and supported by the following institutions.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee">
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="flex-shrink-0 mx-6">
                        <Image 
                            src={logo.src} 
                            alt={logo.alt} 
                            width={120} 
                            height={160} 
                            className="object-contain bg-white rounded-md" 
                        />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
        </div>
      </div>
    </section>
  );
}
