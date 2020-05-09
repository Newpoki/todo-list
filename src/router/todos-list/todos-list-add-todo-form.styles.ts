import styled from "styled-components";
import { theme } from "theme";

const maxHeight = "150px";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: ${maxHeight};

  .ReactCollapse--collapse {
    transition: height 0.5s;
  }
`;

export const FixedContentPusher = styled.div`
  height: ${maxHeight};
  width: 100%;
`;

export const ToggleFormButton = styled.div<{ isFormDisplayed: boolean }>`
  background-color: ${theme.colors.light700};
  color: ${theme.colors.light000};
  padding: ${theme.spacing("S-12")};
  font-family: ${theme.fontFamilies.open};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .MuiSvgIcon-root {
    transition: 0.3s;
    transform: ${({ isFormDisplayed }) => (isFormDisplayed ? "rotate(0deg)" : "rotate(180deg)")};
  }
`;

export const Form = styled.form`
  background-color: ${theme.colors.light700};
  padding: ${theme.spacing("S-12")};
`;
