import React from "react";
import SubHeaderHome from "./SubHeaderHome";
import styled from "styled-components";
import Container from "../../common/Container";
import MainHeaderHome from "./MainHeaderHome";

const HeaderHomeStyle = styled.div`
	width: 100%;
	padding: 10px;
	height: 13rem;
	background: linear-gradient(#ee4d2d, #ff7337);
	position: fixed;
	top: 0;
`;

const HeaderHome = () => {
	console.log(process.env.SHOPEE_LIST_BANNER);
	return (
		<HeaderHomeStyle>
			<Container>
				<SubHeaderHome />
				<MainHeaderHome />
			</Container>
		</HeaderHomeStyle>
	);
};

export default HeaderHome;
