// Section Elements
const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const flappyBirdProject = document.getElementById("flappy-bird-project");
const cc3kProject = document.getElementById("cc3k-project");
const pokemonRunnerProject = document.getElementById("pokemon-runner-project");

// Nav-Btns
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const projectsBtn = document.getElementById("projects-btn");
const contactBtn = document.getElementById("contact-btn");

// HomePage Btns
const workWithMe = document.getElementById("work-with-me");
const seeMyWork = document.getElementById("see-my-work");

// Btn that allow you to return to the Projects Section
const listOfProjectBtns = document.querySelectorAll(".project-btn");

// Btns that lead to github
const flappyBirdGithubBtn = document.getElementById("flappy-bird-github-btn");
const cc3kGithubBtn = document.getElementById("cc3k-github-btn");
const pokemonRunnerGithubBtn = document.getElementById("pokemon-runner-github-btn");

// Btns that lead to Contact(Email) Page
const aboutEmailBtn = document.getElementById("about-email-btn");

const aboutGithubBtn = document.getElementById("about-github-btn");

const aboutLinkedInBtn = document.getElementById("about-linkedin-btn");

const footerEmailBtn = document.getElementById("footer-email-btn");

const footerGithubBtn = document.getElementById("footer-github-btn");

const footerLinkedInBtn = document.getElementById("footer-linkedin-btn");

aboutLinkedInBtn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/timac-wang-8b353a309/", "_blank");
})

aboutGithubBtn.addEventListener("click", () => {
    window.open("https://github.com/TimacZzz", "_blank");
})

aboutEmailBtn.addEventListener("click", () => {
    // If it's in one of those project section
    if (projectMap.has(currentSection)){
        projectsBtn.classList.remove("selected");
    }
    else{
        sectionMap.get(currentSection).classList.remove("selected");
    }
    currentSection.classList.add("hidden");

    contact.classList.remove("hidden");
    contactBtn.classList.add("selected");
    currentSection = contact;
})

footerLinkedInBtn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/timac-wang-8b353a309/", "_blank");
})

footerGithubBtn.addEventListener("click", () => {
    window.open("https://github.com/TimacZzz", "_blank");
})

footerEmailBtn.addEventListener("click", () => {
    // If it's in one of those project section
    if (projectMap.has(currentSection)){
        projectsBtn.classList.remove("selected");
    }
    else{
        sectionMap.get(currentSection).classList.remove("selected");
    }
    currentSection.classList.add("hidden");

    contact.classList.remove("hidden");
    contactBtn.classList.add("selected");
    currentSection = contact;
})

flappyBirdGithubBtn.addEventListener("click", () => {
    window.open("https://github.com/TimacZzz/Flappy-Bird", "_blank");
})

cc3kGithubBtn.addEventListener("click", () => {
    window.open("https://github.com/TimacZzz/CC3K", "_blank");
})

pokemonRunnerGithubBtn.addEventListener("click", () => {
    window.open("https://github.com/TimacZzz/Pokemon-Runner-Project", "_blank");
})

// Project Links
const flappyBirdProjectLink = document.getElementById("flappy-bird-project-link");
const cc3kProjectLink = document.getElementById("cc3k-project-link");
const pokemonRunnerProjectLink = document.getElementById("pokemon-runner-project-link");


// Copyright Container
const copyrightContainer = document.getElementById("copyright-container");

// Declare a variable represent the current "visible" section
let currentSection = home;

listOfProjectBtns.forEach(button => {
    button.addEventListener("click", () => {
        currentSection.classList.add("hidden");
        projects.classList.remove("hidden");
        currentSection = projects;
    })
})

// Construct a section map
const sectionMap = new Map();
sectionMap.set(home, homeBtn);
sectionMap.set(about, aboutBtn);
sectionMap.set(projects, projectsBtn);
sectionMap.set(contact, contactBtn);

// Add event listener for each nav-btn
for (const [key, value] of sectionMap){
    value.addEventListener("click", () => {
        // If it's in one of those project section
        if (projectMap.has(currentSection)){
            projectsBtn.classList.remove("selected");
        }
        else{
            sectionMap.get(currentSection).classList.remove("selected");
        }
        currentSection.classList.add("hidden");

        key.classList.remove("hidden");
        value.classList.add("selected");
        currentSection = key;
    })
}

// Construct a project map
const projectMap = new Map();
projectMap.set(flappyBirdProject, flappyBirdProjectLink);
projectMap.set(cc3kProject, cc3kProjectLink);
projectMap.set(pokemonRunnerProject, pokemonRunnerProjectLink);

for (const [key, value] of projectMap){
    value.addEventListener("click", () => {
        if (currentSection !== projects){
            alert("Error Loading the Page")
        }
        
        currentSection.classList.add("hidden");
        key.classList.remove("hidden");
        currentSection = key;
    })
}


workWithMe.addEventListener("click", () => {
    sectionMap.get(currentSection).classList.remove("selected");
    currentSection.classList.add("hidden");

    contactBtn.classList.add("selected");
    contact.classList.remove("hidden");
    currentSection = contact;
})

seeMyWork.addEventListener("click", () => {
    sectionMap.get(currentSection).classList.remove("selected");
    currentSection.classList.add("hidden");

    projectsBtn.classList.add("selected");
    projects.classList.remove("hidden");
    currentSection = projects;
})

const date = new Date();

copyrightContainer.innerHTML = `<p>&#169 ${date.getFullYear()} | All rights reserved</p>`