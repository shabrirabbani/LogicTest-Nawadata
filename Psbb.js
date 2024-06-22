function minBus(numFamily, familySize){

    if (numFamily !== familySize.length){
        return "Input must be equal with count of family"
    }

    familySize.sort((a, b) => a - b)

    let bus = 0
    let i = 0
    let j = numFamily - 1

    while (i <= j){
        if (familySize[i] + familySize[j] <= 4){
            familySize[j] += familySize[i]
            i++
        } 
        j--
        bus++
    }    

    return bus
}

function main(){

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question("Input the number of families: ", (numFamilyInput) => {
        const numFamily = parseInt(numFamilyInput)

        readline.question('Input the number of members in the family (separated by space): ', (familySizeInput) => {
            const familySize = familySizeInput.split(' ').map(Number)

            const result = minBus(numFamily, familySize)
            
            if (typeof result === 'string'){
                console.log(result)
            } else {
                console.log("minimum bus required is: ", result)
            }

            readline.close()
        })
    })
}

main()