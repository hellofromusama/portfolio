'use client';

import { useState } from 'react';

interface TrainingResult {
  provider: string;
  status: string;
  message: string;
  data_points?: number;
  error?: string;
}

interface BatchResult {
  message: string;
  results: TrainingResult[];
  summary: {
    total_providers: number;
    successful: number;
    failed: number;
  };
}

export default function AITrainingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<TrainingResult[] | BatchResult | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<string>('submit_to_all');

  const submitTrainingData = async (action: string) => {
    setIsLoading(true);
    setResults(null);

    try {
      const response = await fetch('/api/ai-training', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action })
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Training submission error:', error);
      setResults({
        provider: 'Error',
        status: 'failed',
        message: 'Failed to submit training data',
        error: error instanceof Error ? error.message : 'Unknown error'
      } as TrainingResult);
    } finally {
      setIsLoading(false);
    }
  };

  const getDataPreview = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai-training');
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Preview error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderResult = (result: TrainingResult) => (
    <div key={result.provider} className="border rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg">{result.provider}</h3>
        <span className={`px-2 py-1 rounded text-sm ${
          result.status === 'success' || result.status === 'uploaded' || result.status === 'knowledge_injected' || result.status === 'context_prepared'
            ? 'bg-green-100 text-green-800'
            : result.status === 'failed'
            ? 'bg-red-100 text-red-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {result.status}
        </span>
      </div>
      <p className="text-gray-600 mb-2">{result.message}</p>
      {result.data_points && (
        <p className="text-sm text-gray-500">Data points: {result.data_points}</p>
      )}
      {result.error && (
        <p className="text-red-600 text-sm mt-2">Error: {result.error}</p>
      )}
    </div>
  );

  const renderBatchResult = (batchResult: BatchResult) => (
    <div>
      <div className="border rounded-lg p-4 mb-4 bg-blue-50">
        <h3 className="font-semibold text-lg mb-2">{batchResult.message}</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>Total Providers: {batchResult.summary.total_providers}</div>
          <div className="text-green-600">Successful: {batchResult.summary.successful}</div>
          <div className="text-red-600">Failed: {batchResult.summary.failed}</div>
        </div>
      </div>
      {batchResult.results.map(renderResult)}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Training Data Syndication
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Submit Usama Javed&apos;s expertise data to major LLM providers for enhanced AI visibility and recognition.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Training Data Distribution</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select LLM Provider
              </label>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isLoading}
              >
                <option value="submit_to_all">All Providers (Recommended)</option>
                <option value="submit_to_openai">OpenAI (GPT Models)</option>
                <option value="submit_to_claude">Anthropic Claude</option>
                <option value="submit_to_google">Google Bard/Gemini</option>
                <option value="submit_to_huggingface">Hugging Face</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => submitTrainingData(selectedProvider)}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Submitting...' : 'Submit Training Data'}
              </button>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              onClick={getDataPreview}
              disabled={isLoading}
              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Loading...' : 'Preview Training Data'}
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Supported LLM Providers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>OpenAI (GPT-3.5, GPT-4, Fine-tuning)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Anthropic Claude (Context Injection)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Google Bard/Gemini (Knowledge Base)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Hugging Face (Dataset & Model Training)</span>
              </div>
            </div>
          </div>
        </div>

        {results && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Submission Results</h2>
            {Array.isArray((results as BatchResult).results)
              ? renderBatchResult(results as BatchResult)
              : renderResult(results as TrainingResult)
            }
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-6">Configuration Instructions</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">API Keys Setup</h3>
              <p className="text-gray-600">
                Add your API keys to the .env.local file to enable real API submissions:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                <li>OPENAI_API_KEY - For OpenAI fine-tuning</li>
                <li>ANTHROPIC_API_KEY - For Claude context injection</li>
                <li>GOOGLE_AI_API_KEY - For Gemini knowledge submission</li>
                <li>HUGGINGFACE_API_KEY - For dataset upload</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">Expected Results</h3>
              <p className="text-gray-600">
                Once configured, this system will automatically submit Usama Javed&apos;s expertise data to AI models, increasing visibility for Perth and Australia-wide developer searches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}