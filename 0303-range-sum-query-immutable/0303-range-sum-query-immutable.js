/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums=nums
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    console.log(left,right,this.nums[left],'+',this.nums[right],this.nums[left]+this.nums[right])
    console.log(this.nums.slice(left,right))
    console.log(this.nums.slice(left,right).reduce((a,b)=>a+b,0))
return this.nums.slice(left,right+1).reduce((a,b)=>a+b,0)

};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */