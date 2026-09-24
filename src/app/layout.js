import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Koreanmirassaem — Kursus Korean Online",
  description:
    "Koreanmirassaem adalah platform kursus bahasa Korea online yang menyediakan materi pembelajaran interaktif, video tutorial, dan latihan praktis untuk membantu Anda menguasai bahasa Korea dengan mudah dan efektif.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${bricolage.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}