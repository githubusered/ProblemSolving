// Given the head of a singly linked list,
//  reverse the list, and return the reversed list.
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let head = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,null)))))
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

//   console.log(prev);
  return prev;
}
reverseList(head)