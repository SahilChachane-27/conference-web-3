
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { List, ListItem } from "@/components/ui/list";

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
                    src="/rclogo.webp"
                    alt={pageImage.description}
                    width={1200}
                    height={400}
                    className="rounded-lg object-contain w-full aspect-[3/1]"
                    data-ai-hint={pageImage.imageHint}
                />
              </div>
            )}

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-headline mb-8 text-center">About Researcher Connect Innovation & Impact Pvt Ltd</h1>
            <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-6 text-justify">
              <p>
                At Researcher Connect, we are a research technology and consulting company committed to transforming the way knowledge is created, published, and shared. We work with universities, researchers, publishers, and institutions to break silos and build integrated ecosystems for research growth, visibility, and global collaboration.
              </p>
              <p>
                We go beyond being just a service provider—we act as a partner in progress, addressing challenges in research publication, analytics, institutional rankings, and digital transformation. Our approach combines consultancy, technology, innovation, and collaboration to deliver measurable results.
              </p>
              <p>
                “How do we do it?” By aligning ideas with execution, ensuring that every research output—whether a manuscript, patent, or dataset—translates into impactful contributions for academia and society.
              </p>
              <p>
                Researcher Connect helps people with ideas succeed. Our platforms and services empower PhD scholars, postdocs, academic institutions, and publishers to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Publish high-quality research in credible journals</li>
                <li>Manage conferences and peer review with efficiency</li>
                <li>Protect intellectual property with patents and IP consulting</li>
                <li>Build institutional visibility through analytics and SDG alignment</li>
                <li>Create scalable journals, editorial systems, and research software</li>
              </ul>
              <p>
                Our teams work globally, collaborating with universities, publishers, and research bodies across India, Europe, the Middle East, and beyond.
              </p>
              <p>
                From research analytics software (RAMS) to journal hosting, publication consultancy, and SDG mapping, we are dedicated to shaping the future of knowledge dissemination.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
