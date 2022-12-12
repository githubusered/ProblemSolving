// task3 find Pivot element's index

var pivotIndex = function (nums) {
    let totalSum = 0;
    let leftSum = 0;
    nums.forEach(e => totalSum+=e);
    for (let i = 0; i < nums.length; i++) {
        if (totalSum - leftSum - nums[i] === leftSum) {
            console.log(i);  //the index of pivot
        }        
        leftSum += nums[i]
    }
    return -1;
};
pivotIndex([1,7,3,6,5,6]) //output: 3