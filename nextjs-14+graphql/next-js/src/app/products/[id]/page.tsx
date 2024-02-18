import styles from "./page.module.css";
import BackButton from "@/components/BackButton";
import { API } from "@/api/api";

type ProductDetail = {
	name: string;
	price: number;
	ratings: Array<{
		id: string;
		comment: string;
		rating: number;
	}>;
};

export default async function Page({
	params: { id },
}: {
	params: { id: string };
}) {
	console.log("SC - render Product");

	const product: ProductDetail = await API.getProduct(id);

	return (
		<div>
			<div className={styles.title}>{product.name}</div>

			<div className={styles.price}>{product.price}</div>

			<BackButton />
		</div>
	);
}
