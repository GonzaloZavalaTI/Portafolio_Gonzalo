"use strict";

// ===== 1. Configuración básica de las animaciones =====
const sr = ScrollReveal({
  distance: "50px",
  duration: 800,
  easing: "ease-out",
  reset: false,
  viewFactor: 0.15,
});

// ===== 2. Animaciones de la presentación =====
sr.reveal(".texto-destacado, .titulo-presentacion", {
  origin: "top",
  interval: 150,
});

sr.reveal(".imagen-perfil", {
  origin: "left",
  delay: 200,
});

sr.reveal(".descripcion-presentacion, .botones-presentacion", {
  origin: "bottom",
  interval: 200,
});

// ===== 3. Animaciones de la sección sobre mí =====
sr.reveal("#sobre-mi .encabezado-seccion", {
  origin: "top",
});

sr.reveal(".texto-sobre-mi", {
  origin: "bottom",
  interval: 200,
});

// ===== 4. Animaciones de las habilidades =====
sr.reveal("#habilidades .encabezado-seccion", {
  origin: "top",
});

sr.reveal(".tarjeta-habilidad", {
  origin: "bottom",
  interval: 200,
});

// ===== 5. Animaciones de los proyectos =====
sr.reveal("#proyectos .encabezado-seccion", {
  origin: "top",
});

sr.reveal(".tarjeta-proyecto", {
  origin: "bottom",
  interval: 200,
});

// ===== 6. Animaciones de formación y experiencia =====
sr.reveal("#formacion .encabezado-seccion", {
  origin: "top",
});

sr.reveal(".tarjeta-informacion", {
  origin: "bottom",
  interval: 200,
});

// ===== 7. Animaciones de contacto =====
sr.reveal("#contacto .encabezado-seccion", {
  origin: "top",
});

sr.reveal("#contacto .btn", {
  origin: "bottom",
  interval: 150,
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("/registrar_visita.php")
    .then((response) => response.json())
    .then((data) => {
      console.log("Conexión exitosa. Total de visitas: " + data.total_visitas);
      // Opcional: Si quieres mostrarlo en tu HTML, crea un <span id="contador"></span> en tu footer.
    })
    .catch((error) => console.error("Error en la tubería:", error));
});
