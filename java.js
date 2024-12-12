// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    
    loader.classList.add('loader-hidden');
    
    loader.addEventListener('transitionend', () => {
      document.body.removeChild(loader); 
    });
});

VanillaTilt.init(document.querySelectorAll(".cardm"), {
  max:15,
  speed:400,
  glare: true,
  "max-glare": .5
});












