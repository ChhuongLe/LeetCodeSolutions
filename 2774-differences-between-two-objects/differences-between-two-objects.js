/**
 * @param {Object|Array} obj1
 * @param {Object|Array} obj2
 * @return {Object|Array}
 */

 /*
    Base Cases:
        1. If obj1 and obj2 are equal, return {}
        2. If either obj1 or obj2 are null, return [obj1, obj2]
        3. If either obj1 or obj2 are not an object, return [obj1, obj2]
    
    Algo:
        1. traverse over keys that are present in both obj1 and obj2
        2. For each key, recursively calculate the difference
        3. If the difference is not an empty object, append it to the resulting object
 */
function objDiff(obj1, obj2) {
    // if obj1 === obj2
    if(obj1 === obj2) return {};

    // check if null or if different types
    if(obj1 === null || obj2 === null) return [obj1, obj2];
    if(typeof obj1 !== "object" || typeof obj2 !== "object") return [obj1, obj2];
    if(Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2];

    const result = {};

    // traverse through the keys
    Object.keys(obj1).forEach(key => {
        // find similar keys in other object
        if(key in obj2) {
            // find the difference recursively
            const difference = objDiff(obj1[key], obj2[key])
            // if a difference is found, add it
            if(Object.keys(difference).length > 0) result[key] = difference;
        }
    });
    // return final result
    return result;
};