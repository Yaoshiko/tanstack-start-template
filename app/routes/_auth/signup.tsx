import { createFileRoute } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/start';
import { useMutation } from '@/hooks/use-mutation';
import { Auth } from '@/components/auth';
import { signupFn } from '@/lib/auth/api';
import { authClient } from '@/lib/auth/client';

export const Route = createFileRoute('/_auth/signup')({
  component: SignUp
});

function SignUp() {
  const { redirect } = Route.useSearch();
  const navigate = Route.useNavigate();

  const signIn = async () => {
    const res = await authClient.signUp.email({
      email: 'nicola.barletta@outlook.it',
      password: 'password',
      name: 'Nicola Barletta'
    });
    if (res.data) {
      console.log('Sign in completed', res.data.user);
      navigate({
        to: redirect,
        replace: true
      });
    } else {
      console.log('Sign up error ', res.error);
    }
  };

  return <button onClick={signIn}>Mock sign up</button>;
}

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
