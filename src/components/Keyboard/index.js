import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../assets/func/context";

import { UiButton } from "../Ui";

import { Col as AntCol, Row as AntRow } from "antd";

import { paragraph } from "../../base/mixins/typography";

const Keyboard = () => {
  const { alphabet, handleClickButton } = useContext(AppContext);

  return (
    <Wrapper>
      <Row gutter={[10, 10]}>
        {alphabet.map((item, index) => (
          <Col key={index}>
            <UiButton
              onClick={(e) => handleClickButton(e, item)}
              type='secondary'
            >
              {item}
            </UiButton>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 4px;
  padding-bottom: 20px;
  background: ${(p) => p.theme.color.white};
  .ant-btn {
    width: 50px;
    height: 50px;
    text-align: center;
    ${paragraph};
  }

  span {
    text-transform: uppercase;
  }
`;

const Row = styled(AntRow)`
  justify-content: center;
`;
const Col = styled(AntCol)``;

export default Keyboard;
