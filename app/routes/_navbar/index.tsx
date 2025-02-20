import { createFileRoute } from '@tanstack/react-router';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Route = createFileRoute('/_navbar/')({
  component: Home
});

function Home() {
  return (
    <div className="container mx-auto">
      <section className="relative overflow-hidden py-32">
        <div className="container">
          <div className="magicpattern absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-center opacity-100" />
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 flex flex-col items-center gap-6 text-center">
              <img
                src="https://shadcnblocks.com/images/block/block-1.svg"
                alt="logo"
                className="h-16"
              />
              <Badge variant="outline">Hey, you</Badge>
              <div>
                <h1 className="mb-6 text-2xl font-bold text-pretty lg:text-5xl">
                  Free donuts!
                </h1>
                <p className="text-muted-foreground lg:text-xl">
                  I&apos;m sorry, donuts are over. But you can enjoy a beautiful
                  ToDo app to be used as a Tanstack Start template for whatever
                  you&apos;re building.
                </p>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <Button>Get Started</Button>
                <Button variant="outline">
                  Learn more <ExternalLink className="ml-2 h-4" />
                </Button>
              </div>
              <div className="mt-20 flex flex-col items-center gap-4">
                <p className="text-center: text-muted-foreground lg:text-left">
                  Built with open-source technologies
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#"
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'group px-3'
                    )}
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/shadcn-ui-small.svg"
                      alt="company logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                  <a
                    href="#"
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'group px-3'
                    )}
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/typescript-small.svg"
                      alt="company logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>

                  <a
                    href="#"
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'group px-3'
                    )}
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/react-icon.svg"
                      alt="company logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                  <a
                    href="#"
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'group px-3'
                    )}
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/tailwind-small.svg"
                      alt="company logo"
                      className="h-4 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
