'use client';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { BsClipboard2 } from 'react-icons/bs';

export default function Paraphraser() {
	const [inputText, setInputText] = useState('');
	const [outputText, setOutputText] = useState('');
	const [loading, setLoading] = useState(false);
	const [style, setStyle] = useState('standard');
	const [copied, setCopied] = useState(false);

	const handleParaphrase = async () => {
		if (!inputText.trim()) return;

		setLoading(true);
		try {
			const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
			const genAI = new GoogleGenerativeAI(API_KEY);
			const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

			let stylePrompt = '';
			switch (style) {
				case 'casual':
					stylePrompt = 'in a casual, conversational tone';
					break;
				case 'formal':
					stylePrompt = 'in a formal, professional tone';
					break;
				case 'creative':
					stylePrompt = 'in a creative, unique way';
					break;
				default:
					stylePrompt = 'clearly and concisely';
			}

			const prompt = `Paraphrase the following text ${stylePrompt}, while preserving the original meaning: "${inputText}"`;

			const result = await model.generateContent(prompt);
			console.log(result);
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

	const handleCopy = () => {
		if (!outputText) return;
		navigator.clipboard.writeText(outputText);
		setCopied(true);

		// Reset tooltip after 1.5 sec
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-blue-500">
						Paraphrasing Tool
					</h1>
					<p className="text-gray-600 mt-2">Powered by Gemini AI</p>
				</div>

				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
					<div className="grid md:grid-cols-2 gap-4 p-6">
						{/* Input Section */}
						<div className="space-y-4 relative">
							<div className="flex justify-between items-center">
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
									Original Text
								</label>
								<div>
									<span className="text-xs text-gray-500">
										{inputText.length} characters
									</span>
								</div>
							</div>
							<textarea
								value={inputText}
								onChange={(e) => setInputText(e.target.value)}
								className="bg-transparent w-full h-64 p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
								placeholder="Enter text to paraphrase..."
							/>
						</div>

						{/* Output Section */}
						<div className="space-y-4">
							<div className="flex justify-between items-center">
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
									Paraphrased Text
								</label>
								<div>
									<span className="text-xs text-gray-500">
										{outputText.length} characters
									</span>
								</div>
							</div>
							<div className="w-full h-64 p-3 bg-transparent border border-gray-600 rounded-lg overflow-y-auto relative">
								{loading ? (
									<div className="flex items-center justify-center h-full">
										<div className="animate-spin rounded-full size-8 border-b-2 border-blue-500"></div>
									</div>
								) : (
									<p className="text-gray-800 dark:text-gray-400 whitespace-pre-wrap">
										{outputText}
									</p>
								)}
								{outputText && (
									<button
										onClick={handleCopy}
										disabled={!outputText}
										className="absolute top-1 right-1 transition disabled:opacity-50 flex items-center justify-center gap-1 text-sm opacity-80 hover:opacity-100"
									>
										{copied ? (
											<BiCheck className="size-4 text-green-500" />
										) : (
											<BsClipboard2 className="size-4 text-gray-600 dark:text-gray-300" />
										)}
										<span>{copied ? 'Copied!' : 'Copy'}</span>
									</button>
								)}
							</div>
						</div>
					</div>

					{/* Controls */}
					<div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="w-full sm:w-auto">
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
								Paraphrasing Style
							</label>
							<select
								value={style}
								onChange={(e) => setStyle(e.target.value)}
								className="w-full sm:w-auto px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							>
								<option value="standard">Standard</option>
								<option value="casual">Casual</option>
								<option value="formal">Formal</option>
								<option value="creative">Creative</option>
							</select>
						</div>

						<button
							onClick={handleParaphrase}
							disabled={loading || !inputText.trim()}
							className={`w-full sm:w-auto px-5 py-2 rounded-md text-white font-medium transition
                ${
									loading || !inputText.trim()
										? 'bg-gray-400 cursor-not-allowed'
										: 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
								}
              `}
						>
							{loading ? 'Processing...' : 'Paraphrase'}
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
