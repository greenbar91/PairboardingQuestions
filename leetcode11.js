class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const ROWS = grid.length, COLS = grid[0].length;
        let islands = 0;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS ||
                c >= COLS || grid[r][c] === '0') return;

            grid[r][c] = '0';
            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    dfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const ROWS = grid.length, COLS = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS ||
                c >= COLS || grid[r][c] === 0) return 0;

            grid[r][c] = 0;
            let res = 1;
            for (const [dr, dc] of directions) {
                res += dfs(r + dr, c + dc);
            }
            return res;
        };

        let area = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    area = Math.max(area, dfs(r, c));
                }
            }
        }

        return area;
    }
}

/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldToNew = new Map();
        return this.dfs(node, oldToNew);
    }

    /**
     * @param {Node} node
     * @param {Map} oldToNew
     * @return {Node}
     */
    dfs(node, oldToNew) {
        if (node === null) {
            return null;
        }

        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }

        const copy = new Node(node.val);
        oldToNew.set(node, copy);

        for (const nei of node.neighbors) {
            copy.neighbors.push(this.dfs(nei, oldToNew));
        }

        return copy;
    }
}
