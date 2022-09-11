import { useEffect } from "react";
import styled from "styled-components";
import Container from "components/common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { getBannerHome } from "api/getBannerHome";

const CarouselHomeStyle = styled.div`
	width: 100%;
	height: 38rem;
	border: 1px solid red;
	padding-top: 16rem;
	display: grid;
	grid-template-areas: "a1 a1 a2" "a1 a1 a3";
	gap: 0.3rem;
`;
const BannerStyle = styled.div`
	border: 1px solid red;
	grid-area: a1;
	overflow: hidden;
	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const BannerSeparate1Style = styled.div`
	overflow: hidden;
	border: 1px solid blue;
	grid-area: a2;
`;
const BannerSeparate2Style = styled.div`
	overflow: hidden;
	border: 1px solid blue;
	grid-area: a3;
`;

const CarouselHome = () => {
	const params = {
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	};
	useEffect(() => {
		const unsub = async () => {
			const res = await getBannerHome();
			console.log(res);
		};
		unsub();
	}, []);

	return (
		<Container>
			<CarouselHomeStyle>
				<BannerStyle>
					<div>
						<Swiper
							navigation={true}
							modules={[Navigation]}
							className="mySwiper"
						>
							<SwiperSlide>Slide 1</SwiperSlide>
							<SwiperSlide>Slide 2</SwiperSlide>
							<SwiperSlide>Slide 3</SwiperSlide>
							<SwiperSlide>Slide 4</SwiperSlide>
							<SwiperSlide>Slide 5</SwiperSlide>
							<SwiperSlide>Slide 6</SwiperSlide>
							<SwiperSlide>Slide 7</SwiperSlide>
							<SwiperSlide>Slide 8</SwiperSlide>
							<SwiperSlide>Slide 9</SwiperSlide>
						</Swiper>
					</div>
				</BannerStyle>
				<BannerSeparate1Style>
					<div>
						<Swiper
							navigation={true}
							modules={[Navigation]}
							className="mySwiper"
						>
							<SwiperSlide>Slide 1</SwiperSlide>
							<SwiperSlide>Slide 2</SwiperSlide>
							<SwiperSlide>Slide 3</SwiperSlide>
							<SwiperSlide>Slide 4</SwiperSlide>
							<SwiperSlide>Slide 5</SwiperSlide>
							<SwiperSlide>Slide 6</SwiperSlide>
							<SwiperSlide>Slide 7</SwiperSlide>
							<SwiperSlide>Slide 8</SwiperSlide>
							<SwiperSlide>Slide 9</SwiperSlide>
						</Swiper>
					</div>
				</BannerSeparate1Style>
				<BannerSeparate2Style>
					<Swiper
						navigation={true}
						modules={[Navigation]}
						className="mySwiper"
					>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
						<SwiperSlide>Slide 5</SwiperSlide>
						<SwiperSlide>Slide 6</SwiperSlide>
						<SwiperSlide>Slide 7</SwiperSlide>
						<SwiperSlide>Slide 8</SwiperSlide>
						<SwiperSlide>Slide 9</SwiperSlide>
					</Swiper>
				</BannerSeparate2Style>
			</CarouselHomeStyle>
		</Container>
	);
};

export default CarouselHome;
