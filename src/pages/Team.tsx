import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart } from 'lucide-react';
import ParticlesBackground from '@/components/ParticlesBackground';
import SEO from '@/components/SEO';

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      nameKey: 'team.members.lead.name',
      roleKey: 'team.members.lead.role',
      experienceKey: 'team.members.lead.experience',
      specializationKey: 'team.members.lead.specialization',
    },
    {
      nameKey: 'team.members.embryologist.name',
      roleKey: 'team.members.embryologist.role',
      experienceKey: 'team.members.embryologist.experience',
      specializationKey: 'team.members.embryologist.specialization',
    },
    {
      nameKey: 'team.members.fertility.name',
      roleKey: 'team.members.fertility.role',
      experienceKey: 'team.members.fertility.experience',
      specializationKey: 'team.members.fertility.specialization',
    },
    {
      nameKey: 'team.members.andrologist.name',
      roleKey: 'team.members.andrologist.role',
      experienceKey: 'team.members.andrologist.experience',
      specializationKey: 'team.members.andrologist.specialization',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        title={t('team.title')}
        description={t('team.description')}
          keywords={t('team.seo.keywords')}
      />
      <ParticlesBackground />

      {/* Header */}
      <section className="section-container text-center">
        <div className="fade-in">
          <h1 className="heading-1 mb-4">{t('team.title')}</h1>
          <p className="text-xl text-gradient font-semibold mb-6">
            {t('team.subtitle')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('team.description')}
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="card p-6"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <Award className="w-12 h-12 text-gold-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                  {t(member.nameKey)}
              </h3>
              <p className="text-sm text-gold-600 dark:text-gold-400 text-center mb-4">
                {t(member.roleKey)}
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-gold-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {t(member.specializationKey)}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Heart className="w-4 h-4 text-gold-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {t(member.experienceKey)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Join Team CTA */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="card p-12 text-center"
        >
          <h2 className="heading-3 mb-4">{t('team.cta.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            {t('team.cta.description')}
          </p>
          <button className="btn-primary">{t('team.cta.button')}</button>
        </motion.div>
      </section>
    </div>
  );
};

export default Team;

