import React, { useContext } from "react";
import styled from "styled-components";

import { h5, paragraph } from "../../base/mixins/typography";

import AppContext from "../../assets/func/context";
import { UiButton } from "../Ui";

import { Row, Col } from "antd";

const Word = () => {
  const {
    selectedWord,
    correctLetters,
    category,
    showHelp,
    showWord,
    disabledHelp,
  } = useContext(AppContext);

  return (
    <Wrapper>
      <Category>
        <div>Тема: {category}</div>
        <p>{selectedWord.length} букв(ы)</p>
      </Category>
      <Letters>
        {selectedWord.split("").map((letter, i) => {
          return (
            <div className='letter' key={i}>
              {correctLetters.includes(letter) ? letter : ""}
            </div>
          );
        })}
      </Letters>
      <Row gutter={[20, 0]}>
        <Col>
          <UiButton disabled={disabledHelp} onClick={showHelp}>
            Подсказка
          </UiButton>
        </Col>
        <Col>
          <UiButton onClick={showWord}>Пропустить</UiButton>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .letter {
    ${h5}
    border-bottom: 3px solid ${(p) => p.theme.color.primary};
    display: inline-flex;
    align-items: center;
    justify-content: center;

    display: flex;
    margin: 0 3px;
    height: 50px;
    width: 20px;
  }
`;

const Letters = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Category = styled.div`
  ${paragraph};
  display: flex;
  p {
    margin: 0 0 0 10px;
  }
`;

export default Word;
