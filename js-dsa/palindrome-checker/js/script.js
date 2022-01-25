"use strict";
function checkPalindrome() {
  let str = document.getElementById("palindrome").value;
  let bool = true;
    str=str.toLowerCase().replace(/\W|_/g,""); //toUpperCase can use String.prototype.trim()
    
    for(let i=0;i<str.length/2;i++){
      if(str[i]!==str[str.length-1-i]){
        bool=false;
      }
    }
    const display = document.getElementById("display");
    if(bool){
      display.innerHTML = "This is a valid palindrome."
    }else{
      display.innerHTML = "This is not a valid palindrome."
    }

  }

  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click",() =>{
    checkPalindrome();
  });