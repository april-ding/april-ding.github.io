import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MobileHeader, Sidebar } from './Sidebar';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <MobileHeader onMenuOpen={() => setIsMenuOpen(true)} />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
