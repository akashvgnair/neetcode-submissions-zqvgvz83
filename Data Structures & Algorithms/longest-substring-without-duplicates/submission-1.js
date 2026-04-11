class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let left = 0;
        const window = new Set();

        for (let right = 0; right < s.length; right++) {
           while(window.has(s[right])) {
                window.delete(s[left])
                left++;
           }
           window.add(s[right]);
           longest = Math.max(longest, right - left + 1)
        }
        
        return longest;
        
    }
}
