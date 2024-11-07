'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Bell, ChevronDown, Menu, User } from 'lucide-react'

const data = [
  { name: 'Ene', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Abr', value: 278 },
  { name: 'May', value: 189 },
]

const recentActivities = [
  { id: 1, user: 'John Doe', action: 'completó un entrenamiento', time: 'hace 2 horas' },
  { id: 2, user: 'Jane Smith', action: 'estableció un nuevo récord personal', time: 'hace 4 horas' },
  { id: 3, user: 'Mike Johnson', action: 'se unió a un nuevo equipo', time: 'hace 1 día' },
]

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Barra lateral */}
      <aside className="hidden w-64 bg-white dark:bg-gray-800 md:block">
        <div className="flex h-20 items-center justify-center border-b">
          <h2 className="text-2xl font-bold text-blue-600">FULL SPORTS</h2>
        </div>
        <nav className="mt-6 px-4">
          <Button variant="ghost" className="w-full justify-start text-left mb-2">
            <User className="mr-2 h-4 w-4" />
            Perfil
          </Button>
          <Button variant="ghost" className="w-full justify-start text-left mb-2">
            <Bell className="mr-2 h-4 w-4" />
            Notificaciones
          </Button>
          {/* Agregar más elementos del menú según sea necesario */}
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navegación superior */}
        <header className="flex h-20 items-center justify-between border-b bg-white px-6 dark:bg-gray-800">
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center">
            <Input
              type="search"
              placeholder="Buscar..."
              className="mr-4 w-64" 
            />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Contenido del Dashboard */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 dark:bg-gray-900">
          <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Tarjetas de estadísticas */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de usuarios</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+20.1% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sesiones activas</CardTitle>
                <Bell className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+15% desde la última hora</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,345</div>
                <p className="text-xs text-muted-foreground">+7% desde la semana pasada</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Gráfico */}
            <Card>
              <CardHeader>
                <CardTitle>Actividad mensual</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Calendario */}
            <Card>
              <CardHeader>
                <CardTitle>Agenda</CardTitle>
                <CardDescription>Planifica tus actividades</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>

          {/* Actividad reciente */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Actividad reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.user}</p>
                      <p className="text-sm text-gray-500">{activity.action}</p>
                    </div>
                    <Badge variant="secondary">{activity.time}</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
