const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let steps=2**disksNumber-1;
  let a=turnsSpeed*3600;
  let time = Math.floor(steps/a);
  
  let output = {
    turns : steps,
    seconds : time
  }
return output;
  }
