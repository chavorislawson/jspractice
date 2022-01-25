"use strict";
/**
 * 
 * 555-555-5555 4- works
(555)555-5555 3- works
(555) 555-5555  3- works 
555 555 5555  2-
5555555555  1-
1 555 555 5555 2-

1(555) 555 5555 3- works
1 555-555-5555 4- works
1 (555) 555-5555 3- works
1(555)555-5555  3-  works
 */
/*
variations
1 all numbers together
2 country code, numbers, spaces. Same thing as 4. Actually I'll just use  [^1/s]{,1} I hope this works. Not sure how to ensure that they're either both dashes or both spaces.
3 parentheses and dashes, spaces. I need (-|\s)
4 country code,numbers, dashes. Might have to make a variation because you either have the country code and the space or you don't
Might substitute out some of the {,1} for ? - all or none operator
Might can reduce this down into two variations by using capture groups
*/
function telephoneCheck() {
  let str = document.getElementById("tNumber").value;
  console.log(str);
  let bool = false;
  if(/[^\d()\s-]/.test(str)){ //Match everything except digits, (), spaces, and dashes. The other iteration was looking to match the stuff I didn't want to match. Redundant check, don't need

  } else if(/^\d{10}$/.test(str)){ //1 I want exactly 10 digits with no extra

    bool=true;

   }else if(/^(1\s){0,1}\d{3}\s{1}\d{3}\s{1}\d{4}$/.test(str)){ //2

    bool=true;

   }else if(/^1{0,1}\s{0,1}\(\d{3}\)\s{0,1}\d{3}(-|\s)\d{4}$/.test(str)){ //3 Doesn't work on regex101. I just needed to escape the parentheses and get rid of an extra curly

    bool=true;

   }else if(/^(1\s){0,1}\d{3}-{1}\d{3}-{1}\d{4}$/.test(str)){ //4  had to increase the first limit because if not it would choose either matching a 1 or a space at most once. Nope had to make it a group

    bool=true;

   }

   const validation = document.getElementById("display");
   const formats = `
   
   555-555-5555
   (555)555-5555
   (555) 555-5555
   555 555 5555
   5555555555
   1 555 555 5555
   1(555) 555 5555
   1 555-555-5555
   1 (555) 555-5555
   1(555)555-5555`;

   if(bool){
     validation.innerHTML = "Your telephone number is in a valid format.";
     
   }else{
    validation.innerHTML = "Your telephone number is not in a valid format.\n\nHere are all the valid telephone number formats for the US:" + formats;
   }
}

const submitBtn= document.getElementById("submit");

submitBtn.addEventListener("click",() =>{
  telephoneCheck();
});