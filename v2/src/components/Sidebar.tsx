import { NavLink } from 'react-router-dom';
import { siteConfig } from '../data/site';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block text-sm tracking-wide transition-colors',
    isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900',
  ].join(' ');

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={[
          'fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity lg:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside
        className={[
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-canvas px-8 py-10 transition-transform lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:w-48 lg:shrink-0 lg:self-start lg:translate-x-0 lg:px-10 lg:py-12 xl:w-56',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        <div className="mb-16 flex items-center justify-between lg:mb-24">
          <NavLink
            to="/"
            className="text-sm tracking-tight text-neutral-900"
            onClick={onClose}
          >
            {siteConfig.name}
          </NavLink>
          <button
            type="button"
            className="text-neutral-400 hover:text-neutral-900 lg:hidden"
            onClick={onClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <NavLink to="/" end className={navLinkClass} onClick={onClose}>
            Light
          </NavLink>
          <NavLink to="/love" className={navLinkClass} onClick={onClose}>
            Love
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={onClose}>
            About
          </NavLink>
          <a
            href="/v1/"
            className={navLinkClass({ isActive: false })}
            onClick={onClose}
          >
            Archive
          </a>
        </nav>
      </aside>
    </>
  );
}

export function MobileHeader({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-canvas/95 px-6 py-4 backdrop-blur-sm lg:hidden">
      <span className="text-sm tracking-tight">{siteConfig.name}</span>
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center text-neutral-600 hover:text-neutral-900"
        onClick={onMenuOpen}
        aria-label="Open menu"
      >
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 1h20M0 7h20M0 13h20"
            stroke="currentColor"
            strokeWidth="1.25"
          />
        </svg>
      </button>
    </header>
  );
}
