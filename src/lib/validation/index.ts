import { z } from "zod";

export const ContactUsSchema = z.object({
  fullname: z.string(),
  phone: z.string().regex(/^09[0-9]{9}$/, { message: "Invalid phone number" }),
  email: z.string().email(),
  description: z.string(),
});

export type ContactUsSchemaType = z.infer<typeof ContactUsSchema>;

export const SignUpSchema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
  identifier: z.string(),
  password: z.string().min(6),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;

export const OrderProjectSchema = z.object({
  isFree: z.boolean(),
  description: z.string().min(1),
  // first_name: z.string().min(1).optional(),
  // last_name: z.string().min(1).optional(),
  // email: z.string().email().optional(),
  phone: z
    .string()
    .regex(/^09[0-9]{9}$/, { message: "Invalid phone number" })
    .optional(),
});

export type OrderProjectSchemaType = z.infer<typeof OrderProjectSchema>;
