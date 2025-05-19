const accountId=123443
let accountName="Pralabh07"
var accountPass="212111"
accountLocation="Bareilly"
let accountState;

console.log(accountId);
/*
Do not prefer var because of issue in block scope and functional scope
*/

accountLocation="Delhi"
accountName="Pralabh15"
console.table([accountId,accountName,accountPass,accountLocation,accountState])

