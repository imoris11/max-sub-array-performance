const fs = require('fs')
const { performance } = require('perf_hooks');
const { generateTestData } = require("./generateTestData");
const { maxSubArrayLinear } = require("./linear");
const { maxSubArrayQuadratic } = require("./quadratic");

const getData = () => {
    try {
        const data = fs.readFileSync('./input1.txt', 'utf8')
        const data_set = data.split('\n')
        return data_set
      } catch (err) {
        console.error(err)
      }
}

  const printLogs = (max, min, size) => {
   
    console.log(`Generating data of ${size} numbers`)
    generateTestData(max, min, size)
    let arr =  getData()

    let t3 = performance.now()
    maxSubArrayLinear(arr)
    let t4 = performance.now()
    console.log("Call to Linear runtime took " + (t4 - t3) + " milliseconds.")

    let t0 = performance.now()
    maxSubArrayQuadratic(arr)
    let t1 = performance.now()
    console.log("Call to Quadratic runtime took " + (t1 - t0) + " milliseconds.")
     //create csv
     try {
        const data = fs.writeFileSync('./result.csv', `${size}, ${t4-t3}, ${t1-t0}\n`, {flag: 'a+'})
        //file written successfully
      } catch (err) {
        console.error(err)
      }
  }

  const showLogs = () => {
    //create csv
    try {
        const data = fs.writeFileSync('./result.csv', 'size, linear, quadratic\n')
        //file written successfully
      } catch (err) {
        console.error(err)
      }
      printLogs(10, -10, 10)
      printLogs(20, -20,30)
      printLogs(50, -50, 50)
      printLogs(100, -100, 100)
      printLogs(150, -150, 200)
      printLogs(200, -200, 300)
      printLogs(300, -300, 400)
      printLogs(500, -500, 700)
      printLogs(1000, -1000, 1000)
      printLogs(5000, -5000, 5000)
      printLogs(10000, -10000, 10000)
      printLogs(10000, -10000, 15000)
      printLogs(20000, -20000, 20000)
      printLogs(20000, -20000, 25000)
      printLogs(20000, -20000, 30000)
      printLogs(25000, -25000, 35000)
      printLogs(25000, -25000, 40000)
      printLogs(30000, -30000, 45000)
      printLogs(30000, -30000, 50000)
      printLogs(35000, -35000, 55000)
      printLogs(35000, -35000, 60000)
      printLogs(40000, -40000, 65000)
      printLogs(40000, -40000, 70000)
      printLogs(45000, -45000, 75000)
      printLogs(50000, -50000, 80000)
      printLogs(50000, -50000, 85000)
      printLogs(50000, -50000, 90000)
      printLogs(100000, -100000, 95000)
      printLogs(100000, -100000, 100000)
  }


  showLogs()
  
