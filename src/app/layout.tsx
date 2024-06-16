import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='es'>
      <head>
        <link rel="icon" href="/favicon.svg" sizes='16x16' />
        <title>Propinita | Recibí propinas fácil y rápido.</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}