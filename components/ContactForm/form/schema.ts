import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(1, "Name must be present.").max(20, "Name must contian at most 20 characters."),
    email: z.string().min(1, "Email must be present.").email("Email must be valid."),
    subject: z.string().min(1, "Subject must be present.").max(50, "Subject must contian at most 50 characters."),
    message: z.string().min(1, "Message must be present.").max(150, "Subject must contian at most 150 characters."),
});

export type FormSchema = z.infer<typeof formSchema>
