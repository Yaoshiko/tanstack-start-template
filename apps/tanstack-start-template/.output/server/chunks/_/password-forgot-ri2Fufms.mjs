import { jsx, jsxs } from 'react/jsx-runtime';
import { a as authClient } from './client-CPEhKFL6.mjs';
import { z } from 'zod';
import { toast } from 'sonner';
import { d as Route$5, u as useLogger } from './ssr.mjs';
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
  const navigate = Route$5.useNavigate();
  const form = useAppForm({
    defaultValues: {
      email: ""
    },
    validators: {
      onChange: z.object({
        email: z.string().email()
      })
    },
    onSubmit: async ({
      value
    }) => {
      var _a, _b;
      const res = await authClient.forgetPassword({
        email: value.email,
        redirectTo: "/password-reset"
      });
      if (res.data) {
        logger.info("Password reset mail sent to");
        toast.info("Check your email");
        navigate({
          to: "/"
        });
      } else {
        toast.error((_b = (_a = res.error) == null ? void 0 : _a.message) != null ? _b : "Could not send password reset mail");
      }
    }
  });
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center overflow-y-auto py-20", children: /* @__PURE__ */ jsx(form.AppForm, { children: /* @__PURE__ */ jsxs(form.FormWrapper, { label: "Reset password", description: "You've been here multiple times, but probably can't remember", className: "mx-12 w-full sm:mx-0 sm:w-1/3 lg:w-1/5", onSubmit: form.handleSubmit, children: [
    /* @__PURE__ */ jsx(form.AppField, { name: "email", children: (field) => /* @__PURE__ */ jsx(field.TextField, { label: "Email", type: "email", placeholder: "mr.bean@donuts.com" }) }),
    /* @__PURE__ */ jsx(form.SubmitButton, { label: "Send reset email" })
  ] }) }) });
};

export { SplitComponent as component };
//# sourceMappingURL=password-forgot-ri2Fufms.mjs.map
