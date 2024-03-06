import Link from 'next/link';

import { ModeToggle } from './mode-toggle';

const Header = () => {
  return (
    <header>
      <div className="container border-b-2 px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">NextSandbox</Link>
          <div className="flex items-center gap-4">
            <Link href="/login">Login</Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
