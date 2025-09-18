import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Shadow on scroll & active link tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Features', id: 'features' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-500 ${
        isScrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-105">
          VISION
          <span className="text-black">X</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeLink === link.id
                  ? 'text-black'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              {link.name}
              {activeLink === link.id && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-black rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={menuRef}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
              className={`py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                activeLink === link.id
                  ? 'text-black bg-gray-100'
                  : 'text-gray-700 hover:text-black hover:bg-gray-50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
