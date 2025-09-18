const paraTiBtn = document.getElementById("paraTiBtn");
const cancion = document.getElementById("cancion");
const floresContainer = document.querySelector(".flores");
const imagenFlores = document.getElementById("imagenFlores");

let reproduciendo = false;

paraTiBtn.addEventListener("click", () => {
  if (!reproduciendo) {
    // Reproducir canción
    cancion.play();

    // Mostrar imagen flor4
    imagenFlores.style.display = "block";

    // Cambiar botón
    paraTiBtn.textContent = "💛 Pausar 💛";
    reproduciendo = true;

    generarFlores();
  } else {
    cancion.pause();
    paraTiBtn.textContent = "💛 Para Ti 💛";
    reproduciendo = false;
  }
});

// Animar flores cayendo
function generarFlores() {
  setInterval(() => {
    if (!reproduciendo) return;

    const flor = document.createElement("img");
    flor.src = `img/flor1.png`; // puedes alternar flor1, flor2, flor3
    flor.classList.add("flor");

    // Posición aleatoria
    flor.style.left = Math.random() * window.innerWidth + "px";

    // Tamaño aleatorio
    const tamaño = Math.random() * 60 + 60;
    flor.style.width = tamaño + "px";

    // Duración aleatoria
    flor.style.animationDuration = Math.random() * 5 + 5 + "s";

    floresContainer.appendChild(flor);

    setTimeout(() => {
      flor.remove();
    }, 10000);
  }, 800);
}
