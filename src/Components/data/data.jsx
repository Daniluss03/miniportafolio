import Azure from '../images/azure.png'
import razonesCloud from '../images/87razones.png'

export const projectsData = [
  { 
    title: " Architecture in AWS ",
    description: "I designed a mini architecture based on a lab to host a static website in an S3 bucket and point it to a domain in GoDaddy. This project demonstrates my skills in AWS services and domain configuration.",
    image: razonesCloud,
    bgColor: "#6c8eb4",
    buttonText: "View Project",
    onButtonClick: () => console.log("Project 1 clicked")
  },
  {
    title: "Api with FastApi",
    description: "I designed an API with multiple endpoints to display KPIs , showcasing my skills in backend development ",
    image: "/images/project2.jpg",
    bgColor: "#6c8eb4",
    buttonText: "Learn More",
    onButtonClick: () => console.log("Project 2 clicked")
  },
  {
    title: "Project 3",
    description: "A full-stack application built with React, Express, and MongoDB, showcasing my database skills.",
    image: "/images/project3.jpg",
    bgColor: "#6c8eb4",
    buttonText: "Explore",
    onButtonClick: () => console.log("Project 3 clicked")
  },
  {
    title: "Project 4",
    description: "An innovative mobile app developed using React Native, demonstrating my cross-platform development abilities.",
    image: "/images/project4.jpg",
    bgColor: "#6c8eb4",
    buttonText: "See Details",
    onButtonClick: () => console.log("Project 4 clicked")
  }
 
  
 
];
