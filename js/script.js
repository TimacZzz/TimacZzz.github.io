// Section Elements
const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const flappyBirdProject = document.getElementById("flappy-bird-project");
const cc3kProject = document.getElementById("cc3k-project");
const pokemonRunnerProject = document.getElementById("pokemon-runner-project");

// Navbar Buttons
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const projectsBtn = document.getElementById("projects-btn");
const contactBtn = document.getElementById("contact-btn");

// Buttons located on the "Home" Page
const workWithMe = document.getElementById("work-with-me");
const seeMyWork = document.getElementById("see-my-work");

// Buttons that allow you to return to the "Projects" Page
const listOfProjectBtns = document.querySelectorAll(".project-btn");

// Buttons that lead to different projects on github
const flappyBirdGithubBtn = document.getElementById("flappy-bird-github-btn");
const cc3kGithubBtn = document.getElementById("cc3k-github-btn");
const pokemonRunnerGithubBtn = document.getElementById("pokemon-runner-github-btn");

// Buttons that lead to Contact(Email) Page
const aboutEmailBtn = document.getElementById("about-email-btn");
const footerEmailBtn = document.getElementById("footer-email-btn");

// Buttons that lead to the homepage of Github
const aboutGithubBtn = document.getElementById("about-github-btn");
const footerGithubBtn = document.getElementById("footer-github-btn");

// Buttons that lead to the homepage of LinkedIn
const aboutLinkedInBtn = document.getElementById("about-linkedin-btn");
const footerLinkedInBtn = document.getElementById("footer-linkedin-btn");

// Links to different projects
const flappyBirdProjectLink = document.getElementById("flappy-bird-project-link");
const cc3kProjectLink = document.getElementById("cc3k-project-link");
const pokemonRunnerProjectLink = document.getElementById("pokemon-runner-project-link");

// The Copyright Container in the footer
const copyrightContainer = document.getElementById("copyright-container");

// Set the Year in the copyright container
const date = new Date();
copyrightContainer.innerHTML = `<p>&#169 ${date.getFullYear()} | All rights reserved</p>`;

// The Event Listeners for the buttons that lead to Contact Page
const leadToContactPageBtns = [aboutEmailBtn, footerEmailBtn];
leadToContactPageBtns.forEach(button => 
    button.addEventListener("click", () => {
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
)

// The Event Listeners for the buttons that lead to LinkedIn
const leadToLinkedInBtns = [aboutLinkedInBtn, footerLinkedInBtn];
leadToLinkedInBtns.forEach(button => button.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/timac-wang-8b353a309/", "_blank");
}));

// The Event Listeners for the buttons that lead to Github Homepage
const leadToGithubBtns = [aboutGithubBtn, footerGithubBtn];
leadToGithubBtns.forEach(button => button.addEventListener("click", () => {
    window.open("https://github.com/TimacZzz", "_blank");
}));

// The Event Listeners that lead to different projects on Github
flappyBirdGithubBtn.addEventListener("click", () => {
    window.open("https://github.com/TimacZzz/Flappy-Bird", "_blank");
});
cc3kGithubBtn.addEventListener("click", () => {
    window.open("https://github.com/TimacZzz/CC3K", "_blank");
});
pokemonRunnerGithubBtn.addEventListener("click", () => {
    window.open("https://github.com/TimacZzz/Pokemon-Runner-Project", "_blank");
});

// Declare a variable represent the current "visible" section
let currentSection = home;

// Add Event Listeners to each button that returns to the "Projects" page 
listOfProjectBtns.forEach(button => {
    button.addEventListener("click", () => {
        currentSection.classList.add("hidden");
        projects.classList.remove("hidden");
        currentSection = projects;
    })
})

// Construct a map for each main sections
const sectionMap = new Map();
sectionMap.set(home, homeBtn);
sectionMap.set(about, aboutBtn);
sectionMap.set(projects, projectsBtn);
sectionMap.set(contact, contactBtn);

// Add event listener for each nav-btn
for (const [key, value] of sectionMap){
    value.addEventListener("click", () => {
        // Check if it's in one of those project section
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

// Add Event Listeners for each links that lead to different projects
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

// Add Event Listeners for buttons located on the "Home" Page that leads to other specific pages
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
