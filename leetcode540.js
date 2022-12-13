var singleNonDuplicate = function(nums) {
    //    (O(logn) Space Complexity)
   let evenEvenEquals = [];
   for (let i = 0; i < nums.length; i++) {
       for (let j = 0; j < nums.length; j++) {
           if(nums[i] == nums[j] && i != j){
            evenEvenEquals.push(nums[i])
               break
            }            
        }        
    }
    let difference = nums.filter(x => !evenEvenEquals.includes(x));
    return difference[0]
};
singleNonDuplicate([1,1,2,3,3,4,4,8,8])

