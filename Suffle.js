function suffle(array){
     array=array.sort((a,b)=> a-b);
    let newArr=[],f1=0,f2=array.length/2;
     for(let i = 0;i<array.length;i++){
        if(i%2==0){
            newArr[i]=array[f1++];
        }else{
            newArr[i]=array[f2++];
        }
     }
    return newArr;
}

console.log(suffle([2,1,5,3,11,7,45,76]))
