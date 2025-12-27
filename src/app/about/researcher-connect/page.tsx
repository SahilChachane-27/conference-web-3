
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutResearcherConnectPage() {
  const pageImage = PlaceHolderImages.find(img => img.id === 'researcher-connect');

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
            <h1 className="text-4xl font-bold font-headline mb-8 text-center">About Researcher Connect Innovation & Impact Pvt Ltd</h1>
            <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-6 text-justify">
              <p>
                Researcher Connect Innovation & Impact Pvt Ltd is dedicated to fostering innovation and creating a significant impact by connecting researchers and industry professionals.
              </p>
              <p>
                We believe in the power of collaboration to solve complex problems and drive technological advancement. Our mission is to create platforms and opportunities for knowledge sharing, networking, and the development of groundbreaking solutions.
              </p>
              <p>
                Through conferences, workshops, and strategic partnerships, we aim to build a global community of innovators committed to making a positive difference in the world.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
