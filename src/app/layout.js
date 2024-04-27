import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "My Library",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className} bg-color-dark`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
