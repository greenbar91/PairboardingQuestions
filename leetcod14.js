class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for (let c of s) {
            if (closeToOpen[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}

class MinStack {
    constructor() {
        this.min = Infinity;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            if (val < this.min) this.min = val;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return;

        const pop = this.stack.pop();

        if (pop < 0) this.min -= pop;
    }

    /**
     * @return {number}
     */
    top() {
        const top = this.stack[this.stack.length - 1];
        return top > 0 ? top + this.min : this.min;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
