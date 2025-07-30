/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set =new Set()
    let h=n
    
    while(true){
        let a=String(h).split('').reduce((a,b)=>a+Number(b)**2,0)
        console.log(a)
        if(a==1){
            return true
            break
        }
        if(set.has(a)){
            return false
            break
        }
        set.add(a)
        h=a
        
        

    }
    
};