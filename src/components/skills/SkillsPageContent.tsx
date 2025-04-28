"use client";

const SkillsPageContent = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript (Node.js, Express.js)", "TypeScript", ".Net", "C#", "PHP (8.2+)", "Python", "Java"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Angular.js", "Vue.js (v3.3+)", "TailwindCSS", "Storybook", "Quasar", "Inertia.js", "Axios", "Bootstrap", "SCSS", "EJS", "Responsive Design"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "Laravel (10+)", "API Development", "Microservices", "REST APIs", "MongoDB", "MySQL", "PostgreSQL", "Microsoft SQL Server (2000-2019+)"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP", "Heroku", "Docker", "Laravel Sail", "Jenkins", "GitLab CI", "Linux Server Admin", "Bash Scripting", "IIS", "Apache"]
    },
    {
      title: "Project Management & Tools",
      skills: ["Agile Scrum", "Jira", "Confluence", "Git", "GitHub", "Bitbucket", "Slack", "Microsoft Teams", "ServiceNow", "ConnectWise", "NinjaRMM"]
    },
    {
      title: "IT Support & Others",
      skills: ["Troubleshooting", "Software Installation", "Hardware Configuration", "Remote Desktop Support", "SDLC", "Windows", "Linux", "TCP/IP", "DNS", "DHCP", "Cybersecurity Best Practices", "Salesforce (Basic)"]
    }
  ];

  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          A comprehensive overview of my technical skills and expertise across various domains.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 border-b pb-2 text-blue-600">{category.title}</h2>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SkillsPageContent;
