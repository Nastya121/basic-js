const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
 let finish='';
 for(let i=0;i<members.length;i++){
let new_el=members[i];
if(new_el='string'){
let neww_el=new_el.split('');
finish=finish.push(neww_el[0]);
}
 }
  let finish_f=finish.split('');
  let finish_s=finish_f.reverse();
  return finish_s;
};
