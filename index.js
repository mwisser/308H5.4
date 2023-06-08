// 1 B

let firstVariable = "Hello World";
firstVariable = 319;

let secondVariable = firstVariable; 
secondVariable = "New String"; 

console.log(firstVariable);

let yourName = "Matthew Wisser";
let concatenatedString = "Hello, my name is " + yourName;

console.log(concatenatedString);

// 1 C

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(!false);
console.log(e === 'Kevin');
console.log(a + b === c);
console.log(a * a === d);
console.log(48 == '48');

// 1 D

let animal = "tiger"; // Change "cow" to any other animal to test different scenarios

if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

// 1 E

const personAge = 18; 

if (personAge >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// 2 A - Made this task a note, so that it doesn't flood console.

//for (let i = 0; i <= 10; i++) {
 // console.log(i);
//}

//for (let i = 10; i <= 400; i++) {
  //console.log(i);
//}

//for (let i = 12; i <= 4000; i += 3) {
 // console.log(i);
//}

// 2 B

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " <-- is an even number");
  } else {
    console.log(i);
  }
}

// 2 C

for (let number = 0; number <= 100; number++) {
  let message = "I found a " + number + ".";
  
  if (number % 3 === 0) {
    message += " Three is a crowd.";
  }
  
  if (number % 5 === 0) {
    message += " High five!";
  }
  
  console.log(message);
}

// 2 D

let bank_account = 0;

for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}

console.log(bank_account);

// 3 B

let quotes = [
  "Quote 1",
  "Quote 2",
  "Quote 3"
];

// 3 C

const randomThings = [1, 10, "Hello", true];
const firstElement = randomThings[0];
console.log(firstElement);

const randomThings2 = [1, 10, "Hello", true];
const thirdElement = randomThings[2];
console.log(thirdElement);

// 3 D

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

ourClass[ourClass.indexOf("Github")] = "Octocat";

ourClass.push("Cloud City");

console.log(ourClass);

// 3 F

let number = 75;

if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// 3 G

let number2 = 7;

if (number2 < 5) {
  console.log("little number");
} else if (number2 > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// 3 H

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

const thomsCloset = [
  [
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    "grey jeans",
    "jeans",
    "PJs"
  ],
  [
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

kristynsCloset.splice(6, 0, "raybans");

kristynsCloset[5] = "stained knit hat";

const thomsShirt = thomsCloset[0][0];
const thomsPants = thomsCloset[1][1];
const thomsAccessory = thomsCloset[2][2];

console.log("Thom is looking fierce in a " + thomsShirt + ", " + thomsPants + ", and " + thomsAccessory + "!");

thomsCloset[1][2] = "Footie Pajamas";

// 4 A

function printGreeting(name) {
  return "Hello there, " + name;
}

console.log(printGreeting("Slimer"));

// 4 B

function printCool(name) {
  console.log(name + " is cool!");
}

printCool("Captain Reynolds");

// 4 C

function calculateCube(number) {
  let volume = Math.pow(number, 3);
  console.log(volume);
}

calculateCube(5);

// 4 D

function isVowel(character) {
  let lowerCaseChar = character.toLowerCase();

  if (
    lowerCaseChar === "a" ||
    lowerCaseChar === "e" ||
    lowerCaseChar === "i" ||
    lowerCaseChar === "o" ||
    lowerCaseChar === "u"
  ) {
    return true;
  }

  return false;
}

console.log(isVowel("a"));

// 4 E

function getTwoLengths(string1, string2) {
  let lengths = [];

  lengths.push(string1.length);
  lengths.push(string2.length);
  
  return lengths; 
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

// 4 F

function getMultipleLengths(arr) {
  let lengths = [];

  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }

  return lengths;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// 4 G

function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(maxOfThree(6, 9, 1));

// 4 H

function printLongestWord(words) {
  let longestWord = "";
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  
  return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// Objects

const user = {
  name: "Matthew Wisser",
  email: "matthew.wisser@gmail.com",
  age: 40,
  purchased: []
};

const updatedUser = { ...user, email: "newemail@example.com" };

const updatedUserWithAge = { ...updatedUser, age: updatedUser.age++ };

const updatedUserWithLocation = { ...updatedUserWithAge, location: "Phoenix, AZ" };

updatedUserWithLocation.purchased.push("carbohydrates");
updatedUserWithLocation.purchased.push("peace of mind");
updatedUserWithLocation.purchased.push("Merino jodhpurs");

console.log(updatedUserWithLocation.purchased[2]);

updatedUserWithLocation.friend = {
  name: "Jane Smith",
  age: 30,
  location: "Tempe, AZ",
  purchased: []
};

console.log(updatedUserWithLocation.friend.name);

console.log(updatedUserWithLocation.friend.location);

updatedUserWithLocation.friend.age = 55;

updatedUserWithLocation.friend.purchased.push("The One Ring");
updatedUserWithLocation.friend.purchased.push("A latte");

console.log(updatedUserWithLocation.friend.purchased[1]);

for (let i = 0; i < updatedUserWithLocation.purchased.length; i++) {
  console.log(updatedUserWithLocation.purchased[i]);
}

for (let i = 0; i < updatedUserWithLocation.friend.purchased.length; i++) {
  console.log(updatedUserWithLocation.friend.purchased[i]);
}

function updateUser() {
  updatedUserWithLocation.age++;
  updatedUserWithLocation.name = updatedUserWithLocation.name.toUpperCase();
}

function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}

oldAndLoud(updatedUserWithLocation);