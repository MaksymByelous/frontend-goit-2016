
// ------block 1 of homework: lets get a power!
var app = function pow(x, n) {
  var result = 1;
  for (var i = 0; i < n; i++) {
    result *= x;
  }
  console.log('answer is ' + result);
  return result;
}
module.exports = app;
