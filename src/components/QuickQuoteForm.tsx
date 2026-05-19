import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

type Props = {
  // OLD (modal) props — kept optional so inline mode me required na hon
  open?: boolean;
  onOpenChange?: (v: boolean) => void;

  // NEW (inline) props
  inline?: boolean;          // << add this
  className?: string;        // << optional wrapper class
  title?: string;            // << optional custom title
};

export default function QuickQuoteForm({
  open,
  onOpenChange,
  inline = false,
  className,
  title = "Individual & Family Quote",
}: Props) {
  const navigate = useNavigate();

  const [who, setWho] = React.useState<"myself" | "family" | "parents">("myself");
  const [age, setAge] = React.useState<string>("");
  const [limit, setLimit] = React.useState<string>("");

  const [submitting, setSubmitting] = React.useState(false);

  const routesByLimit: Record<string, string> = {
    "150k": "/plan-silver",
    "450k": "/plan-gold",
    "650k": "/plan-platinum",
  };

  const limits = [
    { key: "150k", label: "150k" },
    { key: "450k", label: "450k" },
    { key: "650k", label: "650k" },
  ];

  const handleSubmit = () => {
    if (!age || !limit || submitting) return;

    setSubmitting(true);

    const dest = routesByLimit[limit] ?? "/plans";
    const qs = new URLSearchParams({ who, age, limit }).toString();

    requestAnimationFrame(() => {
      navigate(`${dest}?${qs}`);
      onOpenChange?.(false);
    });
  };

  // -------- Shared form body ----------
  const FormBody = (
    <div className="px-7 pt-3 pb-0">
      {/* Age Select */}
      <div className="mb-5">
        <label className="block text-sm text-[#113040] mb-2 font-[Futuru] font-medium">
          Select Age
        </label>
        <div className="relative">
          <Select value={age} onValueChange={setAge} disabled={submitting}>
            <SelectTrigger className="h-12 rounded-xl bg-white border border-slate-200 pr-12 font-[Futuru] text-base focus:ring-2 focus:ring-[#1D9785] focus:border-[#1D9785] transition disabled:opacity-60">
              {/* Show selected age or placeholder */}
              <span className={cn(age ? "text-[#113040]" : "text-slate-400")}>
                {age || "Select Age"}
              </span>
            </SelectTrigger>
            <SelectContent className="rounded-xl max-h-60 overflow-y-auto">
              {Array.from({ length: 63 }, (_, i) => 18 + i).map((a) => (
                <SelectItem key={a} value={String(a)}>
                  {a}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 grid place-items-center rounded-md border border-slate-200 bg-slate-50">
            <Lock className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Hospitalization Limit */}
      <div className="mb-6">
        <p className="text-sm text-[#113040] mb-3 font-[Futuru] font-medium">
          Select Hospitalization Limit (PKR)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {limits.map((l) => (
            <button
              key={l.key}
              type="button"
              onClick={() => setLimit(l.key)}
              disabled={submitting}
              className={cn(
                "h-12 rounded-xl border text-base font-[Futuru] transition flex items-center justify-center font-medium focus:outline-none disabled:opacity-60",
                limit === l.key
                  ? "border-[#1D9785] bg-gradient-to-r from-[#1D9785]/10 to-[#2ABFAF]/10 text-[#1D9785] shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              )}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* See Plans button */}
      <div className="mb-3">
        <Button
          onClick={handleSubmit}
          disabled={!age || !limit || submitting}
          className={cn(
            "w-full h-12 rounded-xl bg-[#F46416] font-[Ibrand] text-lg font-normal flex items-center justify-center gap-2 shadow-md transition",
            (!age || !limit || submitting) && "opacity-60 cursor-not-allowed"
          )}
          style={{
            background:
              !age || !limit || submitting
                ? "linear-gradient(to right, #f7c98c, #f7c98c)"
                : undefined,
            color: !age || !limit || submitting ? "#bfa97a" : undefined,
          }}
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#113040] border-t-transparent" />
              Loading…
            </span>
          ) : (
            "See Plans"
          )}
        </Button>
      </div>
    </div>
  );

  // -------- Fullscreen loader (shared) ----------
  const LoaderOverlay = submitting ? (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-white/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-transparent" />
        <p className="text-sm text-slate-700">Loading plans…</p>
      </div>
    </div>
  ) : null;

  // -------- Inline mode ----------
  if (inline) {
    return (
      <>
        {LoaderOverlay}
        <div
          className={cn(
            "rounded-2xl bg-white border border-slate-200 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.18)] overflow-hidden",
            className
          )}
        >
          <div className="px-7 pt-7 pb-0">
            <h3 className="font-[Ibrand] text-[#113040] text-2xl mb-0 tracking-tight">
              {title}
            </h3>
          </div>
          {FormBody}
        </div>
      </>
    );
  }

  // -------- Modal (backward compatible) ----------
  return (
    <>
      {LoaderOverlay}
      <Dialog open={!!open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md p-0 bg-transparent">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.18)] overflow-hidden">
            <DialogHeader className="px-7 pt-7 pb-0">
              <DialogTitle className="font-[Ibrand] text-[#113040] text-2xl mb-0 tracking-tight">
                {title}
              </DialogTitle>
            </DialogHeader>
            {FormBody}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
