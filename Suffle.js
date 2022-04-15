function bblSort(arr){
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
     
function suffle(array){
 array=bblSort(array); 
 let newArr=[],f1=0,f2=Math.trunc(array.length/2);
  for(let i = 0;i<array.length;i++){
    if (i % 2 == 0) {
      newArr[i] = array[f1++];
    } else {
      newArr[i] = array[f2++];
    }
  }
  window.alert(newArr);
}


(()=>{
    let arr=[];
    while(1){
        let opt=window.prompt(`
        1 : Enter input
        2 : Display 
        3 : Exit
        `);
        opt=parseInt(opt)

        switch (opt) {
          case 1:
            arr.push(parseInt(window.prompt(`Enter number : `)));
            break;
          case 2: suffle(arr);
            break;
          case 3:
            return;
        }
    }
})()
