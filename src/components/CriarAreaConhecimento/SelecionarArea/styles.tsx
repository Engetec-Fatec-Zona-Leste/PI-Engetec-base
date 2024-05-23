import styled from 'styled-components';

type SelectAreaProps = {
	selected: boolean;
};

export const OptionMenu = styled.p<SelectAreaProps>`
	color: ${(props) => (props.selected ? '#000000' : '#FFFFFF')};
	background-color: ${(props) => (props.selected ? 'none' : '#DD4467')};
	font-weight: ${(props) => (props.selected ? 'bold' : '500')};
	border-radius: ${(props) => (props.selected ? '0px' : '15px')};
	border: ${(props) => (props.selected ? 'none' : '2px solid #DD4467')};
	padding: ${(props) => (props.selected ? '6px' : '6px')};
`;