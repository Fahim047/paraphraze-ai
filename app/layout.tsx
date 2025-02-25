import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'ParaphraseAI',
	description: 'Paraphrase sentences with AI',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
