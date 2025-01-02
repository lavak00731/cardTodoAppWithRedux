import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <div className="bg-green-700">
        {children}
    </div>
    </>
  )
}
