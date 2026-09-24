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
  title: "Karsa — Sekolah Kreatif Online",
  description:
    "Belajar desain, video, dan pemasaran digital dari praktisi industri. Bangun portofolio nyata dan dapatkan pendampingan karier.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${bricolage.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}