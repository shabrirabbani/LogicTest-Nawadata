function procVowel(char){

    let vowel = ""
    char = char.toLowerCase().replace(/ /g, '')
    for(let i = 0; i < char.length; i++){
        if(char[i] == 'a' || char[i] == 'i' || char[i] == 'u' || char[i] == 'e' || char[i] == 'o'){
            vowel += char[i]
        }
    }
    return vowel
}

function procConsonant(char){

    let consonant = ""
    char = char.toLowerCase().replace(/ /g, '')
    for(let i = 0; i < char.length; i++){
        if(char[i] != 'a' && char[i] != 'i' && char[i] != 'u' && char[i] != 'e' && char[i] != 'o'){
            consonant += char[i]
        }
    }
    return consonant
}

function main(){

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    console.log("Input one line of word (S) : ")
    readline.question(``, (char) => {
        let vowel = procVowel(char)
        let consonant = procConsonant(char)

        console.log("Vowel : ", vowel)
        console.log("Consonant : ", consonant)

        readline.close()
    })

}

main()