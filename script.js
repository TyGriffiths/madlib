//create array of nouns
//create array of adjectives
//create array of verbs
//create array of adverbs

//grab noun inputs and store in array
//grab adjectives and store in array
//grab verbs inputs and store in array
//grab adverbs inputs and store in array

//when button is clicked check to see which radio button is selected with if statement
//randomly select set number of nouns, adjectives, etc. from user inputs
//if there's not enough indexes in its length, then choose from my array
//insert variables into my stories at designated places
//insert story into the DOM
var app = {

};

(function() {
	app.startLib = startLib;
	function startLib() {

//create function that takes user input, splits it, and loops through to check for any empty strings. 
//if there is a word, push it to a new array, and return the value. 
//call function

		var userNounsArr = cleanArray(document.getElementById("nouns").value);
		var userAdjsArr = cleanArray(document.getElementById("adjs").value);
		var userVerbsArr = cleanArray(document.getElementById("verbs").value);
		var userAdverbsArr = cleanArray(document.getElementById("adverbs").value);
		
		function cleanArray(input) {
			var newArray = [];
			var dirtyArray = input.split(",");
			for (var i = 0; i < dirtyArray.length; i++) {
				if (dirtyArray[i].trim() !== "") {
					newArray.push(dirtyArray[i]);
				}
			}
			return newArray;
		}



 		console.log(userNounsArr);	

 		if (document.getElementById("agent-story").checked) {
			var myNounsArr = ["room", "trap", "enemies", "shadows", "floor", "Bullets",];
 			for (var i = userNounsArr.length; i < 4; i++) {
 				userNounsArr.push(myNounsArr[Math.floor(Math.random()*myNounsArr.length)]);
 			}
 			var myAdjsArr = ["center", "silent", "helpless", "prepared"];
 			for (var i = userAdjsArr.length; i < 4; i++) {
 				userAdjsArr.push(myAdjsArr[Math.floor(Math.random()*myAdjsArr.length)]);
 			}
 			var myVerbsArr = ["lurking", "stopped", "collapsed", "whizzing", ];
 			for (var i = userVerbsArr.length; i < 4; i++) {
 				userVerbsArr.push(myVerbsArr[Math.floor(Math.random()*myVerbsArr.length)]);
 			}
 			var myAdverbsArr = ["quietly", "calmly", "dangerously", "secretly"];
 			for (var i = userAdverbsArr.length; i < 4; i++) {
 				userAdverbsArr.push(myAdverbsArr[Math.floor(Math.random()*myAdverbsArr.length)]);
 			}

	 		document.getElementById("the-story").innerHTML = "Secret Agent 00.7 snuck " + userAdverbsArr[0] + " into the " + userNounsArr[0] + ", anticipating a " + userNounsArr[1] + ". His years of experience informed him that there were enemies of the state " + userAdverbsArr[2] + " " + userVerbsArr[0] + " in the shadows. He " + userAdverbsArr[1] + " proceeded towards the " + userAdjsArr[0] + " of the " + userNounsArr[0] + ", pretending to be completely oblivious to their " + userNounsArr[1] + ". Suddenly he " + userVerbsArr[1] + ". The " + userNounsArr[0] +  " rang " + userAdjsArr[1] + ", as if the air itself was holding its breath. But then something happened that Secret Agent 00.7 didn't anticipate. The " + userNounsArr[2] + " beneath him " + userVerbsArr[2] + " and he lept to the " + userNounsArr[2] + "'s ledge and grasped to it for dear life. " + userNounsArr[3] + " began " + userVerbsArr[3] + " by " + userAdverbsArr[3] + " close to his " + userAdjsArr[2] + " body. He knew there was nothing left to do but let go. And so he did. But a fall was something Secret Agent 00.7 was always " + userAdjsArr[3] + " for....";
 		}
 		else if (document.getElementById("farmer-story").checked) {
 			var myNounsArr = ["corn", "horses", "meal", "birds"];
 			for (var i = userNounsArr.length; i < 4; i++) {
 				userNounsArr.push(myNounsArr[Math.floor(Math.random()*myNounsArr.length)]);
 			}
 			var myAdjsArr = ["high", "middle", "vast", "peaceful"];
 			for (var i = userAdjsArr.length; i < 4; i++) {
 				userAdjsArr.push(myAdjsArr[Math.floor(Math.random()*myAdjsArr.length)]);
 			}
 			var myVerbsArr = ["riding", "soaring", "pressing", "hear"];
 			for (var i = userVerbsArr.length; i < 4; i++) {
 				userVerbsArr.push(myVerbsArr[Math.floor(Math.random()*myVerbsArr.length)]);
 			}
 			var myAdverbsArr = ["warmly", "perfectly", "gently", "lovely"];
 			for (var i = userAdverbsArr.length; i < 4; i++) {
 				userAdverbsArr.push(myAdverbsArr[Math.floor(Math.random()*myAdverbsArr.length)]);
 			}

	 		document.getElementById("the-story").innerHTML = "Farm life was always the same for Jeremiah Josephat and his son, Jedediah. And today was no exception. The sun was " + userAdjsArr[0] + " in the sky, beating " + userAdverbsArr[0] + " down upon them in the " + userAdjsArr[1] + " of a " + userAdjsArr[2] + " field of " + userNounsArr[0] + ". In fact, the " + userNounsArr[0] + " ran for so long that, were it not for the " + userNounsArr[1] + " they were " + userVerbsArr[0] + ", they wouldn't have been able to see their home in the distance. They were hungry for a " + userAdverbsArr[1] + " prepared " + userNounsArr[2] + " by their sister, Judeth. But there was something " + userAdjsArr[3] + " about the monotany of it all, however. It slowed things down, made one focus on the " + userNounsArr[3] + " " + userVerbsArr[1] + " past them, the breeze " + userAdverbsArr[2] + " " + userVerbsArr[2] + " upon their faces, the crushing of the ground below them by the " + userNounsArr[1] + ". One could almost " + userVerbsArr[3] + " himself think in a " + userAdverbsArr[3] + " place like this.";
 		}
 		else if (document.getElementById("robber-story").checked) {
 			var myNounsArr = ["bank", "shotgun", "cash", "cops"];
 			for (var i = userNounsArr.length; i < 4; i++) {
 				userNounsArr.push(myNounsArr[Math.floor(Math.random()*myNounsArr.length)]);
 			}
 			var myAdjsArr = ["small", "manliest", "good", "heavy",];
 			for (var i = userAdjsArr.length; i < 4; i++) {
 				userAdjsArr.push(myAdjsArr[Math.floor(Math.random()*myAdjsArr.length)]);
 			}
 			var myVerbsArr = ["staring", "handed", "backing", "blowing"];
 			for (var i = userVerbsArr.length; i < 4; i++) {
 				userVerbsArr.push(myVerbsArr[Math.floor(Math.random()*myVerbsArr.length)]);
 			}
 			var myAdverbsArr = ["clumsily", "commandingly", "nervously", "accidently"];
 			for (var i = userAdverbsArr.length; i < 4; i++) {
 				userAdverbsArr.push(myAdverbsArr[Math.floor(Math.random()*myAdverbsArr.length)]);
 			}

	 		document.getElementById("the-story").innerHTML = "\"Everybody keep your hands in the air!\" shouted John as he burst into the " + userNounsArr[0] + " with a " + userNounsArr[1] + ". Panic quickly spread through the crowd as he began walking towards them. \"Nobody move or I'll...\" John " + userAdverbsArr[0] + " caught his foot on a " + userAdjsArr[0] + " mat and tripped forward. Quickly regaining composure, he doubled the severity of his inital threat, \"...Make hamburger of your little boy,\" he said in the " + userAdjsArr[1] + " voice he could muster while " + userVerbsArr[0] + " a woman and her little boy down the end of his " + userNounsArr[1] + ". John knew he wasn't a " + userAdjsArr[2] + " " + userNounsArr[0] + " robber. So far, though, he was farther than he'd ever made it. \"Give me the " + userNounsArr[2] + ",\" he " + userVerbsArr[1] + " told the " + userNounsArr[0] + " teller. The man " + userAdverbsArr[2] + " " + userVerbsArr[1] + " over a " + userAdjsArr[3] + " bag of " + userNounsArr[2] + " and John began " + userVerbsArr[2] + " towards the door. \"Now remember, I hear any " + userNounsArr[3] + " coming my way and I'll...\" Slipping, John fell backwards and landed on his back, firing the " + userNounsArr[1] + " " + userAdverbsArr[3] + " and " + userVerbsArr[3] + " a hole in the cieling. The cieling then proceeded to fall and land John a blow to the head which knocked him out cold.";
 		}	
 		else {
 			alert("Please check one of the radio buttons to select a story. Pretty much a no-brainer.")
 		} 		
	}
})();