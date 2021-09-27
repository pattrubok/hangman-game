import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const UiButton = ({ children, ...props }) => {
  return (
    <Wrapper className='uibutton-wrapper'>
      <Button type='primary' {...props}>
        {children}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.uibutton-wrapper {
    display: flex;
    justify-content: center;
    .ant-btn {
      border-radius: 4px;
      align-items: center;
      justify-content: center;
      display: flex;
    }
  }
`;

export default UiButton;
