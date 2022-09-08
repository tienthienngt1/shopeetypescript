import { AppProps } from "next/app";
import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
	max-width: 1220px;
	margin: 0 auto;
`;

type Props = {
	children: JSX.Element | JSX.Element[];
};

const Container = ({ children }: Props) => {
	return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
