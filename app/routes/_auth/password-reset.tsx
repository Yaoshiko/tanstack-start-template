import { createFileRoute, redirect } from '@tanstack/react-router';
import { authClient } from '@/lib/auth/client';
import { Input } from '@/components/ui/input';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { Form } from '@/components/form/form';
import { FieldSet } from '@/components/form/field-set';
import { FieldError } from '@/components/form/field-error';
import { LoadingButton } from '@/components/loading-button';
import { toast } from 'sonner';
import { useLogger } from '@/lib/logger';

const { logger } = useLogger();

const searchParamsSchema = z.object({
  token: z.string()
});

const schema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export const Route = createFileRoute('/_auth/password-reset')({
  validateSearch: searchParamsSchema,
  beforeLoad: async ({ context }) => {
    if (context.user) {
      // User already logged in.
      throw redirect({
        to: '/',
        replace: true
      });
    }
  },
  component: PasswordReset
});

function PasswordReset() {
  const { token } = Route.useSearch();
  const navigate = Route.useNavigate();
  const form = useForm({
    defaultValues: {
      password: '',
      confirmPassword: ''
    },
    validators: {
      onChange: schema
    },
    onSubmit: async ({ value }) => {
      const res = await authClient.resetPassword({
        token: token,
        newPassword: value.password
      });
      if (res.data) {
        logger.info('Updating password');
        toast.info('Password updated');
        navigate({
          to: '/'
        });
      } else {
        toast.error(res.error?.message ?? 'Could not send reset password');
      }
    }
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <Form
        className="mx-12 w-full sm:mx-0 sm:w-1/3 lg:w-1/5"
        onSubmit={form.handleSubmit}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Reset password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your new password
          </p>
        </div>
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
              Reset password
            </LoadingButton>
          )}
        </form.Subscribe>
      </Form>
    </div>
  );
}
