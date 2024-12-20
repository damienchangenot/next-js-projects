import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import  {Navbar}  from "@/components/navbar/NavBar";
import { GeistSans } from 'geist/font/sans';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], 
  variable: "--font-inter"
 });
const game = Press_Start_2P({ subsets: ["latin"],  weight:'400', variable: '--font-game'})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export type MenuItem = {
  name: string,
  url: string
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  
  const menu : MenuItem[] = [
    {name : 'Feu de route', url:"/project/traffic-light"},
    {name : 'Pokémon', url: "/project/pokemon"}
  ]

  return (
    <html lang="fr">
      <body className={cn(inter.variable
        , GeistSans.variable, game.variable, 'font-sans')}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
          <Navbar menu={menu}/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
