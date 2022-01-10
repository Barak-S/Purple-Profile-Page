const test1 = [1, 2, 3, 8, 9, 3, 2, 1]; //3
const test2 = [1, 2, 1, 4]; //3
const test3 = [7, 1, 2, 9, 7, 2, 1]; //2
const test4 = [21, 22, 9, 8, 7, 6, 23, 24, 6, 7, 8, 9, 25, 7, 8, 9]; //4
const test5 = [1,2,3,2,1]; // 5
const test6 = [1,2,3,4,5]; // 0


// https://stackoverflow.com/questions/62928255/i-want-to-return-the-length-of-the-longest-mirror-sub-section-in-an-array


// iterating forwards and backward simoultaneously 
// stop loop when current num and current end are the same element
// k is the start of the array
// h is the end of the array

function checkMirrorLength(numArray){
  
    //set output variable
    let max = 0; 
    
    //test each number
    //for each number, i represents index

    for(let i = 0; i < numArray.length; i++){
        //set default count
        let count = 0; 
        //see how many times current num can go up
        //and match the selected end number as it goes down
        //j represents current end starting at array end
        //k iterates up from current num; h iterates down from current end
        //stop loop when current num and current end are the same element
        for(let j = numArray.length - 1, k = i, h = j; j > i; k++, h-- ){
            //if values match
            if(numArray[k] === numArray[h] && k < numArray.length && h >= 0){
                //keep increasing count
                count ++ 
                //otherwise
            } else {
                //check if count beats max before updating max
                if(count > max){
                    max = count;
                }
                //reset count for next current num/current end cycle
                count = 0;
                //cycle backwards by 1 to get new current end
                j--;
                //k resets to i (-1 to offset loop ++); 
                k = i - 1;  
                //h resets to j (+1 to offset loop --)
                h = j + 1;        
            }      
        }  
    }

    return max; 
}

console.log(checkMirrorLength(test1));
console.log(checkMirrorLength(test2));
console.log(checkMirrorLength(test3));
console.log(checkMirrorLength(test4));
console.log(checkMirrorLength(test5));
console.log(checkMirrorLength(test6));
