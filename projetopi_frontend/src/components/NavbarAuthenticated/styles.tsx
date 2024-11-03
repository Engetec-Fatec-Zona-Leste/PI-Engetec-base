import styled from 'styled-components';

type NavbarProps = {
	selected: boolean;
};

export const OptionMenu = styled.p<NavbarProps>`
	color: ${(props) => (props.selected ? '#4B00E0' : '#000')};
	font-weight: ${(props) => (props.selected ? 'bold' : '500')};
`;
export const SubOptionMenu = styled.p<NavbarProps>`
	color: ${(props) => (props.selected ? '#4B00E0' : '#000')};
	font-weight: ${(props) => (props.selected ? 'bold' : '500')};
	margin-left: 2rem;
`;
