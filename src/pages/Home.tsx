import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background3D from '@/components/Background3D';
import SEO from '@/components/SEO';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Modern Technology',
      description: 'State-of-the-art IVF technology and equipment',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Personalized Care',
      description: 'Individual approach to each patient',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Highly qualified specialists',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0.5, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="page-container">
      <SEO 
        title={t('home.title')}
        description={t('home.description')}
        keywords="IVF, fertility treatment, Azerbaijan, Genesis, reproductive medicine, infertility"
      />
      <Background3D />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="text-center z-10 px-4">
          <div className="mb-6 fade-in">
            <img
              src="/logo.png"
              alt="Genesis Clinic"
              className="w-32 h-32 mx-auto object-contain animate-float"
            />
          </div>

          <h1 className="heading-1 mb-4 fade-in delay-100">
            {t('home.title')}
          </h1>

          <p className="text-xl sm:text-2xl text-gradient font-semibold mb-6 fade-in delay-200">
            {t('home.subtitle')}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 fade-in delay-300">
            {t('home.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in delay-400">
            <button className="btn-primary flex items-center space-x-2">
              <span>{t('home.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link to="/about" className="btn-secondary">
              {t('home.learn_more')}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in delay-500">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold-500 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gold-500 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-900/20 text-gold-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-2 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Take the first step towards building your family with Azerbaijan's
            leading IVF clinic.
          </p>
          <button className="btn-primary">
            Schedule a Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

