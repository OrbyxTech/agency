import { z } from "zod";

export const ContactUsSchema = z.object({
  fullname: z.string(),
  phone: z.string().regex(/^09[0-9]{9}$/, { message: "Invalid phone number" }),
  email: z.string().email(),
  description: z.string(),
});

export type ContactUsSchemaType = z.infer<typeof ContactUsSchema>;
