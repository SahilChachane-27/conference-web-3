
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { callForPapers } from "@/lib/data";
import { Check } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function PublicationDetailsPage() {
  const pageImage = PlaceHolderImages.find(img => img.id === 'publication-details');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
            {pageImage && (
                <div className="mb-12">
                    <Image
                    src={pageImage.imageUrl}
                    alt={pageImage.description}
                    width={1200}
                    height={400}
                    className="rounded-lg shadow-2xl object-cover w-full aspect-[3/1]"
                    data-ai-hint={pageImage.imageHint}
                    />
                </div>
            )}
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
