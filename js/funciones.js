
//animaciones para scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
// Animación escalonada para piezas
const piezas = document.querySelectorAll('.pieza');

const observerPiezas = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Animación de entrada con un pequeño retraso basado en el índice
      // Pero ojo, el índice aquí es relativo al batch de entries.
      // Para un stagger simple visual, un timeout funciona bien.
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200); // 200ms de retraso entre cada elemento detectado a la vez
    } else {
      // Cuando sale del viewport, quitamos la clase para que se pueda volver a animar
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2 // Se activa cuando el 20% del elemento es visible
});

piezas.forEach(p => observerPiezas.observe(p));


// Animación para "En Barro Somos" (bloques de texto)
const animElements = document.querySelectorAll('.anim-element');

const observerAnim = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1 // Activate early
});

animElements.forEach(el => observerAnim.observe(el));



