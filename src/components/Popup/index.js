import React, { useEffect, useContext } from "react";

import styled from "styled-components";
import AppContext from "../../assets/func/context";

import { UiButton } from "../../components/Ui";

import { h5, paragraph } from "../../base/mixins/typography";

import { FrownTwoTone, SmileTwoTone } from "@ant-design/icons";

import { Row as AntRow, Col } from "antd";

import theme from "../../base/theme";

const Popup = () => {
  const {
    correctLetters,
    wrongLetters,
    selectedWord,
    setPlayable,
    playAgain,
    checkWin,
  } = useContext(AppContext);

  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  const sadSmile = (
    <FrownTwoTone
      twoToneColor={theme.color.secondary}
      style={{ fontSize: "32px" }}
    />
  );
  const funnySmile = (
    <SmileTwoTone
      twoToneColor={theme.color.secondary}
      style={{ fontSize: "32px" }}
    />
  );

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = [funnySmile, "Вы выиграли!"];
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = [sadSmile, "Вы проиграли"];
    finalMessageRevealWord = ["Загаданное слово:", selectedWord];
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <Wrapper style={finalMessage !== "" ? { display: "flex" } : {}}>
      <PopupBody>
        <Row gutter={[0, 10]}>
          <Col className='col-message'>
            <div style={{ marginRight: "4px" }}>{finalMessage[1]}</div>
          </Col>
          <Col>
            <div>{finalMessage[0]}</div>
          </Col>
          <Col
            className='col-answer'
            style={
              finalMessage[1] === "Вы выиграли!" ? { display: "none" } : {}
            }
          >
            {finalMessageRevealWord[0]} <br />
            {finalMessageRevealWord[1]}
          </Col>
          <Col>
            <UiButton type='secondary' onClick={playAgain}>
              Играть заново
            </UiButton>
          </Col>
        </Row>
      </PopupBody>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  align-items: center;
  justify-content: center;

  .col-message {
    ${h5}
    color: ${(p) => p.theme.color.white};
  }
  .col-answer {
    ${paragraph}
    color: ${(p) => p.theme.color.white};
    text-align: center;
  }
`;
const PopupBody = styled.div`
  background: ${(p) => p.theme.color.primary};

  border-radius: 4px;
  padding: 20px;

  .ant-btn {
    padding: 20px;
  }
`;

const Row = styled(AntRow)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Popup;
