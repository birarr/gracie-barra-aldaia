import type { Metadata } from "next";
import "./globals.css";
import { FloatButton } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

export const metadata: Metadata = {
  title: "Gracie Barra Aldaia | Jiu-Jitsu Brasileño en Valencia",
  description:
    "Escuela oficial de Jiu-Jitsu Brasileño en Aldaia. Clases para niños y adultos. Reserva tu clase gratuita.",
  colorScheme: "light",
  keywords: [
    "Gracie Barra Aldaia",
    "Jiu Jitsu Valencia",
    "Jiu Jitsu Aldaia",
    "Artes marciales Aldaia",
  ],
  openGraph: {
    title: "Gracie Barra Aldaia",
    description: "Jiu-Jitsu Brasileño para todos los niveles.",
    url: "https://graciebarra-aldaia.com",
    siteName: "Gracie Barra Aldaia",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="bg-white">
      <body className="bg-white text-gbBlack min-h-screen">
        {children}
        <FloatButton
          icon={<WhatsAppOutlined />}
          className="bg-green-500"
          type="primary"
          style={{ backgroundColor: "#00cc66" }}
          href="https://wa.me/+34611951286"
          target="_blank"
        />
      </body>
    </html>
  );
}
