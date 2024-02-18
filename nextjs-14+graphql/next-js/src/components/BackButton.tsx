"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
	console.log("CC - render Back Button");

	const { back } = useRouter();

	return (
		<button type="button" onClick={back}>
			Go back
		</button>
	);
};

export default BackButton;
