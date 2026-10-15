const os = require('os')

//user info
const user = os.userInfo().username
console.log(user)
console.log(`The system uptime is ${os.uptime()} seconds`)

//system info
const currentOS = {
name: os.type(),
release: os.release(),
totalMem: os.totalmem(),
freeMem: os.freemem()
}

console.log(currentOS)