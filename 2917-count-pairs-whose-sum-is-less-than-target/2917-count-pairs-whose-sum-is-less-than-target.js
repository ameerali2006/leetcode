/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let c=0
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(j!=i&&nums[i]+nums[j]<target){
                c++
            }
        }
    }
    return c/2
    
};