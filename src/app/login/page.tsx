'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'
import { toast, Toaster } from 'sonner'
import Image from 'next/image'

export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Verificación de credenciales
    if (email === "admin@gmail.com" && password === "123") {
      await toast.success('Bienvenido Admin!')  // Mostrar mensaje antes de redirigir
      router.push('/login/panel')               // Redirigir después
    } else {
      toast.error('Credenciales incorrectas. Intenta nuevamente.')
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] p-4">
      <Toaster /> {/* Muestra el contenedor para los mensajes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-6 bg-[#1E293B] p-8 rounded-xl shadow-xl"
      >
        <Link href="/" className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-[#7C3AED] rounded-full flex items-center justify-center overflow-hidden"
          >
            <Image
              src="/FULL SPORTS.png"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </motion.div>
        </Link>

        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-white">Iniciar Sesion</h1>
          <p className="text-gray-400">
            No tienes una cuenta?{' '}
            <Link href="/registro" className="text-[#7C3AED] hover:underline">
            registrarse
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Email</label>
            <motion.div whileFocus={{ scale: 1.02 }}>
              <Input
                type="email"
                placeholder="Correo Electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-[#0F172A] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                required
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Password</label>
            <motion.div whileFocus={{ scale: 1.02 }}>
              <Input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-[#0F172A] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                required
              />
            </motion.div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-gray-700 data-[state=checked]:bg-[#7C3AED]" />
              <label htmlFor="remember" className="text-sm text-gray-400">
                recordarme
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-[#7C3AED] hover:underline">
              Olvidaste Tu contraseña?
            </Link>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-2 rounded-md transition-colors"
            >
              {isLoading ? 'Signing in...' : 'Iniciar Sesion'}
            </Button>
          </motion.div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#1E293B] text-gray-400">Continuar con</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          {[{ icon: <Facebook size={20} />, href: "#" }, { icon: <Twitter size={20} />, href: "#" }, { icon: <Linkedin size={20} />, href: "#" }, { icon: <Github size={20} />, href: "#" }].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="p-2 bg-[#0F172A] text-gray-400 rounded-md hover:text-[#7C3AED] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}