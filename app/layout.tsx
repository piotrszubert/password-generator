import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Password generator",
  description: "Generate secure passwords with this password generator tool.",
  keywords: [
    "Password",
    "Password generator",
    "Secure password",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
  ],
  authors: [
    {
      name: "ps777",
      url: "https://github.com/piotrszubert",
    },
  ],
  creator: "ps777",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <ToastContainer theme="dark" autoClose={3000} />
      </body>
    </html>
  )
}
