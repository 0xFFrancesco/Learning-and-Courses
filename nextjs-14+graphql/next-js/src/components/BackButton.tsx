"use client";

import { useRouter } from "next/navigation";
import styles from "./backButton.module.css";

const BackButton = () => {
	console.log("CC - render Back Button");

	const { back } = useRouter();

	return (
		<button className={styles.backButton} type="button" onClick={back}>
			Go back
		</button>
	);
};

export default BackButton;
