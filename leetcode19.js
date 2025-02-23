class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const subset = [];
        this.dfs(nums, 0, subset, res);
        return res;
    }

    /**
     * @param {number[]} nums
     * @param {number} i
     * @param {number[]} subset
     * @param {number[][]} res
     * @return {void}
     */
    dfs(nums, i, subset, res) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.dfs(nums, i + 1, subset, res);
        subset.pop();
        this.dfs(nums, i + 1, subset, res);
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        let cur = [];
        this.backtrack(nums, target, ans, cur, 0);
        return ans;
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @param {number[][]} ans
     * @param {number[]} cur
     * @param {number} index
     */
    backtrack(nums, target, ans, cur, index) {
        if (target === 0) {
            ans.push([...cur]);
        } else if (target < 0 || index >= nums.length) {
            return;
        } else {
            cur.push(nums[index]);
            this.backtrack(nums, target - nums[index], ans, cur, index);

            cur.pop();
            this.backtrack(nums, target, ans, cur, index + 1);
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        backtrack([], nums, new Array(nums.length).fill(false));
        return res;

        function backtrack(perm, nums, pick) {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (!pick[i]) {
                    perm.push(nums[i]);
                    pick[i] = true;
                    backtrack(perm, nums, pick);
                    perm.pop();
                    pick[i] = false;
                }
            }
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];
        nums.sort((a, b) => a - b);
        this.backtrack(0, [], nums, res);
        return res;
    }

    /**
     * @param {number} start
     * @param {number[]} subset
     * @param {number[]} nums
     * @param {number[][]} res
     * @return {void}
     */
    backtrack(start, subset, nums, res) {
        res.push([...subset]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
            subset.push(nums[i]);
            this.backtrack(i + 1, subset, nums, res);
            subset.pop();
        }
    }
}

lass Solution {
    constructor() {
        this.res = [];
    }

    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        this.res = [];
        candidates.sort((a, b) => a - b);
        this.dfs(candidates, target, 0, [], 0);
        return this.res;
    }

    /**
     * @param {number[]} candidates
     * @param {number} target
     * @param {number} i
     * @param {number[]} cur
     * @param {number} total
     * @return {void}
     */
    dfs(candidates, target, i, cur, total) {
        if (total === target) {
            this.res.push([...cur]);
            return;
        }
        if (total > target || i === candidates.length) {
            return;
        }

        cur.push(candidates[i]);
        this.dfs(candidates, target, i + 1, cur, total + candidates[i]);
        cur.pop();

        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
            i++;
        }
        this.dfs(candidates, target, i + 1, cur, total);
    }
}
