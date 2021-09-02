import emoji from "react-easy-emoji";
import splash from "./assets/lottie/splash.json"

const splashScreen = {
  enabled: true, 
  animation: splash,
  duration: 3000, 
}

const illustration = {
  animated: true 
};


const greeting = {
  username: "SaravanaKumar",
  title: "Hi all, I'm Saravanan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Java / Kotlin / JavaScript / JQuery / Reactjs / Nodejs / Angular / Angularjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/183g1WiAVbnb6Pbjopv8gHI5dZNTdWUyw/edit?usp=sharing",
  displayGreeting: true 
};


const socialMediaLinks = {
  github: "https://github.com/SaravanakumarVijay",
  linkedin: "https://www.linkedin.com/in/saravanakumar-vijayakumar-331460a0/",
  gmail: "saravanakumar.tsm@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100003579139962",
  instagram: "https://www.instagram.com/sachinsara200/",
  display: true 
};


const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Web / Windows Applications using .NET Technologies"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Open CV / Tensor Flow"
    )
  ],

  

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-korvue"
    },
    {
      skillName: ".NET ",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true 
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Thiagarajar School of Management",
      logo: require("./assets/images/tsm.jpg"),
      subHeader: "Master of Science in  Computer Application",
      duration: "July 2012 - April 2015"
    },
    {
      schoolName: "Madurai Kamaraj University College",
      logo: require("./assets/images/mku.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "April 2012 - July 2009"
    }
  ]
};


const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false 
};


const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Mobile Application Developer",
      company: "Majestic People Infotech",
      companylogo: require("./assets/images/majestic.png"),
      date: "June 2020 – Aug 2021",
      desc: "Working as a mobile app developer to create new applications as well as supporting existing applications based on requirements",
      descBullets: [
        "Java / Kotlin for Native App Development",
        "Html,css AngularJS / Angular with Cordova for Hybrid App Development"
      ]
    },
    {
      role: "Software Developer",
      company: "Repute Digital Business Agency",
      companylogo: require("./assets/images/repute.png"),
      date: "Aug 2019 – May 2020",
      desc: "Developing and Supporting software applications both web / windows using .Net Technologies with backend SQL Server",
      descBullets: [
        "ASP.NET for Front End Design Support",
        "C#.Net / VB.Net for Code Behind",
        "SQL Server for Database",
        "Crystal Reports for Reporting"
      ]
    },
    {
      role: "Mobile Application Developer",
      company: "Mindroid Corporation Technologies",
      companylogo: require("./assets/images/mindroid.jpg"),
      date: "Nov 2018 – Aug 2019",
      desc: "Working as a mobile app developer to create new applications as well as supporting existing applications based on requirements",
      descBullets: [
        "Java for Native App Development",
        "Html,css Jquery Mobile with Cordova for Hybrid App Development"
      ]
    }, 
    {
      role: "Software/Mobile Application Developer",
      company: "Open Source Academy India(P) Ltd",
      companylogo: require("./assets/images/osaipl.jpg"),
      date: "Dec 2015 – Nov 2018",
      desc: "Working as a software/mobile app developer to create new applications as well as supporting existing applications based on requirements",
      descBullets: [
        "Java for Native App Development",
        "Html,css Jquery Mobile with Cordova for Hybrid App Development",
        "ASP.NET for Front End Design Support",
        "C#.Net / VB.Net for Code Behind",
        "SQL Server for Database",
        "Crystal Reports for Reporting"
      ]
    }, 
  ]
};


const openSource = {
  showGithubProfile: "true", 
  display: false 
};


const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/debris.png"),
      projectName: "Debris",
      projectDesc: "Native Android Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://debrismanagement.com/"
        }
      ]
    },
    {
      image: require("./assets/images/mc.png"),
      projectName: "McDaniel",
      projectDesc: "Native Android Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mcdanielsupplyco.net/"
        }
      ]
    },
    {
      image: require("./assets/images/ii.png"),
      projectName: "Inmate Inbox",
      projectDesc: "Hybrid Mobile Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://inmateinbox.net/"
        }
      ]
    },
    {
      image: require("./assets/images/forcura.jpg"),
      projectName: "Forcura",
      projectDesc: "Native Mobile Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.forcura.com/"
        }
      ]
    },
    {
      image: require("./assets/images/Refelexion-home.jpg"),
      projectName: "Reflexion CAFM",
      projectDesc: "ASP.Net Web Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://latticegulf.com/software/"
        }
      ]
    },
    {
      image: require("./assets/images/Refelexion-home.jpg"),
      projectName: "Reflexion MP",
      projectDesc: "ASP.Net Web Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://latticegulf.com/reflexion-mp/"
        }
      ]
    },
    {
      image: require("./assets/images/Refelexion-home.jpg"),
      projectName: "Reflexion FieldINSPECT",
      projectDesc: "ASP.Net Web Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://latticegulf.com/reflexion-fieldinspect/"
        }
      ]
    },
    {
      image: require("./assets/images/al.jpg"),
      projectName: "Integrated Facility Management",
      projectDesc: "C# Windows Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://alshirawifm.com/services.html"
        }
      ]
    },
    {
      image: require("./assets/images/mplus.jpg"),
      projectName: "Mplus",
      projectDesc: "ASP.Net Web Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mplus.ae/"
        }
      ]
    },
    {
      image: require("./assets/images/uc.png"),
      projectName: "UCEazy",
      projectDesc: "Hybrid Mobile Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://uceazy.com/"
        }
      ]
    } 

  ],
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9698180268",
  email_address: "saravanakumar.tsm@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", 
  display: false 
};

export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  twitterDetails
};
