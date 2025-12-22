"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestSchedule, ScheduleSuggestionInput } from '@/ai/flows/ai-schedule-suggestion';
import { speakers, schedules } from '@/lib/data';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  interests: z.string().min(10, {
    message: "Please tell us a bit more about your interests.",
  }),
});

export function AiScheduler() {
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const scheduleString = schedules
        .map(day => 
          `Day ${day.day} (${day.date}):\n` + 
          day.events.map(event => `- ${event.time}: "${event.topic}" by ${event.speakerName}. ${event.description}`).join('\n')
        )
        .join('\n\n');
        
      const speakersString = speakers
        .map(speaker => `${speaker.name} (${speaker.title}): ${speaker.bio}`)
        .join('\n');

      const input: ScheduleSuggestionInput = {
        interests: values.interests,
        speakers: speakersString,
        schedule: scheduleString,
      };
      
      const result = await suggestSchedule(input);
      setSuggestion(result.suggestedSchedule);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error getting schedule suggestion:", error);
      setSuggestion("Sorry, we couldn't generate a schedule at this time. Please try again later.");
      setIsDialogOpen(true);
    }
    setIsLoading(false);
  }

  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">AI Schedule Assistant</CardTitle>
        <CardDescription>Let our AI craft the perfect conference experience for you.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Interests</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., WordPress development, SEO, UI/UX design, modern JavaScript frameworks..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Generate My Schedule
            </Button>
          </form>
        </Form>
      </CardContent>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="font-headline text-primary">Your Personalized Schedule</DialogTitle>
            <DialogDescription>
              Here's a suggested schedule based on your interests.
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-sm dark:prose-invert max-h-[60vh] overflow-y-auto p-1">
             {suggestion && suggestion.split('\n').map((line, i) => <p key={i}>{line}</p>)}
          </div>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
