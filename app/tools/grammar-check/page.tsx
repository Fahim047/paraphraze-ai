'use client';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';

export default function GrammarChecker() {
	const [inputText, setInputText] = useState('');
	const [outputText, setOutputText] = useState('');
	const [loading, setLoading] = useState(false);
	const [copied, setCopied] = useState(false);

	async function handleGrammarCheck() {
		if (!inputText.trim()) return;

		setLoading(true);
		try {
			const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
			const genAI = new GoogleGenerativeAI(API_KEY);
			const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

			const prompt = `You are a professional grammar editor. Correct all grammar, spelling, and punctuation errors in the following text. Only return the corrected text without explanations or extra words:\n\n"${inputText}"`;

			const result = await model.generateContent(prompt);
			const response = await result.response;
			const correctedText = response.text();

			setOutputText(correctedText);
		} catch (error) {
			console.error('Error:', error);
			setOutputText('An error occurred. Please try again.');
		} finally {
			setLoading(false);
		}
	}

	const handleCopy = () => {
		if (!outputText) return;
		navigator.clipboard.writeText(outputText);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<main className="min-h-screen p-4 md:p-8">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-blue-600">Grammar Checker</h1>
					<p className="text-gray-600 mt-2">
						Fix spelling & grammar mistakes instantly
					</p>
				</div>

				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
					<div className="p-6 space-y-4">
						{/* Input Section */}
						<div className="space-y-4">
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-500">
								Enter Your Text
							</label>
							<textarea
								value={inputText}
								onChange={(e) => setInputText(e.target.value)}
								className="bg-transparent w-full h-32 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
								placeholder="Type or paste text..."
							/>
						</div>

						{/* Output Section */}
						<div className="space-y-4">
							<label className="block text-sm font-medium text-gray-500">
								Corrected Text
							</label>
							<div className="relative">
								<textarea
									value={loading ? 'Checking grammar...' : outputText}
									readOnly
									className="w-full h-32 p-3 bg-transparent border border-gray-200 outline-none rounded-lg resize-none"
								/>
								{outputText && (
									<button
										onClick={handleCopy}
										className="absolute bottom-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition"
									>
										{copied ? 'Copied!' : 'Copy'}
									</button>
								)}
							</div>
						</div>

						{/* Controls */}
						<button
							onClick={handleGrammarCheck}
							disabled={loading || !inputText.trim()}
							className={`w-full px-5 py-2 rounded-md text-white font-medium transition
								${
									loading || !inputText.trim()
										? 'bg-blue-300 cursor-not-allowed'
										: 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
								}
							`}
						>
							{loading ? 'Checking...' : 'Check Grammar'}
						</button>
					</div>
				</div>

				<p className="text-center text-gray-500 text-xs mt-8">
					Powered by Gemini AI
				</p>
			</div>
		</main>
	);
}
