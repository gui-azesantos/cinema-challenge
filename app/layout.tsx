import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desafio de Cinema",
  description: "Formação cultural em cinema — movimentos e diretores essenciais",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
