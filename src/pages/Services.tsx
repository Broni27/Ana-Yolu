import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Microscope, 
  TestTube, 
  Activity, 
  Dna, 
  Stethoscope,
  HeartPulse,
  Baby,
  Sparkles
} from 'lucide-react';
import Background3D from '@/components/Background3D';
import SEO from '@/components/SEO';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <TestTube className="w-8 h-8" />,
      titleKey: 'services.items.ivf.title',
      descriptionKey: 'services.items.ivf.description',
      featuresKeys: [
        'services.items.ivf.features.0',
        'services.items.ivf.features.1',
        'services.items.ivf.features.2',
      ],
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      titleKey: 'services.items.pgt.title',
      descriptionKey: 'services.items.pgt.description',
      featuresKeys: [
        'services.items.pgt.features.0',
        'services.items.pgt.features.1',
        'services.items.pgt.features.2',
      ],
    },
    {
      icon: <Dna className="w-8 h-8" />,
      titleKey: 'services.items.freezing.title',
      descriptionKey: 'services.items.freezing.description',
      featuresKeys: [
        'services.items.freezing.features.0',
        'services.items.freezing.features.1',
        'services.items.freezing.features.2',
      ],
    },
    {
      icon: <Activity className="w-8 h-8" />,
      titleKey: 'services.items.assessment.title',
      descriptionKey: 'services.items.assessment.description',
      featuresKeys: [
        'services.items.assessment.features.0',
        'services.items.assessment.features.1',
        'services.items.assessment.features.2',
      ],
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      titleKey: 'services.items.male.title',
      descriptionKey: 'services.items.male.description',
      featuresKeys: [
        'services.items.male.features.0',
        'services.items.male.features.1',
        'services.items.male.features.2',
      ],
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      titleKey: 'services.items.ovulation.title',
      descriptionKey: 'services.items.ovulation.description',
      featuresKeys: [
        'services.items.ovulation.features.0',
        'services.items.ovulation.features.1',
        'services.items.ovulation.features.2',
      ],
    },
    {
      icon: <Baby className="w-8 h-8" />,
      titleKey: 'services.items.donor.title',
      descriptionKey: 'services.items.donor.description',
      featuresKeys: [
        'services.items.donor.features.0',
        'services.items.donor.features.1',
        'services.items.donor.features.2',
      ],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      titleKey: 'services.items.endometrial.title',
      descriptionKey: 'services.items.endometrial.description',
      featuresKeys: [
        'services.items.endometrial.features.0',
        'services.items.endometrial.features.1',
        'services.items.endometrial.features.2',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <div className="page-container pt-32">
      <SEO 
        title={t('services.title')}
        description={t('services.description')}
        keywords={t('services.seo.keywords')}
      />
      <Background3D />

      {/* Header */}
      <section className="section-container text-center">
        <div className="fade-in">
          <h1 className="heading-1 mb-4">{t('services.title')}</h1>
          <p className="text-xl text-gradient font-semibold mb-6">
            {t('services.subtitle')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card p-6 flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-100 dark:bg-gold-900/20 text-gold-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(service.titleKey)}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {t(service.descriptionKey)}
              </p>
              <ul className="space-y-1">
                {service.featuresKeys.map((featureKey, fIndex) => (
                  <li
                    key={fIndex}
                    className="text-xs text-gray-500 dark:text-gray-500 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2" />
                    {t(featureKey)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="section-container bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="heading-2 mb-12">{t('services.process.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', titleKey: 'services.process.steps.0.title', descKey: 'services.process.steps.0.description' },
              { step: '2', titleKey: 'services.process.steps.1.title', descKey: 'services.process.steps.1.description' },
              { step: '3', titleKey: 'services.process.steps.2.title', descKey: 'services.process.steps.2.description' },
              { step: '4', titleKey: 'services.process.steps.3.title', descKey: 'services.process.steps.3.description' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500 text-white flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="card p-12 text-center"
        >
          <h2 className="heading-3 mb-4">{t('services.cta.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            {t('services.cta.description')}
          </p>
          <button className="btn-primary">{t('services.cta.button')}</button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;

