// Given the head of a sorted linked list, 
// delete all duplicates such that each element appears only once.
//  Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2]

// Time Comlexity O(n)

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

let head = new ListNode(1,new ListNode(1,new ListNode(2,null)))

var deleteDuplicates = function(head) {
    if(!head || !head.next) return head
    let current = head;
    while(current && current.next) {
        if(current.val === current.next.val){
            current.next = current.next.next
        }else{
            current = current.next
        }
    }
    return head
};
deleteDuplicates(head)
