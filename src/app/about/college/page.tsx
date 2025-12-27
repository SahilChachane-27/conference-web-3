
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

export default function AboutCollegePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <h1 className="text-4xl font-bold font-headline mb-8">About Vasantdada Patil Pratishthan’s College of Engineering & Visual Arts</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-6">
              <p>
                Vasantdada Patil Pratishthan’s College of Engineering & Visual Arts
                (VPPCOE&VA) formerly known as Padmabhushan Vasantdada Patil Pratishthan’s College of Engineering (PVPPCOE) is one of the top private engineering colleges
                in Mumbai. VPPCOE&VA was established in 1990 as a humble tribute to Late
                Padmabhushan Vasantdada Patil, by the great founder Late Manohar (Mama)
                Phalke, ex-MLC and labour leader, who took over the task of fulfilling Late
                Vasantdada Patil’s dreams of spreading engineering education and providing
                top-class higher education facility to greater number of promising students in
                science and technology.
              </p>
              <p>
                The college is approved by All India Council for Technical Education (AICTE), New
                Delhi, Directorate of Technical Education (DTE) and Directorate of Art (DOA).
                VPPCOE&VA is accredited by NAAC with an A grade. Computer Engineering and
                Information Technology programs of the institute are accredited by National
                Board of Accreditation (NBA) for 3 years w.e.f. April 03, 2024.
              </p>
            </div>
            <div>
                <Image
                    src="/college.JPG"
                    alt="Vasantdada Patil Pratishthan’s College of Engineering & Visual Arts"
                    width={600}
                    height={800}
                    className="rounded-lg shadow-2xl object-contain w-full"
                    data-ai-hint="college building"
                />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
