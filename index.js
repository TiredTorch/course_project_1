import dotenv from 'dotenv'
dotenv.config()

let a = 10

export const add = (a, b) => {return a + b}

console.log(add(2, 2))

console.log(process.env.NEWCONST)
