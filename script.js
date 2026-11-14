
// =====================================
// SOFI GUERRERO - BEAUTY & UGC
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  // ACTUALIZAR EL AÑO AUTOMÁTICAMENTE

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // ANIMACIÓN DE LOS BOTONES SOCIALES

  const links = document.querySelectorAll(".social-link");

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  if (reducedMotion) {

    links.forEach(link => {
      link.classList.add("visible");
    });

  } else {

    links.forEach((link, index) => {

      setTimeout(() => {

        link.classList.add("visible");

      }, 200 + index * 130);

    });

  }


  // REGISTRO LOCAL DE CLICS
  // NO ENVÍA DATOS A NINGÚN SERVIDOR

  links.forEach(link => {

    link.addEventListener("click", () => {

      const network = link.querySelector(
        ".social-name"
      )?.textContent?.trim();

      console.log(
        "Sofi UGC | Red social seleccionada:",
        network
      );

    });

  });

});
