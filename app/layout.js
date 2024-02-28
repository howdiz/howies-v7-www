import './globals.css'
import "../node_modules/nes.css/css/nes.css"

export const metadata = {
  title: "Howie's World Wide Web Page",
  description: 'Powered by Edgio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
      <body>{children}</body>
    </html>
  )
}
