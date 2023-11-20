let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


function brokenMirror(sentence) {
const words = sentence.split(" ")
let newSentence = [words[0]];

    for(let i = 1; i < words.length; i++) {
        if(i % 2 === 0) {
            newSentence.push(words[i])
        } else {
            let reversedWord = words[i].split("").reverse().join("");
            newSentence.push(reversedWord)
        }
        
    }
    return newSentence.join(' ')
}
console.log(brokenMirror(text))
console.log(brokenMirror("hello world"))


/* function brokenMirror(sentence) {
    const words = sentence.split(' ')
    let reverseWords = []
  
    words.forEach((word, index) => {
      const letters = word.split("")
  
      if (index % 2 === 0) {
        reverseWords.push(word)
      } else {
        reverseWords.push(letters.reverse().join(""))
      }
    })
    console.log(reverseWords)
}
   */
    /* return words.map((word, index) => {
      if (index % 2 === 0) {
        return word
      } else {
        return word.split("").reverse().join("")
      }
    }).join(" ")
  }
  
  console.log("outside function brokenMirror: ", brokenMirror("sziasztok én márta ricsi vagyok"))  */
