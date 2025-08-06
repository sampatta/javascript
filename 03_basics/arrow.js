

// const user = {
//     username : "sam",
//     price : 33,
//     welcome : function(){
//         console.log(`${this.username} welcome to website`)
//         console.log(this);
        
//     }
// }

// user.welcome()

const chai = () =>{
    let username = "sam"
    console.log(this.username);
    
}
chai()

const addtwo =(n1,n2) => n1+n2

console.log(addtwo(3,5))