import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/common/Container";
import HeaderHome from "../components/home/header";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Shopee Việt Nam | Mua và Bán Hàng online</title>
				<meta name="description" content="Shopee, E-commerce" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeaderHome />
		</div>
	);
};

export default Home;
