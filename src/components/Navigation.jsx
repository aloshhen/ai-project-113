import { motion } from 'framer-motion'
import { Coffee, Menu } from 'lucide-react'

function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 w-full z-50 bg-slate-900/50 backdrop-blur-md"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Coffee className="text-orange-500" />
          <h1 className="text-xl font-bold text-white">Electric Coffee</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-orange-500 transition">Menu</a>
          <a href="#" className="text-white hover:text-orange-500 transition">Order</a>
          <a href="#" className="text-white hover:text-orange-500 transition">About</a>
        </div>
        <Menu className="md:hidden text-white" />
      </div>
    </motion.nav>
  )
}

export default Navigation