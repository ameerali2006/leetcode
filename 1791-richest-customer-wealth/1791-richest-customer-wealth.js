/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wel=[]
    for(let arr of accounts){
        wel.push(arr.reduce((a,b)=>a+b))
    }
    return Math.max(...wel)
    
};