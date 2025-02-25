import HeroImage from '@/public/hero2.png';
import Image from 'next/image';
import Link from 'next/link';
export default function HeroSection() {
	return (
		<section className="min-h-[480px] flex flex-col md:flex-row items-center justify-center gap-4 px-4">
			<div className="w-full md:w-1/2 md:order-2 rounded-xl">
				<Image
					src={HeroImage}
					alt="ai powered writing tools"
					className="w-full object-cover rounded-xl"
				/>
			</div>
			<div className="max-w-3xl">
				<h1 className="text-4xl md:text-5xl font-bold leading-tight">
					Your Words,{' '}
					<span className="text-blue-600 underline">Perfected by AI.</span>
				</h1>
				<p className="mt-4 text-gray-600 text-lg">
					Improve clarity, fix grammar, and enhance creativity with AI-powered
					writing tools.
				</p>

				{/* CTA Buttons */}
				<div className="mt-6 flex justify-center md:justify-start items-center gap-4">
					<Link
						href="#"
						className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg hover:bg-blue-700 transition"
					>
						Try for Free
					</Link>
					<Link
						href="#"
						className="text-blue-600 font-medium text-lg hover:underline"
					>
						Learn More →
					</Link>
				</div>
			</div>
		</section>
	);
}
