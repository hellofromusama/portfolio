'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FundKashmirPage() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProceedToPayment = async () => {
    const donationAmount = parseFloat(amount);

    if (!donationAmount || donationAmount < 1) {
      alert('Please enter a valid amount (minimum $1 AUD)');
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('/api/create-kashmir-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: donationAmount,
          label: 'Donation for Azad Kashmir',
          message: message
        })
      });

      const data = await response.json();

      if (response.ok && data.url) {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 text-white overflow-hidden">
      {/* Animated Flag Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 animate-pulse">
          {/* Green stripe */}
          <div className="h-1/3 bg-gradient-to-r from-green-600 to-green-500"></div>
          {/* White stripe */}
          <div className="h-1/3 bg-gradient-to-r from-gray-100 to-white"></div>
          {/* Orange stripe with crescent and star */}
          <div className="h-1/3 bg-gradient-to-r from-orange-500 to-orange-600 relative flex items-center justify-center">
            <div className="text-white text-9xl opacity-30">☪</div>
          </div>
        </div>
      </div>

      <div className="pt-12 relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500/20 to-orange-500/20 border-b border-slate-700/50">
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <div className="text-center mb-3 md:mb-4">
              <span className="inline-block bg-green-500/20 border border-green-500/50 text-green-300 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                Stand with Azad Kashmir
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 bg-gradient-to-r from-green-400 via-white to-orange-500 bg-clip-text text-transparent">
              Fund for Azad Kashmir
            </h1>
            <p className="text-base md:text-xl text-slate-300 text-center max-w-3xl mx-auto mb-3 md:mb-4">
              Support the people of Azad Kashmir during this humanitarian crisis. Your donation provides essential aid to those affected by the ongoing violence and protests.
            </p>
            <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 max-w-3xl mx-auto">
              <p className="text-sm md:text-base text-red-200 text-center">
                <strong>Urgent:</strong> The Pakistan government's brutal crackdown has resulted in deaths and injuries. Peaceful protesters are being met with violence. Your support helps provide medical care, legal assistance, and essential supplies to affected families.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Crisis Information */}
          <div className="mb-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
              The Humanitarian Crisis
            </h2>
            <div className="space-y-3 text-slate-300">
              <p>
                Azad Kashmir is facing a severe humanitarian crisis. Peaceful protests demanding basic rights have been met with violent suppression by authorities, resulting in casualties and widespread fear.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Multiple people killed and injured in government crackdowns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Continuous protests against oppression and demand for basic rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Families in urgent need of medical care and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Economic hardship compounded by political repression</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Donation Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
                Make Your Donation
              </h2>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-green-400">Enter Donation Amount</h3>
                <div className="mb-6">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg font-semibold">$</span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount in AUD"
                      className="w-full bg-slate-900 border-2 border-slate-600 focus:border-green-500 rounded-lg pl-10 pr-20 py-4 text-white text-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">AUD</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Minimum donation: $1 AUD</p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2 text-green-400">
                    Add a Message (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message of support..."
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  />
                </div>

                <button
                  onClick={handleProceedToPayment}
                  disabled={!amount || parseFloat(amount) < 1 || isProcessing}
                  className="w-full bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                      Processing...
                    </span>
                  ) : (
                    'Proceed to Payment'
                  )}
                </button>

                <div className="mt-4 text-xs text-center text-slate-400">
                  🔒 Secure payment powered by Stripe
                </div>
              </div>

              {/* How Funds Are Used */}
              <div className="bg-gradient-to-br from-slate-800/50 to-green-900/20 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold mb-3 text-green-400">How Your Donation Helps</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Medical care for injured protesters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Legal assistance for those detained</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Essential supplies for affected families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Support for bereaved families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Documentation and awareness efforts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Contact & Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
                Contact & Information
              </h2>

              {/* Contact Person */}
              <div className="bg-gradient-to-br from-slate-800/80 to-green-900/20 rounded-xl p-6 border border-slate-700 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-green-400">Donation Coordinator</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xl font-bold text-white mb-1">Khawaja Jamal Chak</p>
                    <p className="text-sm text-slate-400">Responsible for donations and humanitarian aid</p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="mailto:zaaain.jamaal@gmail.com"
                      className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all border border-slate-700 hover:border-green-500/50"
                    >
                      <span className="text-2xl">📧</span>
                      <div>
                        <p className="text-xs text-slate-400">Email</p>
                        <p className="text-white font-semibold">zaaain.jamaal@gmail.com</p>
                      </div>
                    </a>

                    <a
                      href="tel:+61403053888"
                      className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all border border-slate-700 hover:border-green-500/50"
                    >
                      <span className="text-2xl">📞</span>
                      <div>
                        <p className="text-xs text-slate-400">Phone</p>
                        <p className="text-white font-semibold">+61 403 053 888</p>
                      </div>
                    </a>

                    <a
                      href="https://www.instagram.com/zainjamalchak_official/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-lg hover:from-pink-500/20 hover:to-orange-500/20 transition-all border border-pink-500/30 hover:border-pink-500/50"
                    >
                      <span className="text-2xl">📱</span>
                      <div>
                        <p className="text-xs text-slate-400">Instagram</p>
                        <p className="text-white font-semibold">@zainjamalchak_official</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <p className="text-xs text-slate-400 italic">
                      For questions about donations, fund usage, or how you can help, please reach out via email, phone, or Instagram.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transparency Info */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Our Commitment</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>100% transparency in fund allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Direct support to affected families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Regular updates on fund usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Documented receipts for all expenses</span>
                  </li>
                </ul>
              </div>

              {/* Fund Usage Link */}
              <Link
                href="/fund-kashmir/usage"
                className="block w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center border border-slate-600"
              >
                📊 View Detailed Fund Usage Report
              </Link>
            </div>
          </div>

          {/* Solidarity Message */}
          <div className="mt-12 text-center bg-gradient-to-r from-green-500/10 to-orange-500/10 rounded-xl p-8 border border-green-500/30">
            <p className="text-slate-300 text-lg italic mb-2">
              "We stand with the people of Azad Kashmir in their struggle for justice, dignity, and basic human rights."
            </p>
            <p className="text-slate-500 text-sm">
              Every contribution makes a difference. Thank you for your support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
