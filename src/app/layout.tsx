import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaishak Balachandra | Machine Learning Engineer | LLM & GenAI Specialist',
  description: 'Machine Learning Engineer specializing in LLM Production Development, RAG Architectures, and GenAI Applications. MS Computer Science @ Purdue University Northwest. Former ML Engineer II @ BOSTON Limited. AWS & GCP ML Certified.',
  keywords: ['Machine Learning Engineer', 'LLM Engineer', 'GenAI Engineer', 'RAG Architecture', 'Applied Scientist', 'AI Engineer', 'Vaishak Balachandra', 'Purdue University', 'BOSTON Limited', 'AWS ML Specialist', 'Google Cloud ML'],
  authors: [{ name: 'Vaishak Balachandra' }],
  creator: 'Vaishak Balachandra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaishakbalachandra.com',
    title: 'Vaishak Balachandra | ML Engineer | LLM & GenAI Specialist',
    description: 'Machine Learning Engineer specializing in LLM Production Development, RAG Architectures, and GenAI Applications.',
    siteName: 'Vaishak Balachandra Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaishak Balachandra | ML Engineer',
    description: 'Machine Learning Engineer specializing in LLM Production Development, RAG Architectures, and GenAI Applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
