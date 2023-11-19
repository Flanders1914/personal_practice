/**
433. Minimum Genetic Mutation
思路: 将原题化为图搜索然后用BFS解决
注意细节，比如node.next中存储的是node
 */
Node = function(val) {
    this.val = val;
    this.next = [];
}

var minMutation = function(startGene, endGene, bank) {
    let canMutate = function(s1, s2) {
        let count = 0;
        for (let i = 0; i <= s1.length-1; i++) {
            if (s1[i] != s2[i]) {
                count++;
                if (count == 2) return false;
            }
        }
        return true;
    }

    let begin = new Node(startGene);
    let hash = new Map();
    for (let gene of bank) {
        hash.set(gene, new Node(gene));
        if (canMutate(startGene, gene)) {
            begin.next.push(hash.get(gene));
        }
    }
    if (!hash.has(endGene)) return -1;

    for (let i = 0; i <= bank.length-1; i++) {
        for (let j = 0; j <= bank.length-1; j++) {
            if (i != j && canMutate(bank[i], bank[j])) {
                let node1 = hash.get(bank[i]);
                let node2 = hash.get(bank[j]);
                node1.next.push(node2);
                node2.next.push(node1);
            }
        }
    }

    let current = [begin];
    let res = 0;
    let target = hash.get(endGene);
    let visited = new Set();

    while (current.length) {
        let next = [];
        for (let node of current) {
            visited.add(node);
            if (!node.next.length) continue;
            for (let child of node.next) {
                if (child == target) return res+1;
                else if (!visited.has(child)) next.push(child);
            }
        }
        current = next;
        res++;
    }
    return -1;
};
let startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"];
console.log(minMutation(startGene, endGene, bank));