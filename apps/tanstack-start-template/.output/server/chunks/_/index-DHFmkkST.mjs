import { jsx, jsxs } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import { c as cn } from './ssr.mjs';
import '@tanstack/react-router';
import '@tanstack/react-router-with-query';
import '@tanstack/react-query';
import '@tanstack/react-router-devtools';
import 'pino';
import 'next-themes';
import 'sonner';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'drizzle-orm/node-postgres';
import 'mjml';
import 'resend';
import 'drizzle-orm/pg-core';
import 'node:async_hooks';
import '@tanstack/zod-adapter';
import 'zod';
import 'drizzle-orm';
import 'clsx';
import 'tailwind-merge';
import '@tanstack/react-router/ssr/server';

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-slate-900 text-slate-50 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
        secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        destructive: "border-transparent bg-red-500 text-slate-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80",
        outline: "text-slate-950 dark:text-slate-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const SplitComponent = function Home() {
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden px-8 py-32", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "magicpattern absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-5xl flex-col items-center", children: /* @__PURE__ */ jsxs("div", { className: "z-10 flex flex-col items-center gap-6 text-center", children: [
      /* @__PURE__ */ jsx("img", { src: "donut.svg", alt: "logo", className: "h-16" }),
      /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Hey, you" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-6 text-2xl font-bold text-pretty lg:text-5xl", children: "Free donuts!" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground lg:text-xl", children: [
          "I'm sorry, you got",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://youtu.be/dQw4w9WgXcQ?si=QI5RgbjfHrI0dgDo", children: "Rick-Rolled" }),
          "...",
          /* @__PURE__ */ jsx("br", {}),
          " But you can enjoy a beautiful meaningless app to be used as a Tanstack Start template for whatever you need!"
        ] })
      ] })
    ] }) })
  ] }) }) });
};

export { SplitComponent as component };
//# sourceMappingURL=index-DHFmkkST.mjs.map
