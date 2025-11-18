// REMOVE ZERO

const arr = ['110','111','001'];
//output ['11','111','1']

const solution1 =(arr)=>{
    let results = []
    for(let item of arr){
        let newSte =item?.toString()
        let igonreiTEM = newSte.split('').filter((ch)=>ch !=='0').join('')
         results.push(Number(igonreiTEM)) // if want outpiut in num
    }
    return results;
}

const solution2 =(arr)=>{
    let results =[]
    for(let i=0; i<arr.length;i++){
        let str =String(arr[i]);
        let newStr ="";
        for (che of str){
            if(che !=='0'){
                newStr+=che
            }
        }
        results.push(Number(newStr)) // if want outpiut in num
    }
    return results 
}

