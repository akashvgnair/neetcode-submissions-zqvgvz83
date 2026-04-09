class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''
        strs.forEach(str => {
            encoded += str.length + "#" + str; 
        }) 
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {        
        const decoded = [];
        
        let i = 0;
        while(i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const count = parseInt(str.slice(i, j));
            i = j + 1;
            decoded.push(str.slice(i, i + count));
            i += count;
        }
        return decoded;
    }
}