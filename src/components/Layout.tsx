import { Outlet, Link, useLocation } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ChatWidget from './ChatWidget';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-icon">
            <Code size={20} color="#FFFFFF" />
          </div>
          <span className="logo-text">PinkDev</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/projects" className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
          <Link to="/resume" className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}>Resume</Link>
          <Link to="/about" className="contact-btn">Contact Me</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <Link 
          to="/" 
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Projects
        </Link>
        <Link 
          to="/resume" 
          className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Resume
        </Link>
        <Link 
          to="/about" 
          className="contact-btn"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact Me
        </Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <h2 className="footer-headline">Let's create something magical! ✨</h2>
        <div className="socials">
          <a href="https://github.com/925754332-dev" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="mailto:925754332@qq.com" className="social-icon mail">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
        <p className="copyright">© 2024 PinkDev. Built with love and React.</p>
      </footer>
      <ChatWidget />
    </div>
  );
};

export default Layout;
