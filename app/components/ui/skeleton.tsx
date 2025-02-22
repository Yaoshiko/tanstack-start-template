import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-slate-900/10 animate-pulse rounded-md dark:bg-slate-50/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
