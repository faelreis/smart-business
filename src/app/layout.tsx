import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './registry'

const archivo = Archivo({
  weight: ['400', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Smart Business',
  description: 'O segredo para um negócio de sucesso!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <StyledComponentsRegistry>
        <body className={archivo.className}>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
