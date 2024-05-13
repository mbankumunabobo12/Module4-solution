// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

  
(function() {
  // Define the speakGoodBye function
  function speakGoodBye(name) {
    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0).toLowerCase() === 'j') {
      console.log("Good Bye " + name);
    } else {
      console.log("Hello " + name);
    }
  }


  function speakHello(name) {
    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0).toLowerCase() === 'j') {
      console.log("Good Bye " + name);
    } else {
      console.log("Hello " + name);
    }
  }

})();


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =



// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
(function() {
  // Define the speakGoodBye function
  function speakGoodBye(name) {
    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0).toLowerCase() === 'j') {
      console.log("Good Bye " + name);
    } else {
      console.log("Hello " + name);
    }
  }

  // Define the speakHello function
  function speakHello(name) {
    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0).toLowerCase() === 'j') {
      console.log("Good Bye " + name);
    } else {
      console.log("Hello " + name);
    }
  }

  // Define the names array and populate it with names
  var names = ["John", "Jane", "James", "Jenny", "Mike", "Emma"];

  // Loop over the names array and invoke either speakHello or speakGoodBye function for each name
  for (var i = 0; i < names.length; i++) {
    // Determine which function to invoke based on the first letter of the name
    if (names[i].charAt(0).toLowerCase() === 'j') {
      speakGoodBye('names[i]');
    } else {
      speakHello('names[i]');
    }
  }

  var speakWord = "Hello";

})();


// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// Define the helloSpeaker object
var helloSpeaker = {};

// Attach the speak function to the helloSpeaker object
helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
};



// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;

// Define the helloSpeaker object
var helloSpeaker = {};

// Attach the speak function to the helloSpeaker object
helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
};

// Expose the helloSpeaker object to the global scope
window.helloSpeaker = "helloSpeaker";

