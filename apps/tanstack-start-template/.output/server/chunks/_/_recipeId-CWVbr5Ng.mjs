import { jsx, jsxs } from 'react/jsx-runtime';
import { useRouter } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { j as Route, k as fetchRecipeOpts, c as cn, u as useLogger, l as deleteRecipe } from './ssr.mjs';
import { Trash2 } from 'lucide-react';
import { B as Button, b as buttonVariants } from './button-jQNNNsEV.mjs';
import { toast } from 'sonner';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import '@tanstack/react-router-with-query';
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
import '@radix-ui/react-slot';
import 'class-variance-authority';

function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx(
      AlertDialogPrimitive.Content,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:max-w-lg dark:border-slate-800 dark:bg-slate-950",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-sm text-slate-500 dark:text-slate-400", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
const {
  logger
} = useLogger();
function Deferred() {
  const router = useRouter();
  const navigate = Route.useNavigate();
  const {
    recipeId
  } = Route.useParams();
  const {
    queryClient
  } = Route.useRouteContext();
  const recipe = useSuspenseQuery(fetchRecipeOpts(recipeId));
  const onDelete = async () => {
    logger.info("Query client", queryClient);
    try {
      await deleteRecipe({
        data: recipeId
      });
      navigate({
        to: "/recipe"
      });
      router.invalidate();
    } catch (error) {
      logger.warn("Failed to delete recipe", error);
      toast.error("Failed to delete recipe");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold", children: recipe.data.title }),
      /* @__PURE__ */ jsx("div", { className: "text-sm whitespace-pre-line", children: recipe.data.content })
    ] }),
    /* @__PURE__ */ jsxs(AlertDialog, { children: [
      /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "destructive", size: "lg", className: "fixed right-5 bottom-5 z-40 items-center gap-1 sm:static", children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Delete" }),
        /* @__PURE__ */ jsx(Trash2, {})
      ] }) }),
      /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: "Do you want to delete this recipe?" }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: "The recipe will be deleted permanently." }),
        /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
          /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Cancel" }),
          /* @__PURE__ */ jsx(AlertDialogAction, { onClick: onDelete, children: "Delete" })
        ] })
      ] })
    ] })
  ] });
}
const SplitComponent = function RecipeComponent() {
  return /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ jsx(Deferred, {}) }) });
};

export { SplitComponent as component };
//# sourceMappingURL=_recipeId-CWVbr5Ng.mjs.map
