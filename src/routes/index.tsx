import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "../components/commons/Loading";

export type Props = {};

const Loader = (Component: React.FC) => (props: Props) =>
	(
		<Suspense fallback={<Loading />}>
			<Component {...props} />
		</Suspense>
	);

const HomePage = Loader(lazy(() => import("../pages/HomePage")));
const Layout = Loader(lazy(() => import("../layout")));

const homeRoutes = {
	path: "/",
	element: <Layout />,
	children: [
		{
			path: "",
			element: <HomePage />,
		},
		{
			path: "home",
			element: <>home path</>,
		},
		{
			path: "*",
			element: <>404</>,
		},
	],
};

const RouteList: React.FC = (): JSX.Element => {
	const routing = useRoutes([homeRoutes]);
	return <>{routing}</>;
};

export default RouteList;
