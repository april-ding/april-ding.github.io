import { NavLink } from 'react-router-dom';
import { siteConfig } from '../data/site';

type MobileHeaderProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block text-sm tracking-wide transition-colors',
    isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900',
  ].join(' ');

function NavLabel({
  isActive,
  children,
}: {
  isActive: boolean;
  children: string;
}) {
  return (
    <>
      {isActive ? <span className="mr-1.5 inline-block">→</span> : null}
      {children}
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-48 shrink-0 flex-col self-start bg-canvas px-10 py-12 lg:flex xl:w-56">
      <div className="mb-24">
        <NavLink to="/" className="text-sm tracking-tight text-neutral-900">
          {siteConfig.name}
        </NavLink>
      </div>

      <nav className="flex flex-col gap-4">
        <NavLink to="/" end className={navLinkClass}>
          {({ isActive }) => <NavLabel isActive={isActive}>Light</NavLabel>}
        </NavLink>
        <NavLink to="/love" className={navLinkClass}>
          {({ isActive }) => <NavLabel isActive={isActive}>Love</NavLabel>}
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          {({ isActive }) => <NavLabel isActive={isActive}>About</NavLabel>}
        </NavLink>
        <a href="/v1/" className={navLinkClass({ isActive: false })}>
          Archive
        </a>
      </nav>
    </aside>
  );
}

export function MobileHeader({ isOpen, onToggle, onClose }: MobileHeaderProps) {
  return (
    <header
      className={[
        'sticky top-0 z-30 border-b border-neutral-200 backdrop-blur-sm lg:hidden',
        isOpen
          ? 'bg-gradient-to-b from-[#c5cbc9] to-canvas'
          : 'bg-canvas/95',
      ].join(' ')}
    >
      <div className="flex w-full items-center justify-between px-4 py-4">
        <span className="font-sans text-sm tracking-tight text-neutral-900">
          {siteConfig.name}
        </span>
        <button
          type="button"
          className="ml-auto shrink-0 font-serif text-base tracking-wide text-neutral-600 hover:text-neutral-900"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={[
          'grid transition-[grid-template-rows] duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        ].join(' ')}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-4 px-4 pb-6 pt-1">
            <NavLink to="/" end className={navLinkClass} onClick={onClose}>
              {({ isActive }) => <NavLabel isActive={isActive}>Light</NavLabel>}
            </NavLink>
            <NavLink to="/love" className={navLinkClass} onClick={onClose}>
              {({ isActive }) => <NavLabel isActive={isActive}>Love</NavLabel>}
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={onClose}>
              {({ isActive }) => <NavLabel isActive={isActive}>About</NavLabel>}
            </NavLink>
            <a
              href="/v1/"
              className={navLinkClass({ isActive: false })}
              onClick={onClose}
            >
              Archive
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
