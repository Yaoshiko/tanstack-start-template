import { jsx, jsxs } from 'react/jsx-runtime';
import { g as Route$3, r as recipeSchema, h as createRecipe, u as useLogger } from './ssr.mjs';
import { u as useAppForm } from './index-DKquRGr4.mjs';
import { useRouter } from '@tanstack/react-router';
import { toast } from 'sonner';
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
import '@tanstack/react-form';
import 'react';
import '@radix-ui/react-label';
import 'lucide-react';
import 'react-dom';
import './button-jQNNNsEV.mjs';
import '@radix-ui/react-slot';
import 'class-variance-authority';

const {
  logger
} = useLogger();
const SplitComponent = function RouteComponent() {
  const router = useRouter();
  const navigate = Route$3.useNavigate();
  const form = useAppForm({
    defaultValues: {
      title: "",
      content: ""
    },
    validators: {
      onChange: recipeSchema
    },
    onSubmit: async ({
      value
    }) => {
      const recipe = await createRecipe({
        data: value
      });
      if (recipe) {
        logger.info("Recipe created", recipe);
        router.invalidate();
        navigate({
          to: "/recipe/$recipeId",
          params: {
            recipeId: recipe.id
          }
        });
      } else {
        toast.error("Failed to create recipe");
      }
    }
  });
  return /* @__PURE__ */ jsx("div", { className: "m-12 flex flex-col items-center", children: /* @__PURE__ */ jsx(form.AppForm, { children: /* @__PURE__ */ jsxs(form.FormWrapper, { label: "Create a new recipe", className: "mx-12 w-full sm:mx-0 sm:w-1/3 lg:w-1/5", onSubmit: form.handleSubmit, children: [
    /* @__PURE__ */ jsx(form.AppField, { name: "title", children: (field) => /* @__PURE__ */ jsx(field.TextField, { label: "Title", placeholder: "Spaghetti alla carbonara" }) }),
    /* @__PURE__ */ jsx(form.AppField, { name: "content", children: (field) => /* @__PURE__ */ jsx(field.TextAreaField, { label: "Procedure", placeholder: "Please don't put the cream on it." }) }),
    /* @__PURE__ */ jsx(form.SubmitButton, { label: "Create" })
  ] }) }) });
};

export { SplitComponent as component };
//# sourceMappingURL=new-Dor4XSw9.mjs.map
