import styled, { keyframes } from "styled-components";

const fade = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const Div = styled.div`
    display: block;
    padding: 5rem;
    width: 100%;
    .dots {
        margin: 0 auto;
        width: 3.5em;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }
    
    .dots div {
        width: 0.8em;
        height: 0.8em;
        border-radius: 50%;
        background-color: #fc2f70;
        animation: ${fade} 0.8s ease-in-out alternate infinite;
    }
    
    .dots div:nth-of-type(1) {
        animation-delay: -0.4s;
    }
    
    .dots div:nth-of-type(2) {
        animation-delay: -0.2s;
    }
  }
`;

const Loading: React.FC = (): JSX.Element => {
	return (
		<Div>
			<div className="dots">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Div>
	);
};

export default Loading;
