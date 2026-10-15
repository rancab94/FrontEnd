//fs module
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')

const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)

writeFileSync(
    './content/resultado.txt',
    `Here's the result : ${first}, ${second}`
)
/* FOR CONCATENATE THE VALUES
writeFileSync(
    './content/resultado.txt',
    `Here's the result : ${first}, ${second}`,
    { flag: 'a'  }
)
*/

const tercero = readFileSync('./content/resultado.txt','utf8')

console.log(tercero)

/*
USING NO SYNC FUNCTIONS

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 
        'utf8',
        (err,result) =>{
            if(err){
                console.log(err)
                return
            }
                console.log(result)
        })




*/