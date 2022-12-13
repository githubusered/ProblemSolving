// First Unique Character in a String
var firstUniqChar = function(s) {
    // (O(logn) time comlexity)
    let arr = s.split('')
    let evenEvenEquals = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] == arr[j] && i != j){
            evenEvenEquals.push(arr[i])
                break
            }            
        }        
    }
    let difference = arr.filter(x => !evenEvenEquals.includes(x));
    for (let i = 0; i < arr.length; i++) {
        if(difference[0] == arr[i]){
            return i
        }
    }
    if(difference[0] == undefined){
        return -1
    }
};
firstUniqChar("leetcode")   //output 0  
firstUniqChar("loveleetcode")   //output 2
firstUniqChar("aabb") //output -1
