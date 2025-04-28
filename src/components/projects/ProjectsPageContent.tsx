"use client";

const ProjectsPageContent = () => {
  const projects = [
    {
      id: 1,
      title: "SMC Payment Portal",
      description: "Contributed to the development of the payment portal using AngularJS and Node.js, deployed on AWS with gateway integration for secure payment transactions through various banks.",
      technologies: ["AngularJS", "Node.js", "AWS", "Payment Gateway Integration"],
      image: "/project1.jpg",
      links: {
        demo: "https://portal.globalcharge.com/",
        code: "#"
      }
    },
    {
      id: 2,
      title: "Microservices Architecture",
      description: "Evolved a mobile billing payment solution from monolithic to microservices architecture, creating custom solutions for platforms like Badoo and Bumble, adapting to varied business needs.",
      technologies: ["Microservices", "Docker", "AWS", "API Development"],
      image: "/project2.jpg",
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      id: 3,
      title: "Standing Order Service",
      description: "Engineered an innovative standing order service for the payment gateway, enhancing payment processes and overall system functionality.",
      technologies: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
      image: "/project3.jpg",
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      id: 4,
      title: "Responsive Web Solutions",
      description: "Led development and implementation of responsive web solutions using JavaScript, HTML5, and CSS3, delivering 15+ client projects on time and within budget.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      image: "/project4.jpg",
      links: {
        demo: "#",
        code: "#"
      }
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          A showcase of my recent work, including web applications, microservices, and responsive websites.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Project Image</p>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3">
                {project.links.demo !== "#" && (
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.links.code !== "#" && (
                  <a 
                    href={project.links.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded text-sm transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsPageContent;
