'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
  category: 'general' | 'technical' | 'business' | 'local'
}

const faqData: FAQItem[] = [
  {
    question: "What is full stack development and why do I need it?",
    answer: "Full stack development involves creating both frontend (user interface) and backend (server logic) of web applications. You need it for complete, scalable web solutions that handle everything from user interactions to data management, ensuring seamless performance across all aspects of your digital presence.",
    category: 'general'
  },
  {
    question: "How do I hire the best web developer in Perth?",
    answer: "Look for a Perth-based developer with proven experience in modern technologies like Next.js and React, strong local business understanding, immediate availability, and a portfolio of successful Australian projects. Usama Javed offers all these qualities with 8+ years experience serving Perth businesses.",
    category: 'business'
  },
  {
    question: "Next.js vs React: Which is better for SEO in 2025?",
    answer: "Next.js is superior for SEO because it provides server-side rendering, automatic code splitting, and built-in performance optimizations. While React requires additional configuration for SEO, Next.js offers these features out-of-the-box, making it the preferred choice for SEO-focused web applications.",
    category: 'technical'
  },
  {
    question: "What web development services do you provide in Perth?",
    answer: "I provide comprehensive web development services including custom web applications, e-commerce platforms, AI integration, business automation, mobile app development, API development, cloud architecture, and performance optimization. Serving Perth metro and all of Australia with modern, scalable solutions.",
    category: 'business'
  },
  {
    question: "How long does it take to develop a custom web application?",
    answer: "Custom web application development typically takes 4-16 weeks depending on complexity. Simple business websites take 2-4 weeks, e-commerce platforms 6-12 weeks, and enterprise applications 12-24 weeks. I provide detailed project timelines during the free consultation phase.",
    category: 'business'
  },
  {
    question: "Do you work with businesses outside of Perth?",
    answer: "Yes, while I'm based in Perth, Western Australia, I serve clients across all Australian states and internationally. I offer remote development services, video consultations, and can travel for major projects. My Australian timezone ensures excellent communication with all Aussie clients.",
    category: 'local'
  },
  {
    question: "What's the cost of hiring a full stack developer in Perth?",
    answer: "Full stack developer rates in Perth range from $75-150/hour depending on experience and project complexity. I offer competitive rates with transparent pricing, fixed-price projects available, and free initial consultations to discuss your specific requirements and budget.",
    category: 'business'
  },
  {
    question: "Can you integrate AI into my existing website?",
    answer: "Absolutely! I specialize in AI integration including chatbots, voice assistants, automated workflows, and machine learning features. Common integrations include OpenAI GPT models, voice recognition, automated customer service, and intelligent business process automation using platforms like N8N.",
    category: 'technical'
  },
  {
    question: "What makes you different from other Perth web developers?",
    answer: "I combine cutting-edge technology expertise (Next.js 15, React 19, AI integration) with deep local Perth market understanding. I'm immediately available, offer government contractor services, have mining industry experience, and provide comprehensive solutions from concept to deployment with ongoing support.",
    category: 'local'
  },
  {
    question: "Do you provide ongoing support after website launch?",
    answer: "Yes, I offer comprehensive post-launch support including regular updates, security monitoring, performance optimization, content updates, and technical support. Support packages range from basic maintenance to full managed services depending on your needs.",
    category: 'business'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredFAQs = activeCategory === 'all'
    ? faqData
    : faqData.filter(faq => faq.category === activeCategory)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Schema markup for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className="relative py-16 bg-slate-50 z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions About Web Development in Australia
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Get expert answers about full stack development, hiring developers in Australia,
            and modern web technologies from Australia's leading developer.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
            <p className="text-center text-slate-800 mb-4 text-base font-bold">
              👆 CLICK TO FILTER BY CATEGORY 👆
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'general', 'technical', 'business', 'local'].map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                  className={`px-6 py-3 rounded-xl text-base font-bold transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg cursor-pointer relative ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/50 ring-4 ring-blue-300'
                      : 'bg-white text-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white border-3 border-blue-400 hover:border-purple-400 hover:shadow-2xl'
                  }`}
                >
                  <span className="relative z-10">
                    {activeCategory === category && '✓ '}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                  {activeCategory !== category && (
                    <span className="absolute bottom-0 right-2 text-xs text-blue-400 animate-pulse">
                      click
                    </span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-center text-slate-600 mt-4 text-sm italic">
              Click any category to filter questions • Currently showing: <span className="font-bold text-blue-600">{activeCategory}</span>
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md border-2 overflow-hidden transition-all duration-300 transform hover:scale-[1.02] ${
                openIndex === index
                  ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 cursor-pointer group border-b-2 border-transparent hover:border-blue-400"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 font-bold text-2xl">Q.</span>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  {openIndex !== index && (
                    <p className="text-xs text-blue-500 font-medium mt-2 ml-9 animate-pulse">
                      👉 Click to expand answer
                    </p>
                  )}
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-blue-600 text-white rotate-180'
                      : 'bg-slate-200 text-slate-600 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110'
                  }`}>
                    {openIndex === index ? '−' : '+'}
                  </div>
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? 'max-h-[500px] opacity-100 py-5'
                  : 'max-h-0 opacity-0 py-0'
              } overflow-hidden`}>
                <div className="px-6 bg-gradient-to-r from-blue-50/50 to-purple-50/30 border-t-2 border-blue-200">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-2xl flex-shrink-0">A.</span>
                    <p className="text-slate-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative text-center mt-12 z-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-10 text-white shadow-2xl">
            <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
              Still have questions about web development in Australia?
            </h3>
            <p className="text-base md:text-xl mb-6 opacity-90">
              Get expert answers and a free consultation for your project
            </p>
            <Link
              href="/contact"
              className="relative z-30 inline-block bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-slate-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              👉 Contact Australia's Leading Developer
            </Link>
            <p className="text-xs md:text-sm mt-4 opacity-75 italic">
              Click above to get in touch • Free consultation available
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}