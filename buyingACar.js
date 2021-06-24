// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?


// nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
// Detail of the above example:
// end month 1: percentLoss 1.5 available -4910.0
// end month 2: percentLoss 2.0 available -3791.7999...
// end month 3: percentLoss 2.0 available -2675.964
// end month 4: percentLoss 2.5 available -1534.06489...
// end month 5: percentLoss 2.5 available -395.71327...
// end month 6: percentLoss 3.0 available 766.158120825...
// return [6, 766] or (6, 766)
// where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158... (rounding 766.158 gives 766).


function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  if(startPriceOld > startPriceNew) return [0, startPriceOld - startPriceNew]
  let currentRate = (percentLossByMonth * .01)
  let totalSavingperMonth = 0
  let months = 0
  while (startPriceOld + totalSavingperMonth < startPriceNew) {
    months++
    if(months >= 2 && months % 2 === 0) {
      startPriceOld -= startPriceOld * (currentRate += .005)
      startPriceNew -= startPriceNew * (currentRate)
    } else {
      startPriceOld -= startPriceOld * currentRate
      startPriceNew -= startPriceNew * currentRate
    }
      totalSavingperMonth += savingperMonth
  }
 return [months, Math.round(startPriceOld + totalSavingperMonth - startPriceNew)]
}

// refactored to be simpler!

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  if(startPriceOld >= startPriceNew) return [0, startPriceOld - startPriceNew]
  let currentRate = (percentLossByMonth * .01)
  let totalSavingperMonth = 0
  let months = 0
  while (startPriceNew >= startPriceOld + totalSavingperMonth) {
    months++
    if(months > 0 && months % 2 === 0) {
      currentRate += .005
    }
    startPriceOld -= startPriceOld * currentRate
    startPriceNew -= startPriceNew * currentRate
    totalSavingperMonth += savingperMonth
  }
 return [months, Math.round(startPriceOld + totalSavingperMonth - startPriceNew)]
}