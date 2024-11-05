'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Fanático del fútbol",
    content: "Deporstar ha revolucionado la forma en que sigo a mi equipo. Las estadísticas en tiempo real y los análisis profundos son increíbles.",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Laura Martínez",
    role: "Entrenadora de baloncesto",
    content: "Como entrenadora, los análisis avanzados de Deporstar me han ayudado a mejorar las estrategias de mi equipo. Una herramienta imprescindible.",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Javier López",
    role: "Periodista deportivo",
    content: "La plataforma de Deporstar es mi fuente principal de información. Rápida, precisa y siempre actualizada. No puedo imaginar mi trabajo sin ella.",
    image: "/placeholder.svg?height=80&width=80"
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-[#1E293B] py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lo que dicen nuestros usuarios
        </motion.h2>
        <div  className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0F172A] p-8 rounded-lg shadow-xl"
            >
              <p className="text-gray-300 mb-6 text-lg italic">
                {testimonials[currentTestimonial].content}
             </p>
              <div className="flex items-center">
                <Image src={testimonials[currentTestimonial].image} width={80} height={80} alt={testimonials[currentTestimonial].name} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-white">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button 
              onClick={prevTestimonial} 
              className="p-2 rounded-full bg-[#38BDF8] text-[#0F172A] hover:bg-[#0EA5E9]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button 
              onClick={nextTestimonial} 
              className="p-2 rounded-full bg-[#38BDF8] text-[#0F172A] hover:bg-[#0EA5E9]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}