class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        strNumbers = ''
        for nums in digits: 
            strNumbers += str(nums)
         
        intNumbers = int(strNumbers) + 1
        strNumber = str(intNumbers)
        
        result = []
        for nums in strNumber:
            result.append(nums)
            
        return result
        