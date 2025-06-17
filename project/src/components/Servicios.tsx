import React from 'react';
import { Phone, Globe, Facebook, GraduationCap, Heart, Zap, Droplets, Wifi, Users } from 'lucide-react';

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  icono: React.ReactNode;
  contacto?: {
    telefono?: string;
    facebook?: string;
    website?: string;
  };
  detalles: string[];
  categoria: 'educacion' | 'salud' | 'basicos';
}

const Servicios = () => {
  const servicios: Servicio[] = [
    {
      id: 1,
      nombre: "Escuela Primaria Benito Juárez",
      descripcion: "Institución educativa que brinda educación básica de calidad a los niños de nuestra comunidad.",
      icono: <GraduationCap size={32} />,
      contacto: {
        telefono: "771-234-5678",
        facebook: "https://facebook.com/escuela.patrianueva"
      },
      detalles: [
        "Horario: 8:00 AM - 2:00 PM",
        "Grados: 1° a 6° de primaria",
        "Profesores certificados",
        "Programas de apoyo académico",
        "Actividades extracurriculares"
      ],
      categoria: 'educacion'
    },
    {
      id: 2,
      nombre: "Telesecundaria Rural",
      descripcion: "Educación secundaria mediante el sistema de telesecundaria para jóvenes de la región.",
      icono: <GraduationCap size={32} />,
      contacto: {
        telefono: "771-234-5679"
      },
      detalles: [
        "Horario: 8:00 AM - 2:30 PM",
        "Grados: 1° a 3° de secundaria",
        "Sistema telesecundaria",
        "Laboratorio de cómputo",
        "Orientación vocacional"
      ],
      categoria: 'educacion'
    },
    {
      id: 3,
      nombre: "Centro de Salud Rural",
      descripcion: "Atención médica básica y programas de prevención para toda la comunidad.",
      icono: <Heart size={32} />,
      contacto: {
        telefono: "771-234-5680"
      },
      detalles: [
        "Horario: 8:00 AM - 3:00 PM",
        "Consulta general",
        "Vacunación",
        "Control de embarazo",
        "Programas preventivos",
        "Emergencias 24/7"
      ],
      categoria: 'salud'
    },
    {
      id: 4,
      nombre: "Sistema de Agua Potable",
      descripcion: "Suministro de agua potable las 24 horas del día para todas las viviendas.",
      icono: <Droplets size={32} />,
      contacto: {
        telefono: "771-234-5681"
      },
      detalles: [
        "Servicio las 24 horas",
        "Agua potable certificada",
        "Red de distribución completa",
        "Mantenimiento regular",
        "Atención a fugas"
      ],
      categoria: 'basicos'
    },
    {
      id: 5,
      nombre: "Energía Eléctrica CFE",
      descripcion: "Suministro eléctrico confiable y servicios de atención al cliente.",
      icono: <Zap size={32} />,
      contacto: {
        telefono: "071",
        website: "https://www.cfe.mx"
      },
      detalles: [
        "Servicio 24/7",
        "Atención a fallas",
        "Facturación electrónica",
        "Programas de ahorro",
        "Servicios en línea"
      ],
      categoria: 'basicos'
    },
    {
      id: 6,
      nombre: "Internet Comunitario",
      descripcion: "Acceso a internet de alta velocidad en espacios públicos y centro comunitario.",
      icono: <Wifi size={32} />,
      contacto: {
        facebook: "https://facebook.com/internet.patrianueva"
      },
      detalles: [
        "WiFi gratuito en plaza",
        "Centro de cómputo",
        "Capacitación digital",
        "Soporte técnico",
        "Horario extendido"
      ],
      categoria: 'basicos'
    }
  ];

  const getCategoriaInfo = (categoria: string) => {
    switch (categoria) {
      case 'educacion':
        return { color: 'bg-terracota', titulo: 'Educación' };
      case 'salud':
        return { color: 'bg-sky-blue', titulo: 'Salud' };
      case 'basicos':
        return { color: 'bg-olive-green', titulo: 'Servicios Básicos' };
      default:
        return { color: 'bg-gray-500', titulo: 'Otros' };
    }
  };

  const handleContacto = (tipo: string, valor: string) => {
    if (tipo === 'telefono') {
      window.open(`tel:${valor}`, '_self');
    } else if (tipo === 'facebook') {
      window.open(valor, '_blank');
    } else if (tipo === 'website') {
      window.open(valor, '_blank');
    }
  };

  return (
    <div className="py-20 bg-cream" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Users className="text-olive-green" size={48} />
          </div>
          <h2 className="text-5xl font-bold text-olive-green mb-6">Servicios Comunitarios</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Conoce los servicios e instituciones que están disponibles para ti y tu familia en Patria Nueva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => {
            const categoriaInfo = getCategoriaInfo(servicio.categoria);
            
            return (
              <div key={servicio.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`${categoriaInfo.color} p-6 text-white text-center`}>
                  <div className="flex justify-center mb-4">
                    {servicio.icono}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{servicio.nombre}</h3>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {categoriaInfo.titulo}
                  </span>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {servicio.descripcion}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-olive-green mb-3">Información:</h4>
                    <ul className="space-y-2">
                      {servicio.detalles.map((detalle, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-terracota rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {detalle}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {servicio.contacto && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-olive-green mb-3">Contacto:</h4>
                      <div className="flex flex-wrap gap-2">
                        {servicio.contacto.telefono && (
                          <button
                            onClick={() => handleContacto('telefono', servicio.contacto!.telefono!)}
                            className="flex items-center space-x-2 bg-terracota hover:bg-opacity-90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
                          >
                            <Phone size={16} />
                            <span>Llamar</span>
                          </button>
                        )}
                        
                        {servicio.contacto.facebook && (
                          <button
                            onClick={() => handleContacto('facebook', servicio.contacto!.facebook!)}
                            className="flex items-center space-x-2 bg-sky-blue hover:bg-opacity-90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
                          >
                            <Facebook size={16} />
                            <span>Facebook</span>
                          </button>
                        )}
                        
                        {servicio.contacto.website && (
                          <button
                            onClick={() => handleContacto('website', servicio.contacto!.website!)}
                            className="flex items-center space-x-2 bg-olive-green hover:bg-opacity-90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
                          >
                            <Globe size={16} />
                            <span>Sitio Web</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-olive-green to-sky-blue rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">¿Necesitas Ayuda?</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Si requieres asistencia adicional o tienes preguntas sobre cualquiera de nuestros servicios, 
            no dudes en contactar a las autoridades locales o visitar nuestras oficinas comunitarias.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              Atención Ciudadana
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              Servicios Gratuitos
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              Apoyo Comunitario
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
