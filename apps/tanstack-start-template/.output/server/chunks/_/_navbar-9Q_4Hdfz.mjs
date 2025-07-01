import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Outlet, useRouter, Link } from '@tanstack/react-router';
import { X, Menu, ChevronDown } from 'lucide-react';
import { B as Button } from './button-jQNNNsEV.mjs';
import * as React from 'react';
import { useState } from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { c as cn, R as Route$b, u as useLogger } from './ssr.mjs';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as LabelPrimitive from '@radix-ui/react-label';
import { a as authClient, i as invalidateAuthCache } from './client-CPEhKFL6.mjs';
import { toast } from 'sonner';
import '@radix-ui/react-slot';
import '@tanstack/react-router-with-query';
import '@tanstack/react-query';
import '@tanstack/react-router-devtools';
import 'pino';
import 'next-themes';
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
import 'better-auth/react';
import 'better-auth/client/plugins';

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-200 data-[state=open]:duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out dark:bg-slate-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        children
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold text-slate-950 dark:text-slate-50",
      className
    ),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-slate-500 dark:text-slate-400", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50"
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      "",
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full md:absolute md:w-auto",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute top-full left-0 flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow md:w-[var(--radix-navigation-menu-viewport-width)] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
const {
  logger
} = useLogger();
function Navbar() {
  const router = useRouter();
  const {
    queryClient,
    user
  } = Route$b.useRouteContext();
  const navigate = Route$b.useNavigate();
  const [open, setOpen] = useState(false);
  const title = "Starter";
  const logoAlt = "donut";
  const logoSrc = "/donut.svg";
  const items = [
    {
      label: "Recipes",
      href: "/recipe",
      light: false
    }
    // TODO: Implement a sandbox playground.
    // { label: 'Sandbox', href: '/sandbox', light: true }
  ];
  const handleLogout = async () => {
    var _a, _b;
    setOpen(false);
    const res = await authClient.signOut();
    logger.info("User signed out", res);
    if (res.data) {
      await invalidateAuthCache(router, queryClient);
      navigate({
        to: "/"
      });
    } else {
      toast.error((_b = (_a = res.error) == null ? void 0 : _a.message) != null ? _b : "Sign out failed");
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "p-2", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxs("nav", { className: "hidden justify-between lg:flex", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("img", { src: logoSrc, className: "w-8", alt: logoAlt }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-extrabold", children: title })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-muted-foreground flex items-center font-medium", children: /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsx(NavigationMenuList, { children: items.map(({
          label,
          href
        }) => /* @__PURE__ */ jsx(Link, { to: href, className: "group bg-background hover:bg-muted hover:text-accent-foreground active:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 transition-colors", activeProps: {
          className: "text-accent-foreground font-bold"
        }, children: label }, label)) }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: !user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/login", children: "Log in" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/signup", children: "Sign up" }) })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs(Label, { className: "text-md", children: [
          "Hello, ",
          user.firstName,
          "!"
        ] }),
        /* @__PURE__ */ jsx(Button, { className: "cursor-pointer", onClick: handleLogout, children: "Log out" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "block lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("img", { src: logoSrc, className: "w-8", alt: logoAlt }),
        /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: title })
      ] }),
      /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", children: /* @__PURE__ */ jsx(Menu, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsxs(SheetContent, { className: "overflow-y-auto", children: [
          /* @__PURE__ */ jsxs(SheetHeader, { children: [
            /* @__PURE__ */ jsx(SheetTitle, { children: /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("img", { src: logoSrc, className: "w-8", alt: logoAlt }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: title })
            ] }) }) }),
            items.filter((item) => !item.light).map(({
              label,
              href
            }) => /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: href, className: "hover:bg-muted hover:text-accent-foreground inline-flex h-10 items-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", children: label }) }, label))
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-6 flex flex-col gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "border-t py-4", children: /* @__PURE__ */ jsx("div", { className: "justify-start", children: items.filter((item) => item.light).map(({
              label,
              href
            }) => /* @__PURE__ */ jsx(Link, { to: href, className: "text-muted-foreground hover:bg-muted hover:text-accent-foreground inline-flex h-10 w-full items-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", children: label }, label)) }) }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3", children: !user ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/login", children: "Log in" }) }),
              /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/signup", children: "Sign up" }) })
            ] }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Button, { onClick: handleLogout, children: "Log out" }) }) })
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
}
const SplitComponent = function RootComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx("div", { className: "no-scrollbar h-full overflow-y-auto", children: /* @__PURE__ */ jsx(Outlet, {}) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=_navbar-9Q_4Hdfz.mjs.map
