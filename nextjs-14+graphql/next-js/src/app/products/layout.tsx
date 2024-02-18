export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	console.log("SC - render Layout Products");

	return (
		<div>
			{Math.random()}
			{children}
		</div>
	);
}
