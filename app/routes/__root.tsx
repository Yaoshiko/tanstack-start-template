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
import { Toaster } from '@/components/ui/sonner';
import css from '@/styles/app.css?url';
import { seo } from '@/lib/seo';
import { QueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getLoggedUser } from '@/lib/auth';

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
    beforeLoad: async () => {
      const user = await getLoggedUser();
      return {
        user
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
        <main className="h-screen">
          <Outlet />
        </main>
        <Toaster />
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
