import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  IconClock,
  IconArrowUpRight,
  IconCalendarEvent,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    category: "Technical",
    date: "Feb 04, 2026",
    title: "Optimizing Lubricant Viscosity for Tropical Industrial Climates",
    excerpt:
      "A deep dive into how AIRMOB's latest formula is extending machinery lifespan in high-heat environments.",
    image: "/assets/images/AI.jpg",
    readTime: "5 min read",
    color: "blue",
  },
  {
    category: "Corporate",
    date: "Jan 28, 2026",
    title: "AIRMOB Announces Strategic Expansion into Port Harcourt Hub",
    excerpt:
      "Increasing our upstream support footprint to better serve our partners in the Niger Delta region.",
    image: "/assets/images/AI.jpg",
    readTime: "3 min read",
    color: "emerald",
  },
  {
    category: "Innovation",
    date: "Jan 15, 2026",
    title: "Integrating AI in Drilling: The 2026 Efficiency Roadmap",
    excerpt:
      "How predictive analytics is reducing operational downtime by 22% across our support sites.",
    image: "/assets/images/AI.jpg",
    readTime: "7 min read",
    color: "orange",
  },
];

export const NewsGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* 1. Featured Article (The Big Story) */}
        <Link
          href="/news/first"
          className="relative group cursor-pointer mb-10 overflow-hidden rounded-2xl bg-slate-900 min-h-[500px] flex items-end"
        >
          <Image
            width={1000}
            height={1000}
            src="/assets/images/AI.jpg"
            alt="Featured News"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          <div className="relative z-10 p-6 md:p-10 max-w-3xl">
            <Badge>Featured Report</Badge>
            <Link
              href="/news/first"
              className="text-white hover:underline text-2xl md:text-3xl font-extrabold mt-3 mb-2.5 group-hover:text-primary transition-colors line-clamp-2"
            >
              AIRMOB Achieves ISO 9001 Certification for Lubricant
              Manufacturing.
            </Link>
            <p className="text-slate-300 text-base md:text-lg mb-4 line-clamp-2">
              Our commitment to global standards has been officially recognized,
              marking a new era of quality for Nigerian energy products.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2">
                <IconCalendarEvent size={18} /> Feb 06, 2026
              </span>
              <span className="flex items-center gap-2">
                <IconClock size={18} /> 8 min read
              </span>
            </div>
          </div>
        </Link>

        {/* 2. Regular News Grid */}
        <div className="grid md:grid-cols-3 gap-x-6 gap-y-10">
          {articles.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <Link href={"/news/first"}>
                <div className="relative aspect-video mb-6 overflow-hidden rounded-2xl">
                  <Image
                    width={1000}
                    height={1000}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge
                    variant={"secondary"}
                    className="absolute top-4 left-4"
                  >
                    {post.category}
                  </Badge>
                </div>
              </Link>

              <div className="flex items-center gap-2.5 text-xs font-semibold text-muted-foreground mb-2.5 uppercase tracking-tighter">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{post.readTime}</span>
              </div>

              <Link
                href="/news/first"
                className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-primary hover:underline transition-colors leading-tight"
              >
                {post.title}
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-2">
                {post.excerpt}
              </p>

              <Button asChild variant={"secondary"} className="w-full">
                <Link href={"/news/first"}>Read Article</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
