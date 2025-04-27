/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let c=0
    for(let i=0;i<nums.length-2;i++){
       let subArr=nums.slice(i,i+3)
       if(subArr[0]+subArr[2]==subArr[1]/2){
        c++
       }
    // if((nums[i]+nums[i+2])*2===nums[i+1]){
    //     c++;
    // }
    }
    return c
    
};