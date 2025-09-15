/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str=num.toString()
    while(str.length>1){
        let num=str.split("").reduce((a,b)=>a+Number(b),0)
        str=num.toString()
    }
    return Number(str)
};