"use client"

import generatePassword from "generate-password"
import { useState } from "react"

export const PasswordGenerator = () => {
  const generate = () => {
    const password = generatePassword.generate({
      length: passwordLength,
      numbers: numbers,
      symbols: symbols,
      uppercase: uppercase,
      lowercase: lowercase,
      excludeSimilarCharacters: true,
    })

    setPassword(password)
  }

  const [password, setPassword] = useState<string>("")
  const [passwordLength, setPasswordLength] = useState<number>(8)
  const [numbers, setNumbers] = useState<boolean>(true)
  const [symbols, setSymbols] = useState<boolean>(false)
  const [uppercase, setUppercase] = useState<boolean>(false)
  const [lowercase, setLowercase] = useState<boolean>(true)

  return (
    <div>
      <div className="mt-6">
        <fieldset className="flex flex-col gap-3">
          <input
            min={3}
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            className="rounded border px-4 py-2"
            type="number"
            name=""
            id=""
          />
          <label htmlFor="numbersInput" className="flex gap-2">
            <input
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
              className="accent-black"
              type="checkbox"
              name=""
              id="numbersInput"
            />
            Include numbers
          </label>
          <label htmlFor="symbolsInput" className="flex gap-2">
            <input
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
              className="accent-black"
              type="checkbox"
              name=""
              id="symbolsInput"
            />
            Include symbols
          </label>
          <label htmlFor="uppercaseInput" className="flex gap-2">
            <input
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
              className="accent-black"
              type="checkbox"
              name=""
              id="uppercaseInput"
            />
            Include uppercase letters
          </label>
          <label htmlFor="lowercaseInput" className="flex gap-2">
            <input
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
              className="accent-black"
              type="checkbox"
              name=""
              id="lowercaseInput"
            />
            Include lowercase letters
          </label>
        </fieldset>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => generate()}
          className="rounded-[1.25rem] border bg-black px-4 py-2 text-white hover:bg-black/75"
        >
          Generate
        </button>
      </div>
      {password && (
        <div className="mt-6 flex bg-[#f1f1f1] p-4">
          <input
            className="w-full rounded border py-2 text-lg font-bold"
            type="text"
            value={password}
          />
        </div>
      )}
    </div>
  )
}
