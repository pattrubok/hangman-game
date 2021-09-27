import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../assets/func/context";

import { h5, paragraph } from "../../base/mixins/typography";

const WrongLetters = () => {
  const { wrongLetters } = useContext(AppContext);
  return (
    <Wrapper>
      <p>Hеверно</p>
      {wrongLetters
        .map((letter, i) => <span key={i}>{letter}</span>)
        .reduce(
          (prev, curr) => (prev === null ? [curr] : [prev, " ", curr]),
          null
        )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  span {
    ${paragraph}
  }
  p {
    margin: 0;
    ${paragraph}
  }
`;

export default WrongLetters;
