import Header from "./Header";
import "./headerLayoutScss.scss";
import LogoSearchCart from "./LogoSearchCart";

type Props = {};

const HeaderLayout = (props: Props) => {
	return (
		<header className="container-full pd-v-4 header">
			<div className="container">
				<Header />
				<LogoSearchCart />
			</div>
		</header>
	);
};

export default HeaderLayout;
