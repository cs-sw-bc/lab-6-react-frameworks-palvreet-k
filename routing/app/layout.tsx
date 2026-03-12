import type { ReactNode } from "react"

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
        <header style ={{backgroundColor: "lightgray", padding: "10px"}}>
            <p>Header </p>
        </header>
      <body>{children}</body>
      <footer style ={{backgroundColor: "lightblue", padding: "10px"}}>
        <p>Footer</p>
      </footer>
    </html>
  )
}
