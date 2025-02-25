import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="py-4">
			<p className="text-center">
				Made with ❤️ by{' '}
				<Link
					href="https://github.com/Fahim047"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 hover:underline"
				>
					Fahimul Islam
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
