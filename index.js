function init() {
  setProjects();
}

function setProjects() {
  $(projects).html(`
    ${store.projects.map((project) => `
      <h1>${project.projectTitle}</h1>
      <div class="project">
        <img class="project-image" src="${project.projectImg[0]}">
        <div class="project-description">
          <p>${project.projectDescription}</p>
          ${project.techStack.map((tech) =>
            `<span>${tech}</span>`
          ).join('')}
        </div>
      </div>
    `).join('')}
  `)

}

$(init)