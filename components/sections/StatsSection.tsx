import Link from 'next/link';

export default function StatsSection() {
	return (
		<section className="py-16 flex justify-center px-2">
			<div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-2xl border border-gradient-to-r from-green-500 to-blue-500 shadow-lg px-8 py-12 text-center">
				<h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
					Trusted by Writers & Professionals Worldwide
				</h2>

				{/* Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
					<div>
						<p className="text-5xl font-bold text-blue-600">50M+</p>
						<p className="text-gray-500">Active users worldwide</p>
					</div>
					<div>
						<p className="text-5xl font-bold text-blue-600">200+</p>
						<p className="text-gray-500">Countries using our platform</p>
					</div>
					<div>
						<p className="text-5xl font-bold text-blue-600">80%</p>
						<p className="text-gray-500">Faster writing efficiency</p>
					</div>
					<div>
						<p className="text-5xl font-bold text-blue-600">4.8/5</p>
						<p className="text-gray-500">Average user rating</p>
					</div>
				</div>

				{/* CTA Button */}
				<div className="mt-8">
					<Link
						href="#"
						className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-700 transition"
					>
						Get Started for Free
					</Link>
				</div>
			</div>
		</section>
	);
}
