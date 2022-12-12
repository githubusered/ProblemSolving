// task1 Kill K-th Bit 
function solution(n, k) {
    return n & ~(1 << (k - 1));
}
solution(37,3) // output:33


const killKthBit = (n, k) =>
   parseInt([...n.toString(2)].map((element, index, array) =>
           index == array.length - k ? element = 0 : element)
       .join(''), 2)


killKthBit(37, 3) // output: 33