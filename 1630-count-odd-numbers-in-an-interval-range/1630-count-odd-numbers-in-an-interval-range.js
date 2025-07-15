/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if(low%2!=0&&high%2!=0){
        
        return Math.ceil((high+1-low)/2)
    }else{
        return Math.ceil((high-low)/2)
    }
    
    
};