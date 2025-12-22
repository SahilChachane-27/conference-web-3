import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { schedules, speakers } from '@/lib/data';
import { AiScheduler } from './ai-scheduler';

const getSpeakerImage = (name: string) => {
    const speaker = speakers.find(s => s.name === name);
    return speaker ? speaker.image : null;
};

export function Schedule() {
  return (
    <section id="schedules" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Event</span> Schedules
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Do not miss it and be sure to attend
          </p>
        </div>

        <Tabs defaultValue="day-0" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
            {schedules.map((day, index) => (
              <TabsTrigger key={day.day} value={`day-${index}`} className="flex flex-col p-3 h-auto">
                <span className="font-bold text-lg">Day <span className="text-primary">{day.day}</span></span>
                <span className="text-xs text-muted-foreground">{day.date}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {schedules.map((day, index) => (
            <TabsContent key={day.day} value={`day-${index}`} className="mt-8">
              <div className="space-y-8">
                {day.events.map((event) => {
                  const speakerImage = getSpeakerImage(event.speakerName);
                  return (
                    <div key={event.topic} className="flex flex-col md:flex-row items-start gap-6 p-6 bg-card rounded-lg shadow-sm">
                      <div className="w-full md:w-1/5 flex md:flex-col items-center gap-4 text-center">
                        <span className="font-bold text-primary text-lg">{event.time}</span>
                        {speakerImage && (
                          <div className="relative h-20 w-20">
                            <Image
                              src={speakerImage.imageUrl}
                              alt={event.speakerName}
                              className="rounded-full object-cover"
                              fill
                              sizes="80px"
                              data-ai-hint={speakerImage.imageHint}
                            />
                          </div>
                        )}
                         <div>
                            <h4 className="font-bold font-headline">{event.speakerName}</h4>
                            <p className="text-xs text-muted-foreground">Speaker</p>
                        </div>
                      </div>
                      <div className="w-full md:w-4/5">
                        <h3 className="text-xl font-bold font-headline mb-2">{event.topic}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <AiScheduler />
      </div>
    </section>
  );
}
