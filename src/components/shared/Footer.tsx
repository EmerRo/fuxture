'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerSections = [
  { title: "Deportes", links: ["Fútbol", "Baloncesto", "Tenis", "Fórmula 1"] },
  { title: "Compañía", links: ["Sobre nosotros", "Carreras", "Prensa", "Blog"] },
  { title: "Soporte", links: ["Centro de ayuda", "Contacto", "Política de privacidad", "Términos de uso"] },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Full Sport</h3>
            <p className="text-gray-400 mb-4">Tu plataforma definitiva para seguir y analizar todos los deportes en un solo lugar.</p>
          </motion.div>
          {footerSections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link href="#" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; 2023 Deporstar. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}