'use client';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { BsClipboard2 } from 'react-icons/bs';

type SummaryLength = 'short' | 'medium' | 'detailed';
export default function SummarizerPage() {
	const [inputText, setInputText] = useState('');
	const [outputText, setOutputText] = useState('');
	const [loading, setLoading] = useState(false);
	const [summaryLength, setSummaryLength] = useState<SummaryLength>('short');
	const [copied, setCopied] = useState(false);

	// Function to handle AI summarization
	const handleSummarize = async () => {
		if (!inputText.trim()) return;

		setLoading(true);
		try {
			const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
			const genAI = new GoogleGenerativeAI(API_KEY);
			const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

			const lengthPrompt = {
				short: 'in a short and concise manner',
				medium: 'with a balanced and detailed summary',
				detailed: 'in a highly detailed and informative way',
			};

			const prompt = `Summarize the following text ${lengthPrompt[summaryLength]}, preserving key information:\n\n"${inputText}"`;

			const result = await model.generateContent(prompt);
			const response = await result.response;
			const text = response.text();

			setOutputText(text);
		} catch (error) {
			console.error('Error:', error);
			setOutputText('An error occurred. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	// Copy to clipboard function
	const handleCopy = () => {
		if (!outputText) return;
		navigator.clipboard.writeText(outputText);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<section className="min-h-screen flex flex-col items-center py-16 px-6">
			<div className="max-w-4xl w-full rounded-2xl shadow-lg p-8">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 text-center">
					AI-Powered <span className="text-blue-600">Summarizer</span>
				</h1>
				<p className="text-gray-600 text-center mt-2">
					Generate clear, concise summaries instantly.
				</p>

				{/* Input Text Area */}
				<div className="mt-6">
					<textarea
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
						className="h-64 bg-transparent resize-none w-full p-4 border rounded-lg focus:outline-blue-500 shadow-sm"
						rows={6}
						placeholder="Paste or type your text here..."
					></textarea>
				</div>

				{/* Summary Options */}
				<div className="mt-4 flex justify-center gap-4">
					{['short', 'medium', 'detailed'].map((length: string) => (
						<button
							key={length}
							onClick={() => setSummaryLength(length as SummaryLength)}
							className={`px-4 py-2 rounded-lg transition ${
								summaryLength === length
									? 'bg-blue-500 text-white'
									: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
							}`}
						>
							{length.charAt(0).toUpperCase() + length.slice(1)}
						</button>
					))}
				</div>

				{/* Generate Summary Button */}
				<div className="mt-6 text-center">
					<button
						onClick={handleSummarize}
						disabled={loading || !inputText.trim()}
						className={`w-full sm:w-auto px-6 py-3 rounded-full text-lg font-medium shadow-md transition ${
							loading || !inputText.trim()
								? 'bg-gray-400 cursor-not-allowed'
								: 'bg-blue-600 text-white hover:bg-blue-700'
						}`}
					>
						{loading ? 'Summarizing...' : 'Generate Summary'}
					</button>
				</div>

				{/* Summary Output */}
				<div className="mt-6 p-4 rounded-lg min-h-[120px] text-gray-700 dark:text-gray-200 relative border h-64">
					{loading ? (
						<div className="flex items-center justify-center h-24">
							<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
						</div>
					) : (
						<p className="text-gray-800 dark:text-gray-200">
							{outputText || 'Your summary will appear here...'}
						</p>
					)}
					{outputText && (
						<button
							onClick={handleCopy}
							className="absolute top-2 right-2 flex items-center gap-1 text-sm opacity-80 hover:opacity-100"
						>
							{copied ? (
								<BiCheck className="size-4 text-green-500" />
							) : (
								<BsClipboard2 className="size-4 text-gray-600" />
							)}
							<span>{copied ? 'Copied!' : 'Copy'}</span>
						</button>
					)}
				</div>
			</div>
		</section>
	);
}
