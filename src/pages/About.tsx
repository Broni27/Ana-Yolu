import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, Heart } from 'lucide-react';
import ParticlesBackground from '@/components/ParticlesBackground';
import SEO from '@/components/SEO';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '5,000+', labelKey: 'about.stats.families' },
    { icon: <Award className="w-8 h-8" />, value: '15+', labelKey: 'about.stats.experience' },
    { icon: <TrendingUp className="w-8 h-8" />, value: '75%', labelKey: 'about.stats.success' },
    { icon: <Heart className="w-8 h-8" />, value: '10,000+', labelKey: 'about.stats.procedures' },
  ];

  const values = [
    {
      titleKey: 'about.values.excellence.title',
      descriptionKey: 'about.values.excellence.description',
    },
    {
      titleKey: 'about.values.compassion.title',
      descriptionKey: 'about.values.compassion.description',
    },
    {
      titleKey: 'about.values.innovation.title',
      descriptionKey: 'about.values.innovation.description',
    },
    {
      titleKey: 'about.values.integrity.title',
      descriptionKey: 'about.values.integrity.description',
    },
  ];

  return (
    <div className="page-container pt-32">
      <SEO 
        title={t('about.title')}
        description={t('about.description')}
          keywords={t('about.seo.keywords')}
      />
      <ParticlesBackground />

      {/* Header */}
      <section className="section-container text-center">
        <div className="fade-in">
          <h1 className="heading-1 mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gradient font-semibold mb-6">
            {t('about.subtitle')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-900/20 text-gold-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t(stat.labelKey)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0.5, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="card p-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-900/20 text-gold-600 mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="heading-3 mb-4">{t('about.mission_title')}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t('about.mission_text')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="card p-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-900/20 text-gold-600 mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="heading-3 mb-4">{t('about.vision_title')}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t('about.vision_text')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-container bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="heading-2 text-center mb-12">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gold-600 mb-3">
                  {t(value.titleKey)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t(value.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="heading-2 text-center mb-12">{t('about.timeline.title')}</h2>
          <div className="max-w-3xl mx-auto">
            {[
              { year: '2010', titleKey: 'about.timeline.entries.0.title', descKey: 'about.timeline.entries.0.description' },
              { year: '2015', titleKey: 'about.timeline.entries.1.title', descKey: 'about.timeline.entries.1.description' },
              { year: '2020', titleKey: 'about.timeline.entries.2.title', descKey: 'about.timeline.entries.2.description' },
              { year: '2025', titleKey: 'about.timeline.entries.3.title', descKey: 'about.timeline.entries.3.description' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5, x: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="flex items-center mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <div className="text-2xl font-bold text-gold-500">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gold-500 mr-8" />
                <div className="flex-grow card p-6">
                  <h3 className="text-lg font-semibold mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t(item.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

