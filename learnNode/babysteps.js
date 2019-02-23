var arr = process.argv.slice(2)

const myReduce = (acc,cur) => Number(acc) + Number(cur)
const sum = arr.reduce(myReduce)

console.log(sum)