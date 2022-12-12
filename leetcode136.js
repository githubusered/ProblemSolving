
// Given a non-empty array of integers nums, every element appears twice except for one.
//  Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// input                output
// nums = [2,2,1]       1 // false
// nums = [4,1,2,1,2]   4 // true
// nums = [1]           1 // true

var singleNumber = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j] && i != j) {
                 continue
            }
            return nums[i];
        }
    }
    

}