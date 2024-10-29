import { useEffect, useState } from "react";
import "./MemoryGame.css";

export default function MemoryGame() {
  const [cards, setCards] = useState(generateGrid());
  const [isLock, setIsLock] = useState(false);
  const [flippedCard, setFlippedCard] = useState([]);

  const handleClick = (index) => {
    if (cards[index].isFlipped || isLock == true) {
      return;
    }
    const copyCards = [...cards];
    copyCards[index].isFlipped = true;
    setCards(copyCards);
    setFlippedCard([...flippedCard, index]);
  };

  useEffect(() => {
    if (flippedCard.length === 2) {
      setIsLock(true);
      setTimeout(() => {
        if (cards[flippedCard[0]].number !== cards[flippedCard[1]]) {
          setCards((prevCards) => {
            const copyCards = [...prevCards];
            copyCards[flippedCard[0]].isFlipped = false;
            copyCards[flippedCard[1]].isFlipped = false;
            return copyCards;
          });
        }
        setIsLock(false);
        setFlippedCard([]);
      }, 3000);
    }
  }, [flippedCard]);

  return (
    <>
    <h1>Memory Game</h1>
    <div className="grid-container">
      {cards &&
        cards.map(({ id, number, isFlipped }) => {
          return (
            <button onClick={() => handleClick(id)} className="cards" key={id}>
              {isFlipped ? number : "?"}
            </button>
          );
        })}
    </div>
    <h2>Created By Abhiraj Yadav</h2>

    </>
  );
}

function generateGrid() {
  const arr = Array.from({ length: 18 }, (_, index) => index + 1);
  const grid = [...arr, ...arr].sort(() => Math.random() - 0.5); // to sort randomly
  //   console.log(grid);
  const cards = grid.map((item, index) => {
    return { id: index, number: item, isFlipped: false };
  });
  // console.log(cards);
  return cards; // it'll return array of object, further it'll be stored in the cards via useState hook.
}
