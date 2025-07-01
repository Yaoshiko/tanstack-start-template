import { jsxs, jsx } from 'react/jsx-runtime';
import { B as Button } from './button-jQNNNsEV.mjs';
import { Link } from '@tanstack/react-router';
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import './ssr.mjs';
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

const SplitComponent = function RecipeSelectionComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsx("h1", { children: "Are you hungry already?" }),
      /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/recipe/new", activeProps: {
        className: "font-bold"
      }, children: "Create a new recipe" }) })
    ] }),
    /* @__PURE__ */ jsx("img", { className: "w-full md:w-1/2", src: "/recipe-selection.svg", alt: "Recipe sketch" })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=index-ql88vOsH.mjs.map
