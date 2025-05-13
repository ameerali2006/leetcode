/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let j=0
    let newArr=nums.sort((a,b)=>a-b)
    for(let i=0;i<=newArr.length;i++){
        if(newArr[i]!=i){
            return i
        }
        j=i
        
    }
    return j+1
    
    
};