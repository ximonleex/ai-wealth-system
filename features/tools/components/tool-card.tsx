import Link from "next/link";
import { Card } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { ToolItem } from "@/features/tools/types/tool";

type ToolCardProps = {
  tool: ToolItem;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="h-full border-white/10 bg-gradient-to-b from-[#16211e]/65 to-[#121719]/72 p-6 md:p-7">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-wealth-gold/85">Recommended Tool</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{tool.name}</h3>
          </div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-card-border/85 bg-[#0f1416]/85 text-xs font-semibold tracking-wider text-wealth-gold/90">
            {tool.iconLabel}
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-text-muted">{tool.description}</p>

        <dl className="mt-5 space-y-3 text-sm">
          <div>
            <dt className="text-[11px] uppercase tracking-[0.17em] text-wealth-gold/75">Best for</dt>
            <dd className="mt-1 text-text-muted">{tool.bestFor}</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.17em] text-wealth-gold/75">Key benefit</dt>
            <dd className="mt-1 text-text-muted">{tool.keyBenefit}</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.17em] text-wealth-gold/75">Affiliate Link</dt>
            <dd className="mt-1 truncate text-text-muted">{tool.affiliateUrl}</dd>
          </div>
        </dl>

        <div className="mt-6 pt-2">
          <Link href={tool.affiliateUrl} className="w-full">
            <Button fullWidth>{tool.ctaText}</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
