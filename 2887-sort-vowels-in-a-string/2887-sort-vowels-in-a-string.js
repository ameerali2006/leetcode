/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let arr=s.split("")
    let vowels=new Set(['a', 'e', 'i', 'o','u',"A",'E','I','O','U'])
    let sv=[]
  
    for(let a of arr){
        if(vowels.has(a)){
            sv.push(a)
            
        }
    }
    sv.sort()
    let ind=0
    for(let i=0;i<arr.length;i++){
        if(vowels.has(arr[i])){
            arr[i]=sv[ind++]
        }
    }
    
    return arr.join('')
};