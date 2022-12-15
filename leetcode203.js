// Given the head of a linked list and an integer val, 
// remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]




//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Time complexity O(n)

let head = new ListNode(1, new ListNode(2, new ListNode(6,new ListNode(3, new ListNode(4,new ListNode(5, new ListNode(6,null)))))));

var removeElements = function(head, val) {
  let prev = null
  let current = head
  while(current) {
    if(current.val === val){
        if(prev) {
          prev.next = prev.next.next
        }else{
          head = head.next
        }
      }else{
        prev = current
      }
      current = current.next
  }
  return head
};
removeElements(head,6)





