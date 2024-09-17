import kpiproyect from '../images/kpi.png'
import razonesCloud from '../images/87razones.png'
import websiteproyect from '../images/87razonessantander.png'
export const projectsData = [
  { 
    title: " Architecture in aws ",
    description: "I designed a mini architecture based on a lab to host a static website in an S3 bucket and point it to a domain in GoDaddy. This project demonstrates my skills in AWS services and domain configuration.",
    image: razonesCloud,
    bgColor: "#6c8eb4",
    buttonText: "View Project",
    onButtonClick: () => window.open("https://github.com/Daniluss03?tab=repositories")
  },
  {
    title: "Api with FastApi",
    description: "I designed an API with multiple endpoints to display KPIs , showcasing my skills in backend development ",
    image:kpiproyect ,
    bgColor: "#6c8eb4",
    buttonText: "Learn More",
    onButtonClick: () => window.open("https://github.com/Daniluss03?tab=repositories")
  },
  {
    title: "Static Website ",
    description: "I created a static website for a tourism company called '87 Razones por Santander', showcasing my skills in web development and design for the tourism industry.",
    image: websiteproyect,
    bgColor: "#6c8eb4",
    buttonText: "Explore",
    onButtonClick: () => console.log("Project 3 clicked")
  },

  
 
];
