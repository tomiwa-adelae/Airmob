import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconCalendar, IconChevronLeft, IconClock } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsHeroProps {
  category: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export const NewsDetailHero = ({
  category,
  title,
  date,
  readTime,
  author,
  image,
}: NewsHeroProps) => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <Button variant={"ghost"} asChild>
          <Link href="/news">
            <IconChevronLeft />
            Back to Newsroom
          </Link>
        </Button>

        <div className="mt-4 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-4 gap-x-8 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <IconCalendar size={18} className="text-primary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <IconClock size={18} className="text-primary" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image
                  src={"/assets/images/logo.png"}
                  width={1000}
                  height={1000}
                  alt="AIRMOB LOGO"
                  className="object-cover size-full"
                />
              </div>
              <span className="text-sm font-bold text-slate-900 italic">
                By {author}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Cinematic Featured Image */}
      <div className="mb-16">
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
          <Image
            width={1000}
            height={1000}
            src={image}
            alt={title}
            className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          {/* Subtle Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
        </div>
      </div>
    </div>
  );
};
