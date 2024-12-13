import "./globals.css";
import {Header} from '../components/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />

        {children} {/* Pagina onde é exibido, renderiza o page.tsx */}
      </body>
    </html>
  );
}
