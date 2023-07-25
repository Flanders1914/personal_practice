/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
25. Reverse Nodes in k-Group
思路：利用cache数组存储需要反转的节点
当计数变量 count == k 时,从后往前遍历
cache数组并写入ans中以实现反转。
注意：
1.在准备反转时需要next_node记录current.next
2.在循环完成后要根据count做尾部处理
3.不要忘了在else中迭代current
 */
var reverseKGroup = function(head, k) {

    let ans = {next : null};
    let ans_head = ans;
    let current = head;
    let cache = [];
    let count = 0;

    while (current != null) {

        cache.push(current);
        count++;

        if (count == k) {

            let next_node = current.next;
            for (let i = cache.length -1; i >= 0; i--) {
                ans.next = cache[i];
                ans = ans.next;
            }
            current = next_node;
            count = 0;
            cache = [];

        } else current = current.next;
        
    }

    if (count == 0 ) {
        ans.next = null;
        return ans_head.next;
    } else {
        ans.next = cache[0];
        return ans_head.next;
    }
};