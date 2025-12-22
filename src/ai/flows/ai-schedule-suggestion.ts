'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting an optimal conference schedule based on user interests and speaker information.
 *
 * The flow takes user interests and speaker details as input and returns a suggested schedule.
 * - `suggestSchedule`: An async function that takes user interests and speaker details as input and returns a schedule suggestion.
 * - `ScheduleSuggestionInput`: The input type for the `suggestSchedule` function.
 * - `ScheduleSuggestionOutput`: The output type for the `suggestSchedule` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';


const ScheduleSuggestionInputSchema = z.object({
  interests: z.string().describe('A comma-separated list of the user\u2019s interests.'),
  speakers: z.string().describe('A description of the event speakers and their expertise.'),
  schedule: z.string().describe('The event schedule with times, speakers, and session descriptions.'),
});

export type ScheduleSuggestionInput = z.infer<typeof ScheduleSuggestionInputSchema>;

const ScheduleSuggestionOutputSchema = z.object({
  suggestedSchedule: z.string().describe('A suggested conference schedule optimized for the user\u2019s interests.'),
});

export type ScheduleSuggestionOutput = z.infer<typeof ScheduleSuggestionOutputSchema>;


export async function suggestSchedule(input: ScheduleSuggestionInput): Promise<ScheduleSuggestionOutput> {
  return suggestScheduleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'scheduleSuggestionPrompt',
  input: {schema: ScheduleSuggestionInputSchema},
  output: {schema: ScheduleSuggestionOutputSchema},
  prompt: `You are an AI assistant designed to create personalized conference schedules.

  The user has the following interests: {{{interests}}}

  Here is information about the event speakers: {{{speakers}}}

  Here is the event schedule: {{{schedule}}}

  Based on the user's interests and the provided speaker and schedule information, create an optimized conference schedule for the user.
  Explain why you are recommending each session based on the user's interests.
  Format the schedule in a readable format.
  `,
});

const suggestScheduleFlow = ai.defineFlow(
  {
    name: 'suggestScheduleFlow',
    inputSchema: ScheduleSuggestionInputSchema,
    outputSchema: ScheduleSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
