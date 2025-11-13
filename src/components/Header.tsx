import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoRotation, setLogoRotation] = useState(0);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем мобильное меню при изменении маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Закрываем мобильное меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('nav') && !target.closest('button[aria-label="Toggle menu"]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'az' ? 'en' : 'az');
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/team', label: t('nav.team') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onMouseEnter={() => setLogoRotation(prev => prev + 360)}
          >
            <img
              src={logo}
              alt="Genesis Clinic"
              className="h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110"
              style={{ transform: `rotate(${logoRotation}deg)` }}
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-gradient">
                Genesis
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {t('home.subtitle')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-gold-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gold-500'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* Theme & Language Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all transform hover:scale-110 active:scale-90"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gold-500" />
              ) : (
                <Moon className="w-5 h-5 text-gold-500" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all transform hover:scale-110 active:scale-90 flex items-center space-x-1"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5 text-gold-500" />
              <span className="text-xs font-medium text-gold-500">
                {i18n.language === 'az' ? 'EN' : 'AZ'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all transform hover:scale-110 active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gold-500" />
              ) : (
                <Menu className="w-6 h-6 text-gold-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 transition-all duration-300 ease-out opacity-0 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-gold-500 text-black'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

