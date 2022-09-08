import Image from "next/image";
import React from "react";
import LogoSVG from "../../common/LogoSVG";
import styled from "styled-components";
import { Cart } from "react-bootstrap-icons";

const MainHeaderHomeStyle = styled.div`
	padding: 20px 0;
	display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	border: 1px solid blue;
`;

const SearchStyle = styled.div`
	border: 1px solid blue;
	div:first-child {
		display: flex;
		align-items: center;
		height: 80%;
		width: 100%;
		background-color: #fff;
	}
`;
const CartStyle = styled.div`
	display: grid;
	place-content: center;
	border: 1px solid blue;
	font-size: 40px;
	color: white;
	font-weight: bold;
`;

const ListArr = [
	"Áo Khoác",
	"Dép",
	"Túi xách nữ",
	"Váy",
	"Balo",
	"Quần Jean Nam",
	"Ốp Iphone",
	"Tai nghe Bluetooth",
];

const MainHeaderHome = () => {
	return (
		<MainHeaderHomeStyle>
			<LogoSVG />
			<SearchStyle>
				<div>
					<input type="text" placeholder="BÍ KÍP SĂN SALE" />
				</div>
				<div>
					{ListArr.map((list) => (
						<>
							<span>{list}</span>
						</>
					))}
				</div>
			</SearchStyle>
			<CartStyle>
				<Cart />
			</CartStyle>
		</MainHeaderHomeStyle>
	);
};

export default MainHeaderHome;
