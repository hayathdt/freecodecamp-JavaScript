const number = document.getElementById("number");
const output = document.getElementById("output");
const button = document.getElementById("convert-btn");

number.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      button.click();
    }
  });

button.addEventListener("click", function buttonFunction() {
  console.log(number.value);
  
  if (!number.value) {
    output.innerText = "Please enter a valid number";
  } else if (parseInt(number.value) < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  }
  else if (parseInt(number.value) >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  }
  else{
    output.innerText = convertToRoman(parseInt(number.value));
  }
});

function convertToRoman(number){
  let roman = "";
    const liste = [
    { roman: "M", value: 1000 },
    { roman: "CM", value: 900 },
    { roman: "D", value: 500 },
    { roman: "CD", value: 400 },
    { roman: "C", value: 100 },
    { roman: "XC", value: 90 },
    { roman: "L", value: 50 },
    { roman: "XL", value: 40 },
    { roman: "X", value: 10 },
    { roman: "IX", value: 9 },
    { roman: "V", value: 5 },
    { roman: "IV", value: 4 },
    { roman: "I", value: 1 },
  ];
 for (let i = 0; i< liste.length; i++){
     while(number >= liste[i].value){
      roman += liste[i].roman;
      console.log(roman);
      number -= liste[i].value;
      console.log(number);
     }
    
 }return roman;
};
console.log(convertToRoman(256));