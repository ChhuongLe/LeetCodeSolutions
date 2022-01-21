/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
/*
IOCE: 
    Input: Piles - Array of integers, h - Integer
    Output: Integer
    Constraints: piles will always have an integer
                 h >= piles.length
    Edge Cases: None to consider
*/
/*
    Example: 

    piles = [3,6,7,11] h = 8

    Koko has 8 hours to eat 4 piles of bananas
    what is the minimum amount of time that she can take to eat all bananas in h hours

    k = # of bananas eaten/hour

    since koko only eats one pile per hour that would mean that the time h always needs to be 
    greater than the number of piles 

    try k = 1 ( k cannot be 0 since she would not be eating bananas)
    @ index 0, it would take 3 hours 8 - 3 = 5 hours left
    @ index 1, 5 - 6 = -1 no more time

    .
    .
    .
    k = 4
    @ index 0: 8 - 1 = 7
    @ index 1 : 7 - 2 = 5
    @ index 2: 5 - 2 = 3
    @ index 3: 3 - 3 = 0
*/
/*
 Algorithm: 

    start at k = 1 and test until the largest number of bananas in a pile
    if the eating speed is too slow, increment k
    test until an eating speed is able to finish all the piles in h time or less

    can reduce time complexity by performing a binary search

    [3, 6, 7, 11]

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    let k start at 6

    3/6 = .5, round to 1 total = 1
    6/6 = 1 total = 2
    7/6 = 2 total = 4
    11/6 = 2 total = 6 < 8 can we go small? 

    [1, 2, 3, 4, 5] 

    let k be 3 now 
    3/3 = 1 total = 1
    6/3 = 2 total = 3
    7/3 = 3 total = 6
    11/3 = 4 total = 10 > 8 need to go bigger

    [4,5]

    let k be 4
    3/4 = 1 total = 1
    6/4 = 2 total = 3
    7/4 = 2 total = 5
    11/4 = 3 total = 8 === 8 this is perfect
*/
const minEatingSpeed = (piles, h) => {
    let min = 1,
        max = Math.max(...piles),
        best = max

    const time = speed => piles.reduce((sum, pile) => sum + Math.ceil(pile/speed), 0)

    while (min <= max) {
        const mid = Math.floor((min + max) / 2)
		
        if (time(mid) <= h) {
            best = mid
            max = mid - 1
        } else
            min = mid + 1
    }

    return best
}