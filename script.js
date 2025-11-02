// Kicsi “scroll-in” animáció: ha egy szekció a viewportba ér, adunk egy osztályt
const reveal = () => {
  document.querySelectorAll('.slide-up, .fade-in').forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight - 80) el.classList.add('seen');
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// (A dán az alap. Ha kell EN felirat, ide rakhatjuk a fordítást; most vizuálra fókusz.)
