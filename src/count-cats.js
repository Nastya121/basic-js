const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
let count =0;
for (let i=0; i<backyard.length; i++){
  let newarr=backyard[i];
  for(let j=0; j<newarr.length; j++){
if(newarr[i]== ('^^')){
  count++;
}

  }

}
 return count; 
};

