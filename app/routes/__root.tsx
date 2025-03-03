// react-scan must be imported before React and TanStack Start
import { scan } from 'react-scan';
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { DefaultCatchBoundary } from '@/components/default-catch-boundary';
import { NotFound } from '@/components/not-found';
import css from '@/styles/app.css?url';
import { seo } from '@/lib/seo';
import { QueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import {} from 'better-auth';
import { authClient } from '@/lib/auth/client';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        {
          charSet: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        ...seo({
          title: 'Starter',
          description: `TanStack generic webapp starter.`
        })
      ],
      links: [
        { rel: 'stylesheet', href: css },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }),
    beforeLoad: async ({ context }) => {
      const session = await authClient.getSession();
      if (session.error) {
        console.warn(
          'Unexpected exception while loading session',
          session.error
        );
      }

      return {
        user: session?.data?.user,
        ...context
      };
    },
    errorComponent: (props) => {
      return <DefaultCatchBoundary {...props} />;
    },
    notFoundComponent: () => <NotFound />,
    component: RootComponent
  }
);

function RootComponent() {
  useEffect(() => {
    // Make sure to run this only after hydration
    scan({
      enabled: true
    });
  }, []);

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="h-screen">
          <Outlet />
        </div>
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
