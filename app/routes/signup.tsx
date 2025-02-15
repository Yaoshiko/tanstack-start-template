import { createFileRoute } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/start';
import { useMutation } from '~/hooks/useMutation';
import { Auth } from '~/components/Auth';
import { signupFn } from '~/api/auth';

export const Route = createFileRoute('/signup')({
  component: SignupComp
});

function SignupComp() {
  const signupMutation = useMutation({
    fn: useServerFn(signupFn)
  });

  return (
    <Auth
      actionText="Sign Up"
      status={signupMutation.status}
      onSubmit={(e) => {
        const formData = new FormData(e.target as HTMLFormElement);

        signupMutation.mutate({
          data: {
            email: formData.get('email') as string,
            password: formData.get('password') as string
          }
        });
      }}
      afterSubmit={
        signupMutation.data?.error ? (
          <>
            <div className="text-red-400">{signupMutation.data.message}</div>
          </>
        ) : null
      }
    />
  );
}
