import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <main>
      { children }
    </main>
  );
};

export { Layout };
