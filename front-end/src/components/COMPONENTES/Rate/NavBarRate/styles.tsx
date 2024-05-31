import styled from 'styled-components';

type NavBarRateProps = {
	selected: boolean;
};

export const OptionMenu = styled.p<NavBarRateProps>`
	color: ${(props) => (props.selected ? '#000000' : '#4B00E0')};
`;