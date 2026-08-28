import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from './ScrollToTop';
import { MobileHeader, Sidebar } from './Sidebar';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen lg:flex">
      <ScrollToTop />
      <Sidebar />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <MobileHeader
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen((open) => !open)}
          onClose={() => setIsMenuOpen(false)}
        />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
