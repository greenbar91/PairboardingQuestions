class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binary_search(l, r, nums, target) {
        if (l > r) return -1;
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] === target) return m;
        return (nums[m] < target) ?
            this.binary_search(m + 1, r, nums, target) :
            this.binary_search(l, m - 1, nums, target);
    }

    search(nums, target) {
        return this.binary_search(0, nums.length - 1, nums, target);
    }
}


class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c] == target) {
                    return true;
                }
            }
        }
        return false;
    }
}


class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let speed = 1;
        while (true) {
            let totalTime = 0;
            for (let pile of piles) {
                totalTime += Math.ceil(pile / speed);
            }

            if (totalTime <= h) {
                return speed;
            }
            speed++;
        }
    }
}
