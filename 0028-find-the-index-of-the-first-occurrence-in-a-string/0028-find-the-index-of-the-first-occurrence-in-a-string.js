/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]==needle[0]){
            index=i
            let flag=true
            for(let j=1;j<needle.length;j++){
                if(haystack[i+j]==needle[j]){
                    continue
                }else{
                    flag=false
                    break
                }


            }
            if(flag){
                return index
            }
        }

    }
    return -1
    
};