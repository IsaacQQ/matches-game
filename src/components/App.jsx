import React, { useState, useEffect } from 'react';
import { Button, MainImg, MainTitle, Container, MinTitle, AfterGame, LastButton } from './Game.styled';



const Game = () => {
  const initialMatches = 25;
  const [matches, setMatches] = useState(initialMatches);
  const [playerMatches, setPlayerMatches] = useState(0);
  const [aiMatches, setAiMatches] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!playerTurn && !gameOver) {
      const timeout = setTimeout(aiMakeMove, 1000);
      return () => clearTimeout(timeout);
    }
  }, [playerTurn]);

  const aiMakeMove = () => {
    let matchesToTake = 0;
    if (matches % 4 !== 0 && matches % 2) {
      matchesToTake = Math.min(matches % 4, 2);
    } else {
      matchesToTake = Math.floor(Math.random() * 3) + 1;
    }

    const remainingMatches = Math.max(matches - matchesToTake, 0);

  setMatches(remainingMatches);
  setAiMatches(aiMatches + matchesToTake);
  setPlayerTurn(true);

  if (remainingMatches === 0) {
    setGameOver(true);
  }
  };

  const handleTakeMatches = (numMatches) => {
    if (gameOver || matches <= 0) {
      return;
    }

    const remainingMatches = matches - numMatches;

    setMatches(remainingMatches);
    setPlayerMatches(playerMatches + numMatches);
    setPlayerTurn(false);

    if (remainingMatches === 0) {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setMatches(initialMatches);
    setPlayerMatches(0);
    setAiMatches(0);
    setPlayerTurn(true);
    setGameOver(false);
  };

  const checkWinner = () => {
    if (matches === 0) {
      if (playerMatches % 2 === 0) {
        return 'You Won! Congrats!';
      } else {
        return 'AI defeated you :(';
      }
    }
    return null;
  };

  const disableButton = (numMatches) => {
    return !playerTurn || matches < numMatches;
  };

  return (
    <MainImg>
      <Container>
      <MainTitle>Matches Game</MainTitle>
      <MinTitle>Matches left: {matches}</MinTitle>
      <MinTitle>Player's Matches: {playerMatches}</MinTitle>
      <MinTitle>AI's Matches: {aiMatches}</MinTitle>
      <MinTitle>Turn: {playerTurn ? 'Yours' : 'AI Is Thinking'}</MinTitle>
      
      <Button onClick={() => handleTakeMatches(1)} disabled={disableButton(1)}>
        Take 1 match
      </Button>
      <Button onClick={() => handleTakeMatches(2)} disabled={disableButton(2)}>
      Take 2 matches
      </Button>
      <Button onClick={() => handleTakeMatches(3)} disabled={disableButton(3)}>
      Take 3 matches
      </Button>
      
      {gameOver && (
        <div>
          <AfterGame>{checkWinner()}</AfterGame>
          <LastButton onClick={restartGame}>Restart</LastButton>
        </div>
      )}
      </Container>
    </MainImg>
  );
};

export default Game;