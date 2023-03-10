// <!DOCTYPE html>
// <html>
// <body>
// <h1>The Document Object</h1>
// <h2>The write() Method</h2>
// <p>Write some HTML elements directly to the HTML output:</p>
// <input id="myemail" type="number"/> <button onclick="renderResult()" >Submit</button>
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
  "preIncrementAndPostIncrement"
).innerHTML += ` <h2>Value of ++a: ${++a} </h2>`;
}

// adding a post increment and result with button

function postIncrement() {

  document.getElementById(
    "preIncrementAndPostIncrement"
  ).innerHTML += ` <h2>Value of a++: ${a++} </h2>`;
}
