import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HireMe from "@/components/HireMe";


const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable: "--font-jetbrainsMono",
 });

export const metadata = {
  title: "Lakchika's Portfolio",
  description: "hello there...! i'm Lakchika",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
      <Header/>
      {/* <HireMe/> */}
      {children}</body>
    </html>
  );
};
