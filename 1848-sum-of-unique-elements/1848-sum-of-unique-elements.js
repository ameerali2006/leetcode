/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let freq={}
    for(let i=0;i<nums.length;i++){
        freq[nums[i]]=(freq[nums[i]]||0)+1
    }
    let total=0
    for(let k in freq){
        if(freq[k]==1)total+=Number(k)
    }
    return total
    
};