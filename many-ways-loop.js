// let i=1;
// while(i<100){
//     if(i%2===0){
//         console.log(i)
//         i++;
//     }
// }

for (i=1; i<20;i++){
    if(i%2==0)
        console.log(i)
}
console.log('for neww lloop');


// for(r=0;r<100000;r++){
// if(r%2==0& r%5==0){
//     console.log('the total number are',r);
// }
// }
let sum=0;
for (k=1;k<1000000;k++){
    if(k%2!==0){
        console.log(k)
        sum=sum+k;
        console.log('thee sum are',sum);
    }
}
console.log('total sum',sum)