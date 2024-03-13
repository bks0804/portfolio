const projects = [
  {
    title: "Music Player",
    img: "assets/projects-images/music-player.png",
    desc: "",
    technology: [],
    link: "/portfolio/project/music-player/index.html",
  },
  {
    title: "Tic Tac Toe Game",
    img: "assets/projects-images/tic-tac-toe-game.png",
    desc: "",
    technology: [],
    link: "/portfolio/project/tic-tac-toe-game/index.html"
  },
  {
    title: "Analog Clock",
    img: "assets/projects-images/analog-clock.png",
    desc: "",
    technology: [],
    link: "/portfolio/project/analog-clock/index.html"
  },
  {
    title: "Moving Car Game",
    img: "assets/projects-images/moving-car-game.png",
    desc: "",
    technology: [],
    link: "/portfolio/project/moving-car-game/index.html"
  },
  {
    title: "Dragon Game",
    img: "assets/projects-images/dragon-game.png",
    desc: "",
    technology: [],
    link: "/portfolio/project/dragon-game/index.html"
  },
];

// ** Get Projects Container
const skeletonsContainer = document.querySelector("#skeletons");
const projectsContainer = document.querySelector("#projects");

function renderProjectHTML({ title, img, desc, technology, link }) {
  return `<div class="card">
    <img src="${img}" alt="${title}">
    <div class="card-content">
      <h2>${title}</h2>
      <p>${desc}<p>
      <p>Tech Stack: ${technology.join(", ")}</p>
      <p>Project Preview: <a href="${link}">Click Here</a></p>
    </div>
  </div>`;
}

setTimeout(() => {
  // ** Add Projects in projects container
  projectsContainer.style.display = "grid";
  for (let i = 0; i < projects.length; i++) {
    const htmlString = renderProjectHTML(projects[i]);
    const parser = new DOMParser();
    const htmlElement = parser.parseFromString(htmlString, 'text/html').body.firstChild;
    projectsContainer.appendChild(htmlElement);
  }

  // ** Display none skeletons
  skeletonsContainer.style.display = "none";
}, 1000);
