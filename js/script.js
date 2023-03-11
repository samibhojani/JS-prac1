// <script>
// function renderResult(){
// var value = document.getElementById("myemail").value
// if(value.toString().length > 2){
// for(var i = 1; i < 10 ; i++){
// const result = 5 + "X" + i + "=" + 5 * i + "<br/>"
//  document.write(result)
// if(i === 9)
// return
// }
// }
// for(var i = 1; i < 10 ; i++){
// const result = value + "X" + i + "=" + value * i + "<br/>"
// }
// }
// </script>
// </body>
// </html>

// declaring a variable and printing its initial value

var a = 10;
document.getElementById(
  "initValue"
).innerHTML = ` <h2> The initial value of a is: ${a} </h2>`;

// adding a pre increment and result with button


function preIncrement(){

document.getElementById(
  "incrementDecrement"
).innerHTML += ` <h3>The value of ++a is: ${++a} </h3> 
    <h5> Now the value of a is: ${a} </h5>
 `;
}

// adding a post increment and result with button

function postIncrement() {

  document.getElementById(
    "incrementDecrement"
  ).innerHTML += ` <h3>The value of a++ is: ${a++} </h3> 
    <h5> Now the value of a is: ${a} </h5>
 `;
}

// adding a pre decrement and result with button


function preDecrement(){

document.getElementById(
  "incrementDecrement"
).innerHTML += ` <h3>The value of --a is: ${--a} </h3> 
    <h5> Now the value of a is: ${a} </h5>
 `;
}

// adding a post increment and result with button

function postDecrement() {

  document.getElementById(
    "incrementDecrement"
  ).innerHTML += ` <h3>The value of a-- is: ${a--} </h3> 
    <h5> Now the value of a is: ${a} </h5>
 `;
}


var a = 2;
var b = 1;
var result;



function stateOne(){

  document.getElementById(
    "pi"
  ).innerHTML += ` <h3><b>--a</b> </h3>
      <h5> a is: ${a}</h5>
      <h5> b is: ${b}</h5>
      <h5> result is: ${--a}</h5>  
   `;
  }


function stateTwo(){

    document.getElementById(
      "pis"
    ).innerHTML += ` <h3><b>--a - --b</b> </h3>
        <h5> a is: ${a}</h5>
        <h5> b is: ${b}</h5>
        <h5> result is: ${--a - --b}</h5>  
     `;
    }

function stateThree(){

      document.getElementById(
        "pisa"
      ).innerHTML += ` <h3><b>--a - --b + ++b</b> </h3>
          <h5> a is: ${a}</h5>
          <h5> b is: ${b}</h5>
          <h5> result is: ${--a - --b + ++b}</h5>  
       `;
      }

function stateFour(){

        document.getElementById(
          "pisaa"
        ).innerHTML += ` <h3><b>--a - --b + ++b + b--</b> </h3>
            <h5> a is: ${a}</h5>
            <h5> b is: ${b}</h5>
            <h5> result is: ${--a - --b + ++b + b--}</h5>  
         `;
        }
  
function greetings(){

          var user = document.getElementById("userName").value;
                     document.getElementById("greetings").innerHTML += ` <h1> Greetings! ${user} </h1>`;
          }