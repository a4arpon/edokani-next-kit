import { z } from "zod"

/**
 * Zod validation schemas for authentication-related operations
 * 
 * @description Provides validation schemas for user registration and login
 * - `register` schema validates registration input with name, email, and password
 * - `login` schema validates login credentials with email and password
 */
export const authValidations = {
  register: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8).max(64),
  }),

  login: z.object({
    email: z.string().email(),
    password: z.string().min(8).max(64),
  }),
}
