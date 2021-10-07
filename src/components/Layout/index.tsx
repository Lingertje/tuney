import { FC, ReactNode } from "react";

import { Header } from "components/Header";

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="app">
      <Header />
      <main>
        { children }
      </main>
      <footer>
        <h2>This is the footer</h2>
      </footer>
    </div>
  );
};

export { Layout };
