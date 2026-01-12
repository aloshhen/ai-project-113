import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/background-beams'

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <BackgroundBeams />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
          Electric Coffee
        </h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
          Transforming your coffee experience with cutting-edge technology and premium taste.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-8 py-3 rounded-full"
        >
          Order Now
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Hero