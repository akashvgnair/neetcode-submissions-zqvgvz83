/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * }
 */
class Solution {
    /**
     * @param {Node} p
     * @param {Node} q
     * @return {Node}
     */
    lowestCommonAncestor(p, q) {
        const set = new Set()
        while(p) {
            set.add(p);
            p = p.parent;
        }

        while(q) {
            if(set.has(q)) {
                return q;
            }
            q = q.parent;
        }
    }
}
