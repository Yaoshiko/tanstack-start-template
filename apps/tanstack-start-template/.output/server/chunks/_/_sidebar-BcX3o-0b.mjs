import { jsxs, jsx } from 'react/jsx-runtime';
import { Link, Outlet } from '@tanstack/react-router';
import { i as Route$2, c as cn } from './ssr.mjs';
import { B as Button } from './button-jQNNNsEV.mjs';
import { Plus } from 'lucide-react';
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
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';

const SplitComponent = function RecipesComponent() {
  const recipes = Route$2.useLoaderData();
  const isDefault = Object.keys(Route$2.useMatch().params).length == 0;
  const noRecipes = recipes.length == 0;
  return /* @__PURE__ */ jsxs("div", {
    className: "flex min-h-full",
    // FIXME: To verify on mobile.
    children: [
      !noRecipes ? /* @__PURE__ */ jsxs("div", { className: cn("no-scrollbar border-right text-muted-foreground flex min-h-full min-w-40 grow-1 flex-col overflow-y-hidden border-r border-gray-200 sm:max-w-80", {
        "hidden sm:flex": !isDefault
      }), children: [
        recipes.map(({
          id,
          title
        }) => /* @__PURE__ */ jsx(Link, { className: "hover:bg-muted hover:text-accent-foreground items-center px-4 py-2 whitespace-nowrap", to: "/recipe/$recipeId", params: {
          recipeId: id
        }, activeProps: {
          className: "text-accent-foreground font-bold bg-muted"
        }, children: title }, id)),
        /* @__PURE__ */ jsx(Button, { className: "fixed right-5 bottom-5 sm:hidden", children: /* @__PURE__ */ jsx(Link, { to: "/recipe/new", children: /* @__PURE__ */ jsx(Plus, {}) }) })
      ] }) : null,
      /* @__PURE__ */ jsx("div", { className: cn("grow-4 sm:flex", {
        hidden: !noRecipes && isDefault
      }), children: /* @__PURE__ */ jsx("div", { className: "m-12 grow", children: /* @__PURE__ */ jsx(Outlet, {}) }) })
    ]
  });
};

export { SplitComponent as component };
//# sourceMappingURL=_sidebar-BcX3o-0b.mjs.map
