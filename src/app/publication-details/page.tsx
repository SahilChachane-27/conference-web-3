
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { callForPapers, publishingPartners } from "@/lib/data";
import { Check } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PublicationDetailsPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-headline mb-8 text-center text-primary">Publication Details</h1>
            <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-6 text-justify">
                <p>
                    {callForPapers.publicationDetails.description}
                </p>
                
                <div>
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-4">Indexing</h2>
                    <p>
                        Selected high-quality papers will be published in proceedings indexed by <span className="font-semibold text-primary">{callForPapers.publicationDetails.indexing}</span>. This ensures maximum visibility and impact for your research.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-4">Review Process</h2>
                     <ul className="list-disc pl-5 space-y-2">
                        <li>All submitted papers will undergo a rigorous <span className="font-semibold">double-blind peer review</span> process by at least two independent reviewers.</li>
                        <li>Submissions will be checked for originality and plagiarism using industry-standard tools.</li>
                        <li>Final acceptance is contingent on incorporating reviewer feedback and adhering to all formatting guidelines.</li>
                    </ul>
                </div>

                 <div>
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-4">Ethical Guidelines</h2>
                     <p>
                        We are committed to the highest standards of publication ethics. Authors must ensure their work is original and has not been published elsewhere. Any use of AI-generated content must be clearly disclosed and comply with the publisher's policies.
                    </p>
                </div>

                <div className="pt-8">
                    <h2 className="text-2xl font-headline font-bold text-foreground mb-6 text-center">Publishing Partners</h2>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {publishingPartners.map((partner, index) => (
                                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="p-1">
                                        <Card className="overflow-hidden">
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                {partner.image && (
                                                    <Image 
                                                        src={partner.image.imageUrl}
                                                        alt={partner.name}
                                                        width={150}
                                                        height={150}
                                                        className="object-contain"
                                                        data-ai-hint={partner.image.imageHint}
                                                    />
                                                )}
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
