import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { AppContainer } from "./components";

import AppContext from "./assets/func/context";

import { message } from "antd";

import { alphabet, words } from "./assets/func/const";

import { checkWin, randomChoice } from "./assets/func/helpers";

const randomObj = randomChoice(words);
const wordArr = words.length && randomObj.word;
const word = randomChoice(wordArr);
let category = wordArr.length && randomObj.category;
let selectedWord = String(word).toUpperCase();
let selectedWordArr = selectedWord.split("");

const App = () => {
  const [letter, setLetter] = useState();
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const [сountHelp, setCountHelp] = useState(0);

  const warning = () => {
    message.warning("Вы уже использовали эту букву");
  };

  const handleClickButton = (e, item) => {
    setLetter(item && item.toUpperCase());
    setValue(String(e.target.innerText));
    setCount(count + 1);
  };

  const showHelp = () => {
    const remainderArr = selectedWordArr.filter((item) => {
      return correctLetters.indexOf(item) === -1;
    });
    const randomLetter = randomChoice(remainderArr);
    setCorrectLetters((currentLetters) => [...currentLetters, randomLetter]);
    setUsedLetters((i) => [...i, letter]);
    setCountHelp(сountHelp + 1);
  };

  const disabledHelp = сountHelp > 0 ? true : false;

  const showWord = () => {
    playAgain();
  };

  const onClickLetter = () => {
    if (playable && letter !== undefined) {
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setUsedLetters((i) => [...i, letter]);
          setCorrectLetters((currentLetters) => [...currentLetters, letter]);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setUsedLetters((i) => [...i, letter]);
          setWrongLetters((currentLetters) => [...currentLetters, letter]);
        }
      }
      if (count > 1 && usedLetters.includes(value)) {
        warning();
      }

      document.addEventListener("click", handleClickButton);
      return () => {
        document.removeEventListener("click", handleClickButton);
      };
    }
  };

  useEffect(() => {
    onClickLetter();
  }, [correctLetters, wrongLetters, playable, letter, count]);

  const playAgain = () => {
    onShowPopup();
    setPlayable(true);
    setCorrectLetters([]);
    setLetter("");
    setWrongLetters([]);
    setUsedLetters([]);
    setCountHelp(0);

    const randomObj = randomChoice(words);
    const wordArr = words.length && randomObj.word;
    const word = randomChoice(wordArr);
    category = wordArr.length && randomObj.category;
    selectedWord = String(word).toUpperCase();
    selectedWordArr = selectedWord.split("");
  };

  const onShowPopup = () => {
    if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
      setWinCount(winCount + 1);
    } else if (
      checkWin(correctLetters, wrongLetters, selectedWord) === "lose"
    ) {
      setWinCount(0);
    }
  };
  return (
    <Wrapper>
      <AppContext.Provider
        value={{
          alphabet,
          wrongLetters,
          correctLetters,
          selectedWord,
          category,
          winCount,
          checkWin,
          setPlayable,
          playAgain,
          handleClickButton,
          showHelp,
          showWord,
          disabledHelp,
        }}
      >
        <AppContainer />
      </AppContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;
