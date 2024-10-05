/*
To find vowels from string
*/

// First Way
function toCheckVowel(userInput){
    lowerConvert = userInput.toLowerCase();

    if(lowerConvert == "a" || lowerConvert == "e" || lowerConvert == "i" || lowerConvert == "o" || lowerConvert == "u"){
        return console.log("It is vowel letter")
    }
    else{
        return console.log("It is not a vowel letter.")
    }
}
toCheckVowel("l");

//Second way using loop
const vowel = ['a', 'e', 'i', 'o' ,'u']

function toCheckVowel(usInp){
    lowerCase = usInp.toLowerCase();

    for(const char of lowerCase){
        if (vowel.includes(char)){
            console.log(`${char} is a vowel.`)
        }
        else{
            console.log(`${char} is not a vowel.`)
        }
    }
}
toCheckVowel("nep");