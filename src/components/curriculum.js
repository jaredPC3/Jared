// 1. Importamos React y el archivo CSS
import React from 'react';
import './curriculum.css'; // Asegúrate de crear este archivo en la misma carpeta

// 2. Definimos el componente como una función
const Curriculum = () => {
  // 3. El contenido HTML va dentro del RETURN
  return (
    // 4. En React usamos className en lugar de class (div contenedor)
    <div className="curriculum-container">
      
      {/* --- HEADER --- */}
      <header>
        <h1>Jared Pérez Centeno</h1>
        <p>Emiliano Zapata | <a href="mailto:jared.pc.003@gmail.com">jared.pc.003@gmail.com</a> | GitHub: <a href="https://github.com/JaredPC3" target="_blank" rel="noopener noreferrer">JaredPC3</a></p>
        <p>Teléfono: 934-102-8371</p>
      </header>

      {/* --- EDUCACIÓN --- */}
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

      {/* --- PROYECTOS --- */}
      <section className="projects-section">
        <h2>Proyectos y Voluntariados</h2>
        <p><strong>Sistema Experto en Python</strong></p>
        <p>Desarrollo de un sistema con Tkinter para realizar un test de depresión basado en preguntas de opción múltiple.</p>

        <p><strong>Investigación: Impacto de las Emociones en Estudiantes</strong></p>
        <p>Estudio de probabilidad y estadística sobre cómo las emociones afectan el rendimiento académico en DACyTI.</p>
      </section>

      {/* --- HABILIDADES --- */}
      <section className="skills-section">
        <h2>Habilidades</h2>
        <ul>
          <li>Python (básico)</li>
          <li>Tkinter, Visual Studio Code</li>
          <li>Español (nativo), Inglés (básico - 2 niveles en CELE)</li>
        </ul>
      </section>

      {/* --- FOOTER --- */}
      <footer>
        <p>© 2025 - Jared Pérez Centeno</p>
      </footer>
    </div>
  );
};

// 5. Exportamos el componente para usarlo en App.js
export default Curriculum;