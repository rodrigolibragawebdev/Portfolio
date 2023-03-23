import { projects } from "./projects.js";

const container = document.getElementById("projectsMain");
const searchInput = document.getElementById("searchInput");
const clear = document.getElementById("clear");
const noResult = document.getElementById("noResult");

let response = "";

const filterContent = () => {
  searchInput.addEventListener("input", () => {
    // obter value
    response = searchInput.value.toString().toLowerCase();
    let constDivHide = document.querySelectorAll(".projectsCard");
    // console.log(constDivHide);
    for (let i = 0; i < constDivHide.length; i++) {
      // console.log(constDivHide[i]);
      let content = constDivHide[i].innerHTML.toString().toLowerCase();
      // console.log(content);
      if (!content.includes(response)) {
        constDivHide[i].classList.add("hidden");
        constDivHide[i].classList.remove("show");
      } else {
        constDivHide[i].classList.remove("hidden");
        constDivHide[i].classList.add("show");
      }
    }
  });
  // NO RESULT LOGIC
  // -> VOLTAR
  // let showSessions = document.querySelectorAll(".show");
  // console.log(showSessions);
  // if (showSessions.length === 0) {
  //   noResult.classList.remove("hidden");
  // } else if (showSessions.length > 0) {
  //   noResult.classList.add("hidden");
  // }
};

clear.addEventListener("click", () => {
  searchInput.value = "";
  let constDivHide = document.querySelectorAll(".projectsCard");
  for (let i = 0; i < constDivHide.length; i++) {
    constDivHide[i].classList.remove("hidden");
  }
});

searchInput.addEventListener("input", () => {
  filterContent();
});

projects.forEach((project) => {
  // let categories = project.categories.map((category) => {
  //   return category.split();
  // });
  // console.log(typeof categories);
  const divNova = document.createElement("div");
  divNova.classList.add("projectsCard");
  divNova.classList.add("show");
  divNova.innerHTML = `
    <a class="coverLink" target="_blank" href="${project.link}"></a>
    <img id="cape" class="cardImg" src="${project.cape}"/>
    <div class="projectCardContent"> 
    <h3>${project.title}</h3>
    <div class="projectsCategory">
    ${
      project.categories1 === "" || undefined
        ? `<p class="hidden"></p>`
        : `<p>${project.categories1}</p>`
    }
      ${
        project.categories2 === "" || undefined
          ? `<p class="hidden"></p>`
          : `<p>${project.categories2}</p>`
      }
      ${
        project.categories3 === "" || undefined
          ? `<p class="hidden"></p>`
          : `<p>${project.categories3}</p>`
      }
      
    </div>
    <p>${project.resume}<p>
    <a>Ver mais </a>
    </div>
    `;

  container.appendChild(divNova);
});
