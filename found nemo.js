function findNemo(sentence) {
    let i = sentence.split(' ').indexOf('Nemo') + 1;
 return /Nemo\b/.test(sentence)
   ? `I found Nemo at ${i}!`
   : "I can't find Nemo :(";
}