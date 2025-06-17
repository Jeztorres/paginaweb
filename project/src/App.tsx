import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Anuncios from './components/Anuncios';
import Eventos from './components/Eventos';
import Servicios from './components/Servicios';
import Traductor from './components/Traductor';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <section id="inicio" data-aos="fade-up">
          <Hero />
        </section>
        <section id="historia" data-aos="fade-up">
          <Historia />
        </section>
        <section id="anuncios" data-aos="fade-up">
          <Anuncios />
        </section>
        <section id="eventos" data-aos="fade-up">
          <Eventos />
        </section>
        <section id="servicios" data-aos="fade-up">
          <Servicios />
        </section>
        <section id="traductor" data-aos="fade-up">
          <Traductor />
        </section>
        <section id="contacto" data-aos="fade-up">
          <Contacto />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;