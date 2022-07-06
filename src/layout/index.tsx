import { Outlet } from "react-router-dom";
import HeaderLayout from "./headerLayout";
import LogoSearchCart from "./headerLayout/LogoSearchCart";

type Props = {};

const Layout = (props: Props) => {
	return (
		<>
			<HeaderLayout />
			<LogoSearchCart />
			<Outlet />
			<p>Footer</p>
		</>
	);
};

export default Layout;
