public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        HashSet<int> test = new HashSet<int>();
        foreach(int loop in nums)
        {
            if(test.Contains(loop))
            {
                return true;
            }
            else
            {
                test.Add(loop);
            }
        }
        return false;
    }
}