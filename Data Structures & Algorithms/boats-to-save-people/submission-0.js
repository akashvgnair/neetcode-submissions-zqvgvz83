class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        const sortedPeople = people.sort((a, b) => a - b);
        let first = 0;
        let last = sortedPeople.length - 1;
        let minBoats = 0;

        while(first<last) {
            if(sortedPeople[first] + sortedPeople[last] <= limit) {
                first ++;
                last--;
                minBoats++;
            } else {
                last --;
                minBoats++;
            }
        }

        if(first == last) {
            minBoats++;
        }
        return minBoats

    }
}
