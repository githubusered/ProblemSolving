// Valid Palindrome

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function(s) {
    let arr = s.toLowerCase().split('')
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].toUpperCase() == arr[i].toLowerCase()){
            if(isFinite(arr[i]) && arr[i] !== ' '){
                newArr.push(arr[i])
            }
        }else{
            newArr.push(arr[i])
        }
    }
    let newStr = newArr.join('')
    if(newStr == newArr.reverse().join('')){
        return true
    }else{
        return false
    }
};
// isPalindrome('A man, a plan, a canal: Panama')

