import React from "react";
import LogoSVG from "../../common/LogoSVG";
import styled from "styled-components";
import { Cart, Search } from "react-bootstrap-icons";

const MainHeaderHomeStyle = styled.div`
	padding-top: 20px;
	display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	.logoSvg {
		cursor: pointer;
	}
`;

const SearchStyle = styled.div`
	div:first-child {
		display: flex;
		align-items: center;
		height: 65%;
		justify-content: space-between;
		width: 100%;
		background-color: #fff;
		input {
			width: 90%;
			padding: 0 10px;
			height: 100%;
			border: none;
		}
		div {
			padding: 10px 25px;
			background-color: #fb5533;
			border-radius: 2px;
			margin-right: 5px;
			cursor: pointer;
			svg {
				font-size: 1.4rem;
				color: #fff;
			}
		}
	}
	div:last-child {
		padding: 10px 0;
		color: #fff;
		font-size: 1.3rem;
		span {
			padding: 0 5px;
			&:hover {
				opacity: 0.7;
				cursor: pointer;
			}
		}
	}
`;

const CartStyle = styled.div`
	display: grid;
	place-content: center;
	font-size: 40px;
	color: white;
	font-weight: bold;
	svg {
		cursor: pointer;
	}
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
			<div className="logoSvg">
				<LogoSVG />
			</div>
			<SearchStyle>
				<div>
					<input type="text" placeholder="BÍ KÍP SĂN SALE" />
					<div>
						<Search />
					</div>
				</div>
				<div>
					{ListArr.map((list, key) => (
						<span key={key}>{list}</span>
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
