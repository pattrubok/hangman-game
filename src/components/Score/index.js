import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../assets/func/context";

import { paragraph } from "../../base/mixins/typography";

const Score = () => {
  const { winCount } = useContext(AppContext);

  return (
    <Wrapper>
      Счет:
      <p>{winCount}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  ${paragraph};
  p {
    margin: 0 0 0 4px;
    color: ${(p) => p.theme.color.secondary};
  }
`;

export default Score;
