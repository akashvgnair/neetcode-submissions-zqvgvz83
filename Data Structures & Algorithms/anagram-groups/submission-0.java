class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for(String str: strs) {
            map.put(getSortedString(str), new ArrayList<String>());
        }

        for(String str: strs) {
            String sortedString = getSortedString(str);
            map.get(sortedString).add(str);
        }


        
        return new ArrayList<>(map.values());
    }

    private String getSortedString(String s) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }
}


