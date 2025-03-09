import { cn } from '@/lib/utils';

type FormProps = React.PropsWithChildren &
  React.HtmlHTMLAttributes<HTMLFormElement> & {
    className?: string;
  };

export function Form({ className, children, onSubmit, ...props }: FormProps) {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit?.(e);
  };

  return (
    <form
      className={cn('flex flex-col gap-6', className)}
      onSubmit={handleOnSubmit}
      {...props}
    >
      {children}
    </form>
  );
}
