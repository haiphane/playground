const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function question(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer)
        })
    })
}

async function main() {
    const name = await question('What is your name? ')
    console.log(`Hello, ${name}!`)
    // const random = parseInt(Math.random() * 99)
    // const random1 = parseInt(Math.random() * 99)
    // const random2 = parseInt(Math.random() * 99)
    // const random3 = parseInt(Math.random() * 99)
    // const random4 = parseInt(Math.random() * 99)
    // const random5 = parseInt(Math.random() * 99)
    // console.log(`${random}, ${random1}, ${random2}, ${random3}, ${random4}, ${random5}`)
    
    const numberList = [] //他是一個無限大的房間
    for (let i = 0; i < 6; i++) { //等於迴圈跑六次
        numberList.push(parseInt(Math.random() * 50)) //把亂數推到陣列的序列裡
    }
    console.log(numberList) //放外面是避免再跑回圈

    rl.close()
}

main()