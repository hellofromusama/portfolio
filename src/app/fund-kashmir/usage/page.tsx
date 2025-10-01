'use client';

import Link from 'next/link';

interface UsageEntry {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
  beneficiaries: number;
  status: 'completed' | 'in-progress' | 'planned';
}

export default function FundUsagePage() {
  // Sample data - In production, this would come from a database
  const usageEntries: UsageEntry[] = [
    {
      id: '1',
      date: '2025-09-28',
      category: 'Medical Aid',
      description: 'Emergency medical supplies and treatment for injured protesters',
      amount: 2500,
      beneficiaries: 15,
      status: 'completed'
    },
    {
      id: '2',
      date: '2025-09-26',
      category: 'Legal Assistance',
      description: 'Legal representation for detained protesters and their families',
      amount: 1800,
      beneficiaries: 8,
      status: 'completed'
    },
    {
      id: '3',
      date: '2025-09-25',
      category: 'Family Support',
      description: 'Financial assistance to families of those killed in the crackdown',
      amount: 5000,
      beneficiaries: 4,
      status: 'completed'
    },
    {
      id: '4',
      date: '2025-09-30',
      category: 'Essential Supplies',
      description: 'Food, water, and basic necessities for affected communities',
      amount: 3200,
      beneficiaries: 50,
      status: 'in-progress'
    },
    {
      id: '5',
      date: '2025-10-01',
      category: 'Documentation',
      description: 'Documentation of human rights violations and awareness campaigns',
      amount: 1500,
      beneficiaries: 0,
      status: 'planned'
    }
  ];

  const totalDonations = 25000; // This would be calculated from actual donations
  const totalSpent = usageEntries
    .filter(e => e.status === 'completed')
    .reduce((sum, entry) => sum + entry.amount, 0);
  const totalBeneficiaries = usageEntries
    .reduce((sum, entry) => sum + entry.beneficiaries, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'planned':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Medical Aid':
        return '🏥';
      case 'Legal Assistance':
        return '⚖️';
      case 'Family Support':
        return '👨‍👩‍👧‍👦';
      case 'Essential Supplies':
        return '📦';
      case 'Documentation':
        return '📝';
      default:
        return '💚';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 text-white">
      <div className="pt-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500/20 to-orange-500/20 border-b border-slate-700/50">
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <div className="text-center mb-3 md:mb-4">
              <span className="inline-block bg-green-500/20 border border-green-500/50 text-green-300 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                Transparency Report
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4 bg-gradient-to-r from-green-400 via-white to-orange-500 bg-clip-text text-transparent">
              Fund Usage & Impact
            </h1>
            <p className="text-base md:text-xl text-slate-300 text-center max-w-3xl mx-auto">
              Complete transparency on how your donations are helping the people of Azad Kashmir
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-6">
              <div className="text-green-400 text-sm font-semibold mb-2">Total Donations</div>
              <div className="text-3xl font-bold text-white mb-1">
                ${totalDonations.toLocaleString()} AUD
              </div>
              <div className="text-xs text-slate-400">From generous supporters worldwide</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-xl p-6">
              <div className="text-orange-400 text-sm font-semibold mb-2">Funds Deployed</div>
              <div className="text-3xl font-bold text-white mb-1">
                ${totalSpent.toLocaleString()} AUD
              </div>
              <div className="text-xs text-slate-400">
                {((totalSpent / totalDonations) * 100).toFixed(1)}% of total donations
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-6">
              <div className="text-blue-400 text-sm font-semibold mb-2">People Helped</div>
              <div className="text-3xl font-bold text-white mb-1">
                {totalBeneficiaries}+
              </div>
              <div className="text-xs text-slate-400">Direct beneficiaries and families</div>
            </div>
          </div>

          {/* Usage Timeline */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
              Detailed Fund Usage
            </h2>

            <div className="space-y-4">
              {usageEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-slate-900/50 rounded-lg p-5 border border-slate-700 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{getCategoryIcon(entry.category)}</span>
                        <div>
                          <h3 className="font-semibold text-lg text-white">{entry.category}</h3>
                          <p className="text-sm text-slate-400">{entry.date}</p>
                        </div>
                      </div>
                      <p className="text-slate-300 mb-3">{entry.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-green-400">💰</span>
                          <span className="text-slate-300">
                            ${entry.amount.toLocaleString()} AUD
                          </span>
                        </div>
                        {entry.beneficiaries > 0 && (
                          <div className="flex items-center gap-2">
                            <span className="text-blue-400">👥</span>
                            <span className="text-slate-300">
                              {entry.beneficiaries} beneficiaries
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(entry.status)}`}>
                        {entry.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-slate-800/50 to-green-900/20 rounded-xl p-6 border border-slate-700 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Questions About Fund Usage?</h3>
            <p className="text-slate-300 mb-4">
              For detailed information about specific expenditures or to verify how funds are being used, please contact:
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

          {/* Commitment Statement */}
          <div className="bg-gradient-to-r from-green-500/10 to-orange-500/10 rounded-xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent text-center">
              Our Commitment to Transparency
            </h3>
            <div className="max-w-3xl mx-auto space-y-4 text-slate-300">
              <p>
                We are committed to complete transparency in how every dollar is spent. All donations go directly to helping the people of Azad Kashmir during this humanitarian crisis.
              </p>
              <p>
                This page is updated regularly to reflect the latest fund usage. We maintain detailed records and documentation for all expenditures.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>100% of donations go to humanitarian aid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Regular updates and detailed reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Direct support to affected families and communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Verified receipts and documentation for all expenses</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fund-kashmir"
              className="bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
