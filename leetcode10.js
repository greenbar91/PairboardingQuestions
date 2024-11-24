class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        const dfs = (i, flag) => {
            if (i === nums.length) return flag ? 0 : -1e6;
            if (flag) return Math.max(0, nums[i] + dfs(i + 1, true));
            return Math.max(dfs(i + 1, false),
                            nums[i] + dfs(i + 1, true));
        };
        return dfs(0, false);
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const dfs = (i) => {
            if (i === nums.length - 1) {
                return true;
            }
            const end = Math.min(nums.length - 1, i + nums[i]);
            for (let j = i + 1; j <= end; j++) {
                if (dfs(j)) {
                    return true;
                }
            }
            return false;
        }

        return dfs(0);
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        const dfs = (i) => {
            if (i === nums.length - 1) {
                return 0;
            }
            if (nums[i] === 0) return 1000000;
            let res = 1000000;
            const end = Math.min(nums.length - 1, i + nums[i]);
            for (let j = i + 1; j <= end; j++) {
                res = Math.min(res, 1 + dfs(j));
            }
            return res;
        }

        return dfs(0);
    }
}

class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const n = gas.length;
        let start = n - 1, end = 0;
        let tank = gas[start] - cost[start];
        while (start > end) {
            if (tank < 0) {
                start--;
                tank += gas[start] - cost[start];
            } else {
                tank += gas[end] - cost[end];
                end++;
            }
        }
        return tank >= 0 ? start : -1;
    }
}

class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) {
            return false;
        }
        const count = {};
        for (const num of hand) {
            count[num] = (count[num] || 0) + 1;
        }
        hand.sort((a, b) => a - b);
        for (const num of hand) {
            if (count[num] > 0) {
                for (let i = num; i < num + groupSize; i++) {
                    if (!count[i]) return false;
                    count[i] -= 1;
                }
            }
        }
        return true;
    }
}
