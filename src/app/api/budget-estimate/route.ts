import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { userMessage, conversationHistory } = await request.json();

    // Try multiple AI providers in order of preference
    let aiResponse = await tryOpenAI(userMessage, conversationHistory);

    if (!aiResponse) {
      aiResponse = await tryGrok(userMessage, conversationHistory);
    }

    if (!aiResponse) {
      aiResponse = await tryHuggingFace(userMessage);
    }

    if (!aiResponse) {
      aiResponse = await tryClaudeMocking(userMessage);
    }

    // If all AI providers fail, use intelligent fallback
    if (!aiResponse) {
      aiResponse = generateFallbackEstimate(userMessage);
    }

    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error('Budget estimation error:', error);
    const fallbackEstimate = generateFallbackEstimate(userMessage);
    return NextResponse.json({ response: fallbackEstimate });
  }
}

async function tryOpenAI(userMessage: string, conversationHistory: any[]): Promise<string | null> {
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
    return null;
  }

  try {
    const systemPrompt = `You are Usama Javed's project estimation expert. Analyze project requirements and provide detailed cost/timeline estimates.

CONTEXT - USAMA JAVED:
- Senior Full Stack Developer (8+ years)
- Location: Perth, Western Australia
- Expert: Next.js 15, React 19, Node.js, AI integration
- Specializes: Enterprise solutions, NetSuite, automation
- Contact: contact@usamajaved.com

PRICING (AUD):
- Simple Websites: $5,000-$15,000
- E-commerce: $15,000-$50,000
- Custom Apps: $25,000-$100,000
- Enterprise: $50,000-$500,000+
- AI Integration: $10,000-$75,000
- Mobile Apps: $20,000-$80,000

TIMELINES:
- Simple: 2-6 weeks
- Medium: 2-4 months
- Complex: 4-8 months
- Enterprise: 6-12+ months

Format response with: cost estimate, timeline, technology stack, and contact encouragement.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-3).map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: userMessage }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.choices[0]?.message?.content || null;
    }
  } catch (error) {
    console.error('OpenAI API error:', error);
  }

  return null;
}

async function tryGrok(userMessage: string, conversationHistory: any[]): Promise<string | null> {
  if (!process.env.GROK_API_KEY || process.env.GROK_API_KEY === 'your_grok_api_key_here') {
    return null;
  }

  try {
    const systemPrompt = `You are Usama Javed's project estimation expert. Provide detailed web development cost estimates.

USAMA JAVED PROFILE:
- Location: Perth, Western Australia
- Experience: 8+ years full stack development
- Specialties: Next.js 15, React 19, AI integration, Enterprise solutions
- Contact: contact@usamajaved.com

PRICING STRUCTURE (AUD):
- Simple Websites: $5,000-$15,000 (2-6 weeks)
- E-commerce Platforms: $15,000-$50,000 (2-3 months)
- Custom Web Apps: $25,000-$100,000 (2-4 months)
- Enterprise Solutions: $50,000-$500,000+ (6-12 months)
- AI Integration: $10,000-$75,000 (2-4 months)
- Mobile Apps: $20,000-$80,000 (3-6 months)

Analyze the project and provide: cost estimate, timeline, technology recommendations, and contact encouragement.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-2).map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: userMessage }
    ];

    // Grok API endpoint (x.ai)
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROK_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'grok-beta',
        messages: messages,
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.choices[0]?.message?.content || null;
    }
  } catch (error) {
    console.error('Grok API error:', error);
  }

  return null;
}

async function tryHuggingFace(userMessage: string): Promise<string | null> {
  try {
    const prompt = `Estimate web development project cost for: ${userMessage}

Based on Usama Javed's rates (Perth developer):
- Simple sites: $5,000-$15,000 AUD
- E-commerce: $15,000-$50,000 AUD
- Custom apps: $25,000-$100,000 AUD
- Enterprise: $50,000-$500,000+ AUD

Provide: cost range, timeline, tech stack.`;

    const response = await fetch(
      'https://api-inference.huggingface.co/models/microsoft/DialoGPT-large',
      {
        headers: {
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY || 'hf_dummy_token'}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 300,
            temperature: 0.8,
            return_full_text: false
          }
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      const result = data[0]?.generated_text || '';
      if (result && result.length > 50) {
        return cleanupAIResponse(result);
      }
    }
  } catch (error) {
    console.error('HuggingFace API error:', error);
  }

  return null;
}

async function tryClaudeMocking(userMessage: string): Promise<string | null> {
  // Mock Claude-style response for testing
  const lowerMessage = userMessage.toLowerCase();

  let projectAnalysis = "Based on your project description, ";

  if (lowerMessage.includes('ecommerce') || lowerMessage.includes('shop')) {
    projectAnalysis += "this appears to be an e-commerce platform requiring payment integration, inventory management, and user accounts.";
  } else if (lowerMessage.includes('ai') || lowerMessage.includes('chatbot')) {
    projectAnalysis += "this involves AI integration requiring advanced backend processing and API integrations.";
  } else if (lowerMessage.includes('enterprise') || lowerMessage.includes('complex')) {
    projectAnalysis += "this is an enterprise-level solution requiring scalable architecture and advanced features.";
  } else {
    projectAnalysis += "this appears to be a custom web application with specific business requirements.";
  }

  return `## 🎯 **Project Analysis** (Claude-style response)

${projectAnalysis}

**Estimated Investment:** $25,000 - $75,000 AUD
**Timeline:** 3-5 months
**Complexity:** Medium-High

### 🛠️ **Technology Recommendations:**
- **Frontend:** Next.js 15, React 19, TypeScript
- **Backend:** Node.js, Express, PostgreSQL
- **Deployment:** Vercel/AWS with CI/CD
- **Additional:** Based on specific requirements

### 👨‍💻 **Why Usama Javed:**
- 8+ years experience with modern tech stack
- Perth-based with local understanding
- Proven track record: 50+ successful projects
- Expert in the exact technologies needed

### 📞 **Next Steps:**
Contact Usama directly for a detailed, personalized quote:
- **Email:** contact@usamajaved.com
- **Website:** https://usamajaved.com.au
- **Free consultation** to refine requirements

*This estimate is based on similar projects. Final cost depends on specific features and scope.*`;
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