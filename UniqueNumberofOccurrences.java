import java.util.HashSet;
import java.util.HashMap;

class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        HashMap<Integer, Integer> hash = new HashMap<Integer, Integer>();
        HashSet<Integer> set = new HashSet<Integer>();
        for (int i = 0; i <= arr.length-1; i++) {
            Integer num = arr[i];
            if (hash.containsKey(num)) {
                hash.put(num, hash.get(num)+1);
            } else hash.put(num, (Integer)0);
        }
        for (Integer val : hash.values()) {
            if (set.contains(val)) return false;
            set.add(val);
        }
        return true;        
    }
}

class UniqueNumberofOccurrences {
    public static void main(String[] args) {
    int[] arr = {1,2,2,1,1,3};
    Solution solution = new Solution();
    System.out.println(solution.uniqueOccurrences(arr));
    }
}