import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Menu from "./components/Menu"

export const metadata: Metadata = {
  title: "WhatBytes",
  description: "WhatBytes Web App",
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative`}
      >
        <Navbar />
        <div className="
          grid grid-cols-10 divide-x pt-20
          min-h-screen
">
          <Menu />
          {children}
        </div>
      </body>
    </html>
  )
}
