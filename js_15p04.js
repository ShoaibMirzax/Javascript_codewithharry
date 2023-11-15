let sentence = ' hy how are you and good luck for coding '
let word = 'goods'
console.log(sentence.includes(word))
console.log(`The word ${word} ${sentence.includes(word) ? 'is ' : 'is not'} in the sentence`)
console.log(sentence.endsWith('coding '))
console.log(sentence.toLowerCase())

let p = 'give me RS 1000'
console.log(p.slice('give me RS '.length))
console.log(p.slice(11))