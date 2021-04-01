// this function takes an argument of [nums/prices]. each index is the day of the week (numerically. note that for our purposes the zeroth index is day 1.) we'll need 2 variables. one to keep track of the maximum profit (initially set to 0) and the other to keep track of lowest number (to make our purchase). then iterate through array of prices (for loop) if prices[i] < min, set min = prices[i] (this is our purchase, potentially). then also compare max using Math.max to keep track of highest potential profit. prices[i] - min allows us to iterate thru each number and determine the potential profit. return max. 

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

// Example 3:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e., max profit = 0.

// this solution only works if you are making one purchase and one sale.

// var maxProfit = function(prices) {
//     let maxProfit = 0;
//     let minPurchase = Infinity
//     for(let i = 0; i < prices.length; i++){
//       // first thing we want to do is buy at the lowest price
//       if(prices[i] < minPurchase){
//         minPurchase = prices[i]
//         // then we want to compare all purchases in this array to find the max profit
//       } else maxProfit = Math.max(maxProfit, prices[i] - minPurchase)
//       // console.log(maxProfit)
//     } 
    
//     return maxProfit
// };


// so simple! just compare each number to the one next to it and do some math. solution works for making multiple purchases/sales. but you cannot make two purchases in a row. must sell before buying again.
var maxProfit = function(prices) {
  let profit = 0;
  for(let i = 0; i < prices.length - 1; i++){
      if(prices[i] < prices[i + 1]){
          profit += prices[i + 1] - prices[i];
      }
  }
  return profit;
};


console.log(maxProfit([7,1,5,3,6,4]))