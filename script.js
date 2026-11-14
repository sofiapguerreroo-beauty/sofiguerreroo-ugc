
// SOFI GUERRERO | BEAUTY & UGC

document.addEventListener("DOMContentLoaded", () => {

  // ACTUALIZAR AÑO AUTOMÁTICAMENTE

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ENLACES EXTERNOS
  // Los botones funcionan directamente mediante HTML.

  const socialLinks = document.querySelectorAll(
    ".social-link, .portfolio-button"
  );

  socialLinks.forEach(link => {

    link.addEventListener("click", () => {
      console.log(
        "Enlace seleccionado:",
        link.href
      );
    });

  });

});
