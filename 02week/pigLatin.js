"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  let newWord = word.trim().toLowerCase();
  let vowels = ['a','e','i','o','u'];

  for (let i = 0; i < newWord.length; i++) {
    if (vowels.includes(newWord[0])) {
      return(newWord + "yay");
    } else if (vowels.includes(newWord[1])) {
        let letter1 = newWord.charAt(0);
        let letter2 = newWord.substring(1, newWord.length)
        return(letter2 + letter1 + "ay");
    } else if (vowels.includes(newWord[2])) {
        let letter3 = newWord.substring(0, 2);
        let letter4 = newWord.substring(2, newWord.length)
        return(letter4 + letter3 + "ay");
    }
  }
}

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}