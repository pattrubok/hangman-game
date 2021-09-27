import React from "react";
import styled from "styled-components";

import { Row as AntRow, Col } from "antd";

import { Figure, WrongLetters, Word, Popup, Keyboard, Score } from "../";

import { useBreakpoint } from "styled-breakpoints/react-styled";
import { down } from "styled-breakpoints";

const AppContainer = () => {
  const isSm = useBreakpoint(down("md"));
  return (
    <Wrapper>
      <Row className='row-content'>
        <Col className='col-figure'>
          <Figure />
          <div className='info-block'>
            <Score />
            <WrongLetters />
          </div>
        </Col>
        <Col>
          <Word />
        </Col>
      </Row>
      <Row gutter={[0, 20]}>
        <Col span={isSm ? 24 : 13}>
          <Keyboard />
        </Col>
      </Row>
      <Popup />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("/static/img/background2.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  .row-content {
    padding-bottom: 20px;
  }

  .col-figure {
    display: flex;
  }
  .info-block {
    padding-top: 15px;
  }
`;

const Row = styled(AntRow)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default AppContainer;
