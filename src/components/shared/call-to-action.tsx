'use client'

import { motion } from 'framer-motion'
// import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="bg-[#38BDF8] py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-[#0F172A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¿Listo para vivir el deporte como nunca antes?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 text-[#0F172A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Únete a miles de fanáticos que ya disfrutan de Deporstar
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            className="bg-[#0F172A] text-white hover:bg-[#1E293B] px-8 py-6 text-lg rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Regístrate gratis
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}