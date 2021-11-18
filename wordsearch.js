const wordSearch = (letters, word) => { 
    let vertical = []
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let i = 0; i < letters.length; i++) {
        let vTemp = []
        for (let j = 0; j < letters[i].length; j++) {
            
            const first = letters[j][i];
            vTemp.push(first)
        }
        let x = vTemp.join('')
        vertical = vertical.concat(x)
    }
    const allJoin = horizontalJoin.concat(vertical)
    console.log(allJoin);
    for (l of allJoin) {
        // if (l === word) return true
        if (l.includes(word)) return true
    }
  
    return false
  }
  module.exports = wordSearch
