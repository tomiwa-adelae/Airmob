import * as z from "zod";

export const proposalSchema = z.object({
  fullName: z.string().min(3, "Please enter your full name"),
  businessLine: z.string().min(3, "Please select a valid business line"),
  email: z.string().email("A valid business email is required"),

  details: z
    .string()
    .min(20, "Please provide at least 20 characters of project detail")
    .max(2000, "Details must be under 2000 characters"),
});

export type ProposalFormValues = z.infer<typeof proposalSchema>;
