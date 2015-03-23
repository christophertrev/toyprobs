var defaultArguments = function (func, defaults) {
  // convert func to string
  var funcString = func.toString();
  // find the indices for the first open and closed parenthesis
  // take the values between the parenthesis
  // set funcInputArgs to the results of the split that based on commas
  var funcInputArgs = funcString.slice(funcString.indexOf('(') + 1, funcString.indexOf(')')).split(',');
  // remove any spaces
  funcInputArgs = funcInputArgs.map(function (arg) {
    return arg.trim();
  });

  // return an anonymous function
  return function () {
    // get all of the input arguments to this function set to callbackInputArgs
    var callbackInputArgs = Array.prototype.slice.call(arguments, 0);
    // create newInputArgs array
    var newInputArgs = [];
    // for each elem of funcInputArgs
    for (var i = 0; i < funcInputArgs.length; i++) {
      // if callbackInputArgs[i] exists
      if (callbackInputArgs[i] !== undefined) {
        // set newInputArgs[i] to that value
        newInputArgs[i] = callbackInputArgs[i];
      } else {
        // set newInputArgs[i] to defaults[funcInputArgs[i]]
        newInputArgs[i] = defaults[funcInputArgs[i]];
      }
    }

    // return the result of using apply on func to pass in an newInputArgs array
    return func.apply(null, newInputArgs);
  };
};
