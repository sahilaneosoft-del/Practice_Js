// PALINDROM
function solution1(str){
    let revStr='';
    let source =typeof str ==='string'?str:String(str)
    for(let i=source.length-1; i>=0;i--){
        revStr+=source[i];
    }
    return revStr===source;
}

console.log(isPalindrom("121"))

