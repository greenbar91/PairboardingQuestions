class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const countS = {};
        const countT = {};
        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1;
            countT[t[i]] = (countT[t[i]] || 0) + 1;
        }

        for (const key in countS) {
            if (countS[key] !== countT[key]) {
                return false;
            }
        }
        return true;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let length = 1;
                while (numSet.has(num + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let max = min;
        let value = 0;
        for (let i = 0; i < prices.length; i++) {
            if (i != prices.length - 1 && prices[i] <= min) {
                max = min = prices[i];
            } else if (prices[i] > max) {
                max = prices[i];
            }
            value = max - min > value ? max - min : value;
        }
        return value;
    }
}


class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1;

        while (l < r) {
            while (l < r && !this.alphaNum(s[l])) {
                l++;
            }
            while (r > l && !this.alphaNum(s[r])) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++; r--;
        }
        return true;
    }

    /**
     * @param {char} c
     * @return {boolean}
     */
    alphaNum(c) {
        return (c >= 'A' && c <= 'Z' ||
                c >= 'a' && c <= 'z' ||
                c >= '0' && c <= '9');
    }
}
