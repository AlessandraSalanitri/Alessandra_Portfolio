import React, { useState } from "react";
import "../styles/Projects.css";
import cyberSecurityProjects from "../data/CyberSecurityProjects";
import Modal from "../components/Modal";
import skyBackground from "../assets/sky.png"; //background image
import cloudBackground from "../assets/cloud.png"; //background image

const categories = [
    "All Projects",
    "Web Development",
    "Analytics & BI",
    "Cyber Security",
    "User Experience"
];


const projects = [
    // Web Development Projects
    {
        title: "ChocoLux",
        description: "A web application designed to manage and display chocolate products and perform CRUD operations.",
        technologies: "NodeJs, Express, MongoDB, NoSQL, EJS",
        link: "https://github.com/AlessandraSalanitri/chocolux",
        category: "Web Development"
    },
    {
        title: "2MEET",
        description: "A platform with dynamic features for event management, booking, and user administration.",
        technologies: "React, Node.js, Firebase, and Leaflet for interactive map",
        link: "https://github.com/AlessandraSalanitri/2meet_App",
        category: "Web Development"
    },
    {
        title: "Place to Stay",
        description: "A web application designed for users to look up information on hotels, bed and breakfasts, villas, and hostels",
        technologies: "Node.js and Express, SQLite, and React.",
        link: "https://github.com/AlessandraSalanitri/PlaceToStay",
        category: "Web Development"
    },
    {
        title: "Input-Output Console",
        description: "A group Project for a simple console",
        technologies: "Java",
        link: "https://github.com/AlessandraSalanitri/Object-Oriented-Design-and-Development",
        category: "Web Development"
    },
    {
        title: "Hittastic",
        description: "A Web application for user to search for Point Of Interest",
        technologies: "Java, JSP, JDBC, and SQLite.",
        link: "https://github.com/AlessandraSalanitri/Hit-tastic",
        category: "Web Development"
    },
    {
        title: "Porfolio",
        description: "My first portfolio",
        technologies: "Static HTML, CSS, NodeJs",
        link: "https://github.com/AlessandraSalanitri/My_Portfolio",
        category: "Web Development"
    },


    // Analytics & Business Intelligence Projects
    {
        title: "Analysis and Prediction",
        description: "Descriptive statistics, plotting and visualizations and predictions. Pandas, Matplotlib, sklearn, seaborn library used.",
        technologies: "Tableau, Jupiter, Python",
        link: "https://github.com/AlessandraSalanitri/Analytics-and-Business-Intelligence",
        category: "Analytics & BI"
    },
    {
        title: "Machine Learning in Healthcare ",
        description: "Logistic Regression, Random Forest, Gradient Boosting models, clustering methods, Apriori algorithm, ANN model, CNN model, Reinforcement Learning and Prediction Model in Health Sector.",
        technologies: "Python, Tensorflow, Machine Learning",
        link: "https://github.com/AlessandraSalanitri/DataScienceProject",
        category: "Analytics & BI"
    },
    {
        title: "Business Monthly Expenses",
        description: "Analysis and Forecast of Business Financial side.",
        technologies: "Excel",
        link: "https://github.com/AlessandraSalanitri/Business-Monthly-Costs",
        category: "Analytics & BI"
    },

    // User Experience Projects
    {
        title: "Human-Computer-Interaction",
        description: "A detailed case study on improving website accessibility.",
        technologies: "Figma, UX Research, UI Design, UX Testing",
        link: "https://github.com/AlessandraSalanitri/Human-Computer-Interaction",
        category: "User Experience"
    },
    {
        title: "UX_Strategy_Business",
        description: "A detailed case study on existing Business to identify strengths and areas for improvement.",
        technologies: "Figma, UX Research, UI Design",
        link: "https://github.com/AlessandraSalanitri/UX_Strategy_Business",
        category: "User Experience"
    }
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Projects");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal with the selected project retrieved from id
    const openModal = (projectId) => {
        const project = cyberSecurityProjects.find(proj => proj.id === projectId);
        if (project) {
            setSelectedProject(project); // Set the active project
            setIsModalOpen(true);
        }
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    // Filter projects dynamically based on selected category
    const filteredProjects =
        selectedCategory === "All Projects"
            ? projects
            : projects.filter(project => project.category === selectedCategory);


    return (
        <section className="projects-page">
            <div className="background-overlay"></div>
            
            
            {/* Page Title */}
            <h1 className="projects-title">My Projects</h1>

            {/* Background */}
            <div className="background-container" style={{ backgroundImage: `url(${skyBackground})` }}>
                <div className="clouds cloud-layer-1" style={{ backgroundImage: `url(${cloudBackground})` }}></div>
                <div className="clouds cloud-layer-2" style={{ backgroundImage: `url(${cloudBackground})` }}></div>
                <div className="clouds cloud-layer-3" style={{ backgroundImage: `url(${cloudBackground})` }}></div>
            </div>

            {/* Filter Buttons */}
            <div className="category-buttons">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            
              {/* Project Cards */}
              <div className="projects-container">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <p className="project-technologies">
                            <strong>Technologies Used:</strong> {project.technologies}
                        </p>
                        <a
                            href={project.link}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub ☛
                        </a>

                         {/* Only Show "View the Portfolio" for Portfolio Project */}
                        {project.title === "Porfolio" && (
                            <a 
                                href="https://alessandra-salanitri-portfolio.com/"  
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="portfolio-link"
                            >
                                View the Portfolio
                            </a>
                        )}
                    </div>
                ))}
            </div>

            <h1 className="projects-title2">Cyber Security Projects</h1>
            <div className="projects-container">
                {cyberSecurityProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h2 className="cybersecurity-title">{project.title}</h2>
                        <p className="cybersecurity-description">{project.description}</p>
                        <button 
                            className="view-project-button" 
                            onClick={() => openModal(project.id)}
                        >
                            View Project
                        </button>
                    </div>
                ))}
            </div>


            {isModalOpen && selectedProject && (
                <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
            )}
        </section>
    );
};

export default Projects;
