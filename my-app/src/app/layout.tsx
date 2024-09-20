import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Exemplo de boyler-plate",
  description: "Generated by create next app",
};

export const viewport = {
  widith: "device-widith",
  initialScale:1.0,
  colorScheme:"dark"
 }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
