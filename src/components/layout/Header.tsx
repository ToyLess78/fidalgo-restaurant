"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Menu",
    href: "/menu",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Book a Table",
    href: "/book-a-table",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background absolute top-0 left-0 right-0 z-50">
      <div className="container-custom py-6 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="lg:hidden" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-r border-border">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary text-lg py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary uppercase text-sm tracking-wider"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/" className="flex flex-col items-center">
          <span className="logo-script text-primary">Fidalgo</span>
          <span className="text-xs uppercase tracking-widest text-foreground -mt-1">Restaurant</span>
        </Link>

        <div className="flex items-center">
          <Link
            href="/book-a-table"
            className="hidden lg:inline-block btn-primary"
          >
            Book a table
          </Link>
          <nav className="hidden lg:flex items-center space-x-8 ml-8">
            {navLinks.slice(4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary uppercase text-sm tracking-wider"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
