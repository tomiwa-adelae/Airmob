import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCalendar,
  IconChevronLeft,
  IconClock,
  IconCopy,
  IconShare,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { NewsDetailHero } from "../_components/NewsDetailHero";

const page = () => {
  return (
    <div className="py-8">
      <div className="container">
        <NewsDetailHero
          category="Technical Insight"
          title="Optimizing Lubricant Viscosity Industrial Climates"
          date="February 06, 2026"
          readTime="7 min read"
          author="Engr. Chidi Okafor"
          image="/assets/images/AI.jpg"
        />
        <div>
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="lg:w-2/3 prose prose-slate prose-lg max-w-none">
              <p className="lead font-medium text-xl text-slate-600">
                As Nigeria expands its industrial manufacturing footprint, the
                demand for specialized lubricants that can withstand extreme
                thermal fluctuations has never been higher.
              </p>

              <h3 className="text-2xl font-bold mt-10">
                The Thermal Challenge
              </h3>
              <p>
                Traditional lubricants often fail in tropical climates due to
                oxidation and rapid viscosity breakdown. At AIRMOB, our research
                team has spent the last 18 months developing a proprietary
                additive package...
              </p>

              <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-2xl text-slate-800 font-serif">
                "Efficiency in motion is not just about speed; it's about the
                resilience of the components under pressure."
              </blockquote>

              <h3 className="text-2xl font-bold mt-10">Key Findings</h3>
              <ul>
                <li>
                  Reduction in friction coefficient by 15% in high-heat zones.
                </li>
                <li>Extended service intervals for heavy-duty gas turbines.</li>
                <li>
                  Enhanced anti-wear protection for subsea exploration
                  equipment.
                </li>
              </ul>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Share Tool */}
              <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100 sticky top-32">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <IconShare size={20} className="text-primary" /> Share
                  Insights
                </h4>
                <div className="flex flex-col gap-3">
                  <button className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-primary transition-all group">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-primary">
                      LinkedIn
                    </span>
                    <IconBrandLinkedin
                      size={20}
                      className="text-slate-400 group-hover:text-primary"
                    />
                  </button>
                  <button className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-primary transition-all group">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-primary">
                      Twitter (X)
                    </span>
                    <IconBrandTwitter
                      size={20}
                      className="text-slate-400 group-hover:text-primary"
                    />
                  </button>
                  <button className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-900 transition-all group">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900">
                      Copy Link
                    </span>
                    <IconCopy
                      size={20}
                      className="text-slate-400 group-hover:text-slate-900"
                    />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
