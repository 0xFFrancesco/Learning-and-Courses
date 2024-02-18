"use client";

import { useRouter } from "next/navigation";

const RefreshButton = () => {
	console.log("CC - render Refresh Button");

	const { refresh } = useRouter();

	return (
		<button type="button" onClick={refresh}>
			Refresh
		</button>
	);
};

export default RefreshButton;
