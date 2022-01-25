/**
 * 3 Cases:
 * 1. You don't have enough money in your drawer or you can't give exact change, so your status is INSUFFICIENT FUNDS and Change = []
 * 2. You have just enough money in your drawer, so your status is CLOSED and Change equal to the change in the drawer
 * 3. Your have more than enough change in your drawer, so your status is OPEN and change is the same as the second case.
 */
"use strict";

function checkCashRegister(price, cash, cid) {

  var difference = cash - price;
  let cashAvailable = cid.reduce((acc, denom) => {
    return acc += denom[1];
  }, 0).toFixed(2);
  console.log(cashAvailable);
  if (difference == cashAvailable) {
    return {status: "CLOSED", change: cid};

  } else if (difference > cashAvailable) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }else {
    let newCash = [];
    let key = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.10,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    }

    for (let i = cid.length - 1; i >= 0; i--) {
      let denom = cid[i][0];
      //console.log("denom:" + denom);
      if (key[denom] <= difference&& cid[i][1]>0) {
        difference = difference.toFixed(2);
        var sub = Math.floor(difference / key[denom]);
        if(cid[i][1] > sub * key[denom]){
          cid[i][1] -= sub * key[denom] //You either empty it or subtract until you don't go negative
          difference -= sub * key[denom];
          //difference.toFixed(2);
          console.log("sub:" + sub);
          console.log(denom + ":" + cid[i][1]);
          console.log("diff:" + difference);
          newCash.push([denom, sub * key[denom]]);
        }else{
          difference -= cid[i][1];
          //difference.toFixed(2);
          newCash.push([denom, cid[i][1]])
          cid[i][1]=0;
        }
      }
      if (difference === 0) {
        break;
      }
    }

    if(difference!=0){
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      };
    }
    // console.log(cid);
    // console.log(difference);
    // console.log(newCash);
    
    return {status: "OPEN", change: newCash};
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//order the cid into highest number order and take your difference from the cid until you can get exact change.
  //Example 20-19.5 = .5 so it would need to return {status:OPEN, change: [["Quarter", 0.5]]} or {status: CLOSED, change:[["All the contents of the change in the drawer"]]}

//Solution, You order into the highest number order and take the difference until you have exact change or no change. If all cash in the register is zeroed out
//DO the Closed for status if there's some change left, then it's open. Probably need to make an object to see
//how much of each change needs to be taken from each stack.

//Consider sending in solution. It's faster than the current solution posted.