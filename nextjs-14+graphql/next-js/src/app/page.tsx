import styles from "./page.module.css";

export default function Page() {
	console.log("SC - render Home");

	return (
		<div>
			<div className={styles.title}>Homepage</div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
			tempora in tenetur tempore, quos iusto possimus quis natus
			similique, consectetur minima nemo voluptate quae repellat molestias
			quisquam unde reprehenderit quia.
		</div>
	);
}
