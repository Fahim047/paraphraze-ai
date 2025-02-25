import Link from 'next/link';

export default function ToolsSection() {
	return (
		<section className="py-16 text-center px-2">
			{/* Heading */}
			<h2 className="text-3xl md:text-4xl font-bold">
				Powerful tools.{' '}
				<span className="text-blue-600 underline">One suite.</span>
			</h2>

			{/* Tools Grid */}
			<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
				{tools.map((tool, index) => (
					<div
						key={index}
						className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition"
					>
						{/* Icon */}
						<div
							className={`w-12 h-12 flex items-center justify-center rounded-full bg-opacity-20`}
							style={{ backgroundColor: tool.bgColor }}
						>
							{tool.icon}
						</div>
						{/* Content */}
						<div className="text-left">
							<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
								{tool.title}
							</h3>
							<p className="text-sm text-gray-500">{tool.description}</p>
						</div>
					</div>
				))}
			</div>

			{/* Call to Action */}
			<Link
				href="#"
				className="mt-8 inline-block bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg hover:bg-blue-700 transition"
			>
				Sign up now. It&apos;s free
			</Link>
		</section>
	);
}

// Tools Data
const tools = [
	{
		title: 'Paraphraser',
		description: 'Enhance fluency',
		bgColor: '#2DCE89',
		icon: '📝',
	},
	{
		title: 'Grammar Fixer',
		description: 'Fix writing mistakes',
		bgColor: '#FF5E5E',
		icon: '🔤',
	},
	{
		title: 'Plagiarism Scanner',
		description: 'Detect originality',
		bgColor: '#FF8C00',
		icon: '🕵️',
	},
	{
		title: 'AI Analyzer',
		description: 'Analyze content',
		bgColor: '#FFC107',
		icon: '🤖',
	},
	{
		title: 'Summarizer',
		description: 'Summarize text',
		bgColor: '#673AB7',
		icon: '📄',
	},
	{
		title: 'Citation Maker',
		description: 'Generate references',
		bgColor: '#1976D2',
		icon: '🔗',
	},
];
