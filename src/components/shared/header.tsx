'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/FULL SPORTS.png" alt="Deporstar Logo" width={40} height={40} />
          <span className="text-2xl font-bold">Full Sports</span>
        </Link>
        <nav className="hidden lg:flex space-x-8">
          {['Inicio', 'Deportes', 'Ligas', 'Equipos', 'Jugadores'].map((item) => (
            <Link key={item} href="#" className="hover:text-[#38BDF8] transition-colors">
              {item}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Button asChild variant="default" className="bg-[#f34739] text-white hover:bg-[#d63c30]">
              <Link href="../login">Iniciar Sesión</Link>
          </Button>
          <Button className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A]">
            <Link href="../registro">Registrarse</Link>
         </Button>
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1E293B]">
          <nav className="flex flex-col space-y-4 p-4">
            {['Inicio', 'Deportes', 'Ligas', 'Equipos', 'Jugadores'].map((item) => (
              <Link key={item} href="#" className="hover:text-[#38BDF8] transition-colors">
                {item}
              </Link>
            ))}
            <Button className="bg-[#f34739] text-white hover:bg-[#d63c30]">
             <Link href="../login">Iniciar Sesion</Link>
            </Button>
            <Button className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] w-full">
             <Link href="../registro">Registrarse</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}