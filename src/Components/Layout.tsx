import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <div className="bg-gradient-to-b from-cyan-500 to-green-700">
        {children}
    </div>
    </>
  )
}
