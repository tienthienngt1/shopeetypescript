import React from "react";
import SubHeaderHome from "./SubHeaderHome";
import styled from "styled-components";
import Container from "../../common/Container";
import MainHeaderHome from "./MainHeaderHome";

const HeaderHomeStyle = styled.div`
	width: 100vw;
	padding: 10px;
	background: linear-gradient(#ee4d2d, #ff7337);
	border: 1px solid red;
`;

const HeaderHome = () => {
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
