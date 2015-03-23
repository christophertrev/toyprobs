/*Write a function defaultArguments. It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values.

You cannot assume that the function's arguments have any particular names.

You should be able to call defaultArguments repeatedly to change the defaults.

function add(a,b) { return a+b;};

var add_ = defaultArguments(add,{b:9});
add_(10); // returns 19
add_(10,7); // returns 17
add_(); // returns NaN

add_ = defaultArguments(add_,{b:3, a:2});
add_(10); // returns 13 now
add_(); // returns 5

add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
add_(10); // returns NaN
add_(10,10); // returns 20

HINT: This problem requires using Fuction.prototype.toString() in order to extract a function's argument list
*/



var defaultArguments = function (fn, defaults){
  var fnStr = fn.toString();
  var openPar = fnStr.indexOf('(');
  var lastPar = fnStr.indexOf(')');

  var argumentStr = fnStr.substr(openPar + 1, lastPar - openPar - 1);
  var argNames  = argumentStr.split(',');
  var args = [];
  for(var i = 0; i< argNames.length; i++){
    args.push(defaults[argNames[i]]);
  }
  console.log('default args are: ', args);

  return function(){

    for(var i = 0, i< arguments.length; i++ ){
      args[i] = arguments[i];  

    }
    // var arguments = [1,2];
    return fn.apply(null, args);
  };
}