const maxSubArrayQuadratic = (arr) => {
    
    if (arr.length === 0) return 0

    let max = 0
    let currentMax = 0

    for(let i=0; i<arr.length; i++) {
        for(let j=i; j<arr.length; j++) {
            const num = Number(arr[j])
            if (currentMax + num > num) {
                currentMax += num
            }else{
                currentMax = num
            }
            if(max < currentMax) {
                max = currentMax
            }
        }
        currentMax = 0
    }
    return max
  }

  console.log(maxSubArrayQuadratic([2,3,-1,4,-6,7,9,1]))
  
  module.exports = {
      maxSubArrayQuadratic
  }