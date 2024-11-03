import styled from 'styled-components';

type NavBarRateProps = {
	selected: boolean;
};

export const OptionMenu = styled.p<NavBarRateProps>`
	background-color: ${(props) => (props.selected ? '#000000' : '#C1C1C1')};
	width: 4rem;
	height: 3px;
	border-radius: 1rem;
	cursor: pointer;
`;
