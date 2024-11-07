'use client'

import { Activity, Bell, Calendar, Layout, LogOut, Menu, MessageSquare, PieChart, Search, Settings, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress" // Asegúrate de que este componente acepte las nuevas propiedades
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ColorfulDashboard() {
  const [search, setSearch] = useState("")

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 bg-indigo-900 lg:block">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b border-indigo-800 px-4">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Image src="/FULL SPORTS.png" width={32} height={32} alt="Logo de Full Sports" className="rounded-md" />
              <span className="text-lg text-white">FULL SPORTS</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-indigo-200 transition-all hover:text-white hover:bg-indigo-800"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top navigation bar */}
        <header className="flex h-14 items-center gap-4 border-b border-indigo-800 bg-indigo-900 px-4 lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Alternar menú de navegación</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <nav className="flex flex-col h-full bg-indigo-900">
                <div className="flex h-14 items-center border-b border-indigo-800 px-4">
                  <Link className="flex items-center gap-2 font-semibold" href="#">
                    <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Logo de Full Sports" className="rounded-md" />
                    <span className="text-lg text-white">FULL SPORTS</span>
                  </Link>
                </div>
                <ul className="flex-1 overflow-y-auto py-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-indigo-200 transition-all hover:text-white hover:bg-indigo-800"
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  className="w-full bg-indigo-800 border-none pl-8 md:w-2/3 lg:w-1/3 text-white placeholder-indigo-300"
                  placeholder="Buscar eventos, equipos..."
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Alternar menú de notificaciones</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-indigo-900 text-white border-indigo-800">
              <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-indigo-800" />
              <DropdownMenuItem className="focus:bg-indigo-800 focus:text-white">Nuevo registro de equipo</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-indigo-800 focus:text-white">Recordatorio de evento próximo</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-indigo-800 focus:text-white">Reunión de entrenador programada</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage alt="Avatar del usuario" src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="sr-only">Alternar menú de usuario</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-indigo-900 text-white border-indigo-800">
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-indigo-800" />
              <DropdownMenuItem className="focus:bg-indigo-800 focus:text-white">Perfil</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-indigo-800 focus:text-white">Configuración</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-indigo-800 focus:text-white">
                <LogOut className="mr-2 h-4 w-4" />
                <Link href="/login">Cerrar sesión</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto py-6 px-4 lg:px-8">
          <Tabs defaultValue="overview">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-white">Panel de Control</h1>
              <TabsList className="bg-indigo-800">
                <TabsTrigger value="overview" className="data-[state=active]:bg-indigo-700 text-white">Resumen</TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:bg-indigo-700 text-white">Análisis</TabsTrigger>
                <TabsTrigger value="reports" className="data-[state=active]:bg-indigo-700 text-white">Informes</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gradient-to-br from-pink-500 to-orange-400 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Total de Atletas</CardTitle>
                    <Users className="w-4 h-4 text-white" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-pink-100">+10% desde el mes pasado</p>
                    <Progress value={75} className="mt-2" indicatorColor="bg-white" trackColor="bg-pink-700" />
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Equipos Activos</CardTitle>
                    <Users className="w-4 h-4 text-white" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">56</div>
                    <p className="text-xs text-indigo-100">+3 nuevos equipos esta semana</p>
                    <Progress value={65} className="mt-2" indicatorColor="bg-white" trackColor="bg-indigo-700" />
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-500 to-teal-400 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Próximos Eventos</CardTitle>
                    <Calendar className="w-4 h-4 text-white" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-green-100">Próximo evento en 3 días</p>
                    <Progress value={40} className="mt-2" indicatorColor="bg-white" trackColor="bg-green-700" />
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
                    <PieChart className="w-4 h-4 text-white" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$24,560</div>
                    <p className="text-xs text-yellow-100">+15% desde el último trimestre</p>
                    <Progress value={80} className="mt-2" indicatorColor="bg-white" trackColor="bg-yellow-600" />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="md:col-span-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Actividades Recientes</CardTitle>
                    <CardDescription className="text-indigo-200">Últimas actualizaciones de equipos y eventos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {activities.map((activity, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage alt={activity.user} src={`/placeholder.svg?height=32&width=32&text=${activity.user.charAt(0)}`} />
                            <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-white">{activity.action}</p>
                            <p className="text-xs text-indigo-200">{activity.time}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="md:col-span-3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Próximos Eventos</CardTitle>
                    <CardDescription className="text-indigo-200">Calendario para los próximos 7 días</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {events.map((event, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <div className="w-14 text-center">
                            <p className="text-sm font-medium text-white">{event.date}</p>
                            <p className="text-xs text-indigo-200">{event.day}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-white">{event.title}</p>
                            <p className="text-xs text-indigo-200">{event.location}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-white">Contenido de Análisis</CardTitle>
                  <CardDescription className="text-indigo-200">Aquí se mostrarán análisis detallados.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">Los datos y gráficos de análisis se implementarán aquí.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports">
              <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-white">Contenido de Informes</CardTitle>
                  <CardDescription className="text-indigo-200">Varios informes estarán disponibles aquí.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">La funcionalidad de generación y visualización de informes se implementará aquí.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        {/* User Session Component */}
        <aside className="hidden lg:block w-64 border-l border-indigo-800 bg-indigo-900 p-4">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage alt="John Doe" src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-white">John Doe</h3>
                <p className="text-sm text-indigo-300">Administrador</p>
              </div>
            </div>
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-indigo-200 hover:text-white hover:bg-indigo-800">
                <Activity className="mr-2 h-4 w-4" />
                Mis Actividades
              </Button>
              <Button variant="ghost" className="w-full justify-start text-indigo-200 hover:text-white hover:bg-indigo-800">
                <MessageSquare className="mr-2 h-4 w-4" />
                Mensajes
              </Button>
              <Button variant="ghost" className="w-full justify-start text-indigo-200 hover:text-white hover:bg-indigo-800">
                <Settings className="mr-2 h-4 w-4" />
                Configuración
              </Button>
            </nav>
            <div className="mt-auto">
              <Button variant="outline" className="w-full text-white border-indigo-400 hover:bg-indigo-800">
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar sesión
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

const navItems = [
  { name: "Panel de Control", icon: <Layout className="h-4 w-4" />, href: "#" },
  { name: "Equipos", icon: <Users className="h-4 w-4" />, href: "#" },
  { name: "Eventos", icon: <Calendar className="h-4 w-4" />, href: "#" },
  { name: "Mensajes", icon: <MessageSquare className="h-4 w-4" />, href: "#" },
  { name: "Análisis", icon: <PieChart className="h-4 w-4" />, href: "#" },
  { name: "Configuración", icon: <Settings className="h-4 w-4" />, href: "#" },
]

const activities = [
  { user: "John Doe", action: "Registró un nuevo equipo: Thunderbolts", time: "hace 2 horas" },
  { user: "Jane Smith", action: "Actualizó el calendario de eventos para la Liga de Verano", time: "hace 4 horas" },
  { user: "Mike Johnson", action: "Añadió nuevos perfiles de atletas", time: "Ayer a las 4:30 PM" },
  { user: "Sarah Williams", action: "Confirmó la reserva del lugar para el Campeonato", time: "hace 2 días" },
]

const events = [
  { date: "Jun 12", day: "Lun", title: "Torneo de Fútbol Junior", location: "Estadio Central" },
  { date: "Jun 14", day: "Mié", title: "Competencia de Natación", location: "Centro Acuático" },
  { date: "Jun 16", day: "Vie", title: "Apertura de la Liga de Baloncesto", location: "Complejo Deportivo" },
  { date: "Jun 18", day: "Dom", title: "Campeonato de Atletismo", location: "Pista de la Ciudad" },
]