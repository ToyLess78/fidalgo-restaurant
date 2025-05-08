"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <p className="mb-2">
              <Link href="tel:+123440567899" className="text-foreground hover:text-primary">
                +12 344 0567899
              </Link>
            </p>
            <p>
              <Link href="mailto:fidalgo@example.com" className="text-foreground hover:text-primary">
                fidalgo@example.com
              </Link>
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-sm uppercase tracking-wider mb-4">Address</h4>
            <p className="mb-2">
              <Link
                href="https://www.google.com/maps"
                target="_blank"
                className="text-foreground hover:text-primary"
              >
                Piazza Della Signoria, 12
                <br />
                21562 · Firenze · Italy
              </Link>
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-sm uppercase tracking-wider mb-4">Opening Hours</h4>
            <p className="mb-2">Everyday: From 12:30 To 23:00</p>
            <p>Kitchen Closes At 22:00</p>
          </div>
        </div>

        <div className="mt-16 flex justify-center space-x-6">
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-block">
            <span className="logo-script text-primary">Fidalgo</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fidalgo Restaurant. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
