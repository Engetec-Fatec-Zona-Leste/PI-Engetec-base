import styled from 'styled-components';

type NavbarProps = {
	selected: boolean;
};

export const OptionMenu = styled.a<NavbarProps>`
	color: ${(props) => (props.selected ? '#4B00E0' : '#000')};
	font-weight: ${(props) => (props.selected ? 'bold' : '500')};
	font-size: 1.2rem;
	text-align: start;
`;
export const SubOptionMenu = styled.a<NavbarProps>`
	color: ${(props) => (props.selected ? '#4B00E0' : '#000')};
	font-weight: ${(props) => (props.selected ? 'bold' : '500')};
	margin-left: 2rem;
	font-size: 1.2rem;
	text-align: start;
`;
