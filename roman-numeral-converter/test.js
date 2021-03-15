//Roman Numeral Converter
//See if you can do this recursively
//Know what the time and space complexity is for each solution
"use strict";
function convertToRoman() {
  let romanNumeral = "";
  let currNum;
  let place = 1;
  let num = document.getElementById("r_text").value;
  if (num > 9999) {
    romanNumeral = "The Romans didn't think that far buddy.";
  } else {
    //num = parseInt(num); Worry about this when you're finished

    while (num > 0) {
      currNum = num % 10;

      switch (currNum) {
        case 0:
          break;
        case 1:
          if (place >= 1000) {
            romanNumeral = "M" + romanNumeral;
          } else if (place >= 100) {
            romanNumeral = "C" + romanNumeral;
          } else if (place >= 10) {
            romanNumeral = "X" + romanNumeral;
          } else {
            romanNumeral = "I" + romanNumeral;
          }
          break;
        case 2:
          if (place >= 1000) {
            romanNumeral = "MM" + romanNumeral;
          } else if (place >= 100) {
            romanNumeral = "CC" + romanNumeral;
          } else if (place >= 10) {
            romanNumeral = "XX" + romanNumeral;
          } else {
            romanNumeral = "II" + romanNumeral;
          }
          break;
        case 3:
          if (place >= 1000) {
            romanNumeral = "MMM" + romanNumeral;
          } else if (place >= 100) {
            romanNumeral = "CCC" + romanNumeral;
          } else if (place >= 10) {
            romanNumeral = "XXX" + romanNumeral;
          } else {
            romanNumeral = "III" + romanNumeral;
          }
          break;
        case 4:
          if (place >= 1000) {
            romanNumeral = "MMMM" + romanNumeral;
          } else if (place >= 100) {
            romanNumeral = "CD" + romanNumeral;
          } else if (place >= 10) {
            romanNumeral = "XL" + romanNumeral;
          } else {
            romanNumeral = "IV" + romanNumeral;
          }
          break;
        case 5:
          if (place >= 1000) {
            romanNumeral = "MMMMM" + romanNumeral;
          } else if (place >= 100) {
            romanNumeral = "D" + romanNumeral;
          } else if (place >= 10) {
            romanNumeral = "L" + romanNumeral;
          } else {
            romanNumeral = "V" + romanNumeral;
          }
          break;
        case 6:
          if (place >= 1000) {
            romanNumeral = "MMMMMM" + romanNumeral;
          } else if (place >= 100) {
            romanNumeral = "DC" + romanNumeral;
          } else if (place >= 10) {
            romanNumeral = "LX" + romanNumeral;
          } else {
            romanNumeral = "VI" + romanNumeral;
          }
          break;
        case 7:
          if (place >= 1000) {
            romanNumeral = "MMMMMMM" + romanNumeral;
          } else if (place >= 100) {
            romanNumeral = "DCC" + romanNumeral;
          } else if (place >= 10) {
            romanNumeral = "LXX" + romanNumeral;
          } else {
            romanNumeral = "VII" + romanNumeral;
          }
          break;
        case 8:
          if (place >= 1000) {
            romanNumeral = "MMMMMMMM" + romanNumeral;
          } else if (place >= 100) {
            romanNumeral = "DCCC" + romanNumeral;
          } else if (place >= 10) {
            romanNumeral = "LXXX" + romanNumeral;
          } else {
            romanNumeral = "VIII" + romanNumeral;
          }
          break;
        case 9:
          if (place >= 1000) {
            romanNumeral = "MMMMMMMMM" + romanNumeral;
          } else if (place >= 100) {
            romanNumeral = "CM" + romanNumeral;
          } else if (place >= 10) {
            romanNumeral = "XC" + romanNumeral;
          } else {
            romanNumeral = "IX" + romanNumeral;
          }
          break;
      }
      //   if(num>=1000){

      //   }else if(num>=100){

      //   }else if(num>=10){
      //     if(currNum>5){
      //       if(currNum==9){
      //         romanNumeral+="XC";
      //       }else{
      //         romanNumeral+="L"+(currNum-5)*"X";
      //       }
      //     }
      //   }else{
      //     if(currNum>5){
      //       if(currNum==9){
      //         romanNumeral+="IX";
      //       }else{
      //         romanNumeral+="V"+(currNum-5)*"I";
      //       }
      //     }else{
      //       if(currNum==4){
      //         romanNumeral+="IV";
      //       }else{
      //         romanNumeral+=currNum*"I";
      //       }
      //     }
      //   }
      num = Math.floor((num /= 10));
      place *= 10;
    }
  }
  const display = document.getElementById("display");
  display.innerHTML = romanNumeral;
}
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
  convertToRoman();
});
