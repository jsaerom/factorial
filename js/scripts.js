// Back-End Logic
var input = 0;

function factorial(input){
  var factorial = 1;
  for (var i = 1; i <= input; i++){
    factorial = factorial * i;
  }
  return factorial;
}

function generateOutput (input) {
   var output = "The factorial of " + input + " is " + factorial(input);
   return output;
}

// Front-End Logic
$("form").submit(function(event){
  event.preventDefault();
  input = $("#input").val();
  $("#output").text(generateOutput(input));
});
