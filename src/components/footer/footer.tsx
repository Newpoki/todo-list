import React, { useCallback, MouseEvent } from "react";

import * as Styled from "./footer.styles";
import { IFooterProps } from "./footer.interfaces";

export const Footer = ({
  children,
  onIconClick,
  iconComponent,
  isDisabled = false,
}: IFooterProps) => {
  const handleIconClick = useCallback(
    (evt: MouseEvent<HTMLDivElement>) => {
      !isDisabled && onIconClick(evt);
    },
    [isDisabled, onIconClick]
  );

  return (
    <Styled.Wrapper onClick={handleIconClick} isDisabled={isDisabled}>
      <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
      <Styled.IconWrapper isDisabled={isDisabled}>{iconComponent}</Styled.IconWrapper>
    </Styled.Wrapper>
  );
};
