import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { Book, Menu, Sunset, Trees, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent
  }
);

function RootComponent() {
  const { user } = Route.useRouteContext();

  return (
    <>
      <Navbar1 />
      <Outlet />
    </>
    // <>
    //   <div className="flex gap-2 p-2 text-lg">
    //     <Link
    //       to="/"
    //       activeProps={{
    //         className: 'font-bold'
    //       }}
    //       activeOptions={{ exact: true }}
    //     >
    //       Home
    //     </Link>{' '}
    //     <Link
    //       to="/todos"
    //       activeProps={{
    //         className: 'font-bold'
    //       }}
    //     >
    //       Todos
    //     </Link>
    //     <div className="ml-auto">
    //       {user ? (
    //         <>
    //           <span className="mr-2">{user.email}</span>
    //           <Link to="/logout">Logout</Link>
    //         </>
    //       ) : (
    //         <Link to="/login">Login</Link>
    //       )}
    //     </div>
    //   </div>
    //   <hr />
    //   <Outlet />
    // </>
  );
}

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: 'https://www.shadcnblocks.com',
    src: 'https://www.shadcnblocks.com/images/block/block-1.svg',
    alt: 'logo',
    title: 'Shadcnblocks.com'
  },
  menu = [
    { title: 'Home', url: '#' },
    {
      title: 'Products',
      url: '#',
      items: [
        {
          title: 'Blog',
          description: 'The latest industry news, updates, and info',
          icon: <Book className="size-5 shrink-0" />,
          url: '#'
        },
        {
          title: 'Company',
          description: 'Our mission is to innovate and empower the world',
          icon: <Trees className="size-5 shrink-0" />,
          url: '#'
        },
        {
          title: 'Careers',
          description: 'Browse job listing and discover our workspace',
          icon: <Sunset className="size-5 shrink-0" />,
          url: '#'
        },
        {
          title: 'Support',
          description:
            'Get in touch with our support team or visit our community forums',
          icon: <Zap className="size-5 shrink-0" />,
          url: '#'
        }
      ]
    },
    {
      title: 'Resources',
      url: '#',
      items: [
        {
          title: 'Help Center',
          description: 'Get all the answers you need right here',
          icon: <Zap className="size-5 shrink-0" />,
          url: '#'
        },
        {
          title: 'Contact Us',
          description: 'We are here to help you with any questions you have',
          icon: <Sunset className="size-5 shrink-0" />,
          url: '#'
        },
        {
          title: 'Status',
          description: 'Check the current status of our services and APIs',
          icon: <Trees className="size-5 shrink-0" />,
          url: '#'
        },
        {
          title: 'Terms of Service',
          description: 'Our terms and conditions for using our services',
          icon: <Book className="size-5 shrink-0" />,
          url: '#'
        }
      ]
    },
    {
      title: 'Pricing',
      url: '#'
    },
    {
      title: 'Blog',
      url: '#'
    }
  ],
  mobileExtraLinks = [
    { name: 'Press', url: '#' },
    { name: 'Contact', url: '#' },
    { name: 'Imprint', url: '#' },
    { name: 'Sitemap', url: '#' }
  ],
  auth = {
    login: { text: 'Log in', url: '#' },
    signup: { text: 'Sign up', url: '#' }
  }
}: Navbar1Props) => {
  return (
    <section className="p-2">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <a href={auth.login.url}>{auth.login.text}</a>
            </Button>
            <Button asChild>
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="w-8" alt={logo.alt} />
                      <span className="text-lg font-semibold">
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  {menu.map((item) => renderMobileMenuItem(item))}
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="text-muted-foreground hover:bg-muted hover:text-accent-foreground inline-flex h-10 items-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.text}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.text}</a>
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
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <a
      key={item.title}
      className="group bg-background text-muted-foreground hover:bg-muted hover:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  );
};

export { Navbar1 };
