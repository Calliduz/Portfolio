import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      {/* Main container with transparent bg to let index.html pattern show */}
      <main className="flex-grow w-full flex flex-col relative z-0">
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;