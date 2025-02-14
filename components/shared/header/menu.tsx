import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import {  EllipsisVertical, ShoppingBag, UserIcon } from "lucide-react";
import { Sheet,SheetTrigger,SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const Menu = () => (<div className="flex justify-end gap-3">
  <nav className="hidden md:flex w-full max-w-xs gap-1">
    <ModeToggle />
    <Button asChild variant="ghost">

      <Link href="/cart">
        <ShoppingBag size={24} /> Cart
      </Link>

    </Button>
    <Button asChild>
      <Link href="/sign-in">
        <UserIcon size={24} /> Sign In
      </Link>

    </Button>
  </nav>

  <nav className="md:hidden">
    <Sheet>
      <SheetTrigger className="align-middle">
        <EllipsisVertical size={24} />

      </SheetTrigger>
      <SheetContent className="flex flex-col items-start">
       <SheetTitle>Menu</SheetTitle>
       <ModeToggle/>
       <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingBag size={24} /> Cart
          </Link>
        </Button>
       <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>

  </nav>
</div>)
 
export default Menu;