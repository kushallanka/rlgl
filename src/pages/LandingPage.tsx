import { ArrowRight, ClipboardList } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8"
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
            boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)',
          }}
        >
          <ClipboardList className="w-12 h-12 text-white" />
        </motion.div>
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-violet-600 to-pink-600 dark:text-gradient bg-clip-text text-transparent">
            RedLight
          </span>
          <span className="text-gray-400 mx-2">-</span>
          <span className="text-gray-900 dark:text-white">GreenLight</span>
        </h1>
        <p className="text-xl text-gray-500 dark:text-white/60 mb-8">Enterprise Test Management Platform</p>
        <Link
          to="/login"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-lg"
          style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)',
          }}
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
