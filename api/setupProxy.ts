import { createProxyMiddleware } from "http-proxy-middleware";

//@ts-ignore
module.exports = (app) => {
	app.use(
		createProxyMiddleware("/banner/batch_list_by_spaces", {
			target: "https://shopee.vn/api/v4",
			changeOrigin: true,
		})
	);
};
