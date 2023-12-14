import { PasswordGenerator } from "./components/password-generator"

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="max-w-xl rounded border px-4 py-6">
        <h1 className="mb-2 text-xl font-bold">Password generator</h1>
        <p className="text-sm text-zinc-600">
          So, whether you're need secure password we've got your back!
          <br />
          Hit that button and let's get started! 🚀
        </p>
        <PasswordGenerator />
      </div>
    </main>
  )
}
