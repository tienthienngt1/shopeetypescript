import type { NextPage } from "next";
import Head from "next/head";
import CarouselHome from "../components/home/carousel";
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
			<CarouselHome />
		</div>
	);
};

export default Home;
export async function getServerSideProps() {
	return {
		props: {},
	};
}
