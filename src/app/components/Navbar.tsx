import Link from 'next/link';
import { FiHome } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="site-nav fixed w-full top-0 z-10">
      <div className="nav-inner">
        <Link href="/" className="nav-home" aria-label="Home"><FiHome /></Link>
        <span className="nav-name">Calder Johnson</span>
        <ul className="nav-links">
          <li><Link href="/cv">CV</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/publications">Publications</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar