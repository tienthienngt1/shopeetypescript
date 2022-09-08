import "../styles/globals.css";
import type { AppProps } from "next/app";
import ContainerFull from "../components/common/ContainerFull";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ContainerFull>
			<Component {...pageProps} />
		</ContainerFull>
	);
}

export default MyApp;
