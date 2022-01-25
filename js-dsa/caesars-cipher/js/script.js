//to decode I need to unshift the characters over 13 alphabetically and ignore spaces and other non-alphanumeric text.
//pretty sure I'm going to have to loop through and change eacb character 13 characters back
//Easy just get the ascii value and go back and forth by 13

"use strict";
function rot13(str) {

    return str.split("").map((decode)=>{
      console.log(decode);
      if(!decode.match(/\W/)){
        var dec = decode.charCodeAt(0);
        if((dec-13)<65){
          return String.fromCharCode(90-(12-(dec-65)));
        }else{
          return String.fromCharCode(dec-13);
        }
      }else{
        return decode;
      }
    }).join("");
}
  console.log(rot13("SERR PBQR PNZC"));
  //ignore punctuations and spaces