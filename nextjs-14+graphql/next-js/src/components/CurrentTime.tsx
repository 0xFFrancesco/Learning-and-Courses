"use client";

import { usePathname } from "next/navigation";

const CurrentTime = () => {
	console.log("CC - render CurrentTime");

	const pathname = usePathname();

	return (
		<div style={{ color: "white", marginLeft: "auto" }}>
			{new Date().getHours().toString().padStart(2, "0")}:
			{new Date().getMinutes().toString().padStart(2, "0")}
		</div>
	);
};

export default CurrentTime;
