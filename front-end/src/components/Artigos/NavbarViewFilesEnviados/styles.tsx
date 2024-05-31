import styled from 'styled-components';


import { IoHourglassOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

type TabbarProps = {
	selected: boolean;
};

export const OptionMenu = styled.p<TabbarProps>`
	color: ${(props) => (props.selected ? '#4B00E0' : '#000000')};
	font-weight: ${(props) => (props.selected ? 'bold' : '500')};
`;


export const IconEvent = styled(IoHourglassOutline)<TabbarProps>`
	color: ${(props) => (props.selected ? '#4B00E0' : '#000000')};
`;

export const IconFiles = styled(FaCheck)<TabbarProps>`
	color: ${(props) => (props.selected ? '#4B00E0' : '#000000')};
`;

