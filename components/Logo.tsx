import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ color = "white" }: { color: "white" | "black" }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center space-x-2",
        color === "white" && "text-white",
        color === "black" && "text-black dark:text-white",
      )}
    >
      <Image
        src="/assets/images/logo.png"
        alt="AIRMOB"
        width={120}
        height={40}
        className="h-10 w-auto object-contain"
        priority
      />
      <p className="text-base md:text-xl flex items-start justify-start flex-col">
        <span className={`font-bold hover:text-yellow transition-all`}>
          AIRMOB
        </span>{" "}
        <span className="text-xs font-semibold">NIGERIA LIMITED</span>
      </p>
    </Link>
  );
};

export const SmallLogo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/images/logo.png"
        alt="AIRMOB"
        width={120}
        height={40}
        className="h-10 w-auto object-contain"
        priority
      />
    </Link>
  );
};
