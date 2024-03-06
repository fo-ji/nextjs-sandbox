import type { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
  title?: string;
};

const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <div className="container grow py-4">
      {title && <h1 className="mb-10 text-2xl font-bold">{title}</h1>}
      {children}
    </div>
  );
};

export { PageLayout };
