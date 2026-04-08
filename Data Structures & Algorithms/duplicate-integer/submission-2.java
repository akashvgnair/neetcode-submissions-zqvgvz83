class Solution {
    public boolean hasDuplicate(int[] nums) {
        Set<Integer> h = new HashSet<>();
        for(int num: nums) {
            h.add(num);
        }

        return h.size() != nums.length;
    }
}