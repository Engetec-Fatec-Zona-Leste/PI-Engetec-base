import styled from 'styled-components';

type SelectAreaProps = {
	selected: boolean;
};

export const OptionMenu = styled.p<SelectAreaProps>`
	color: ${(props) => (props.selected ? '#fff' : '#000')};
	background-color: ${(props) => (props.selected ? '#DD4467' : 'none')};
	font-weight: ${(props) => (props.selected ? '500' : 'bold')};
	border-radius: ${(props) => (props.selected ? '15px' : '0px')};
	border: ${(props) => (props.selected ? '2px solid #DD4467' : 'none')};
	padding: ${(props) => (props.selected ? '6px' : '6px')};
`;
