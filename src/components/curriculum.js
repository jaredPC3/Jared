import React from 'react';
import './curriculum.css'; // Importación de estilos CSS

// --- Componente principal Curriculum (encapsulamiento) ---
// Este componente encapsula todo el contenido del currículum vitae,
// permitiendo que se reutilice fácilmente dentro de una aplicación React.

const Curriculum = () => {
  
  return (
    // --- Contenedor principal ---
    <div className="curriculum-container">
      
      {/* --- HEADER (Inicio) --- */}
      {/* Nodo de encabezado que contiene el nombre, correo, GitHub y teléfono del usuario */}
      <header>
        <h1>Jared Pérez Centeno</h1>
        <p>Emiliano Zapata | <a href="mailto:jared.pc.003@gmail.com">jared.pc.003@gmail.com</a> | GitHub: <a href="https://github.com/JaredPC3" target="_blank" rel="noopener noreferrer">JaredPC3</a></p>
        <p>Teléfono: 934-102-8371</p>
      </header>
      {/* --- HEADER (Fin) --- */}

      {/* --- EDUCACIÓN (Inicio) --- */}
      {/* Nodo que muestra la educación actual y previa del usuario */}
      <section className="education-section">
        <h2>Educación</h2>
        <p><strong>Universidad Juárez Autónoma de Tabasco (UJAT)</strong></p>
        <p>División Académica de Ciencias y Tecnologías de la Información (DACyTI)</p>
        <p>Ingeniería en Sistemas</p>
        <p>Año de egreso: En curso</p>

        <h3>Formación previa</h3>
        <ul>
          <li>Preparatoria - Completada</li>
          <li>Secundaria - Completada</li>
          <li>Primaria - Completada</li>
        </ul>
      </section>
      {/* --- EDUCACIÓN (Fin) --- */}

      {/* --- PROYECTOS (Inicio) --- */}
      {/* Nodo que presenta proyectos personales y experiencias de voluntariado */}
      <section className="projects-section">
        <h2>Proyectos y Voluntariados</h2>
        <p><strong>Sistema Experto en Python</strong></p>
        <p>Desarrollo de un sistema con Tkinter para realizar un test de depresión basado en preguntas de opción múltiple.</p>

        <p><strong>Investigación: Impacto de las Emociones en Estudiantes</strong></p>
        <p>Estudio de probabilidad y estadística sobre cómo las emociones afectan el rendimiento académico en DACyTI.</p>
      </section>
      {/* --- PROYECTOS (Fin) --- */}

      {/* --- HABILIDADES (Inicio) --- */}
      {/* Nodo donde se listan las habilidades del usuario, tanto técnicas como lingüísticas */}
      <section className="skills-section">
        <h2>Habilidades</h2>
        <ul>
          <li>Python (básico)</li>
          <li>Tkinter, Visual Studio Code</li>
          <li>Español (nativo), Inglés (básico - 2 niveles en CELE)</li>
        </ul>
      </section>
      {/* --- HABILIDADES (Fin) --- */}

      {/* --- FOOTER (Inicio) --- */}
      {/* Nodo final que contiene información de derechos de autor */}
      <footer>
        <p>© 2025 - Jared Pérez Centeno</p>
      </footer>
      {/* --- FOOTER (Fin) --- */}

    </div>
    // --- Fin del contenedor principal ---
  );
};

// --- Exportación del componente Curriculum ---
// Esto permite importar y utilizar este componente en otras partes de la aplicación React.
export default Curriculum;
