const fs = require('fs')

const generateTestData = (max, min, size) => {
    const MAX = max
    const MIN = min

    const test_data = []
    //Generate test data of given size
    while(size > 0) {
        //Get a random number between max and min. Min inclusive, max exclusive
        const num = Math.floor(Math.random() * (MAX - MIN + 1) + MIN) 
        //If number has not been generated before, add it to test data
        if(!test_data.includes(num)) {
            test_data.push(num)
            size--
        }
    }

    //Write generated data to test file
    try {
      const data = fs.writeFileSync('./input1.txt', test_data.join('\n'))
      //file written successfully
    } catch (err) {
      console.error(err)
    }
}

module.exports = {
    generateTestData
}
