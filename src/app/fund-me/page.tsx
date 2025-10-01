'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface DonationOption {
  id: string;
  emoji: string;
  label: string;
  amount: number;
  description: string;
  color: string;
}

export default function FundMePage() {
  const [selectedOption, setSelectedOption] = useState<DonationOption | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const donationOptions: DonationOption[] = [
    {
      id: 'coffee',
      emoji: '☕',
      label: 'Buy Me a Coffee',
      amount: 5,
      description: 'Fuel my coding sessions!',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'meal',
      emoji: '🍔',
      label: 'Buy Me a Meal',
      amount: 15,
      description: 'Keep me energized!',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'project',
      emoji: '💻',
      label: 'Support This Project',
      amount: 10,
      description: 'Help improve this portfolio!',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'pants',
      emoji: '👖',
      label: 'Buy Me New Pants',
      amount: 50,
      description: 'My pants have holes!',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'computer',
      emoji: '💻',
      label: 'Upgrade My Computer',
      amount: 100,
      description: 'Help me get faster hardware!',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'chair',
      emoji: '🪑',
      label: 'New Gaming Chair',
      amount: 200,
      description: 'My back hurts from coding!',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'headphones',
      emoji: '🎧',
      label: 'Buy Me Headphones',
      amount: 150,
      description: 'Better sound for coding focus!',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'monitor',
      emoji: '🖥️',
      label: 'Buy Me a Monitor',
      amount: 300,
      description: 'More screen space = more code!',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'vacation',
      emoji: '🏖️',
      label: 'Send Me on Vacation',
      amount: 1000,
      description: 'Even devs need breaks!',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const handleDonationClick = (option: DonationOption) => {
    setSelectedOption(option);
    setCustomAmount('');
  };

  const handleCustomAmountSelect = () => {
    if (customAmount && parseFloat(customAmount) > 0) {
      setSelectedOption({
        id: 'custom',
        emoji: '💰',
        label: 'Custom Amount',
        amount: parseFloat(customAmount),
        description: 'Your generous contribution!',
        color: 'from-pink-500 to-rose-600'
      });
    }
  };

  const handleProceedToPayment = async () => {
    if (!selectedOption) return;

    setIsProcessing(true);

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: selectedOption.amount,
          label: selectedOption.label,
          message: message
        })
      });

      const data = await response.json();

      if (response.ok && data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        alert(data.error || 'Failed to create checkout session. Please try again.');
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
      <Navigation currentPage="fund-me" />

      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-b border-slate-700/50">
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <div className="text-center mb-3 md:mb-4">
              <span className="inline-block bg-pink-500/20 border border-pink-500/50 text-pink-300 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                💖 Support My Work
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Fund Me
            </h1>
            <p className="text-base md:text-xl text-slate-300 text-center max-w-3xl mx-auto mb-3 md:mb-4">
              Love my work? Support me with a fun donation! Every contribution helps me create better projects and maintain this awesome portfolio.
            </p>
            <p className="text-xs md:text-sm text-slate-400 text-center max-w-2xl mx-auto italic">
              🎉 All donations go towards improving my skills, tools, and coffee addiction!
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Donation Options */}
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Support Level
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {donationOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleDonationClick(option)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      selectedOption?.id === option.id
                        ? `border-pink-500 bg-gradient-to-br ${option.color} shadow-lg shadow-pink-500/50`
                        : 'border-slate-700 bg-slate-800/50 hover:border-pink-400'
                    }`}
                  >
                    <div className="text-4xl mb-2">{option.emoji}</div>
                    <div className="font-semibold mb-1">{option.label}</div>
                    <div className="text-2xl font-bold text-pink-400 mb-1">
                      ${option.amount} AUD
                    </div>
                    <div className="text-xs text-slate-400">{option.description}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">💰 Custom Amount</h3>
                <div className="flex gap-3">
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount in AUD"
                    className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <button
                    onClick={handleCustomAmountSelect}
                    disabled={!customAmount || parseFloat(customAmount) <= 0}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Chat Box & Payment */}
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Support Details
              </h2>

              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-6">
                {selectedOption ? (
                  <div className="mb-6 p-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{selectedOption.emoji}</span>
                      <div>
                        <div className="font-semibold">{selectedOption.label}</div>
                        <div className="text-2xl font-bold text-pink-400">
                          ${selectedOption.amount} AUD
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-300">{selectedOption.description}</div>
                  </div>
                ) : (
                  <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700 text-center text-slate-400">
                    👆 Select a donation option above
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2 text-purple-400">
                    💬 Add a Message (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Leave a nice message or tell me why you're supporting! 😊"
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  />
                </div>

                <button
                  onClick={handleProceedToPayment}
                  disabled={!selectedOption || isProcessing}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                      Processing...
                    </span>
                  ) : (
                    `💳 Proceed to Payment`
                  )}
                </button>

                <div className="mt-4 text-xs text-center text-slate-400">
                  🔒 Secure payment powered by Stripe
                </div>
              </div>

              {/* Why Support Info */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold mb-3 text-pink-400">💝 Why Support Me?</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>✨ Help me build more awesome projects</li>
                  <li>☕ Fuel my late-night coding sessions</li>
                  <li>🚀 Support continuous learning & improvement</li>
                  <li>💻 Upgrade my development tools & equipment</li>
                  <li>🎉 Keep this portfolio free & open for everyone</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Thank You Section */}
          <div className="mt-12 text-center bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-8 border border-pink-500/30">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              🙏 Thank You for Your Support!
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-4">
              Every contribution, no matter the size, makes a huge difference and keeps me motivated to create better projects and share knowledge with the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/budget"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                💰 Get a Project Quote
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                📧 Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}