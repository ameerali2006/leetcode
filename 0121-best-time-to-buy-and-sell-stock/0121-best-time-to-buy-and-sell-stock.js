/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let buy=Infinity
    let sell=0
    for(let i=0;i<prices.length;i++){
       if(prices[i]<buy){
        buy=prices[i]
       }else{
        let profit=prices[i]-buy
        sell=Math.max(profit,sell)
       }
    }
    return sell
    
    console.log(buy,sell)

    
};