'use client';

import Link from 'next/link';

export default function FundUsagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 text-white overflow-hidden">
      {/* Animated Azad Kashmir Flag Background */}
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
                Our Mission
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 bg-gradient-to-r from-green-400 via-white to-orange-500 bg-clip-text text-transparent">
              How Your Donations Help Azad Kashmir
            </h1>
            <p className="text-base md:text-xl text-slate-300 text-center max-w-3xl mx-auto">
              Understanding the impact of your contribution during this humanitarian crisis
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
                The Crisis in Azad Kashmir
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Azad Kashmir is currently facing one of its most challenging humanitarian crises in recent history. What began as peaceful protests demanding basic rights has escalated into a situation of severe oppression, with the Pakistan government responding with brutal force that has resulted in deaths, injuries, and widespread fear among the population.
                </p>
                <p>
                  The people of Azad Kashmir are not asking for much—they are simply demanding their fundamental human rights, economic justice, and the freedom to voice their concerns without fear of violence. Instead, they have been met with a heavy-handed crackdown that has left families grieving, communities traumatized, and an entire region in urgent need of support.
                </p>
              </div>
            </div>
          </div>

          {/* How Funds Help */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-green-900/20 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
              <h2 className="text-2xl font-bold mb-6 text-green-400">
                How Your Donations Make a Difference
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white mb-3">🏥 Emergency Medical Care</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Many protesters have been injured during the government crackdown, some critically. Your donations help provide immediate medical attention, hospital care, medications, and rehabilitation services for those who have been wounded. This includes covering surgery costs, ongoing treatment, and medical supplies that are desperately needed.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white mb-3">⚖️ Legal Support and Representation</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Dozens of peaceful protesters have been detained, many without proper legal representation. Funds are used to hire experienced lawyers who can defend these individuals, ensure they receive fair treatment under the law, and work toward their release. Legal aid also extends to documenting cases of human rights violations for future accountability.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white mb-3">👨‍👩‍👧‍👦 Support for Bereaved Families</h3>
                  <p className="text-slate-300 leading-relaxed">
                    The families who have lost loved ones in this crisis are facing unimaginable grief compounded by economic hardship. Your contributions provide direct financial assistance to help these families cover funeral expenses, immediate living costs, and support children who have lost parents. This assistance helps ensure that families can maintain their dignity during the most difficult time of their lives.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white mb-3">📦 Essential Supplies and Relief</h3>
                  <p className="text-slate-300 leading-relaxed">
                    The ongoing crisis has created economic strain on many families. Donations help provide essential supplies including food, clean water, clothing, and shelter materials for those who have been displaced or are struggling to meet basic needs. This immediate relief is critical for survival and maintaining health during this difficult period.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white mb-3">📝 Documentation and Awareness</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Part of the funds go toward documenting human rights violations, collecting testimonies, and raising international awareness about what is happening in Azad Kashmir. This documentation is crucial for future accountability and for ensuring the world knows the truth about this crisis. It includes supporting local journalists, human rights defenders, and community organizers who are working tirelessly to bring attention to these injustices.
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white mb-3">🤝 Community Organizing and Support</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Funds help support community organizers who coordinate relief efforts, provide psychological support to traumatized individuals, and help maintain the peaceful movement for justice. This includes organizing safe spaces for community members to gather, share experiences, and plan constructive paths forward.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why This Matters */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-orange-900/20 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
              <h2 className="text-2xl font-bold mb-6 text-orange-400">
                Why This Crisis Matters
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  The situation in Azad Kashmir is not just a local issue—it is a human rights crisis that demands global attention and support. When governments use violence against peaceful protesters demanding basic rights, it is a concern for all who value justice, dignity, and freedom.
                </p>
                <p>
                  The people of Azad Kashmir are not alone in their struggle. Communities around the world have faced similar challenges when standing up for their rights, and they have survived and eventually prevailed because of solidarity and support from compassionate individuals who refused to look away.
                </p>
                <p>
                  Your donation, regardless of size, sends a powerful message to the people of Azad Kashmir: you are seen, you are heard, and you are not alone. This psychological and moral support is just as important as the material assistance it provides.
                </p>
              </div>
            </div>
          </div>

          {/* Transparency Commitment */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/80 to-green-900/20 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-green-400">
                Our Commitment to Transparency
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We understand that when you donate your hard-earned money, you want to know that it is being used effectively and responsibly. That's why we are committed to complete transparency in how every dollar is allocated and spent.
                </p>
                <p>
                  All donations are carefully tracked and documented. We maintain detailed records of every expenditure, including receipts, beneficiary information (with privacy protections), and impact assessments. Regular updates will be provided to show how funds are being used and the difference they are making in people's lives.
                </p>
                <p>
                  We work directly with trusted community leaders and organizations on the ground in Azad Kashmir who have deep knowledge of the needs and can ensure that assistance reaches those who need it most. Every decision about fund allocation is made with input from these local partners who understand the situation firsthand.
                </p>
              </div>

              <div className="mt-6 p-6 bg-slate-900/50 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-semibold mb-4 text-green-400">Key Transparency Principles:</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>100% of donations go directly to humanitarian aid—no administrative fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Detailed documentation maintained for all expenditures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Regular updates on fund usage and impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Direct collaboration with trusted local partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Open communication—donors can contact us anytime with questions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-green-900/20 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Questions or Want to Help?</h3>
              <p className="text-slate-300 mb-4">
                For questions about how funds are being used, to receive updates, or to discuss other ways you can help the people of Azad Kashmir, please contact:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">👤</span>
                  <div>
                    <p className="font-semibold text-white">Khawaja Jamal Chak</p>
                    <p className="text-xs text-slate-400">Donation Coordinator</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📧</span>
                  <a href="mailto:zaaain.jamaal@gmail.com" className="text-green-400 hover:text-green-300">
                    zaaain.jamaal@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <a href="tel:+61403053888" className="text-green-400 hover:text-green-300">
                    +61 403 053 888
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📱</span>
                  <a
                    href="https://www.instagram.com/zainjamalchak_official/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                  >
                    @zainjamalchak_official
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-green-500/10 to-orange-500/10 rounded-xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
              Every Contribution Matters
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Whether you can donate $5 or $500, your contribution will make a real difference in someone's life. Together, we can provide hope, relief, and support to those who need it most.
            </p>
            <Link
              href="/fund-kashmir"
              className="inline-block bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
            >
              Make a Donation
            </Link>
          </div>

          {/* Closing Message */}
          <div className="mt-12 text-center">
            <p className="text-slate-300 text-lg italic">
              "We stand with the people of Azad Kashmir in their struggle for justice, dignity, and basic human rights."
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Thank you for your compassion and support during this critical time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
