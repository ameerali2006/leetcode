/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    console.log(min,max)

    let arr=[]
    for(let i=min;i<max;i++){
        if(!nums.includes(i)){
            console.log(arr)
            arr.push(i)
        }
    }
    return arr
};