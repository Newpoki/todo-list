import React, { memo } from "react";

import * as Styled from "./notification.styles";
import { INotificationProps } from "./notification.interfaces";
import { NotificationIcon } from "./notification-icon";

export const Notification = memo(({ content, title, type }: INotificationProps) => {
  return (
    <Styled.Wrapper>
      <Styled.IconWrapper>
        <NotificationIcon type={type} />
      </Styled.IconWrapper>
      <Styled.TitleAndContentWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ContentWrapper>{content}</Styled.ContentWrapper>
      </Styled.TitleAndContentWrapper>
    </Styled.Wrapper>
  );
});
