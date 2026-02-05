"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconShoppingCart } from "@tabler/icons-react";
import { Logo } from "./Logo";
import { homeNavLinks } from "@/constants";
import { MobileNavbar } from "./MobileNavbar";

export const Header = () => {
  const pathname = usePathname();

  const isActive = (slug: string) =>
    pathname === slug || pathname.startsWith(`${slug}/`);

  return (
    <header className="fixed top-0 z-50 w-full bg-primary overflow-hidden border-b border-white/10">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green-500/5 blur-[100px] rounded-full" />

      <div className="container mx-auto h-20 flex items-center justify-between relative z-10">
        {/* Logo Area */}
        <Link href={"/"} className="flex items-center">
          <Logo color="white" />
        </Link>

        <nav className="hidden lg:flex items-center text-white gap-1.5 font-medium text-sm">
          {homeNavLinks.map(({ slug, label }, index) => (
            <Button
              size={"md"}
              key={index}
              asChild
              className={isActive(slug) ? "text-primary" : ""}
              variant={isActive(slug) ? "secondary" : "ghost"}
            >
              <Link
                href={slug}
                className="hover:text-primary transition-colors"
              >
                {label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            asChild
            variant="white"
            size="md"
            className="hidden sm:flex font-bold"
          >
            <Link href="/contact">Contact us</Link>
          </Button>
          <div className="lg:hidden">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </header>
  );
};
