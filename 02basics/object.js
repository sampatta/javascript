const k = Symbol("key")
const j = {
    name: "sam",
    age : 22,
    [k] : "d",
    location:"dharwad"
}
//object literal

console.log(j[k])
