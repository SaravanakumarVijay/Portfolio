/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "SaravanaKumar",
  title: "Hi all, I'm Saravanan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Java / Kotlin / JavaScript / Reactjs / Nodejs / Angular / Angularjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/183g1WiAVbnb6Pbjopv8gHI5dZNTdWUyw/edit?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SaravanakumarVijay",
  linkedin: "https://www.linkedin.com/in/saravanakumar-vijayakumar-331460a0/",
  gmail: "saravanakumar.tsm@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100003579139962",
  instagram: "https://www.instagram.com/sachinsara200/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

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

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
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

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Application Developer",
      company: "Majestic People Infotech",
      companylogo: require("./assets/images/majestic.png"),
      date: "June 2020 – Present",
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
      date: "Dec 2015 – Aug 2019",
      desc: "Working as a mobile app developer to create new applications as well as supporting existing applications based on requirements",
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/debris.png"),
      projectName: "Debris",
      projectDesc: "Eisman & Russo – provides pre-and post-disaster recovery services as well as FEMA and FHWA reimbursement applications and grant writing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://debrismanagement.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mc.png"),
      projectName: "McDaniel",
      projectDesc: "McDaniel Supply Company, Inc. contracts with local, county and state law enforcement agencies to provide commissary services.  As part of the commissary services provided to the facilities it allow inmates families and friends to utilize our website and kiosk equipment to deposit funds on an inmate’s account.",
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
      projectDesc: "Send & Receive Secure Electronic Messages With Your Loved Ones There’s no better way to stay connected with your loved one or friend than real time messages.",
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
      projectDesc: "Forcura Empowers Your Business To Thrive And Provide Better Patient Care.best-in-class care coordination platform simplifies document workflows, data exchanges, and secure communications from any device – all while interfacing seamlessly with your existing systems",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.forcura.com/"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
