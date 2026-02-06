import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconCalendar, IconClock } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const latestNews = [
  {
    category: "Corporate",
    title: "AIRMOB Commissions New Lubricant Blending Plant in Lagos",
    date: "Feb 02, 2026",
    readTime: "4 min read",
    slug: "new-blending-plant-lagos",
    image: "/assets/images/AI.jpg",
  },
  {
    category: "Technical",
    title: "The Impact of Viscosity Control on Subsea Exploration",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    slug: "viscosity-control-subsea",
    image: "/assets/images/AI.jpg",
  },
];

export const HomeNewsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Latest Insights
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
          Stay Informed on the <br />
          <span className="text-primary">Energy Frontier.</span>
        </h2>

        <div className="mt-8 grid lg:grid-cols-12 gap-6">
          {/* 1. Featured Big Story (7 Cols) */}
          <Link
            href="/news/iso-certification"
            className="lg:col-span-7 group relative overflow-hidden rounded-2xl bg-slate-900 h-87.5 md:h-125 flex items-end"
          >
            <Image
              width={1000}
              height={1000}
              src="/assets/images/AI.jpg"
              alt="ISO Certification"
              className="absolute inset-0 size-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="relative z-10 p-6 md:p-10">
              <Badge>Featured Milestone</Badge>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold line-clamp-2 text-white mb-4 group-hover:text-primary transition-colors">
                AIRMOB Achieves ISO 9001:2015 Certification for Quality
                Management.
              </h3>
              <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                <span className="flex items-center gap-1">
                  <IconCalendar size={16} /> Feb 05, 2026
                </span>
                <span className="flex items-center gap-1">
                  <IconClock size={16} /> 8 min read
                </span>
              </div>
            </div>
          </Link>

          {/* 2. Side Stories (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {latestNews.map((news, i) => (
              <Link
                key={i}
                href={`/news/${news.slug}`}
                className="group flex gap-4 items-start"
              >
                <div className="size-24 md:size-32 shrink-0 rounded-2xl overflow-hidden border border-slate-100">
                  <Image
                    width={1000}
                    height={1000}
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <span className="hidden md:block text-primary text-[10px] font-black uppercase tracking-widest">
                    {news.category}
                  </span>
                  <h4 className="text-base md:text-lg font-semibold hover:underline line-clamp-2 text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {news.title}
                  </h4>
                  <p className="text-muted-foreground text-xs font-medium">
                    {news.date} • {news.readTime}
                  </p>
                </div>
              </Link>
            ))}
            <Button asChild>
              <Link href="/news">View more</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
