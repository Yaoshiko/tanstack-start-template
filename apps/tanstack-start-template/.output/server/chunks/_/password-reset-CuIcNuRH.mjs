import { jsx, jsxs } from 'react/jsx-runtime';
import { a as authClient } from './client-CPEhKFL6.mjs';
import { z } from 'zod';
import { toast } from 'sonner';
import { b as Route$6, u as useLogger } from './ssr.mjs';
import { u as useAppForm } from './index-DKquRGr4.mjs';
import '@tanstack/react-query';
import 'better-auth/react';
import 'better-auth/client/plugins';
import '@tanstack/react-router';
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
const SplitComponent = function PasswordReset() {
  const {
    token
  } = Route$6.useSearch();
  const navigate = Route$6.useNavigate();
  const form = useAppForm({
    defaultValues: {
      password: "",
      confirmPassword: ""
    },
    validators: {
      onChange: z.object({
        password: z.string().min(8),
        confirmPassword: z.string()
      }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
      })
    },
    onSubmit: async ({
      value
    }) => {
      var _a, _b;
      const res = await authClient.resetPassword({
        token,
        newPassword: value.password
      });
      if (res.data) {
        logger.info("Updating password");
        toast.info("Password updated");
        navigate({
          to: "/"
        });
      } else {
        toast.error((_b = (_a = res.error) == null ? void 0 : _a.message) != null ? _b : "Could not send reset password");
      }
    }
  });
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center overflow-y-auto py-20", children: /* @__PURE__ */ jsx(form.AppForm, { children: /* @__PURE__ */ jsxs(form.FormWrapper, { label: "Reset password", description: "Enter your new password", className: "mx-12 w-full sm:mx-0 sm:w-1/3 lg:w-1/5", onSubmit: form.handleSubmit, children: [
    /* @__PURE__ */ jsx(form.AppField, { name: "password", children: (field) => /* @__PURE__ */ jsx(field.TextField, { label: "Password", type: "password", placeholder: "******" }) }),
    /* @__PURE__ */ jsx(form.AppField, { name: "confirmPassword", children: (field) => /* @__PURE__ */ jsx(field.TextField, { label: "Confirm password", type: "password", placeholder: "******" }) }),
    /* @__PURE__ */ jsx(form.SubmitButton, { label: "Reset password" })
  ] }) }) });
};

export { SplitComponent as component };
//# sourceMappingURL=password-reset-CuIcNuRH.mjs.map
