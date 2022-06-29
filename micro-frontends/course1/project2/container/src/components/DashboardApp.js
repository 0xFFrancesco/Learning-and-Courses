import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "dashboard/DashboardApp";

export default () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
	}, []);

	return <div ref={ref}></div>;
};
