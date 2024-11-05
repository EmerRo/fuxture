'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

const sports = [
  { name: "Fútbol", image: "/futbol1.jpg", description: "El deporte rey, con las mejores ligas y competiciones." },
  { name: "Baloncesto", image: "/futbol3.jpg", description: "Sigue la NBA y las principales ligas europeas." },
  { name: "Tenis", image: "/futbol4.jpg", description: "Grand Slams, ATP y WTA tours en un solo lugar." },
  { name: "Fórmula 1", image: "/estadio.jpg", description: "Toda la emoción de las carreras y el mundo del motor." },
]

export default function SportsSection() {
  const [selectedSport, setSelectedSport] = useState(null)

  return (
    <section className="bg-[#0F172A] py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explora tus deportes favoritos
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sports.map((sport, index) => (
            <motion.div 
              key={index}
              className="bg-[#1E293B] rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              layoutId={`sport-${index}`}
              onClick={() => setSelectedSport(sport)}
            >
              <Image src={sport.image} width={300} height={200} alt={sport.name} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{sport.name}</h3>
                <Button className="w-full bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A]">Ver más</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedSport && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1E293B] p-6 rounded-lg max-w-md w-full"
              layoutId={`sport-${sports.indexOf(selectedSport)}`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{selectedSport.name}</h3>
              <p className="text-gray-300 mb-4">{selectedSport.description}</p>
              <Button onClick={() => setSelectedSport(null)} className="w-full bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A]">
                Cerrar
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}