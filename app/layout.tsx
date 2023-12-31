import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Codeverse Explorer",
  description: "A simple blog application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
