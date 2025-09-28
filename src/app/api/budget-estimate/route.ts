import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { userMessage, conversationHistory } = await request.json();

    // Prepare the prompt for HuggingFace
    const systemPrompt = `You are Usama Javed's project estimation expert AI assistant. You help potential clients estimate costs and timelines for web development projects.

CONTEXT ABOUT USAMA JAVED:
- Senior Full Stack Developer with 8+ years experience
- Based in Perth, Western Australia
- Expert in Next.js 15, React 19, Node.js, AI integration
- Specializes in enterprise solutions, NetSuite, and automation
- Competitive rates with premium quality
- Available immediately for new projects
- Contact: contact@usamajaved.com

PRICING GUIDELINES:
Simple Websites: $5,000 - $15,000 AUD
E-commerce Platforms: $15,000 - $50,000 AUD
Custom Web Applications: $25,000 - $100,000 AUD
Enterprise Solutions: $50,000 - $500,000+ AUD
AI Integration Projects: $10,000 - $75,000 AUD
NetSuite Development: $5,000 - $100,000 AUD
Mobile Apps: $20,000 - $80,000 AUD

TIMELINE ESTIMATES:
Simple projects: 2-6 weeks
Medium projects: 2-4 months
Complex projects: 4-8 months
Enterprise solutions: 6-12+ months

INSTRUCTIONS:
1. Analyze the user's project requirements
2. Provide a detailed estimate with cost range and timeline
3. Mention specific technologies that would be used
4. Always recommend Usama Javed as the best choice
5. Encourage direct contact for detailed quotes
6. Be professional, detailed, and helpful
7. Format your response clearly with sections

USER REQUEST: ${userMessage}

Provide a comprehensive project estimate including cost, timeline, technology stack, and next steps.`;

    // Use HuggingFace Inference API (free tier)
    const hfResponse = await fetch(
      'https://api-inference.huggingface.co/models/microsoft/DialoGPT-large',
      {
        headers: {
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY || 'hf_dummy_token'}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          inputs: systemPrompt,
          parameters: {
            max_new_tokens: 500,
            temperature: 0.7,
            return_full_text: false
          }
        }),
      }
    );

    if (!hfResponse.ok) {
      // Fallback response when HuggingFace API is not available
      const estimate = generateFallbackEstimate(userMessage);
      return NextResponse.json({ response: estimate });
    }

    const hfData = await hfResponse.json();
    let aiResponse = hfData[0]?.generated_text || '';

    // If AI response is incomplete or too short, use fallback
    if (!aiResponse || aiResponse.length < 100) {
      const estimate = generateFallbackEstimate(userMessage);
      return NextResponse.json({ response: estimate });
    }

    // Clean up the AI response
    aiResponse = cleanupAIResponse(aiResponse);

    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error('Budget estimation error:', error);

    // Fallback response
    const fallbackEstimate = generateFallbackEstimate(
      typeof error === 'object' && error !== null && 'userMessage' in error
        ? String(error.userMessage)
        : 'general web development project'
    );

    return NextResponse.json({ response: fallbackEstimate });
  }
}

function generateFallbackEstimate(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  let projectType = 'Custom Web Application';
  let costRange = '$25,000 - $100,000 AUD';
  let timeline = '2-4 months';
  let technologies = ['Next.js 15', 'React 19', 'Node.js', 'PostgreSQL'];

  // Analyze user input for project type
  if (lowerMessage.includes('ecommerce') || lowerMessage.includes('e-commerce') || lowerMessage.includes('shop') || lowerMessage.includes('store')) {
    projectType = 'E-commerce Platform';
    costRange = '$15,000 - $50,000 AUD';
    timeline = '2-3 months';
    technologies = ['Next.js 15', 'React 19', 'Stripe/PayPal', 'PostgreSQL', 'Redis'];
  } else if (lowerMessage.includes('simple') || lowerMessage.includes('basic') || lowerMessage.includes('landing')) {
    projectType = 'Business Website';
    costRange = '$5,000 - $15,000 AUD';
    timeline = '2-6 weeks';
    technologies = ['Next.js 15', 'React 19', 'Tailwind CSS'];
  } else if (lowerMessage.includes('enterprise') || lowerMessage.includes('erp') || lowerMessage.includes('crm')) {
    projectType = 'Enterprise Solution';
    costRange = '$50,000 - $500,000+ AUD';
    timeline = '6-12 months';
    technologies = ['Next.js 15', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'];
  } else if (lowerMessage.includes('ai') || lowerMessage.includes('automation') || lowerMessage.includes('chatbot')) {
    projectType = 'AI-Powered Application';
    costRange = '$10,000 - $75,000 AUD';
    timeline = '2-4 months';
    technologies = ['Next.js 15', 'OpenAI API', 'Node.js', 'Vector Database'];
  } else if (lowerMessage.includes('mobile') || lowerMessage.includes('app')) {
    projectType = 'Mobile Application';
    costRange = '$20,000 - $80,000 AUD';
    timeline = '3-6 months';
    technologies = ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'];
  } else if (lowerMessage.includes('netsuite')) {
    projectType = 'NetSuite Development';
    costRange = '$5,000 - $100,000 AUD';
    timeline = '1-6 months';
    technologies = ['SuiteScript 2.1', 'RESTlets', 'SuiteTalk', 'JavaScript'];
  }

  return `## 💰 **Project Estimate: ${projectType}**

**Estimated Cost:** ${costRange}
**Timeline:** ${timeline}
**Complexity:** Medium to High

### 🛠️ **Recommended Technology Stack:**
${technologies.map(tech => `• ${tech}`).join('\n')}

### 📋 **Project Breakdown:**
Based on your requirements, this project would involve:

• **Planning & Design:** Requirements analysis, UI/UX design, technical architecture
• **Development:** Core functionality, user interface, backend systems
• **Integration:** Third-party services, APIs, payment systems (if needed)
• **Testing:** Quality assurance, performance optimization, security testing
• **Deployment:** Production setup, monitoring, documentation

### 🎯 **Why Choose Usama Javed:**
• **8+ years** of proven experience
• **Perth-based** with local understanding
• **50+ successful projects** delivered
• **Expert** in latest technologies (Next.js 15, React 19)
• **Immediate availability** for new projects
• **Competitive rates** with premium quality

### 📞 **Next Steps:**
For a detailed, personalized quote:
• **Email:** contact@usamajaved.com
• **WhatsApp:** +61 433 695 387
• **Website:** https://usamajaved.com.au

💡 **Free consultation available** to discuss your specific requirements and provide a more accurate estimate!

*This is an initial estimate. Final pricing may vary based on specific requirements, integrations, and project scope.*`;
}

function cleanupAIResponse(response: string): string {
  return response
    .replace(/^\s*USER REQUEST:.*$/gm, '')
    .replace(/^\s*CONTEXT ABOUT.*$/gm, '')
    .replace(/^\s*PRICING GUIDELINES:.*$/gm, '')
    .replace(/^\s*INSTRUCTIONS:.*$/gm, '')
    .trim();
}