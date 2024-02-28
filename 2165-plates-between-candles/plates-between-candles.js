/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
// finds index of the first candle in range of [start, end]
const lowerBound = (arr, start, end, value) => {
    while(start < end) {
        const mid = start + Math.floor((end - start)/2);
        if(arr[mid] < value) {
            start = mid+1;
        } else {
            end = mid;
        }
    }
    return start;
}
// finds index of the last candle in range of [start, end]
const upperBound = (arr, start, end, value) => {
    while (start <= end) {
        const mid = start + Math.floor((end-start)/2);

        if(arr[mid]>value) {
            end = mid-1;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

var platesBetweenCandles = function(s, queries) {
    let candleIdx = []
    // store all candle indicies
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "|") {
            candleIdx.push(i);
        }
    }

    // use binary search to count number of plates in between candles

    let platesBwCandles = [];

    for(let [start, end] of queries) {
        const left = lowerBound(candleIdx, 0, candleIdx.length-1, start);
        const right = upperBound(candleIdx, left, candleIdx.length-1, end);
        // use these indicies and calculate number of plates
        const plates = candleIdx[right] - candleIdx[left] - right + left;

        if(plates > 0) {
            platesBwCandles.push(plates);
        } else {
            platesBwCandles.push(0)
        }
    }
    return platesBwCandles;
};