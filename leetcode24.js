class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1;
        let maxP = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
            } else {
                l = r;
            }
            r++;
        }
        return maxP;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let charSet = new Set(s);

        for (let c of charSet) {
            let count = 0, l = 0;
            for (let r = 0; r < s.length; r++) {
                if (s[r] === c) {
                    count++;
                }

                while ((r - l + 1) - count > k) {
                    if (s[l] === c) {
                        count--;
                    }
                    l++;
                }

                res = Math.max(res, r - l + 1);
            }
        }
        return res;
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let count1 = {};
        for (let c of s1) {
            count1[c] = (count1[c] || 0) + 1;
        }

        let need = Object.keys(count1).length;
        for (let i = 0; i < s2.length; i++) {
            let count2 = {};
            let cur = 0;
            for (let j = i; j < s2.length; j++) {
                let c = s2[j];
                count2[c] = (count2[c] || 0) + 1;

                if ((count1[c] || 0) < count2[c]) {
                    break;
                }

                if ((count1[c] || 0) === count2[c]) {
                    cur++;
                }

                if (cur === need) {
                    return true;
                }
            }
        }
        return false;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        let countT = {};
        let window = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0, need = Object.keys(countT).length;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            if (countT[c] && window[c] === countT[c]) {
                have++;
            }

            while (have === need) {
                if ((r - l + 1) < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window[s[l]]--;
                if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
                    have--;
                }
                l++;
            }
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
