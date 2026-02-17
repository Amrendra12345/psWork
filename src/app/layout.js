import { Inter, Epilogue, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/footer/header/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-epilogue",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "icanheal",
  description: "This is my website description",
  // icons: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${epilogue.variable} ${poppins.variable} antialiased`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
