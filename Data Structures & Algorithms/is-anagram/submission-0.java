class Solution {
    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> map = new HashMap<>();

        for (char item: s.toCharArray()) {
            if(!map.containsKey(item)) {
                map.put(item, 1);
            } else {
                map.put(item, map.get(item) + 1);
            }
        }

        for (char item: t.toCharArray()) {
            if(map.containsKey(item)) {
                if(map.get(item) == 1) {
                    map.remove(item);
                } else {
                    map.put(item, map.get(item) - 1);
                }   
            } else {
                return false;
            }
        }

        if(map.isEmpty()) {
            return true;
        }

        return false;

    }
}
