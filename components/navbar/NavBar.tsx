
"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button";
import Image from "next/image";
import { ModeToggle } from "../ui/mode-thoggle";
import { usePathname } from "next/navigation";
import { MenuItem } from "@/app/layout";

type MenuProps = {
  menu: MenuItem[];
};

const menuItem = [
  
]
export const Navbar: React.FC<MenuProps> = ({menu}) => {

  const pathname = usePathname();
  return (

    <header className="sticky top-0 flex h-20 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      
      <Link
        href="/"
        className="flex items-center gap-2 w-20 text-lg font-semibold md:text-base"
      >
        <Image src="/next.svg"
            alt="Next Logo"
            className="dark:invert" width={100} height={100}/>
        <span className="sr-only">Acme Inc</span>
      </Link>
      {menu.map((linkMenu) => (
        <Link className={`transition-colors hover:text-foreground  ${pathname === linkMenu.url ? '': 'text-muted-foreground'} `} key={linkMenu.name} href={linkMenu.url}>{linkMenu.name}</Link>
      ))}
    </nav>
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Image src="/next.svg"
            alt="Next Logo"
            className="dark:invert" width={100} height={100}/>
            <span className="sr-only">Next-JS logo</span>
          </Link>
          {menu.map((linkMenu) => (
            <Link className={`transition-colors hover:text-foreground  ${pathname === linkMenu.url ? '': 'text-muted-foreground'} `} key={linkMenu.name} href={linkMenu.url}>{linkMenu.name}</Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
    <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <ModeToggle/>
    </div>
  </header>
  );
}
