import { AppProps } from "next/app";
import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #d7d7d7;
`;

type Props = {
	children: JSX.Element | JSX.Element[];
};

const ContainerFull = ({ children }: Props) => {
	return <ContainerStyle>{children}</ContainerStyle>;
};

export default ContainerFull;
