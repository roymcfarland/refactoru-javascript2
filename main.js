var word = prompt("Hello! What is your favorite word?");

alert(
	"You Entered: " + word + "\n" 
	+ "There are " + word.length + " characters in the word." + "\n"
	+ "The third character is " + word.charAt(2) + "\n" 
	+ "Lowercase: " + word.toLowerCase(word) + "\n"
	+ "Uppercase: " + word.toUpperCase(word) + "\n"
	+ "Example: I have wanted a " + word + " since I was a little boy." + "\n"
	+ "Subword: " + word.substring(1,4)
	);