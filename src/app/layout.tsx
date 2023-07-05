import Navbar from "@/components/Partials/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Copyright from "@/components/Partials/Copyright";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Master",
  description: "Task Master",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
