import type { Metadata } from "next";
import Link from "next/link";

import styles from "./page.module.css";
import CurrentTime from "@/components/CurrentTime";
import RefreshButton from "@/components/RefreshButton";

export const metadata: Metadata = {
	title: "NextJS",
	description: "A NextJS app.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	console.log("SC - render Layout");

	return (
		<html lang="en">
			<body>
				<div className={styles.navbar}>
					<Link href="/">Homepage</Link>
					<Link
						href={{
							pathname: "/products",
							query: { page: 1 },
						}}
					>
						All products
					</Link>
					<CurrentTime />
					<RefreshButton />
				</div>

				<div className={styles.content}>{children}</div>
			</body>
		</html>
	);
}
