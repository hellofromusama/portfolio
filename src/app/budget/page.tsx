'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface EstimateResult {
  projectType: string;
  estimatedCost: string;
  timeline: string;
  complexity: string;
  features: string[];
  additionalNotes: string;
}

export default function BudgetCalculator() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m here to help estimate your project cost and timeline. Please describe your project requirements, features, and any specific technologies you need.',
      timestamp: new Date()
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: userInput,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/budget-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage: userInput,
          conversationHistory: messages
        })
      });

      const data = await response.json();

      if (response.ok) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: data.response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error(data.error || 'Failed to get estimate');
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, I couldn\'t process your request right now. Please try again or contact me directly at contact@usamajaved.com for a personalized quote.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessage = (content: string) => {
    // Simple formatting for better readability
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation currentPage="budget" />

      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-b border-slate-700/50">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Project Budget Calculator
            </h1>
            <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto">
              Get instant estimates for your web development project. Describe your requirements and get detailed cost and timeline information.
            </p>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-slate-900/50 rounded-xl border border-slate-700/50 shadow-2xl">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-3xl rounded-lg px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}>
                    <div
                      className="text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                    />
                    <div className="text-xs opacity-60 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                      <span className="text-slate-300 ml-2">Calculating estimate...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <div className="border-t border-slate-700/50 p-6">
              <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Describe your project (e.g., 'I need an e-commerce website with payment integration')"
                  className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !userInput.trim()}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {isLoading ? 'Calculating...' : 'Get Estimate'}
                </button>
              </form>
            </div>
          </div>

          {/* Sample Questions */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-slate-900/30 rounded-lg p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-green-400 mb-3">💡 Sample Questions</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div>"I need an e-commerce website with payment integration"</div>
                <div>"Build a custom CRM system for my business"</div>
                <div>"Create a mobile app with AI features"</div>
                <div>"Develop a SaaS platform with user authentication"</div>
              </div>
            </div>

            <div className="bg-slate-900/30 rounded-lg p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">📊 What You'll Get</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div>• Detailed cost breakdown</div>
                <div>• Project timeline estimate</div>
                <div>• Technology recommendations</div>
                <div>• Feature analysis & suggestions</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-lg p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-2">Need a Detailed Quote?</h3>
            <p className="text-slate-300 mb-4">
              For complex projects or personalized consultation, contact me directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@usamajaved.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Email: contact@usamajaved.com
              </a>
              <a
                href="https://wa.me/61433695387"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp: +61 433 695 387
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}