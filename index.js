import { projects } from "./projects.js";

const container = document.getElementById("projectsMain");

projects.forEach((project) => {
  const divNova = document.createElement("div");
  divNova.classList.add("projectsCard");
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
