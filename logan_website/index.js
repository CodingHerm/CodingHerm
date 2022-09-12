let educationIsOn = false; skillsIsOn = false; projectsIsOn = false; careerIsOn = false; aboutIsOn = false;

function addEducation() {
  if(educationIsOn === false) {
    document.getElementById("education").style.display = "block";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("career").style.display = "none";
    document.getElementById("about").style.display = "none";
    educationIsOn = true;
    skillsIsOn = false; 
    projectsIsOn = false; 
    careerIsOn = false; 
    aboutIsOn = false;
  }
  else {
    document.getElementById("education").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("career").style.display = "none";
    document.getElementById("about").style.display = "none";
    educationIsOn = false;
    skillsIsOn = false; 
    projectsIsOn = false; 
    careerIsOn = false; 
    aboutIsOn = false;
  }
  }
  function addSkills() {
    if(skillsIsOn === false) {
    document.getElementById("education").style.display = "none";
    document.getElementById("skills").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("career").style.display = "none";
    document.getElementById("about").style.display = "none";
    educationIsOn = false;
    skillsIsOn = true; 
    projectsIsOn = false; 
    careerIsOn = false; 
    aboutIsOn = false;}
    else {
      document.getElementById("education").style.display = "none";
      document.getElementById("skills").style.display = "none";
      document.getElementById("projects").style.display = "none";
      document.getElementById("career").style.display = "none";
      document.getElementById("about").style.display = "none";
      educationIsOn = false;
      skillsIsOn = false; 
      projectsIsOn = false; 
      careerIsOn = false; 
      aboutIsOn = false;
    }
  }
  function addProjects() {
    if(projectsIsOn === false) {document.getElementById("education").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("career").style.display = "none";
    document.getElementById("about").style.display = "none";
    educationIsOn = false;
    skillsIsOn = false; 
    projectsIsOn = true; 
    careerIsOn = false; 
    aboutIsOn = false;}
    else {
      document.getElementById("education").style.display = "none";
      document.getElementById("skills").style.display = "none";
      document.getElementById("projects").style.display = "none";
      document.getElementById("career").style.display = "none";
      document.getElementById("about").style.display = "none";
      educationIsOn = false;
      skillsIsOn = false; 
      projectsIsOn = false; 
      careerIsOn = false; 
      aboutIsOn = false;
    }
  }
  function addCareer() {
    if(careerIsOn === false) {
      document.getElementById("education").style.display = "none";
      document.getElementById("skills").style.display = "none";
      document.getElementById("projects").style.display = "none";
      document.getElementById("career").style.display = "block";
      document.getElementById("about").style.display = "none";
      educationIsOn = false;
      skillsIsOn = false; 
      projectsIsOn = false; 
      careerIsOn = true; 
      aboutIsOn = false;
    }
    else {
      document.getElementById("education").style.display = "none";
      document.getElementById("skills").style.display = "none";
      document.getElementById("projects").style.display = "none";
      document.getElementById("career").style.display = "none";
      document.getElementById("about").style.display = "none";
      educationIsOn = false;
      skillsIsOn = false; 
      projectsIsOn = false; 
      careerIsOn = false; 
      aboutIsOn = false;
    }
    }
  function addAbout() {
    if(aboutIsOn === false) 
    {document.getElementById("education").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("career").style.display = "none";
    document.getElementById("about").style.display = "block";
    educationIsOn = false;
    skillsIsOn = false; 
    projectsIsOn = false; 
    careerIsOn = false; 
    aboutIsOn = true;}
    else {
      document.getElementById("education").style.display = "none";
      document.getElementById("skills").style.display = "none";
      document.getElementById("projects").style.display = "none";
      document.getElementById("career").style.display = "none";
      document.getElementById("about").style.display = "none";
      educationIsOn = false;
      skillsIsOn = false; 
      projectsIsOn = false; 
      careerIsOn = false; 
      aboutIsOn = false;
    }
  }
