// function evenSizeString (str){
    
//     const length = str.length;
//     console.log(str, length)
  
//     if(length % 2 === 0){
//         console.log("even size")
//     }
//   else{
//     console.log("Odd size")
//   }
// }
//  evenSizeString("dhaka");
//  evenSizeString("faka");


function evenOddString (str){
    
    const size = str.length;
    console.log(str, size)
    
   if(size % 2 === 1){
    console.log("odd number")
    return true
   }
else{
    console.log("even number")
    return false
}


}
evenOddString("Rajshahi")