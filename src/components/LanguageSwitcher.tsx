import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'az' ? 'en' : 'az');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-300"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {i18n.language === 'az' ? 'EN' : 'AZ'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;

