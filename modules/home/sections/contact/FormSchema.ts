import * as z from 'zod';

export const FormSchema = z.object({
  name: z.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(100, 'Name must be at most 100 characters long'),
  email: z.string()
    .email('Invalid email. Email must be a valid email address'),
  company: z.string()
    .min(3, 'Company must be at least 4 characters long')
    .max(100, 'Company must be at most 100 characters long'),
  message: z.string()
    .min(8, 'Message must be more than 8 characters long')
    .max(500, 'Message must be less than 500 characters long'),
});

export type FormFields = z.infer<typeof FormSchema>;