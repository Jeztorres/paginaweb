import React, { useState } from 'react';
import { Bell, Calendar, Info, X } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface Anuncio {
  id: number;
  titulo: string;
  resumen: string;
  fecha: string;
  categoria: string;
  imagen: string;
  contenidoCompleto: string;
  detalles?: string[];
}

const Anuncios = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [anuncioSeleccionado, setAnuncioSeleccionado] = useState<Anuncio | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const anuncios: Anuncio[] = [
    {
      id: 1,
      titulo: "Gran Feria a \"La Preciosa Sangre de Cristo\" Patria Nueva 2025",
      resumen: "¡La fiesta más grande del año! Tradición que late con fuerza en el corazón del Mezquital.",
      fecha: "1 de Julio, 2025",
      categoria: "Feria Patronal",
      imagen: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      contenidoCompleto: "¡La fiesta más grande del año! Tradición que late con fuerza: coronación de la reina, bailes populares y ambiente familiar en el corazón del Mezquital. ¡Nos vemos en la feria!",
      detalles: [
        "Ubicación: Centro de Patria Nueva, Santiago de Anaya, Hidalgo",
        "Coronación de la reina de la feria",
        "Bailes populares y música en vivo",
        "Juegos mecánicos para toda la familia",
        "Charreadas y jaripeo nocturno",
        "Espectáculos de fuegos artificiales",
        "Ambiente familiar y comunitario"
      ]
    },
    {
      id: 2,
      titulo: "Censo Comunitario 2025",
      resumen: "Participa en el censo oficial de nuestra comunidad para mejorar nuestros servicios.",
      fecha: "1 de Febrero, 2025",
      categoria: "Gobierno",
      imagen: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      contenidoCompleto: "El censo comunitario nos ayudará a conocer mejor las necesidades de nuestros habitantes y planificar el desarrollo futuro de Patria Nueva. Tu participación es fundamental.",
      detalles: [
        "Fecha límite: 28 de febrero",
        "Modalidad: Casa por casa",
        "Duración: 15 minutos por familia",
        "Información requerida: Datos demográficos y socioeconómicos"
      ]
    },
    {
      id: 3,
      titulo: "Programa de Becas Estudiantiles",
      resumen: "Convocatoria abierta para becas de estudios de nivel medio superior y superior.",
      fecha: "10 de Marzo, 2025",
      categoria: "Educación",
      imagen: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      contenidoCompleto: "La comunidad de Patria Nueva anuncia la apertura de su programa anual de becas estudiantiles, destinado a apoyar la educación de nuestros jóvenes más destacados.",
      detalles: [
        "Becas disponibles: 25",
        "Monto por beca: $8,000 - $15,000 MXN",
        "Requisitos: Promedio mínimo 8.5",
        "Documentos: Certificados, comprobante de ingresos, ensayo"
      ]
    }
  ];

  const abrirModal = (anuncio: Anuncio) => {
    setAnuncioSeleccionado(anuncio);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setAnuncioSeleccionado(null);
  };

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'Feria Patronal': return 'bg-terracota';
      case 'Gobierno': return 'bg-olive-green';
      case 'Educación': return 'bg-sky-blue';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div
      ref={ref}
      className={`py-20 bg-gradient-to-br from-cream to-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Bell className="text-terracota" size={48} />
          </div>
          <h2 className="text-5xl font-bold text-olive-green mb-6">Anuncios Importantes</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mantente informado sobre las noticias y desarrollos más importantes de nuestra comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {anuncios.map((anuncio) => (
            <div key={anuncio.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48">
                <img 
                  src={anuncio.imagen} 
                  alt={anuncio.titulo}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 ${getCategoriaColor(anuncio.categoria)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {anuncio.categoria}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  {anuncio.fecha}
                </div>
                
                <h3 className="text-xl font-bold text-olive-green mb-3 line-clamp-2">
                  {anuncio.titulo}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {anuncio.resumen}
                </p>
                
                <button
                  onClick={() => abrirModal(anuncio)}
                  className="w-full bg-terracota hover:bg-opacity-90 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
                >
                  <Info size={18} />
                  <span>Más Información</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalAbierto && anuncioSeleccionado && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={anuncioSeleccionado.imagen} 
                  alt={anuncioSeleccionado.titulo}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={cerrarModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className={`absolute bottom-4 left-4 ${getCategoriaColor(anuncioSeleccionado.categoria)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {anuncioSeleccionado.categoria}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  {anuncioSeleccionado.fecha}
                </div>
                
                <h2 className="text-3xl font-bold text-olive-green mb-6">
                  {anuncioSeleccionado.titulo}
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {anuncioSeleccionado.contenidoCompleto}
                </p>
                
                {anuncioSeleccionado.detalles && (
                  <div className="bg-cream rounded-lg p-6">
                    <h3 className="font-bold text-olive-green mb-4">Detalles Importantes:</h3>
                    <ul className="space-y-2">
                      {anuncioSeleccionado.detalles.map((detalle, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-terracota rounded-full mr-3"></div>
                          {detalle}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex justify-end mt-8">
                  <button
                    onClick={cerrarModal}
                    className="bg-olive-green hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Anuncios;
