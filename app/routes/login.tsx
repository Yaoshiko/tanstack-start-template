import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { zodValidator } from '@tanstack/zod-adapter';
import { authClient } from '~/lib/auth/client';

const searchParamsValidator = z.object({
  redirect: z
    .string()
    .default('/')
    .transform((v) => decodeURIComponent(v))
});

export const Route = createFileRoute('/login')({
  validateSearch: zodValidator(searchParamsValidator),
  component: Login
});

function Login() {
  const { redirect } = Route.useSearch();
  const navigate = Route.useNavigate();

  const signIn = async () => {
    const res = await authClient.signIn.email({
      email: 'nicola.barletta@outlook.it',
      password: 'password'
    });
    if (res.data?.user) {
      console.log('Sign in completed', res.data.user);
      navigate({
        to: redirect,
        replace: true
      });
    } else {
      console.log('Sign in error ', res.error);
    }
  };

  return (
    <button onClick={signIn}>Mock sign in</button>
    // <Auth
    //   actionText="Login"
    //   status={loginMutation.status}
    //   onSubmit={(e) => {
    //     const formData = new FormData(e.target as HTMLFormElement);

    //     loginMutation.mutate({
    //       email: formData.get('email') as string,
    //       password: formData.get('password') as string
    //     });
    //   }}
    //   afterSubmit={
    //     loginMutation.data ? (
    //       <>
    //         <div className="text-red-400">{loginMutation.data.message}</div>
    //         {loginMutation.data.userNotFound ? (
    //           <div>
    //             <button
    //               className="text-blue-500"
    //               onClick={(e) => {
    //                 const formData = new FormData(
    //                   (e.target as HTMLButtonElement).form!
    //                 );

    //                 signupMutation.mutate({
    //                   email: formData.get('email') as string,
    //                   password: formData.get('password') as string
    //                 });
    //               }}
    //               type="button"
    //             >
    //               Sign up instead?
    //             </button>
    //           </div>
    //         ) : null}
    //       </>
    //     ) : null
    //   }
    // />
  );
}
