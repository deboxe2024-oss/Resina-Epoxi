import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Página de Vendas - Joias Botânicas',
  description: 'Aprenda a eternizar a natureza em joias únicas e exclusivas!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
