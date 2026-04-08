class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        nums.forEach(num => {
            if(map[num]) {
                map[num]+= 1;
            } else {
                map[num] = 1;
            }
        })

        console.log("Frequency", map);

        const bucket = new Array(nums.length + 1).fill([]);
        const set = new Set(nums);

        set.forEach(item => {
            bucket[map[item]] = [...bucket[map[item]], item];
        })

        console.log(bucket)


        let result = []
        let val = 0;
        for(let i = bucket.length - 1; i >= 0; i--) {
            if(val < k) {
                console.log(bucket[i])
                if(bucket[i].length) {
                    result = [...result, ...bucket[i]];
                    val += bucket[i].length;
                }
            }
        }

        return result;
        
    }
}
