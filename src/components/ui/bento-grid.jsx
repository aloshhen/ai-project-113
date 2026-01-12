import { motion } from 'framer-motion'

export function BentoGrid({ children }) {
  return (
    <div className="grid md:grid-cols-4 gap-4 auto-rows-[200px]">
      {children}
    </div>
  )
}

export function BentoGridItem({ title, description, header, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      className={`bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 flex flex-col justify-between ${className}`}
    >
      <div className="mb-4">
        {header}
        <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
      </div>
      <p className="text-slate-300 text-sm">{description}</p>
    </motion.div>
  )
}