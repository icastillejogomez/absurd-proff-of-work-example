const { v4: uuidv4 } = require('uuid')
const crypto = require('crypto')

const difficulty = 5;
let i = 0 ;
let found = false;

console.time('steps')

while (!found) {
    // Inc step counter
    i++

    // Generate text with uuid
    const text = uuidv4();
    
    // Get hash
    const hash = crypto.createHash('sha256').update(text).digest('hex');

    // Calculate 
    let numberOfZeros = getNumberOfZeros(hash)
    
    if (numberOfZeros >= difficulty) {
        console.log(`[${i}] ${hash}`)
        console.log(`[${difficulty}] ${text}`)
        console.timeEnd('steps')
        found = true
    }
}


function getNumberOfZeros(text) {
    let numberOfZeros = 0;
    let stop = false;
    for (let i = text.length - 1 ; i > 0 && !stop ; i--) {
        if (text.charAt(i) == '0') numberOfZeros++
        else stop = true
    }
    return numberOfZeros
}
