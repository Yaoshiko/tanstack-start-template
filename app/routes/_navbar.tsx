import {
  createRootRouteWithContext,
  Link,
  Outlet
} from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent
  }
);

function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function Navbar() {
  const { user } = Route.useRouteContext();
  const title = 'Starter';
  const logoSrc = 'donut.svg';
  const logoAlt = 'donut';
  const items = [
    { label: 'Recipes', href: '/recipe' },
    { label: 'Sandbox', href: '/sandbox' },
    { label: 'About', href: '/about', light: true }
  ];

  return (
    <section className="p-2">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoSrc} className="w-8" alt={logoAlt} />
              <span className="text-lg font-semibold">{title}</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {items.map(({ label, href }) => (
                    <Link
                      key={label}
                      to={href}
                      className="group bg-background text-muted-foreground hover:bg-muted hover:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            {!user ? (
              <>
                <Button asChild variant="outline">
                  <Link to="/login">Log in</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Label className="text-md">Hello, {user.email}!</Label>
                <Button asChild>
                  <Link to="/">Log out</Link>
                </Button>
              </div>
            )}
          </div>
        </nav>
        {/** Mobile. */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoSrc} className="w-8" alt={logoAlt} />
              <span className="text-lg font-semibold">{title}</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link to="/" className="flex items-center gap-2">
                      <img src={logoSrc} className="w-8" alt={logoAlt} />
                      <span className="text-lg font-semibold">{title}</span>
                    </Link>
                  </SheetTitle>
                  {items
                    .filter((item) => !item.light)
                    .map(({ label, href }) => (
                      <Link
                        key={label}
                        to={href}
                        className="hover:bg-muted hover:text-accent-foreground inline-flex h-10 items-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {items
                        .filter((item) => item.light)
                        .map(({ label, href }) => (
                          <Link
                            key={label}
                            to={href}
                            className="text-muted-foreground hover:bg-muted hover:text-accent-foreground inline-flex h-10 items-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors"
                          >
                            {label}
                          </Link>
                        ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link to="/login">Log in</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/signup">Sign up</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}
