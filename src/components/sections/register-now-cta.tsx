import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function RegisterNowCta() {
  return (
    <section className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Ready to Join Us?
            </h2>
            <p className="mt-2 text-primary-foreground/80 max-w-2xl">
              Secure your spot at SustainTechCon 2026 and be part of the future of sustainable technology.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-2 border-primary-foreground hover:border-primary-foreground/90"
            >
              <Link href="/registration">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
