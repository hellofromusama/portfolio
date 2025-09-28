'use client'

import { useState } from 'react'

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
    <section className="py-16 bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions About Web Development in Perth
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Get expert answers about full stack development, hiring developers in Perth,
            and modern web technologies from Australia's leading developer.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['all', 'general', 'technical', 'business', 'local'].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions about web development in Perth?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get expert answers and a free consultation for your project
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Contact Perth's Leading Developer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}