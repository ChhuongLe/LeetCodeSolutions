/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */

 /*
    IOCE: 
        input: pid - process ID (node values)
               ppid - parent process ID (parents of the process IDs) 0 = root of tree
        output: return the processes that have been killed (parent and children)
        constraints: there will always be a node present, root will never be null
        
        example: pid = [1,3,10,5] & ppid = [3, 0 ,5, 3]

        {
            3: [1,5],
            0: [3],
            5: [10]
        }

        killing 5 will result in removing 5 and 10

        return [5,10]

        1. Create a hash
        2. populate the hash with parents and their children (parents = key, children = value)
        3. perform a DFS to search for the process to kill along with their children
        4. return the killed process IDs 
 */

/*----- Traverasal through JS map is too slow as it has too many iterations -----*/
// var killProcess = function(pid, ppid, kill) {
//     let parentMap = new Map(), killedProcesses = [];
//     // populate the hash with parents and their children
//     for (let i = 0; i < pid.length; i++) {
//         let parent = ppid[i];
//         let child = pid[i];
//         if(!parentMap.has(parent)) {
//             parentMap.set(parent, [child]);
//         } else {
//             let newChildArr = [child, ...parentMap.get(parent)];
//             parentMap.set(parent, newChildArr);
//         }
//     }

//     // perform a DFS to search for node and its children 
//     // populate the killedProcess Array
//     const dfsToKillProcess = (node) => {
//         killedProcesses.push(node);
//         if(parentMap.has(node)) {
//             for(let child of parentMap.get(node).values()) {
//                 dfsToKillProcess(child);
//             }
//         }
//     }

//     dfsToKillProcess(kill);
//     // return the killedProcesses array
//     return killedProcesses;
// };

/*----- Using an object is much faster as it has constant time look up and not traversals */
const killProcess = function(pid, ppid, kill){
	// Create Graph: Parent-Map
    const parentMap = {}, output = [];;
    for(let i = 0; i < pid.length; i++){
       const parent = ppid[i];
       const child = pid[i];
       if(!parentMap[parent]) parentMap[parent] = [];
       parentMap[parent].push(child);
    }
    
    dfsToKill(kill);
    // populate output list with killed nodes
    function dfsToKill(node){
        output.push(node);
        if(parentMap[node]){
            for(let child of parentMap[node])
                dfsToKill(child);
        }
    }
    return output;
}
