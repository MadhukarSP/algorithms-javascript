function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binaryNumber = (N).toString(2);
    let arrayOfStr = binaryNumber.match(/(0+)1/g);
    
    if(arrayOfStr === null || arrayOfStr.length === 0) {
        return 0;
    }
    
    let lengths = arrayOfStr.map(gap => {
        return gap.length -1;
    })
    
    return Math.max(...lengths);
}
