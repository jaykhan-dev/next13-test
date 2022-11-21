import "../styles/globals.css";
import Nav from "./Nav";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
