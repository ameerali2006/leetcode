/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let tot=0
    for(let i=0;i<grid.length;i++){
        grid[i].sort((a,b)=>a-b)
    }
    console.log(grid)
    let n=String(grid[0].length)
    for(let j=0;j<Number(n);j++){
        console.log(j)
        let temp=[]
        for(let k=0;k<grid.length;k++){
            console.log(k)
            temp.push(grid[k].pop())
        }
        console.log(temp)
        tot+=temp.sort((a,b)=>a-b).pop()

    }
    console.log(tot)
    return tot

};