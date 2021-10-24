module.exports = Phrase;

// Adds 'reverse' to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds 'blank' to all strings.
String.prototype.blank = function() {
  return /^\s*$/.test(this);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

// Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  //Returns the letters in the content.
  // for example:
  // new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }
  // returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
  return this.processedContent() === this.processedContent().reverse();
  }
}

// Returns the last element of an array.
Array.prototype.last = function() {
  return this.slice(-1);
}
