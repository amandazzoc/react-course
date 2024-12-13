import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero com Amanda',
  openGraph: { // Cria pré visualização do link
    title: 'Aprendendo Next JS',
    description: 'Aprendendo Next JS do zero com Amanda',
    images: ['']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

// PÁGINA HOME
export default function Home() {
  return (
    <div>
      <h1>Página HOME</h1>
    </div>
  )
}