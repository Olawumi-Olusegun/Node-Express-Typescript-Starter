import z from "zod";

export const pingSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Message must be at least 1 character long" })
    .nonempty()
    .transform(val => val.trim())
    .refine(
      val => {
        return val !== "undefined" && val !== "";
      },
      { message: "Message cannot be required" }
    )
});
