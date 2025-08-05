// premitive and non premitive data types

//7 types strings, number, boolean, null, undefined, bigint symbol call by value

//dynamically typed language 'const score =100'
//reference type non premitive 
//arrays objects, function

const score = 100
const scorevalue = 100.3

let username 

console.log(typeof username)


const heros =["s","h","g"]
console.log(heros)

let ppp= {
    na:"uhuih",
    hh:77
}
console.log(ppp)


// stack and heap
// primitive stack
// non premitive heap

let myYoutube = "ji"
let a = myYoutube
a="f"
console.log(a)
console.log(myYoutube)

let aa = {
    email :"fss",
    upi : "dd"
}
let bb =aa

bb.email = "dddd"
console.log([aa.email, bb.email])