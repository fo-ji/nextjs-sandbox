import type { ReactNode } from 'react';

const Field = ({ children }: { children: ReactNode }) => {
  return <div className="grid gap-1.5">{children}</div>;
};

const FieldError = ({ children }: { children: ReactNode }) => {
  return <div className="text-right text-destructive">{children}</div>;
};

export { Field, FieldError };
