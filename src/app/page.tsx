import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/estadio.jpg" // Asegúrate de tener una imagen de estadio en public/
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay translúcido */}
          <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm"></div>
        </div>

        {/* Contenido - note el z-10 para ponerlo sobre el fondo */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Administra Torneos de Fútbol
              </h1>
              <p className="text-xl mb-8">
                Una app web gratuita que será tu mejor aliada organizando
                campeonatos de fútbol
              </p>
              <div className="flex gap-4">
                <Link
                  href="/registro"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
                >
                  Crea Torneos
                </Link>
                <Link
                  href="/torneos"
                  className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
                >
                  Comenzar
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/fondo1.png"
                alt="Fixture System"
                width={600}
                height={400}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Características Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Torneos Destacados */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Torneos Destacados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {torneos.map((torneo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <Image
                  src={torneo.imagen}
                  alt={torneo.nombre}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {torneo.nombre}
                  </h3>
                  <p className="text-gray-600 mb-4">{torneo.descripcion}</p>
                  <Link
                    href={`/torneos/${torneo.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Ver más →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Únete a nuestra plataforma y comienza a gestionar tus torneos
          </p>
          <Link
            href="/registro"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Crear Cuenta Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "🏆",
    title: "Gestión de Torneos",
    description: "Crea y administra múltiples torneos de manera sencilla.",
  },
  {
    icon: "📅",
    title: "Fixture Automático",
    description: "Genera calendarios de partidos automáticamente.",
  },
  {
    icon: "📊",
    title: "Estadísticas en Tiempo Real",
    description: "Seguimiento de resultados y posiciones actualizadas.",
  },
];

const torneos = [
  {
    id: 1,
    nombre: "Liga Amateur 2024",
    descripcion: "Torneo de fútbol amateur con 12 equipos participantes",
    imagen: "/futbol1.jpg",
  },
  {
    id: 2,
    nombre: "Copa Empresarial",
    descripcion: "Torneo interempresas con 16 equipos participantes",
    imagen: "/futbol3.jpg",
  },
  {
    id: 3,
    nombre: "Torneo Juvenil",
    descripcion: "Competencia para categorías sub-18",
    imagen: "/futbol4.jpg",
  },
];
