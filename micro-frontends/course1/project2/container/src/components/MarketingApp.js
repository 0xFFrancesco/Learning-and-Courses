import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

export default () => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		const { onParentNavigate } = mount(ref.current, {
			onNavigate: (location) => {
				const nextPath = location.pathname;
				if (history.location.pathname !== nextPath) {
					history.push(nextPath);
				}
			},
		});

		if (onParentNavigate) {
			history.listen(onParentNavigate);
		}
	}, []);

	return <div ref={ref}></div>;
};
