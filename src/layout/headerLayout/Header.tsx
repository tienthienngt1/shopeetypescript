import { Facebook, Instagram, Bell } from "react-bootstrap-icons";

const Header: React.FC = (): JSX.Element => {
	return (
		<>
			<div className="header_float font-12 font-bold-600 white-color">
				<div className="float-left">
					<span> Kênh Người Bán</span>|<span>Trở thành Người bán Shopee</span>|<span>Tải ứng dụng</span>|<span>Kết nối</span>
					<span className="pd-10">
						<Facebook /> <Instagram />
					</span>
				</div>
				<div className="float-right">
					<span>
						<Bell /> Thông báo
					</span>
					<span> | </span>
					<span> Đăng kí </span>
					<span> | </span>
					<span> Đăng nhập </span>
				</div>
			</div>
		</>
	);
};

export default Header;
