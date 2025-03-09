import { createFileRoute, Link, redirect } from '@tanstack/react-router';
import { authClient } from '@/lib/auth/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { zodValidator } from '@tanstack/zod-adapter';
import { Form } from '@/components/form/form';
import { FieldSet } from '@/components/form/field-set';
import { FieldError } from '@/components/form/field-error';
import { LoadingButton } from '@/components/loading-button';
import { toast } from 'sonner';

const searchParamsSchema = z.object({
  redirect: z
    .string()
    .default('/')
    .transform((v) => decodeURIComponent(v))
});

const signupSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export const Route = createFileRoute('/_auth/signup')({
  validateSearch: zodValidator(searchParamsSchema),
  component: SignUp,
  beforeLoad: async ({ context, search }) => {
    if (context.user) {
      // User already logged in.
      throw redirect({
        to: search.redirect,
        replace: true
      });
    }
  }
});

function SignUp() {
  const { redirect } = Route.useSearch();
  const navigate = Route.useNavigate();
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validators: {
      onChange: signupSchema
    },
    onSubmit: async ({ value }) => {
      const res = await authClient.signUp.email({
        name: `${value.firstName} ${value.lastName}`,
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: value.password
      });
      if (res.data) {
        navigate({
          to: redirect,
          replace: true
        });
      } else {
        toast.error(res.error?.message ?? 'Sign up failed');
      }
    }
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <Form
        className="mx-12 w-full sm:mx-0 sm:w-1/3 lg:w-1/5"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Sign up your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below for free donuts
          </p>
        </div>
        <FieldSet label="First name">
          <form.Field name="firstName">
            {(field) => (
              <>
                <Input
                  type="text"
                  id={field.name}
                  placeholder="Rick"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                />
                <FieldError
                  isDirty={field.state.meta.isDirty}
                  isBlurred={field.state.meta.isBlurred}
                  error={field.state.meta.errors
                    .map((e) => e?.message)
                    .find((e) => !!e)}
                />
              </>
            )}
          </form.Field>
        </FieldSet>
        <FieldSet label="Last name">
          <form.Field name="lastName">
            {(field) => (
              <>
                <Input
                  type="text"
                  id={field.name}
                  placeholder="Astley"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                />
                <FieldError
                  isDirty={field.state.meta.isDirty}
                  isBlurred={field.state.meta.isBlurred}
                  error={field.state.meta.errors
                    .map((e) => e?.message)
                    .find((e) => !!e)}
                />
              </>
            )}
          </form.Field>
        </FieldSet>
        <FieldSet label="Email">
          <form.Field name="email">
            {(field) => (
              <>
                <Input
                  type="email"
                  id={field.name}
                  placeholder="mr.bean@donuts.com"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                />
                <FieldError
                  isDirty={field.state.meta.isDirty}
                  isBlurred={field.state.meta.isBlurred}
                  error={field.state.meta.errors
                    .map((e) => e?.message)
                    .find((e) => !!e)}
                />
              </>
            )}
          </form.Field>
        </FieldSet>
        <FieldSet label="Password">
          <form.Field name="password">
            {(field) => (
              <>
                <Input
                  type="password"
                  id={field.name}
                  placeholder="******"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                />
                <FieldError
                  isDirty={field.state.meta.isDirty}
                  isBlurred={field.state.meta.isBlurred}
                  error={field.state.meta.errors
                    .map((e) => e?.message)
                    .find((e) => !!e)}
                />
              </>
            )}
          </form.Field>
        </FieldSet>
        <FieldSet label="Confirm password">
          <form.Field name="confirmPassword">
            {(field) => (
              <>
                <Input
                  type="password"
                  id={field.name}
                  placeholder="******"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                />
                <FieldError
                  isDirty={field.state.meta.isDirty}
                  isBlurred={field.state.meta.isBlurred}
                  error={field.state.meta.errors
                    .map((e) => e?.message)
                    .find((e) => !!e)}
                />
              </>
            )}
          </form.Field>
        </FieldSet>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <LoadingButton
              type="submit"
              className="w-full"
              loading={isSubmitting}
              disabled={!canSubmit}
            >
              Sign up
            </LoadingButton>
          )}
        </form.Subscribe>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background relative z-10 px-2">
            Or sign up with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
          Signup with GitHub
        </Button>
        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </Form>
    </div>
  );
}
