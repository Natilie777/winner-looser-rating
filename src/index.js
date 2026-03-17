"use strict";

/**
 @param{number}winnerRating a rating of the winner
  @param{number} looserRating a rating of the looser
 */

const calcRate = (winnerRating, looserRating) => {
  let playersDifference = winnerRating - looserRating;
  let biggerRateWinCalc = () => {
    if (playersDifference >= 0 && playersDifference <= 2) {
      return (winnerRating += 2);
    }
    if (playersDifference > 2 && playersDifference < 20) {
      return (winnerRating += 1);
    }
    if (playersDifference >= 20) {
      return (winnerRating += 0);
    }
  };
  let smallerRateWinCalc = () => {
    winnerRating += (-playersDifference + 5) / 3;
    return winnerRating;
  };

  if (isNaN(playersDifference) || winnerRating < 0 || looserRating < 0) {
    return NaN;
  }
  if (winnerRating === 0) {
    return (winnerRating = looserRating);
  }

  if (looserRating === 0) {
    return winnerRating;
  }
  if (winnerRating >= looserRating) {
    biggerRateWinCalc();
  }
  if (looserRating > winnerRating) {
    smallerRateWinCalc();
  }
  winnerRating = Math.round(winnerRating * 10) / 10;
  return winnerRating;
};

const theRateMessage = (x)=>{
return `The winner rating is ${x}`
}
const result = calcRate(22,22)
console.log(theRateMessage(result))
