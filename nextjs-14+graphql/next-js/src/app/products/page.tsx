import Link from "next/link";
import styles from "./page.module.css";
import { Suspense } from "react";
import Loader from "./[id]/loading";
import { API } from "@/api/api";

type ProductOverview = {
	id: string;
	name: string;
	price: number;
};

export default async function Page({
	searchParams,
}: {
	searchParams: { page: number };
}) {
	const page = searchParams?.page - 1 || 0;
	const pages = await API.getTotalPages();

	console.log("SC - render Products page " + page);

	return (
		<div>
			<div className={styles.title}>Products</div>

			<Suspense fallback={<Loader />} key={page + new Date().getTime()}>
				<PageContent page={page} />
			</Suspense>

			<div className={styles.pages}>
				{[...Array(pages)].map((_, p) => (
					<Link
						key={p}
						className={p === page ? styles.active : ""}
						href={{
							pathname: "/products",
							query: { page: p + 1 },
						}}
					>
						{p + 1}
					</Link>
				))}
			</div>
		</div>
	);
}

async function PageContent({ page }: { page: number }) {
	console.log("SC - render Products (INNER)");

	const products: ProductOverview[] = await API.getProducts(page);

	return (
		<div className={styles.products}>
			{products.map((p) => (
				<Link
					key={p.id}
					href={"/products/" + p.id}
					className={styles.product}
				>
					{p.name} - {p.price}
				</Link>
			))}
		</div>
	);
}
