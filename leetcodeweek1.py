# find missing numbers:  given an array You are given an unsorted array, and are told that this array contains (n - 1) of n consecutive numbers (where the bounds are defined). Write a method, findMissingNumber, that finds the missing number in O(N) time
# Example:
#  arrayOfIntegers: [2, 5, 1, 4, 9, 6, 3, 7];
#  upperBound: 9;
#  lowerBound: 1;

# assume lowerbound a positive number

def findMissingNumber(arrayOfIntegers, upperBound, lowerBound):
    result = sorted(arrayOfIntegers)

    for num, index in result:
        if num >= lowerBound and num <= upperBound:
            if  not num[index] == num[index + 1]:
                return num + 1
    # excepted_list = set(range(lowerBound, upperBound ))
    # print(excepted_list)
    # for num in arrayOfIntegers:
    #     excepted_list.discard(num)

    return result



print(findMissingNumber([2, 5, 1, 4, 9, 6, 3, 7], 3, 9))
