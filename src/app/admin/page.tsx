'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'
import axios from 'axios'

// Función para hacer la solicitud de inicio de sesión a la API de Laravel
const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login', {
      email,
      password,
    });
    return response.data; // Retorna la respuesta de la API
  } catch (error) {
    // Manejo de errores para obtener el mensaje adecuado
    const message = error.response?.data?.message || 'Error al iniciar sesión. Por favor, verifica tus credenciales.';
    throw new Error(message);
  }
}

export default function SignIn() {
  const router = useRouter()
  const { login: authLogin } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const data = await login(email, password)
      authLogin(data.user)
      toast.success('Inicio de sesión exitoso')
      router.push('/')
    } catch (error: any) {
      console.error('Error durante el inicio de sesión:', error)
      toast.error(error.message || 'Error al iniciar sesión. Por favor, verifica tus credenciales.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] p-4">
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
          <h1 className="text-3xl font-bold text-white">Iniciar sesión</h1>
          <p className="text-gray-400">
            ¿No tienes una cuenta?{' '}
            <Link href="/registro" className="text-[#7C3AED] hover:underline">
              Regístrate
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Email</label>
            <motion.div whileFocus={{ scale: 1.02 }}>
              <Input
                type="email"
                placeholder="Introduce tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-[#0F172A] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                required
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Contraseña</label>
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
                Recuérdame
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-[#7C3AED] hover:underline">
              ¿Olvidaste tu contraseña?
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
              {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </Button>
          </motion.div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#1E293B] text-gray-400">O continúa con</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          {[
            { icon: <Facebook size={20} />, href: "#" },
            { icon: <Twitter size={20} />, href: "#" },
            { icon: <Linkedin size={20} />, href: "#" },
            { icon: <Github size={20} />, href: "#" },
          ].map((social, index) => (
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
