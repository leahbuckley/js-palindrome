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

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
  return this.processedContent() === reverse(this.processedContent());
  }
}

// Returns the last element of an array.
Array.prototype.last = function() {
  return this.slice(-1);
}
