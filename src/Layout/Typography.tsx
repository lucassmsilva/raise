import { Text } from "react-native-paper";
import styled from "styled-components";
import { slate900, stone50 } from "./Colors";

export const TextDefault = styled(Text)`
    color: ${props => (props.theme === "dark" ? stone50 : slate900)};
`;

export const PageTitle = styled(Text)`
    font-weight: 600;
    font-size: 24px;
    color: ${props => (props.theme === "dark" ? stone50 : slate900)};
`;
