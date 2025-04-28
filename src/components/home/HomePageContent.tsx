"use client";


import Link from "next/link";

const HomePageContent = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Usama Javed</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          Software Engineer | Systems Administrator | IT Support Specialist
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
          Versatile Web Developer and Project Manager with 4+ years of experience building responsive 
          front-end solutions while coordinating distributed development teams.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">About Me</h2>
        <p className="text-gray-700 mb-4">
          Proficient in JavaScript, HTML/CSS, and various CMS platforms with a proven track record of
          delivering high-quality web projects from conception to completion. Skilled in sprint planning, 
          task delegation, and stakeholder communication across multiple time zones.
        </p>
        <p className="text-gray-700 mb-4">
          Combines technical expertise with strong leadership abilities to drive project success
          while maintaining team efficiency. Adept at translating client requirements into technical 
          specifications and ensuring timely delivery of beautiful, functional websites.
        </p>
        <p className="text-gray-700">
          Currently pursuing a Master&apos;s Degree in Information Technology (Mobile and App development)
          at Kaplan Business School, Perth Western Australia.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-blue-600 hover:underline">
            View All Projects
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Project Image</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">SMC Payment Portal</h3>
              <p className="text-gray-600 mb-3">
                Contributed to the development of the payment portal using AngularJS and Node.js, 
                deployed on AWS with gateway integration for secure payment transactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">AngularJS</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">AWS</span>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Project Image</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Microservices Architecture</h3>
              <p className="text-gray-600 mb-3">
                Evolved a mobile billing payment solution from monolithic to microservices architecture,
                creating custom solutions for platforms like Badoo and Bumble.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Microservices</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Docker</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageContent;
