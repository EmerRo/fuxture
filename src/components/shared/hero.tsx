'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-[#0F172A] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Vive la pasión del deporte con Full Sports
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Sigue a tus equipos favoritos, analiza estadísticas en tiempo real y conecta con otros fanáticos del deporte.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] px-8 py-6 text-lg w-full sm:w-auto">
              Comienza ahora
            </Button>
            <Button  className="bg-[#f34739] hover:bg-[#d63c30] text-[#0F172A] px-8 py-6 text-lg w-full sm:w-auto">
              Explora deportes          
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-[500px]">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/20 to-transparent rounded-lg"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/fondo1.png"
                alt="Jugador de fútbol en acción"
                fill
                className="object-contain"
                style={{ filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))' }}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-[#38BDF8] rounded-full p-3">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <div>
                  <motion.p 
                    className="font-bold text-lg"
                    animate={{ 
                      color: ['#FFFFFF', '#38BDF8', '#FFFFFF'],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    Super League 2024
                  </motion.p>
                  <p className="text-gray-300">¡Únete ahora!</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}