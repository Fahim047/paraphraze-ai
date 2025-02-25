'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isToolsOpen, setIsToolsOpen] = useState(false); // Mobile dropdown state

	return (
		<nav className="bg-white dark:bg-gray-900 border-b border-gray-500 py-4 px-2 sticky top-0 z-10">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<div className="flex items-center">
					<Link href="/" className="flex items-center">
						<svg
							viewBox="0 0 24 24"
							className="h-8 w-8 text-blue-600"
							fill="currentColor"
						>
							<path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm-1 1.914L6 7.608v8.766l5 3.12V11.72l5-3.064v-1.147L11 3.914zm2 0v1.067l5 3.064v1.147l-5 3.064v7.774l5-3.12V7.608l-5-3.694z" />
						</svg>
						<span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
							Paraphraser
						</span>
					</Link>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-8">
					<Link
						href="/"
						className="text-gray-700 dark:text-white/80 hover:text-blue-600 transition-colors"
					>
						Home
					</Link>
					{/* Tools Dropdown - FIXED */}
					<div className="relative group">
						<button className="text-gray-700 dark:text-white/80 hover:text-blue-600 transition-colors">
							Tools ▾
						</button>
						<div className="absolute left-0 mt-1 hidden group-hover:flex flex-col bg-white dark:bg-gray-800 shadow-md min-w-max rounded-lg border border-gray-200 dark:border-gray-700">
							<Link
								href="/tools/paraphrase"
								className="px-4 py-2 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
							>
								Paraphrase
							</Link>
							<Link
								href="/tools/summarize"
								className="px-4 py-2 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
							>
								Summarize
							</Link>
							<Link
								href="/tools/grammar-check"
								className="px-4 py-2 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
							>
								Grammar Check
							</Link>
						</div>
					</div>
					<Link
						href="/features"
						className="text-gray-700 dark:text-white/80 hover:text-blue-600 transition-colors"
					>
						Features
					</Link>
					<Link
						href="/about"
						className="text-gray-700 dark:text-white/80 hover:text-blue-600 transition-colors"
					>
						About
					</Link>

					<button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
						Try it free
					</button>
				</div>

				{/* Mobile menu button */}
				<div className="md:hidden">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-blue-400 focus:outline-none"
					>
						{isMenuOpen ? (
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden pt-4 pb-2 px-6 space-y-4 border-t mt-4 border-gray-100">
					<Link
						href="/"
						className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						Home
					</Link>
					{/* Tools Dropdown for Mobile */}
					<div>
						<button
							onClick={() => setIsToolsOpen(!isToolsOpen)}
							className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
						>
							Tools ▾
						</button>
						{isToolsOpen && (
							<div className="pl-4 space-y-2">
								<Link
									href="/tools/paraphrase"
									className="block text-gray-700 hover:text-blue-600 transition-colors"
									onClick={() => setIsMenuOpen(false)}
								>
									Paraphrase
								</Link>
								<Link
									href="/tools/summarize"
									className="block text-gray-700 hover:text-blue-600 transition-colors"
									onClick={() => setIsMenuOpen(false)}
								>
									Summarize
								</Link>
								<Link
									href="/tools/grammar-check"
									className="block text-gray-700 hover:text-blue-600 transition-colors"
									onClick={() => setIsMenuOpen(false)}
								>
									Grammar Check
								</Link>
							</div>
						)}
					</div>
					<Link
						href="/features"
						className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						Features
					</Link>
					<Link
						href="/about"
						className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
						onClick={() => setIsMenuOpen(false)}
					>
						About
					</Link>

					<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
						Try it free
					</button>
				</div>
			)}
		</nav>
	);
}
