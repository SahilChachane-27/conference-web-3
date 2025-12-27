
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutResearcherConnectPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <h1 className="text-4xl font-bold font-headline mb-8">About Researcher Connect Innovation & Impact Pvt Ltd</h1>
          <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-6">
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
      </main>
      <Footer />
    </div>
  );
}
