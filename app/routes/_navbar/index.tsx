import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_navbar/')({
  component: Home
});

function Home() {
  return (
    <div className="flex flex-col gap-y-2 p-2">
      <div>
        <h1>You, yes you!</h1>
        <p>How have you got so far? Website is under development..</p>
      </div>
      <div>
        <p>
          By now, you can imagine some beautiful Hero page such{' '}
          <a href="https://www.shadcnblocks.com/group/hero">these</a> or some
          cool Portfolio page such{' '}
          <a href="https://sreekesh-k.github.io/Free-Portfolio-Template-Base/">
            this
          </a>
          .
        </p>
      </div>
    </div>
  );
}
