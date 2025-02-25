import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ToolsSection from '@/components/sections/ToolsSection';
import Link from 'next/link';

export default function LandingPage() {
	return (
		<main className="max-w-7xl mx-auto">
			<HeroSection />
			<ToolsSection />
			<StatsSection />
			{/* How It Works Section */}
			<section className="py-16 px-2">
				<h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
					How It Works
				</h2>
				<div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
					<div className="p-6">
						<h3 className="text-lg font-semibold">1. Enter Your Text</h3>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							Paste or type the text you want to modify.
						</p>
					</div>
					<div className="p-6">
						<h3 className="text-lg font-semibold">2. Choose an Option</h3>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							Select paraphrase, grammar check, or summarize.
						</p>
					</div>
					<div className="p-6">
						<h3 className="text-lg font-semibold">3. Get Results Instantly</h3>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							AI processes your text and provides a refined version.
						</p>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 px-2">
				<h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
					What Our Users Say
				</h2>
				<div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
					<div className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg">
						<p className="text-gray-600 dark:text-gray-300">
							{`"Super helpful for rewording my essays without changing meaning"`}
						</p>
						<span className="block mt-4 text-sm font-semibold text-blue-500">
							— Emily J.
						</span>
					</div>
					<div className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg">
						<p className="text-gray-600 dark:text-gray-300">
							{`"The grammar checker improved my writing clarity so much!"`}
						</p>
						<span className="block mt-4 text-sm font-semibold text-blue-500">
							— David K.
						</span>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="max-w-5xl mx-auto py-16 px-2 text-center bg-blue-600 text-white rounded-2xl">
				<h2 className="text-3xl font-bold mb-2">Enhance Your Writing Today!</h2>
				<p className="mb-6 text-lg">Try our AI-powered tool for free.</p>
				<Link
					href="/tools/paraphrase"
					className="px-6 py-3 border border-blue-400 rounded-lg text-lg hover:bg-blue-700 transition"
				>
					Start Now
				</Link>
			</section>
		</main>
	);
}
