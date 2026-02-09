
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutConferencePage() {
  const conferenceImage = PlaceHolderImages.find(img => img.id === 'conference-logo');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold font-headline mb-8 text-center">About the Conference</h1>

                {conferenceImage && (
                <div className="mb-8">
                    <Image
                        src={conferenceImage.imageUrl}
                        alt="About the conference"
                        width={600}
                        height={400}
                        className="rounded-lg  object-contain w-full mx-auto"
                        data-ai-hint={conferenceImage.imageHint}
                    />
                </div>
                )}

                <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-6 text-justify">
                    <p>
                        SustainTechCon 2026 is the 1st International Conference on Sustainable Technologies and Intelligent Systems, designed to bring together researchers, academicians, industry experts, innovators, and policymakers from across the globe.
                    </p>
                    <p>
                        The conference focuses on the convergence of sustainability, intelligent systems, artificial intelligence, IoT, smart engineering, and emerging technologies to address real-world challenges.
                    </p>
                    <p>
                        In the era of rapid technological advancement and environmental concerns, SustainTechCon 2026 aims to provide a premier platform for knowledge exchange, innovation, and interdisciplinary collaboration. The conference emphasizes cutting-edge research, practical implementations, and sustainable engineering solutions aligned with global development goals.
                    </p>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
