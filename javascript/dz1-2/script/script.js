// ------block 1 of homework: lets get a power!
function pow(x, n) {
  var result = 1;
  for (var i = 0; i < n; i++) {
    result *= x;
  }
  console.log(result);
  return result;
}
var x = prompt("input x - number is raised to power", "");
var n = prompt("input n - power of number", "");
alert( pow(x, n) );

// ------block 2 of homework: are you right user?
var names= [];
function logIN () {
  for (var i = 0; i < 5; i++) {
    names.push(prompt("input next name", ""));
  } return names;
}
logIN();

var userName= prompt("input user name ", "");
function checkNames () {
  for (var i = 0; i < names.length; i++) {
    if(names[i]==userName) {
    return true;
    }
  }
}
var rightUser = names.some(checkNames);
if (rightUser) {
  alert( userName + " you are welcome!")
} else {
  alert("you are not in the users list")
  }
