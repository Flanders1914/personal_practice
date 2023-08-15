/**
86. Partition List
思路：
1. 先对头部处理，current迭代到第一个>=x的节点
2. 若current 为 null 或者 current.next 为 null 直接输出
3. 对于之后的每一个current，若current.val < x 则把 previous.next
设置为next，current.next 设置为null，取出current，并连接到单独的sub_list上
最后将sub_list的末尾连接到conjunction(即第一步迭代到的节点)
*/
var partition = function(head, x) {
    let sub_head = {next : null};
    let sub_end = sub_head;
    let current = head;
    //排除特殊情况
    if (head == null || head.next == null) return head;

    //对头部进行处理，current必须从第一个>=x的元素开始，而且next不能为空
    while (current != null && current.val < x) {
        let next = current.next;
        current.next = null;
        sub_end.next = current;
        sub_end = sub_end.next;
        current = next;
    }
    if (current == null) return sub_head.next;
    if (current.next == null) {
        sub_end.next = current;
        return sub_head.next;
    }

    let previous = current, conjunction = current;
    current = current.next;

    while (current != null) {
        let next = current.next;
        if (current.val < x) {
            previous.next = next;
            current.next = null;
            sub_end.next = current;
            sub_end = sub_end.next;
        } else {
            previous = current;
        }
        current = next;
    }

    sub_end.next = conjunction;
    return sub_head.next;
};