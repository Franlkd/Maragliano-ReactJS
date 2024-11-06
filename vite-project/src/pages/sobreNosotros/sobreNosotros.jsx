import React from 'react';

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros" id="sobre-nosotros">
      <div className="container">
        <h2 className="titulo">Sobre Nosotros</h2>
        <div className="contenido">
          <img 
            src="public/img/equipoDeTrabajo.jpg" 
            alt="Nuestro Equipo" 
            className="imagen-equipo"
          />
          <div className="texto">
            <p>
              En TecnoPC, nos dedicamos a la comercializacion de PCs armadas de marcas como Intel y AMD.
              Fundada en 2009, nuestro objetivo es la entrega de productos de calidad a un precio relativamente economico y sin perder el rendimiento que el usuario busca. 
              Contamos con un equipo de profesionales apasionados que se esfuerzan por 
              ofrecer la atencion y contribuccion de la más alta calidad.
            </p>
            <p>
              Creemos que hay una forma de entregar buen rendimiento a bajos costos, y nos comprometemos a entregar calidad y cudiar su bolsillo.
              Nuestra misión es llegar a una buena cantidad de clientes satisfechos y trabajamos constantemente para 
              superar las expectativas de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;