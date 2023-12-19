"use client"

import generatePassword from "generate-password"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"

export const PasswordGenerator = () => {
  const formSchema = z.object({
    length: z
      .number()
      .min(6, { message: "Password would be too short" })
      .max(42, { message: "Password would be too long" }),
    numbers: z.boolean().optional(),
    symbols: z.boolean().optional(),
    uppercase: z.boolean().optional(),
    lowercase: z.boolean().optional(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      length: 8,
      numbers: true,
      symbols: false,
      uppercase: true,
      lowercase: true,
    },
  })

  const [password, setPassword] = useState<string>("")

  const generate: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    const password = generatePassword.generate({
      length: data.length,
      numbers: data.numbers,
      symbols: data.symbols,
      uppercase: data.uppercase,
      lowercase: data.lowercase,
      excludeSimilarCharacters: true,
    })

    setPassword(password)
  }

  return (
    <div>
      <div className="mt-6">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(generate)}>
          <input
            {...register("length", { valueAsNumber: true })}
            className="rounded border px-4 py-2"
            type="number"
            id=""
          />
          {errors.length?.message && (
            <p className="text-xs text-red-500">
              {errors.length?.message.toString()}
            </p>
          )}
          <label htmlFor="numbersInput" className="flex gap-2">
            <input
              className="accent-black"
              type="checkbox"
              {...register("numbers")}
              name="numbers"
              id="numbersInput"
            />
            Include numbers
          </label>
          <label htmlFor="symbolsInput" className="flex gap-2">
            <input
              // checked={symbols}
              {...register("symbols")}
              className="accent-black"
              type="checkbox"
              name="symbols"
              id="symbolsInput"
            />
            Include symbols
          </label>
          <label htmlFor="uppercaseInput" className="flex gap-2">
            <input
              className="accent-black"
              {...register("uppercase")}
              type="checkbox"
              name="uppercase"
              id="uppercaseInput"
            />
            Include uppercase letters
          </label>
          <label htmlFor="lowercaseInput" className="flex gap-2">
            <input
              {...register("lowercase")}
              className="accent-black"
              type="checkbox"
              name="lowercase"
              id="lowercaseInput"
            />
            Include lowercase letters
          </label>
          <button className="rounded-[1.25rem] border bg-black px-4 py-2 text-white hover:bg-black/80">
            Generate 
          </button>
        </form>
      </div>
      {password && <div className="text-lg font-bold mt-3">{password}</div>}
    </div>
  )
}
