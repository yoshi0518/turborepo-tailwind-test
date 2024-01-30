import { ReactElement } from 'react';

export const OtherLayout = ({ children }: { children: ReactElement }) => (
  <>
    <header>Other Header</header>
    <div>{children}</div>
    <footer>Other Footer</footer>
  </>
);
