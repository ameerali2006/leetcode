/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res=s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    console.log(res.split(""),res.split("").reverse())
    return res.split("").join('')==res.split("").reverse().join('')
    
};