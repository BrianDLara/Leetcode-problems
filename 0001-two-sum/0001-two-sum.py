class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # solution 1
        # brute force method, easy to understand , but running a loop inside a loop make the time complexity very inefficient.
        # space = O(1) | time = O(n^2)
    
        # for i in range(len(nums) - 1):
        #     for j in range(i + 1, len(nums)):
        #         if nums[i] + nums[j] == target:
        #             return [i, j]

       
####################################################################################################################
        
        # solution 2 
        # While a correct way to so;ve this the problem will fail Case 2 because it doesn't take sorted arrays into consideration
        # space = O(1) time = O(nlog(n))
       
        # nums.sort()
        # start = 0
        # end = len(nums) - 1

        
        # while start < end:
        #     if nums[start] + nums[end] == target:
        #         return [start, end]
        #     elif nums[start] + nums[end] < target:
        #         start += 1
        #     elif nums[start] + nums[end] > target:
        #         end -= 1
        # return []

####################################################################################################################

        # solution 3
        # This function is more efficient in time
        #  space = O(n) | time = O(n)

        # store possible solutions in hash table to run in real time
        hashTable = dict()
        for idx in range(len(nums)):
            currentNum = nums[idx]
            # using the formula "x + y = z" I'm trying to find y by doing "y = z - x"
            possibleSolution = target - currentNum
            # if the possible solution is already within the hashtable return that along with the index of the current number being tested
            if possibleSolution in hashTable:
                idx2 = hashTable[possibleSolution]
                return [idx2, idx]
            # if the possible solution is not on the hashTable then store it
            hashTable[nums[idx]] = idx

