import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Layout({ children }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (<div className="min-h-screen flex flex-col font-sans">
      <header className="border-b border-white/10 bg-black sticky top-0 z-50 w-full shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
        <div className="container mx-auto flex h-16 items-center px-4 justify-between">
          <Link to="/" className="text-xl font-semibold tracking-tight flex items-center gap-2 text-white">
            <span className="bg-white text-black p-1 px-2 rounded-md">C</span>
            CommUnity Connect
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-wrap items-center justify-end gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/directory" className="hover:text-white transition-colors">Directory</Link>
            <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link to="/profile" className="hover:text-white transition-colors">Profile</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white/70 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-white/10 bg-black px-4 py-4 flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
            <Link to="/" className="hover:text-white transition-colors block py-2">Home</Link>
            <Link to="/directory" className="hover:text-white transition-colors block py-2">Directory</Link>
            <Link to="/dashboard" className="hover:text-white transition-colors block py-2">Dashboard</Link>
            <Link to="/profile" className="hover:text-white transition-colors block py-2">Profile</Link>
            <Link to="/about" className="hover:text-white transition-colors block py-2">About</Link>
          </nav>
        )}
      </header>
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="container mx-auto px-4 text-center text-sm text-white/60">
          <p>© 2026 CommUnity Connect.</p>
        </div>
      </footer>
    </div>);
}
