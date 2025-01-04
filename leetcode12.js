/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.dfs(root)[0] === 1;
    }

    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    dfs(root) {
        if (!root) {
            return [1, 0];
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const balanced =
            left[0] === 1 &&
            right[0] === 1 &&
            Math.abs(left[1] - right[1]) <= 1;
        const height = 1 + Math.max(left[1], right[1]);

        return [balanced ? 1 : 0, height];
    }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }
        if (p && q && p.val === q.val) {
            return (
                this.isSameTree(p.left, q.left) &&
                this.isSameTree(p.right, q.right)
            );
        } else {
            return false;
        }
    }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) {
            return true;
        }
        if (!root) {
            return false;
        }

        if (this.sameTree(root, subRoot)) {
            return true;
        }
        return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }

    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    sameTree(root, subRoot) {
        if (!root && !subRoot) {
            return true;
        }
        if (root && subRoot && root.val === subRoot.val) {
            return (
                this.sameTree(root.left, subRoot.left) &&
                this.sameTree(root.right, subRoot.right)
            );
        }
        return false;
    }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let cur = root;

        while (cur) {
            if (p.val > cur.val && q.val > cur.val) {
                cur = cur.right;
            } else if (p.val < cur.val && q.val < cur.val) {
                cur = cur.left;
            } else {
                return cur;
            }
        }
        return null;
    }
}
