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

const schema = z.object({
  email: z.string().email()
});

export const Route = createFileRoute('/_auth/password-forgot')({
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
  const navigate = Route.useNavigate();
  const form = useForm({
    defaultValues: {
      email: ''
    },
    validators: {
      onChange: schema
    },
    onSubmit: async ({ value }) => {
      const res = await authClient.forgetPassword({
        email: value.email,
        redirectTo: '/password-reset'
      });
      if (res.data) {
        logger.info('Password reset mail sent to');
        toast.info('Check your email');
        navigate({
          to: '/'
        });
      } else {
        toast.error(res.error?.message ?? 'Could not send password reset mail');
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
            You&apos;ve been here multiple times, but probably can&apos;t
            remember
          </p>
        </div>
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
              Send reset email
            </LoadingButton>
          )}
        </form.Subscribe>
      </Form>
    </div>
  );
}
