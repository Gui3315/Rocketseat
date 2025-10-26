function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //PEGAR A TAG IMG
  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    //SE TIVER LIGHT MODE ADICIONAR A IMAGEM LIGHT
    img.setAttribute("src", "./assets/Eu2.jpg");
    img.setAttribute("alt", "Eu na praia com céu ao fundo");
  } else {
    //SEM LIGHT MODE, MANTER IMAGEM NORMAL
    img.setAttribute("src", "./assets/Eu.jpg");
    img.setAttribute("alt", "Eu no casamento de terno");
  }
}
