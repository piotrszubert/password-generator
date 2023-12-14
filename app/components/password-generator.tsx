"use client"

import generatePassword from "generate-password"
import { useState } from "react"

export const PasswordGenerator = () => {
  const generate = () => {
    const password = generatePassword.generate({
      length: 12,
      // numbers: numbers,
      // symbols: symbols,
      // uppercase: uppercase,
      // lowercase: lowercase,
      excludeSimilarCharacters: true,
    })
    
    setPassword(password)
  }
  const [password, setPassword] = useState<string>("")

  return (
    <div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => generate()}
          className="rounded-[1.25rem] border bg-black px-4 py-2 text-white hover:bg-black/75"
        >
          Generate 🚀
        </button>

      </div>
      <div>
        {password && <input className="border" type="text" value={password} />}
      </div>
    </div>
  )
}
