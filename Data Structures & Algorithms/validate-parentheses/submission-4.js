class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        let top = -1;

        for (let i = 0; i<s.length; i++) {
            if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
                stack.push(s[i]);
                top++;
            } else {
                if(s[i] === ')' && stack[top] === '(') {
                    stack.pop();
                    top--;
                }
                else if (s[i] === ']' && stack[top] === '[') {
                    stack.pop();
                    top--;
                }
                else if (s[i] === '}' && stack[top] === '{') {
                    stack.pop();
                    top--;
                } else {
                    return false;
                }
            }
        }
        return top === -1 ? true: false
    }
}
