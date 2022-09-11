import axios from "axios";

export const getBannerHome = async () => {
	try {
		return await axios.post(
			"https://shopee.vn/api/v4/banner/batch_list_by_spaces",
			{
				spaces: [
					{
						space_key: "PC-VN-HOME_CAROUSEL_01",
					},
					{
						space_key: "PC-VN-HOME_SKINNY_01",
					},
					{
						space_key: "PC-VN-HOME_NUZ_CAROUSEL_01",
					},
				],
				extra_data: "{}",
			}
		);
	} catch (error) {
		console.log(error);
		return { error: true };
	}
};
