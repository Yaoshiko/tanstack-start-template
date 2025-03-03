import { cn } from '@/lib/utils';

type FormProps = React.PropsWithChildren &
  React.HtmlHTMLAttributes<HTMLFormElement> & {
    className?: string;
  };

export function Form({ className, children, ...props }: FormProps) {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      {children}
    </form>
  );
}
