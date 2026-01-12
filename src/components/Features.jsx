import { motion } from 'framer-motion'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { Coffee, Zap, Shield, Clock } from 'lucide-react'

function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
        Why Electric Coffee?
      </h2>
      <BentoGrid>
        {features.map((feature, i) => (
          <BentoGridItem
            key={i}
            title={feature.title}
            description={feature.description}
            header={feature.icon}
            className={feature.className}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

const features = [
  {
    title: "Premium Beans",
    description: "Sourced from the world's finest coffee regions.",
    icon: <Coffee className="h-8 w-8 text-orange-500" />,
    className: "md:col-span-2"
  },
  {
    title: "Instant Brewing",
    description: "High-tech brewing methods for perfect taste.",
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    className: ""
  },
  {
    title: "Quality Guarantee",
    description: "Every cup meets our rigorous quality standards.",
    icon: <Shield className="h-8 w-8 text-green-500" />,
    className: ""
  },
  {
    title: "Fast Delivery",
    description: "From our coffee lab to your doorstep in minutes.",
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    className: "md:col-span-2"
  }
]

export default Features