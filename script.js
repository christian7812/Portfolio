 const barsBtn = document.getElementById("barsBtn");
  const barsMenu = document.getElementById("barsMenu");

  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");

  const homeLink = document.getElementById("homeLink");
  const aboutLink = document.getElementById("aboutLink");
  const projectLink = document.getElementById("projectLink");
  const contactLink = document.getElementById("contactLink");

  barsBtn.onclick = () => {
    barsMenu.classList.toggle("hidden");
  };

  function showSection(section) {
    [home, about, projects, contact].forEach(sec =>
      sec.classList.add("hidden")
    );
    section.classList.remove("hidden");
    barsMenu.classList.add("hidden");
  }

  homeLink.onclick = () => showSection(home);
  aboutLink.onclick = () => showSection(about);
  projectLink.onclick = () => showSection(projects);
  contactLink.onclick = () => showSection(contact);