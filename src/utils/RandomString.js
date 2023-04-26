export default function randomString(length) {
    let result = ""
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    
    for (let i = 0; i < length; i++) {
        const rnd = Math.floor(Math.random() * letters.length)
        result += letters[rnd]
    }
    return result
}