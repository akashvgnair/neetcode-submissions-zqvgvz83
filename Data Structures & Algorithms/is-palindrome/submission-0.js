class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let first = 0;
        const formattedS = s.replace(/[^a-zA-Z0-9]/g, "");
        let last = formattedS.length - 1;
        
        while(first < last) {
            if(formattedS[first].toLowerCase() !== formattedS[last].toLowerCase()) {
                return false;
            }
            first++;
            last--;
        }
        return true;
    }
}
