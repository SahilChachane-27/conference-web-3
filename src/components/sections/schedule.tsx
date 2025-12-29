
import { schedules } from '@/lib/data';

export function Schedule() {
    
  return (
    <section id="schedules" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Schedule
          </h2>
          <p className="text-lg text-muted-foreground mt-3">
            Mark your calendar for these key submission and event dates to ensure you don&apos;t miss any deadlines for SustainTechCon 2026.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
            {schedules.map((schedule, index) => (
                <div key={index} className="flex items-center border-b last:border-b-0 py-4">
                    <div className="w-1/3">
                        <h4 className="font-headline text-xl font-bold text-primary">{schedule.date}</h4>
                    </div>
                    <div className="w-2/3 pl-6">
                        <h3 className="font-semibold text-lg">{schedule.topic}</h3>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
