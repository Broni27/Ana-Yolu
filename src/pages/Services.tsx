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
      title: 'In Vitro Fertilization (IVF)',
      description: 'Advanced IVF treatment with the latest technology and highest success rates',
      features: ['ICSI', 'Embryo Transfer', 'Blastocyst Culture'],
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Preimplantation Genetic Testing',
      description: 'Comprehensive genetic screening for healthy embryos',
      features: ['PGT-A', 'PGT-M', 'PGT-SR'],
    },
    {
      icon: <Dna className="w-8 h-8" />,
      title: 'Egg & Sperm Freezing',
      description: 'Fertility preservation for your future family planning',
      features: ['Vitrification', 'Long-term Storage', 'High Success Rate'],
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Fertility Assessment',
      description: 'Comprehensive evaluation of reproductive health',
      features: ['Hormone Testing', 'Ultrasound', 'Semen Analysis'],
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Male Infertility Treatment',
      description: 'Specialized treatment for male factor infertility',
      features: ['TESE', 'MESA', 'Sperm Selection'],
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: 'Ovulation Induction',
      description: 'Controlled ovarian stimulation protocols',
      features: ['IUI', 'Timed Intercourse', 'Monitoring'],
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Donor Programs',
      description: 'Egg and sperm donor services',
      features: ['Donor Screening', 'Anonymous Donation', 'Legal Support'],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Endometrial Receptivity',
      description: 'Optimizing uterine lining for implantation',
      features: ['ERA Test', 'Endometrial Scratch', 'Mock Cycle'],
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
        keywords="IVF treatment, ICSI, egg freezing, sperm freezing, genetic testing, fertility services"
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
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="text-xs text-gray-500 dark:text-gray-500 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2" />
                    {feature}
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
          <h2 className="heading-2 mb-12">Our Treatment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Initial Consultation', desc: 'Meet with our specialists' },
              { step: '2', title: 'Testing & Diagnosis', desc: 'Comprehensive evaluation' },
              { step: '3', title: 'Treatment Plan', desc: 'Personalized protocol' },
              { step: '4', title: 'Follow-up Care', desc: 'Continuous support' },
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
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
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
          <h2 className="heading-3 mb-4">Start Your Journey Today</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Schedule a consultation to learn more about our services and how we
            can help you achieve your dream of parenthood.
          </p>
          <button className="btn-primary">Book Appointment</button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;

