import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { forwardRef } from 'react';
import { c as cn } from './ssr.mjs';
import { Label } from '@radix-ui/react-label';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { B as Button } from './button-jQNNNsEV.mjs';

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:file:text-slate-50 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts();
function FieldError({
  isDirty,
  isBlurred,
  error,
  className
}) {
  return isDirty && isBlurred && !!error && /* @__PURE__ */ jsx(Label, { className: cn("text-destructive italic", className), children: error });
}
function FieldSet({ label, className, children }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("grid gap-2", className), children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: label }),
    children
  ] });
}
function TextField(props) {
  const field = useFieldContext();
  return /* @__PURE__ */ jsxs(FieldSet, { label: props.label, children: [
    /* @__PURE__ */ jsx(
      Input,
      {
        id: field.name,
        value: field.state.value,
        onChange: (e) => field.handleChange(e.target.value),
        onBlur: field.handleBlur,
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      FieldError,
      {
        isDirty: field.state.meta.isDirty,
        isBlurred: field.state.meta.isBlurred,
        error: field.state.meta.errors.map((e) => e == null ? void 0 : e.message).find((e) => !!e)
      }
    )
  ] });
}
const LoadingButton = forwardRef(
  function LoadingButton2({ loading, children, ...props }, ref) {
    const { pending } = useFormStatus();
    const isLoading = loading != null ? loading : pending;
    return /* @__PURE__ */ jsx(Button, { ref, disabled: isLoading, ...props, children: /* @__PURE__ */ jsxs(Fragment, { children: [
      isLoading && /* @__PURE__ */ jsx(Loader2, { className: "ml-2 h-4 w-4 animate-spin" }),
      children
    ] }) });
  }
);
LoadingButton.displayName = "LoadingButton";
function SubmitButton({ label, className }) {
  const form = useFormContext();
  return /* @__PURE__ */ jsx(form.Subscribe, { selector: (state) => [state.canSubmit, state.isSubmitting], children: ([canSubmit, isSubmitting]) => /* @__PURE__ */ jsx(
    LoadingButton,
    {
      type: "submit",
      className: cn("w-full", className),
      loading: isSubmitting,
      disabled: !canSubmit,
      children: label
    }
  ) });
}
function FormWrapper({
  label,
  description,
  className,
  children,
  onSubmit,
  ...props
}) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit == null ? void 0 : onSubmit(e);
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: cn("flex flex-col gap-6", className),
      onSubmit: handleOnSubmit,
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: label }),
          description && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-balance", children: description })
        ] }),
        children
      ]
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:ring-[3px] focus-visible:ring-slate-950/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500/20 md:text-sm dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300/50 dark:aria-invalid:border-red-900 dark:aria-invalid:ring-red-500/40 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40",
        className
      ),
      ...props
    }
  );
}
function TextAreaField(props) {
  const field = useFieldContext();
  return /* @__PURE__ */ jsxs(FieldSet, { label: props.label, children: [
    /* @__PURE__ */ jsx(
      Textarea,
      {
        id: field.name,
        value: field.state.value,
        onChange: (e) => field.handleChange(e.target.value),
        onBlur: field.handleBlur,
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      FieldError,
      {
        isDirty: field.state.meta.isDirty,
        isBlurred: field.state.meta.isBlurred,
        error: field.state.meta.errors.map((e) => e == null ? void 0 : e.message).find((e) => !!e)
      }
    )
  ] });
}
const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField,
    TextAreaField
  },
  formComponents: {
    FormWrapper,
    SubmitButton
  },
  fieldContext,
  formContext
});

export { useAppForm as u };
//# sourceMappingURL=index-DKquRGr4.mjs.map
