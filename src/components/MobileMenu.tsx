import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ path: string; label: string }>;
}

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 md:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-black shadow-2xl"
      >
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mt-12 space-y-4">
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={onClose}
                  className="block px-4 py-3 text-lg font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;

