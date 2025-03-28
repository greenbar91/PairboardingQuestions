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

class Solution {
    /**
     * @param {number[][]} grid
     * @return {void}
     */
    islandsAndTreasure(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const INF = 2147483647;
        let visit = Array.from({ length: ROWS }, () =>
                    Array(COLS).fill(false));

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS ||
                c >= COLS || grid[r][c] === -1 || visit[r][c]) {
                return INF;
            }
            if (grid[r][c] === 0) {
                return 0;
            }
            visit[r][c] = true;
            let res = INF;
            for (let [dx, dy] of directions) {
                res = Math.min(res, 1 + dfs(r + dx, c + dy));
            }
            visit[r][c] = false;
            return res;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === INF) {
                    grid[r][c] = dfs(r, c);
                }
            }
        }
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = [];
        let fresh = 0;
        let time = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 1) {
                    fresh++;
                }
                if (grid[r][c] === 2) {
                    q.push([r, c]);
                }
            }
        }

        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        while (fresh > 0 && q.length > 0) {
            const length = q.length;
            for (let i = 0; i < length; i++) {
                const [currR, currC] = q.shift();

                for (const [dr, dc] of directions) {
                    const row = currR + dr;
                    const col = currC + dc;
                    if (row >= 0 && row < grid.length &&
                        col >= 0 && col < grid[0].length &&
                        grid[row][col] === 1) {
                        grid[row][col] = 2;
                        q.push([row, col]);
                        fresh--;
                    }
                }
            }
            time++;
        }
        return fresh === 0 ? time : -1;
    }
}
