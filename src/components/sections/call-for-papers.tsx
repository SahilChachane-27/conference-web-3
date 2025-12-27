
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { callForPapers } from "@/lib/data";
import { FileText, BookOpenCheck, ListChecks, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function CallForPapers() {
  return (
    <section id="papers" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Call for <span className="text-primary">Papers</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            {callForPapers.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Conference Themes */}
          <Card className="lg:col-span-3 shadow-lg flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <ListChecks className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">Conference Tracks</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <Accordion type="multiple" className="w-full" defaultValue={["item-0"]}>
                    {callForPapers.tracks.map((track, index) => (
                         <AccordionItem key={index} value={`item-${index}`} className={index === callForPapers.tracks.length -1 ? "border-b-0" : ""}>
                            <AccordionTrigger className="text-base font-semibold text-left">
                                {track.title}
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4">
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                                        {track.topics.map((topic) => (
                                            <li key={topic}>{topic}</li>
                                        ))}
                                    </ul>
                                    <div className="p-3 bg-muted/50 rounded-md">
                                        <p className="font-semibold text-primary text-sm flex items-center gap-2">
                                            <Landmark className="h-4 w-4" />
                                            Relevant SDGs: <span className="font-normal text-muted-foreground">{track.sdgs}</span>
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1 italic">{track.explanation}</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
          </Card>

          {/* Submission and Publication Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">Submission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {callForPapers.submissionDetails.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BookOpenCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{callForPapers.publicationDetails.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Selected papers will be published in Scopus-indexed proceedings or journals. All submissions undergo rigorous peer review.</p>
                <Button asChild variant="outline">
                  <Link href="/publication-details">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
