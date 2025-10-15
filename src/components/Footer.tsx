import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Genesis Clinic"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-display font-bold text-gradient">
                  Genesis
                </h3>
                <p className="text-xs text-gray-400">{t('home.subtitle')}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('home.description')}
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gold-500">
              {t('footer.contact')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t('footer.address')}</p>
                  <p className="text-sm text-gray-400">
                    Baku, Azerbaijan
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500" />
                <div>
                  <p className="text-sm font-medium">{t('footer.phone')}</p>
                  <p className="text-sm text-gray-400">+994 XX XXX XX XX</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500" />
                <div>
                  <p className="text-sm font-medium">{t('footer.email')}</p>
                  <p className="text-sm text-gray-400">info@anayolu.az</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gold-500">
              Working Hours
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-white">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-white">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white">Closed</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Genesis Clinic. {t('footer.rights')}.
          </p>
          <div className="flex items-center space-x-1 mt-4 sm:mt-0">
            <span className="text-sm text-gray-400">Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span className="text-sm text-gray-400">for families</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

