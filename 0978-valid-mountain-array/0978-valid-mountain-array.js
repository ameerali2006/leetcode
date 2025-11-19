/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let n=arr.length
    if(n<3)return false
    let i=0
    
    while (arr[i]<arr[i+1])i++
    if(i==0||n-1==i)return  false
    while(arr[i]>arr[i+1])i++
    return n-1==i
};