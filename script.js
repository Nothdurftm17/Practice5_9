// var groupAnagrams = function(strs) {
//     var arr = [];
//     var group = [];
//     var identity = (x) => x;
//     var strsCopy = strs.map(identity)

//     for(var l = 0; l < strsCopy.length; l++){
//         for(var r = l+1; r < strsCopy.length; r++){

//             if(arr.length === 0){
//                 arr.push(strs[l])
//             }
//             else if(arr.includes(strs[r])){
//                 continue
//             }

//             if(strsCopy[l].length !== strsCopy[r].length){
//                 continue
//             }
//             else{
//                 strsCopy[l] = strsCopy[l].split("").sort().join("")
//                 strsCopy[r] = strsCopy[r].split("").sort().join("")
//             }
            

//             if(strsCopy[l] === strsCopy[r]){
//                 arr.push(strs[r])
//             }
//             else{
//                 group.push(arr)
//                 arr = []
//                 l = r
//             }

//         }

//         if(arr.length !== 0){
//             group.push(arr)
//         }
//     }
//     return group
// };


let collectAnagrams = (words) => {
    let anagrams = {}
    let collectedAnagrams = []
    
    // iterate through words 
    for (let word of words){
        // use the anagrams hash to find & store arrays of anagrams
        
        // alphabetize letters
        let letters = word.split('').sort().join('')
        
        // create hash key-value pair for alphabetized letters of word if it does not exist
        anagrams[letters] = anagrams[letters] || []
        
        // add word to value of the key which matches its letters
        anagrams[letters].push(word)
    }
    
    //push those arrays into the collectedAnagrams array
    
    // iterate through anagrams hash keys
    for (let key in anagrams){
        // add their values as subarrays of the collectedAnagrams array
        collectedAnagrams.push(anagrams[key])
    }
    
    // return the array of arrays
    return collectedAnagrams
}

console.log(collectAnagrams(["rat","tar","pam","map","art"]))
