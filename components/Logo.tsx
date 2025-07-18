import { cn } from "@/lib/utils";
import { SquareDashedMousePointer, Rainbow } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo({
  fontSize = "2xl",
  iconSize = 30,
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
      href="/"
    >
      <Rainbow size={iconSize} className="stroke-primary" />
      <div>
        <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
          Scrape
        </span>
        <span className="text-stone-700 dark:text-stone-300">Flow</span>
      </div>
    </Link>
  );
}

export default Logo;
