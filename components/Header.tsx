"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="header w-nav">
      <Link href="/" aria-current={pathname === '/' ? 'page' : undefined} className={`logo-wrapper w-nav-brand ${pathname === '/' ? 'w--current' : ''}`}>
        <img src="https://cdn.prod.website-files.com/5e87e737ee7085b9ba02c101/5e91e984961046c05f7459d8_mac-logo.svg" alt="Mac Logo" className="logo" />
      </Link>
      <nav role="navigation" className="nav-menu w-nav-menu">
        <Link href="/projects" className={`nav-link w-nav-link ${pathname === '/projects' ? 'w--current' : ''}`}>Projects</Link>
        <Link href="/about" className={`nav-link w-nav-link ${pathname === '/about' ? 'w--current' : ''}`}>About</Link>
        <Link href="/contact" className={`nav-link w-nav-link ${pathname === '/contact' ? 'w--current' : ''}`}>Contact</Link>
        
        <div data-hover="true" data-delay="0" className="w-dropdown">
          <div className="dropdown-toggle w-dropdown-toggle">
            <div>Find me</div>
          </div>
          <nav className="nav-dropdown-list w-dropdown-list">
            <a href="https://www.mackenziechild.me/" target="_blank" className="nav-dropdown-link w-dropdown-link">On the World Wide Web</a>
            <a href="https://twitter.com/mackenziechild" target="_blank" className="nav-dropdown-link w-dropdown-link">On Twitter</a>
            <a href="https://www.youtube.com/user/mackenziechild" target="_blank" className="nav-dropdown-link w-dropdown-link">On YouTube</a>
            <a href="https://www.instagram.com/mackenziechild/" target="_blank" className="nav-dropdown-link w-dropdown-link">On Instagram</a>
            <a href="https://dribbble.com/mackenziechild" target="_blank" className="nav-dropdown-link w-dropdown-link">On Dribbble</a>
          </nav>
        </div>
      </nav>
      <div className="menu-button w-nav-button">
        <div className="w-icon-nav-menu"></div>
      </div>
    </div>
  );
}
