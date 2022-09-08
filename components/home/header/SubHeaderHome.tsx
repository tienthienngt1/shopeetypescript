import { useState } from "react";
import styled from "styled-components";
import {
	Bell,
	Facebook,
	Instagram,
	QuestionCircle,
	Globe,
	ChevronDown,
} from "react-bootstrap-icons";
import ReactTooltip from "react-tooltip";
import notify from "../../../public/notify.png";
import Image from "next/image";

const SubHeaderHomeStyle = styled.div`
	font-size: 1.3rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	span {
		padding: 0 5px;
		&:hover {
			opacity: 0.6;
			cursor: pointer;
		}
		svg {
			vertical-align: bottom;
		}
	}
`;
const SubHeaderHomeLeftStyle = styled.div`
	span {
		svg {
			vertical-align: center;
		}
	}
`;
const SubHeaderHomeRightStyle = styled.div``;

const NotifyTooltipStyle = styled.div`
	width: 400px;
	height: 400px;
	.headerNotifyTooltip {
		height: 350px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.footerNotifyTooltip {
		width: 100%;
		height: 50px;
		div {
			padding: 15px;
			width: 48%;
			margin: 0 1%;
			height: 100%;
			display: inline-block;
			text-align: center;
			font-size: 1.6rem;
			background-color: #d7d7d7;
		}
		div:first-child {
		}
		div:last-child {
			color: blue;
		}
	}
`;

const SubHeaderHome = () => {
	const [tooltip, setTooltip] = useState(true);
	const handleMouseEnter = () => setTooltip(true);
	const handleMouseLeave = () => {
		setTooltip(false);
		setTimeout(() => {
			setTooltip(true);
		}, 10);
	};
	return (
		<>
			<SubHeaderHomeStyle>
				<SubHeaderHomeLeftStyle>
					<span>Kênh người bán</span>|
					<span>Trở thành Người bán Shopee</span>|
					<span>Tải xuống ứng dụng</span>|<span>Kết nối </span>
					<span>
						<Facebook
							data-tip
							data-for="tooltipFace"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						/>
					</span>
					<span>
						<Instagram
							data-tip
							data-for="tooltipInstagram"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						/>
					</span>
				</SubHeaderHomeLeftStyle>
				<SubHeaderHomeRightStyle>
					<span
						data-tip
						data-for="notify"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<Bell /> Thông báo
					</span>
					<span>
						<QuestionCircle /> Hỗ trợ
					</span>
					<span>
						<Globe /> Tiếng Việt <ChevronDown />
					</span>
					<span>Đăng Kí</span>
					<span>Đăng Nhập</span>
				</SubHeaderHomeRightStyle>
			</SubHeaderHomeStyle>
			{tooltip && (
				<>
					<ReactTooltip id="tooltipFace" effect="solid">
						<span>Kết nối Facebook</span>
					</ReactTooltip>
					<ReactTooltip id="tooltipInstagram" effect="solid">
						<span>Kết nối Instagram</span>
					</ReactTooltip>
					<ReactTooltip id="notify" effect="solid" type="light">
						<NotifyTooltipStyle>
							<div className="headerNotifyTooltip">
								<Image
									src={notify}
									alt="notifyTooltip"
									width={100}
									height={100}
								/>
								<p>Đăng nhập để xem thông báo</p>
							</div>
							<div className="footerNotifyTooltip">
								<div>Đăng kí</div>
								<div>Đăng nhập</div>
							</div>
						</NotifyTooltipStyle>
					</ReactTooltip>
				</>
			)}
		</>
	);
};

export default SubHeaderHome;
