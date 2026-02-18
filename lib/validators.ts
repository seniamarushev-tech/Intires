export function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}
import { z } from "zod"

export const offerSchema = z.object({
  id: z.string()
})
