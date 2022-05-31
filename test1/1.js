
let a = prompt("Nhập vào số a");
let b = prompt("Nhập vào số b");

a = parseInt(a);
b= parseInt(b);

function isPrime(n){ 
if (n < 1){
    return false;
}
if (n === 1){
    return false;
}
if (n > 1){
    for(let i = 2; i < n ; i++){
        if (n % i === 0){
           return false;  
        }
    }
    return true;
}
}
function lietkeSnt(a,b){
    for(let i=a;i<=b;i++){
        if(isPrime(i)){
            let output = [];
            output.push(i);
            document.getElementById("output").innerHTML = output;
        }
    }
}
lietkeSnt(a,b);
