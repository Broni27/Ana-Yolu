import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="w-16 h-16 border-4 border-gold-200 border-t-gold-500 rounded-full"
      />
    </div>
  );
};

export default LoadingSpinner;

