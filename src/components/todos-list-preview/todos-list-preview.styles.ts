import styled from "styled-components";
import { theme } from "theme";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleAndCloseIconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: "Open sans";
  font-weight: 700;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${theme.colors.light900};
`;

export const DeleteIconWrapper = styled.div`
  display: flex;
  margin-left: auto;

  .MuiSvgIcon-root {
    font-size: 20px;
    color: ${theme.colors.light900};
  }
`;

export const Date = styled.h2`
  margin: 0;
  font-family: "Open sans";
  font-weight: 600;
  font-size: 12px;
  margin-bottom: ${theme.spacing("XS-8")};
  color: grey;
`;

export const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const TodoLabel = styled.li`
  margin: 0;
  font-family: "Open sans";
  font-size: 12px;
  color: ${theme.colors.light900};
`;
