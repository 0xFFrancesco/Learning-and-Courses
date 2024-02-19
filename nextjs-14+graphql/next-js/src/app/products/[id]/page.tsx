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
			<div className={styles.title}>
				{product.name}
				<div className={styles.price}>${product.price.toFixed(2)}</div>
			</div>

			<div className={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Consectetur praesentium, tempora illum quibusdam aliquam
				consequatur ipsa iste hic fuga aut temporibus adipisci at? Quis,
				quos? Voluptatum, optio? Iure, consequatur rem? Repudiandae
				neque non ab totam corrupti odit suscipit optio alias facilis
				cumque, saepe, minus maiores perspiciatis ipsam tempore. Ex
				autem vero modi rem ipsa reprehenderit earum voluptatum
				laudantium minima cumque! Animi fuga nesciunt assumenda
				recusandae quidem consequuntur laboriosam corporis earum
				officiis deserunt sed, ipsam voluptas sit saepe illo velit,
				doloremque hic dolores itaque aperiam beatae? Dolorum temporibus
				corrupti tenetur doloremque. Consequuntur, culpa quae in
				temporibus illo pariatur eos alias tempore. Molestias aliquid
				sequi consectetur sunt consequuntur rem aspernatur suscipit
				veritatis nesciunt magnam, beatae voluptatum accusantium
				inventore velit, illum officiis adipisci? Reprehenderit
				quibusdam earum nemo aliquid atque, id repudiandae! Cupiditate
				itaque culpa corporis ex suscipit autem quam eveniet nam
				laborum, illo voluptas, reiciendis non vero omnis? Culpa
				laboriosam explicabo doloribus fuga. Repudiandae suscipit
				adipisci quos repellendus maxime odio deserunt officiis
				temporibus reiciendis laudantium! Ipsa dolore laborum in hic
				dolor quos voluptas? Consectetur perspiciatis id unde,
				dignissimos tempora beatae temporibus repudiandae rem! Pariatur
				rerum libero laborum labore repellendus, repellat blanditiis
				repudiandae consequuntur fuga sunt amet ipsum tempora laudantium
				perferendis nobis? Voluptate quae officiis nulla sint aperiam
				pariatur eum fuga voluptates incidunt doloremque. Dolorum, in
				libero. Placeat commodi impedit modi magnam odio. Perspiciatis
				quod sunt, quas magnam voluptate voluptatum corporis dolor
				possimus, ullam quidem, ducimus nulla porro eum expedita ipsam
				qui aperiam cumque.
			</div>

			<BackButton />
		</div>
	);
}
