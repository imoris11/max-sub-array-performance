const maxSubArrayLinear = (arr) => {
    if (arr.length === 0) return 0

    let max = 0
    let currentMax = 0

    for(let i=0; i<arr.length; i++) {
        const num = Number(arr[i])
        if (currentMax + num > num) {
            currentMax += num
        }else{
            currentMax = num
        }

        if(max < currentMax) {
            max = currentMax
        }
    }
    return max
}

console.log(maxSubArrayLinear([2,3,-1,4,-6,7,9,1]))
module.exports = {
    maxSubArrayLinear
}