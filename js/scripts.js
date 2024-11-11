/*!
 * Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
 */

document.querySelectorAll('.navbar-nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    // Verifica se o href é apenas "#"
    if (href !== "#") {
      const targetElement = document.querySelector(href);
      const offset = 85; // Ajuste este valor conforme necessário
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // Para href="#", rola até o topo da página
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
});

// Adicione este trecho para lidar com o botão "Início" e a logo
document
  .querySelectorAll('.navbar-nav a[href="#"], .navbar-brand')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      // Defina a altura da janela de visualização
      const viewportHeight = window.innerHeight;
      // Pega o elemento de cabeçalho (header)
      const header = document.querySelector("#inicio"); // Certifique-se de que o ID do cabeçalho esteja correto
      // Calcula a posição desejada do cabeçalho (centralizada)
      const headerPosition =
        header.getBoundingClientRect().top +
        window.scrollY -
        (viewportHeight / 2 - header.offsetHeight / 2);

      window.scrollTo({
        top: headerPosition,
        behavior: "smooth",
      });
    });
  });
