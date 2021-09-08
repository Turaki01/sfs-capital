import styled, { css } from "styled-components";
import colors from "../../styles/colors";

const primaryButtonStyles = css`
  background: ${colors.pri};
  color: #fff;
`;

const secondaryButtonStyles = css`
  background: ${colors.sec};
  color: #fff;
`;

const getButtonStyles = (props: any) => {
    if(props.secondary) {
        return secondaryButtonStyles
    }

    return primaryButtonStyles
}

export const CustomButtonContainer = styled.button`
  height: 50px;
  cursor: pointer;
  color: #fff;
  border-radius: 8px;
  margin-top: 10px;
  border: none;
  font-size: 17px;
  width: 100%;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;

  ${getButtonStyles}
`;