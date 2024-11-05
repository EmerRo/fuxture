'use client'

import { motion } from 'framer-motion'
import { TrendingUp, BarChart2, Users } from 'lucide-react'

const features = [
  { 
    icon: <TrendingUp className="h-12 w-12 text-[#38BDF8]" />,
    title: "Estadísticas en tiempo real",
    description: "Accede a estadísticas detalladas y actualizadas al instante de tus deportes y equipos favoritos."
  },
  {
    icon: <BarChart2 className="h-12 w-12 text-[#38BDF8]" />,
    title: "Análisis avanzados",
    description: "Obtén insights profundos con nuestros análisis avanzados de rendimiento de equipos y jugadores."
  },
  {
    icon: <Users className="h-12 w-12 text-[#38BDF8]" />,
    title: "Comunidad de fanáticos",
    description: "Conecta con otros aficionados, comparte opiniones y participa en discusiones apasionantes."
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-[#1E293B]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¿Por qué elegir Deporstar?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-[#0F172A] p-6 rounded-lg text-white hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}