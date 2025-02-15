import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: () => {
    // const router = useRouter();
    // const login = useServerFn(loginFn);

    return (
      <p>TODO</p>
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
});
