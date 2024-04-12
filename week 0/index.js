function swap(arr,i,j){
    let temp= arr[j];
    arr[i]=arr[j];
    arr[j]=temp;
}
let arr=[2,5,8,9,6,3,7,8];
let i=0;
let j=arr.length - 1;

while(i<=j){
    swap(arr,i,j);
    i++;
    j--;
}
console.log(arr);

/*
let arr=[10,12,50,8,17,6,3,19,7,1];
console.log(arr);

arr.sort();
console.log(arr);

arr.sort((a,b) => a-b);

console.log(arr)
*/







/*
let teacher ="Sanket";

function fun(){
    let teacher="pulkit";
    console.log(teacher)
}
function gun(){
    var teacher="puneet";
    console.log(teacher);
}
console.log(teacher)
fun();
gun();
*/
/*let obj={
    x:15,
    // valueOf(){
    //     return 1;
    // },
    toString(){
        return "99";
    }
    
}
let obj2={
    x:12,
    toString(){
        return {};
    }
}
console.log(100-obj);


let obj3={
    x:10,
    valueOf(){
        return 99;
    }
}

console.log(99==obj3);

let obj4={x:4}
console.log(4==obj4);
*/


/*

//fibonacci series without recursion
function fibonacci(n){
    let n1=0,n2=1,next;
    for(let i=1;i<=n;i++){
        console.log(i, "th term is ",n1);
        next=n1+n2;
        n1=n2;
        n2=next;    
    }
}
fibonacci(10)

*/
/*
// sum of digits of a number
function sumOfDigit(n){
    let sum=0;
    while(n>0){
        let lastDigit= n%10;
        sum+=n%lastDigit;
        n= Math.floor(n/10);
    }
    console.log(sum);
}
sumOfDigit(4432)




// Greatest common divisor of a number 
function gcd(a,b){
    let ans=1;
    for(let i=2;i<=Math.min(a,b);i++){
        if(a%i==0 && b%i==0){
            ans=i;
            
        }
    }
    return ans;
}
console.log(gcd(24,28))




*/









/*
function solve(a,b,c){
    let sqrtvalue= Math.sqrt(b*b-4*a*c);
    let root1= (-b+sqrtvalue)/(2*a);
    let root2= (-b-sqrtvalue)/(2*a);
    console.log(root1,root2);
}

solve(2,5,3)


let name = "bhartesh";

switch(name){
    case "dheeraj":
        console.log("thinknyx");
        break;
    case "bhartesh":
        console.log("dolphin");
        break;

    default:
        console.log("don't know");
}


function tripattern(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=1;j<=n-i;j++){
            str+=" ";
        }
        for(let c=1;c<=2*i-1;c++){
            str+="*";
        }
        console.log(str)
    }
}




function downpattern(n){
*****
****
***
**
*
    for(let i=1;i<=n;i++){
        str="";
        for(let j=1;j<=(n-i+1);j++){
            str+="*";
        }
        console.log(str);
    }
}
downpattern(5)
*/







/*

function tripattern(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=1;j<=n-i;j++){
            str+=" ";
        }
        for(let c=1;c<=2*i-1;c++){
            str+="*";
        }
        console.log(str)
    }

     *
    ***
   *****
  *******
 *********
}

tripattern(5);
*/










/*
function tripattern(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=1;j<=n-i;j++){
            str+=" ";
        }
        for(let c=1;c<=i;c++){
            str+="*";
        }
        console.log(str)
    }

      *
     **
    ***
   ****
  *****
 ******
*******
}
tripattern(7);

*/





//inverted triangle pattern
/*
function pattern(x){
    for(let i=1;i<=x;i++){
    let stars="";
    for(let j=1;j<=i;j++){
        stars+="* ";
    }
    console.log(stars);    
    }
}

pattern(8)

*/










/*
for(let i=1;i<=10;i++){
    console.log(i);
}
*/

// let n=10;
// let sum=0;
// while(n>0){
//     sum+=n;
//     n--; 
// }
// console.log(sum);
/*
let n=20;
while(n>0){
    console.log(n);
    n--;
}


function isPrime(n){
    if (n<2){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

let n=17
console.log(isPrime(n));
*/