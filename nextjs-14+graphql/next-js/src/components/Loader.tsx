import styles from "./loader.module.css";

const Loader = () => {
	console.log("SC - render Loader");

	return <div className={styles.loader}>Loading...</div>;
};

export default Loader;
