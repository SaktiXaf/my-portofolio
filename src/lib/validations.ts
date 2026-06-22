import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Full name must be at least 2 characters.").max(80, "Full name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters.").max(120, "Subject is too long."),
  message: z.string().trim().min(10, "Message must be at least 10 characters.").max(2000, "Message is too long."),
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
