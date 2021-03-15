/**
 * 3 Cases:
 * 1. You don't have enough money in your drawer or you can't give exact change, so your status is INSUFFICIENT FUNDS and Change = []
 * 2. You have just enough money in your drawer, so your status is CLOSED and Change equal to the change in the drawer
 * 3. Your have more than enough change in your drawer, so your status is OPEN and change is the same as the second case.
 */
"use strict";
function checkCashRegister(price, cash, cid) {
    var status;
    //var change=[];
    var difference = cash-price;

    //order the cid into highest number order and take your difference from the cid until you can get exact change.
    //Example 20-19.5 = .5 so it would need to return {status:OPEN, change: [["Quarter", 0.5]]} or {status: CLOSED, change:[["All the contents of the change in the drawer"]]}

    //for a in cid:
        

    var change;
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);