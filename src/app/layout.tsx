import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Essentis - Build rock-solid software. Ship useful data products.',
  description: 'Expert software engineering, data science, and MLOps services to help you build reliable software and deliver valuable data products.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <header className="header">
          <div className="container">
            <Link href="/" className="logo">Essentis</Link>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="main">
          {children}
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Essentis</p>
            <div className="footer-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/impressum">Impressum</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
